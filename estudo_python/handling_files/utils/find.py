def find_in(iterable, finder, expected):
    for i in iterable:
        if finder(i) == expected:
            return i
    raise NotFoundError(f'{expected} not found')


class NotFoundError(Exception):
    pass


print(__name__)