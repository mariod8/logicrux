import csv
import os
import json
import re

path = "/home/mario/Documents/Archivos/Proyectos/Javascript/logicrux/tools/bulk-guild-export/guild-backup"
emojis = r"(:\d+|\w+:)"
data = {}

def parse_csv(file):
    with open(file, "r") as f:
        reader = csv.reader(x.replace('\0', '') for x in f)
        for line in reader:
            if line[0] not in data:
                data[line[0]] = {
                    "name": "undefined",
                    "messages": 0,
                    "words": 0,
                    "attachments": 0,
                    "emojis": 0
                }
            data[line[0]]["messages"] += 1
            data[line[0]]["words"] += len(line[3].split(" "))
            data[line[0]]["name"] = line[1]
            if line[4] != "":
                data[line[0]]["attachments"] += 1
            data[line[0]]["emojis"] += len(re.findall(emojis, line[3]))


def main():
    for file in os.listdir(path):
        if not file.endswith(".csv"):
            continue
        f = os.path.join(path, file)
        if not os.path.isfile:
            continue
        print(f'Reading file {file}...')
        parse_csv(f)
    data.pop("AuthorID", None)
    json_data = json.dumps(data, indent = 4)
    with open("server-data.json", "w") as o:
        o.write(json_data)

if __name__ == "__main__":
    main()