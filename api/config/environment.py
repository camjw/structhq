import os
from typing import Callable, Dict

import yaml


class Environment:
    @classmethod
    def _bfs(cls, d: Dict[str, str], callback: Callable[[str, str], None]) -> None:
        stack = [(k, ("", v)) for k, v in d.items()]
        visited = set()

        while len(stack) > 0:
            key, (identifier, value) = stack.pop()

            next_identifier = key if identifier == "" else f"{identifier}:{key}"
            if isinstance(value, dict):
                if key not in visited:
                    stack.extend([(k, (next_identifier, v)) for k, v in value.items()])
            else:
                callback(str(value), next_identifier)

            visited.add(f"{identifier}:{key}")

    @classmethod
    def load(cls) -> None:
        with open(".environment.yml", "r") as environment_file:
            environment = yaml.load(environment_file, Loader=yaml.FullLoader)

            def callback(value: str, identifier: str) -> None:
                os.environ[identifier] = value

            cls._bfs(environment, callback)
