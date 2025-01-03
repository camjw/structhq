from typing import Generic, Optional, TypeVar

T = TypeVar("T")
E = TypeVar("E")


class Result(Generic[T, E]):
    """Represents the outcome of an operation.

    Attributes
    ----------
    success : bool
        A flag that is set to True if the operation was successful, False if
        the operation failed.
    value : object
        The result of the operation if successful, value is None if operation
        failed or if the operation has no return value.
    error : str
        Error message detailing why the operation failed, value is None if
        operation was successful.
    """

    def __init__(self, success: bool, value: T, error: E):
        self.success = success
        self._error = error
        self._value = value

    @property
    def failure(self) -> bool:
        """True if operation failed, False if successful (read-only)."""
        return not self.success

    def __str__(self) -> str:
        if self.success:
            return "[Success]"
        else:
            return f'[Failure] "{self._error}"'

    def __repr__(self) -> str:
        if self.success:
            return f"<Result success={self.success}>"
        else:
            return f'<Result success={self.success}, message="{self._error}">'

    def value(self) -> Optional[T]:
        """Return the result of the operation if successful, None if failed."""
        return self._value

    def error(self) -> Optional[E]:
        """Return the error message if operation failed, None if successful."""
        return self._error

    def unwrap(self) -> T:
        """Return the result of the operation if successful, raise an exception if failed."""
        if self.success:
            return self._value
        else:
            raise Exception(self._error)

    @classmethod
    def Err(cls, error):
        """Create a Result object for a failed operation."""
        return cls(False, value=None, error=error)

    @classmethod
    def Ok(cls, value=None):
        """Create a Result object for a successful operation."""
        return cls(True, value=value, error=None)

    def is_ok(self):
        """True if operation was successful, False if failed."""
        return self.success

    def is_err(self):
        """True if operation failed, False if successful."""
        return not self.success
