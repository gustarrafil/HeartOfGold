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

def list_movies():
    for item in movies:
        print(f"\nMovie: {item['title']}\nDirected by: {item['director']}\nReleased on: {item['year']}")


def find_movie():
    title = input("Enter the movie title: ")
    for item in movies:
        if item['title'] == title:
            print(f"\nMovie: {item['title']}\nDirected by: {item['director']}\nReleased on: {item['year']}")

###################################################################################

MENU_PROMPT = "\nEnter 'a' to add a movie, 'l' to see your movies, 'f' to find a movie by title, or 'q' to quit: "

selection = input(MENU_PROMPT)

while selection != 'q':
    if selection == 'a':
        add_movie()
    elif selection == 'l':
        list_movies()
    elif selection == 'f':
        find_movie()
    else:
        print("Unknown command. Please try again.")

    selection = input(MENU_PROMPT)
