from structhq.services.partial_message_parser_service import PartialMessageParserService
from structhq.tests.utils.structhq_test_case import StructhqTestCase


class TestPartialMessageParserService(StructhqTestCase):
    def setUp(self) -> None:
        super().setUp()
        self.partial_message_parser_service = PartialMessageParserService()

    def test_partial_conversation_node(self):
        partial_message = """\
{
    "conversation": "Hello,"""

        parsed_message = self.partial_message_parser_service.parse_contextual_chat_message(partial_message)
        self.assertEqual(parsed_message.get_string_property("conversation"), "Hello,")

    def test_partial_conversation_node_with_newline(self):
        partial_message = """\
{
    "conversation": "Hello,
World!"""

        parsed_message = self.partial_message_parser_service.parse_contextual_chat_message(partial_message)
        self.assertEqual(parsed_message.get_string_property("conversation"), "Hello,\nWorld!")

    def test_parse_incomplete_fact_queries(self):
        partial_message = """\
{
    "fact_queries": ["test1", "test2"""

        parsed_message = self.partial_message_parser_service.parse_contextual_chat_message(partial_message)

        fact_queries = parsed_message.get_string_array_property("fact_queries")
        self.assertEqual(len(fact_queries), 2)
        self.assertEqual(fact_queries[0], "test1")
        self.assertEqual(fact_queries[1], "test2")
