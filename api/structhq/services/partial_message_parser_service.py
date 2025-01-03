from dataclasses import dataclass
from typing import Callable, Dict, Iterable, List, Literal, Optional, Union

from loguru import logger
from more_itertools import peekable


@dataclass
class PartialMessageCommandStringArgNode:
    arg_name: Literal["text", "placeholder"]
    arg_value: str

    def is_populated(self):
        return self.arg_value.strip() != ""


@dataclass
class PartialMessageCommandListArgNode:
    arg_name: Literal["options_list"]
    arg_value: List[str]

    def is_populated(self):
        return len([s for s in self.arg_value if s.strip() != ""]) > 0


PartialMessageCommandArgNode = Union[
    PartialMessageCommandStringArgNode,
    PartialMessageCommandListArgNode,
]


@dataclass
class PartialMessageCommandNode:
    command_name: Literal["clarify", "complete", "incomplete"]
    args: List[PartialMessageCommandArgNode]

    def get_content(self):
        return {
            "name": self.command_name,
            "args": {a.arg_name: a.arg_value for a in self.args},
        }

    def is_populated(self):
        return len([a for a in self.args if a.is_populated()]) > 0


class PartialMessageRootNode:
    string_properties: Dict[str, str]
    string_array_properties: Dict[str, List[str]]
    commands: List[PartialMessageCommandNode]

    def __init__(
        self,
        commands: List[PartialMessageCommandNode],
    ):
        self.string_properties = {}
        self.string_array_properties = {}
        self.commands = commands

    def set_string_property(self, property_name: str, property_value: str) -> None:
        self.string_properties[property_name] = property_value

    def has_string_property(self, property_name: str) -> bool:
        return property_name in self.string_properties

    def get_string_property(self, property_name: str) -> Optional[str]:
        if not self.has_string_property(property_name):
            return None

        return self.string_properties[property_name]

    def set_string_array_property(self, property_name: str, property_value: List[str]) -> None:
        self.string_array_properties[property_name] = property_value

    def has_string_array_property(self, property_name: str) -> bool:
        return property_name in self.string_array_properties

    def get_string_array_property(self, property_name: str) -> Optional[List[str]]:
        if not self.has_string_array_property(property_name):
            return None

        return self.string_array_properties[property_name]

    def has_commands(self):
        return len([c for c in self.commands if c.is_populated()]) > 0

    def get_content(self):
        commands_data = {"commands": [c.get_content() for c in self.commands]} if self.has_commands() else {}

        return {
            **self.string_properties,
            **self.string_array_properties,
            **commands_data,
        }


