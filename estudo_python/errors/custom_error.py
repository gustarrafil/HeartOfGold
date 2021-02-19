class MyCustomError(TypeError):
    def __init__(self, message, code):
        super().__init__(f'Error code {code}: {message}')
        self.code = code


class RuntimeErrorWithCode(TypeError):
    def __init__(self, message, code):
        super().__init__(f'Error code {code}: {message}')


err = RuntimeErrorWithCode('error occured', 500)

raise MyCustomError('something happened', 500)
