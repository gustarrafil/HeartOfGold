import json

csv_file = open('csv_file.txt', 'r')
lines = csv_file.readlines()
csv_file.close()

json_data = []
for line in lines:
    club, city, country = line.strip().split(',')
    data = {
        'club': club,
        'city': city,
        'country': country
    }
    json_data.append(data)

new_json = open('json_file.txt', 'w')
json.dump(json_data, new_json)
new_json.close()
