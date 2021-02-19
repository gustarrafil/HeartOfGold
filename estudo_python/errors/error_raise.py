class Car:
    def __init__(self, make, model):
        self.make = make
        self.model = model

    def __repr__(self):
        return f'<Car {self.make} {self.model}>'


class Garage:
    def __init__(self):
        self.cars = []

    def __len__(self):
        return len(self.cars)

    def add_car(self, car):
        if not isinstance(car, Car):
            raise TypeError(f'tried to add a `{car.__class__.__name__}` to the garage, but didnt work')
        self.cars.append(car)


##################################################
def count_from_zero_to_n(n):
    if n < 0:
        raise ValueError('Input should be a non-negative integer')
    for x in range(0, n + 1):
        print(x)


##################################################


ford = Garage()
car = Car('ford', 'fiesta')

try:
    ford.add_car('fiesta')
except TypeError:
    print('your car was not a car')
    raise
except ValueError:
    print('something weird happened')
    raise
finally:
    print(f'the garage now has {len(ford)} cars.')

