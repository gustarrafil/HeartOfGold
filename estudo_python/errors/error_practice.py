def interact():
    while True:
        try:
            user_input = int(input('Please input an integer:'))
        except ValueError:
            # happens if input not int
            print('Please input integers only.')
        else:
            # happens if input is an int
            print('{} is {}.'.format(user_input, 'even' if user_input % 2 == 0 else 'odd'))
        finally:
            # happens anyway
            user_input = input('Do you want to play again? (y/N):')
            if user_input != 'y':
                print('Goodbye.')
                break
