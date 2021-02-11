# add new movies to my collection
# list all the movies in my collection
# find a movie by using the movie title

# make menu with options to be picked
# stop running the program when they type 'q' in the menu

movies = []

###################################################################################

def add_movie():
    title = input("Enter the movie title: ")
    director = input("Enter the movie director: ")
    year = input("Enter the movie release year: ")
    movies.append({
        'title': title,
        'director': director,
        'year': year
    })

def print_movie(movie):
    print(f"\nMovie: {movie['title']}\nDirected by: {movie['director']}\nReleased on: {movie['year']}")


def list_movies():
    for movie in movies:
        print_movie(movie)


def find_movie():
    title = input("Enter the movie title you're looking for: ")
    for movie in movies:
        if movie['title'] == title:
            print_movie(movie)


###################################################################################

MENU_PROMPT = "\nEnter 'a' to add a movie, 'l' to see your movies, 'f' to find a movie by title, or 'q' to quit: "

user_options = {
    'a': add_movie,
    'l': list_movies,
    'f': find_movie,
}


def menu():
    selection = input(MENU_PROMPT)
    while selection != 'q':
        if selection in user_options:
            selected_function = user_options[selection]
            selected_function()
        else:
            print("Unknown command. Please try again.")

        selection = input(MENU_PROMPT)

menu()