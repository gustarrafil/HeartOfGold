class Movie:
    def __init__(self, name, director):
        self.name = name
        self.director = director

    def print_info(self):
        print(f'<<{self.name}>> by {self.director}')


my_movie = Movie('Inglorious Bastards', 'Tarantino')
my_movie.print_info()