class PartialMessageParserService:
    def _swallow_whitespace(self, characters: Iterable[str]):
        try:
            character = characters.peek()

            while character.isspace():
                next(characters)
                character = characters.peek()
        except StopIteration:
            return

    def _expect_opening_brace(self, characters: Iterable[str]) -> bool:
        try:
            character = characters.peek()

            if character != "{":
                return False

            next(characters)
            self._swallow_whitespace(characters)
            return True
        except StopIteration:
            return False

    def _expect_closing_brace(self, characters: Iterable[str]) -> bool:
        try:
            character = characters.peek()

            if character != "}":
                return False

            next(characters)
            self._swallow_whitespace(characters)
            return True
        except StopIteration:
            return False

    def _expect_colon(self, characters: Iterable[str]) -> bool:
        try:
            character = characters.peek()

            if character != ":":
                return False

            next(characters)
            self._swallow_whitespace(characters)
            return True
        except StopIteration:
            return False

    def _expect_node_label(self, characters: Iterable[str], label: str) -> bool:
        try:
            character = characters.peek()
            if character != '"':
                return False

            next(characters)

            num_characters = len(label)
            characters_to_check = [next(characters) for _ in range(num_characters)]

            if "".join(characters_to_check) != label:
                return False

            character = next(characters)
            if character != '"':
                return False

            self._expect_colon(characters)
            self._swallow_whitespace(characters)
            return True
        except StopIteration:
            return False

    def _parse_node_label(self, characters: Iterable[str]) -> Optional[str]:
        accumulator = []

        next_character = characters.peek()
        if next_character != '"':
            return None

        next(characters)

        try:
            while characters.peek() != '"':
                accumulator.append(next(characters))

            # Swallow the closing quote
            next(characters)

            self._expect_colon(characters)
            self._swallow_whitespace(characters)
        except StopIteration:
            pass

        return "".join(accumulator)

    def _expect_opening_square_bracket(self, characters: Iterable[str]):
        try:
            character = characters.peek()

            if character != "[":
                return False

            next(characters)
            self._swallow_whitespace(characters)
            return True
        except StopIteration:
            return False

    def _expect_closing_square_bracket(self, characters: Iterable[str]):
        try:
            character = characters.peek()

            if character != "]":
                return False

            next(characters)
            self._swallow_whitespace(characters)
            return True
        except StopIteration:
            return False

    def _swallow_up_to_next_closing_brace(self, characters: Iterable[str]):
        try:
            character = characters.peek()

            while character != "}":
                next(characters)
                character = characters.peek()
        except StopIteration:
            return

    def _parse_partial_string(self, characters):
        string_characters = []
        try:
            character = next(characters)

            if character != '"':
                return "", False

            previous_character = character
            character = next(characters)

            while character != '"' or previous_character == "\\":
                string_characters.append(character)
                previous_character = character
                character = next(characters)

            parsed_string = "".join(string_characters)
            parsed_string = parsed_string.encode("utf-8").decode("unicode_escape")

            if parsed_string.endswith("\\"):
                parsed_string = parsed_string[:-1]

            return parsed_string, True
        except StopIteration:
            parsed_string = "".join(string_characters)
            parsed_string = parsed_string.encode("utf-8").decode("unicode_escape")
            if parsed_string.endswith("\\"):
                parsed_string = parsed_string[:-1]

            return parsed_string, False

    def _expect_comma(self, characters: Iterable[str]) -> bool:
        try:
            character = characters.peek()

            if character != ",":
                return False

            next(characters)
            self._swallow_whitespace(characters)
            return True
        except StopIteration:
            return False

    def _swallow_comma(self, characters: Iterable[str]):
        try:
            character = characters.peek()

            if character != ",":
                return

            next(characters)
            self._swallow_whitespace(characters)
        except StopIteration:
            return

    def _parse_partial_string_list(self, characters: Iterable[str]) -> List[str]:
        strings_list = []

        try:
            if not self._expect_opening_square_bracket(characters):
                return []

            while True:
                if characters.peek() == "]":
                    break

                next_string, is_complete = self._parse_partial_string(characters)

                if next_string.strip() != "":
                    strings_list.append(next_string)

                if not is_complete:
                    break

                self._swallow_comma(characters)

            self._swallow_whitespace(characters)
            self._expect_closing_square_bracket(characters)

        except StopIteration:
            pass

        return strings_list

    def _parse_no_json_contextual_chat_root_node(self, root_node: PartialMessageRootNode, characters: Iterable[str]):
        message = "".join(characters).strip()

        if message == "":
            return

        command_node = PartialMessageCommandNode(command_name="clarify", args=[])
        command_node.args.append(
            PartialMessageCommandStringArgNode(
                arg_name="text",
                arg_value=message,
            )
        )

        root_node.commands.append(command_node)

    def _parse_contextual_chat_root_node(
        self,
        characters: Iterable[str],
    ):
        root_node = PartialMessageRootNode(commands=[])

        try:
            if not self._expect_opening_brace(characters):
                # CAMERON: this happens when the LLM doesn't manage to write a JSON
                self._parse_no_json_contextual_chat_root_node(root_node, characters)
                return root_node

            node_label = self._parse_node_label(characters)

            if node_label is None:
                return root_node

            elif node_label == "conversation":
                parsed_string, _ = self._parse_partial_string(characters)
                root_node.set_string_property("conversation", parsed_string)
            elif node_label == "fact_queries":
                parsed_string_list = self._parse_partial_string_list(characters)
                root_node.set_string_array_property("fact_queries", parsed_string_list)

            # CAMERON: this expectation is not strictly necessary, but I think it's good to have them to make sure we're parsing the whole message
            if not self._expect_closing_brace(characters):
                return root_node
        except StopIteration:
            pass
        except Exception as e:
            logger.error(e)

        return root_node

    def _parse_thoughts(self, root_node: PartialMessageRootNode, characters: Iterable[str]):
        thoughts, is_complete = self._parse_partial_string(characters)
        root_node.set_string_property("thoughts", thoughts)

        if not is_complete:
            return False

        self._expect_comma(characters)
        return True

    def _parse_ivc_request_message_root_node(
        self,
        characters: Iterable[str],
    ):
        root_node = PartialMessageRootNode(commands=[])

        try:
            if not self._expect_opening_brace(characters):
                # CAMERON: this happens when the LLM doesn't manage to write a JSON
                message = "".join(characters).strip()
                root_node.set_string_property("content", message)
                return root_node

            if not self._expect_node_label(characters, "content"):
                return root_node

            content_string, is_complete = self._parse_partial_string(characters)
            root_node.set_string_property("content", content_string)

            if not is_complete:
                return root_node

            if not self._expect_comma(characters):
                return root_node

            if not self._expect_node_label(characters, "suggestions"):
                return root_node

            suggestions = self._parse_partial_string_list(characters)
            root_node.set_string_array_property("suggestions", suggestions)

            if not self._expect_closing_brace(characters):
                return root_node

            # CAMERON: this expectation is not strictly necessary, but I think it's good to have them to make sure we're parsing the whole message
            if not self._expect_closing_brace(characters):
                return root_node
        except StopIteration:
            pass
        except Exception as e:
            logger.error(e)
            return None

        return root_node

    def parse_contextual_chat_message(self, partial_message: str) -> PartialMessageRootNode:
        characters = peekable(iter(partial_message))
        root_node = self._parse_contextual_chat_root_node(characters)
        return root_node

    def parse_ivc_request_message(self, partial_message: str) -> PartialMessageRootNode:
        partial_message = partial_message.encode("unicode-escape").decode("unicode-escape")

        characters = peekable(iter(partial_message))
        root_node = self._parse_ivc_request_message_root_node(characters)
        return root_node

    def _parse_workflow_request_message_root_node(
        self,
        characters: Iterable[str],
    ):
        root_node = PartialMessageRootNode(commands=[])

        try:
            if not self._expect_opening_brace(characters):
                # CAMERON: this happens when the LLM doesn't manage to write a JSON
                message = "".join(characters).strip()
                root_node.set_string_property("content", message)
                return root_node

            if not self._expect_node_label(characters, "content"):
                return root_node

            content_string, is_complete = self._parse_partial_string(characters)
            root_node.set_string_property("content", content_string)

            if not is_complete:
                return root_node

            if not self._expect_comma(characters):
                return root_node

            if not self._expect_node_label(characters, "suggestions"):
                return root_node

            suggestions = self._parse_partial_string_list(characters)
            root_node.set_string_array_property("suggestions", suggestions)

            if not self._expect_closing_brace(characters):
                return root_node

            # CAMERON: this expectation is not strictly necessary, but I think it's good to have them to make sure we're parsing the whole message
            if not self._expect_closing_brace(characters):
                return root_node
        except StopIteration:
            pass
        except Exception as e:
            logger.error(e)

        return root_node

    def parse_workflow_request_message(self, partial_message: str) -> PartialMessageRootNode:
        partial_message = partial_message.encode("unicode-escape").decode("unicode-escape")

        characters = peekable(iter(partial_message))
        root_node = self._parse_ivc_request_message_root_node(characters)
        return root_node
