import json

file = open('friends_json.txt', 'r')
file_content = json.load(file)
file.close()

print(file_content['friends'][0])

cars = [
    {'make': 'ford', 'model': 'fiesta'},
    {'make': 'ford', 'model': 'fiesta'}
]

with open('json_cars.json', 'w') as json_file:
    json.dump(cars, json_file)

file = open('json_cars.txt', 'w')
json.dump(cars, file)
file.close()

my_json_string = '[{"name":"alfa romeo", "released":1950}]'
incorrect_car = json.loads(my_json_string)
print(incorrect_car[0]['name'])
