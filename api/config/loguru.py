from __future__ import annotations

import logging

import loguru


class LoguruLogger:
    def __init__(self, loguru_logger: loguru.Logger):
        self.loguru_logger = loguru_logger

    def log(self, level, message):
        if level == logging.ERROR:
            self.loguru_logger.error(message)

        elif level == logging.WARN:
            self.loguru_logger.warn(message)

        elif level == logging.DEBUG:
            self.loguru_logger.debug(message)

        elif level == logging.INFO:
            self.loguru_logger.info(message)

        else:
            self.loguru_logger.error(message)
