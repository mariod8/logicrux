import csv
import os
import json
import re
import math
import emoji

path = "/home/mario/Documents/Archivos/Proyectos/Javascript/logicrux/tools/bulk-guild-export/raw-data"
customEmojis = re.compile(r":(\w+):")
unicodeEmojis = re.compile(r'\d+(.*?)(?:\u263a|\U0001f645)')
data = {}

mongo = [{"_id": {"$oid": "606f47c5d36f35ee55fadcd7"}, "guildId": "666295714724446209", "userId": "430843932793110529", "__v": 0, "name": "EKMA", "totalXp": 240, "xp": 140, "level": 2, "lover": 1},
         {"_id": {"$oid": "606f5d36d36f35ee550afd0e"}, "guildId": "666295714724446209", "userId": "826187083654758471", "__v": 0, "name": "SibOwO", "totalXp": 2145730, "xp": 35618, "level": 48, "lover": 4,
             "messages": 98, "points": 0, "weeklyUser": {"messages": 3, "words": 14, "images": 0, "files": 0}, "words": 458, "presence": -1, "mutes": 3, "emojis": 4, "replies": 3, "files": 1, "commands": 1},
         {"_id": {"$oid": "60715968d36f35ee5562ff71"}, "guildId": "666295714724446209", "userId": "400578808094130186", "__v": 0, "name": "GaliGoat", "totalXp": 1230259933, "xp": 7417155, "level": 293, "weeklyUser": {"messages": 148,
                                                                                                                                                                                                                         "words": 495, "images": 0, "files": 10}, "messages": 2934, "points": 14, "words": 11526, "mutes": 7, "pongs": 2714, "presence": 2, "replies": 161, "files": 101, "emojis": 199, "reactions": 43, "commands": 79, "music": 45},
         {"_id": {"$oid": "6071709fd36f35ee55716d81"}, "guildId": "666295714724446209", "userId": "176294550896115713", "__v": 0, "name": "Spectraul", "totalXp": 1683,
          "xp": 582, "level": 6, "presence": -1, "points": 0, "weeklyUser": {"words": 0, "messages": 0, "images": 0, "files": 0}, "messages": 5, "words": 12},
         {"_id": {"$oid": "607173f2d36f35ee557383b2"}, "guildId": "666295714724446209", "userId": "788145895665041438", "__v": 0, "name": "Voideon", "totalXp": 150660, "xp": 19094, "level": 22,
          "lover": 4, "presence": 0, "points": 0, "weeklyUser": {"messages": 6, "words": 18, "images": 0, "files": 0}, "messages": 117, "words": 560, "files": 1, "emojis": 5, "replies": 2, "mutes": 2},
         {"_id": {"$oid": "6071b31dd36f35ee55a17ada"}, "guildId": "666295714724446209", "userId": "323378898794446850", "__v": 0, "name": "mariod2", "totalXp": 1.1840497625E+10, "xp": 4656744, "level": 560, "lover": 3, "coins": 555689,
             "points": 1, "messages": 1771, "weeklyUser": {"messages": 2, "words": 3, "images": 0, "files": 0}, "words": 6329, "pongs": 2288, "presence": 0, "replies": 26, "reactions": 200, "commands": 534, "files": 59, "emojis": 529, "music": 23},
         {"_id": {"$oid": "6071b3d6d36f35ee55a20306"}, "guildId": "666295714724446209", "userId": "458738156695584770", "__v": 0, "name": "The_Siber", "totalXp": 7.0013994285E+10, "xp": 70808411, "level": 930, "lover": 5, "messages": 12386, "weeklyUser": {
             "messages": 647, "words": 3241, "images": 0, "files": 38}, "points": 111, "words": 49112, "mutes": 22, "presence": 2, "commands": 422, "emojis": 874, "replies": 204, "reactions": 116, "files": 820, "pongs": 2094, "music": 151, "weekly": 10},
         {"_id": {"$oid": "6071b481d36f35ee55a2859c"}, "guildId": "666295714724446209", "userId": "355636164897669122", "__v": 0, "name": "SISPLAU", "totalXp": 2.3816900328E+10, "xp": 87273592, "level": 683, "lover": 4, "messages": 10128, "weeklyUser": {
             "messages": 491, "words": 1872, "images": 0, "files": 12}, "points": 17, "words": 35960, "mutes": 32, "pongs": 20250, "presence": 2, "files": 240, "emojis": 532, "reactions": 131, "replies": 643, "commands": 215, "music": 73, "weekly": 1},
         {"_id": {"$oid": "6071b4bed36f35ee55a2b290"}, "guildId": "666295714724446209", "userId": "664432205598031882", "__v": 0, "name": "Dark Spirit", "totalXp": 1345880702, "xp": 1922268, "level": 301, "lover": 1, "weeklyUser": {
             "messages": 106, "words": 339, "images": 0, "files": 3}, "messages": 2129, "points": 3, "words": 10206, "presence": 2, "reactions": 82, "emojis": 23, "commands": 241, "files": 123, "mutes": 5, "replies": 148, "music": 121, "pongs": 8756},
         {"_id": {"$oid": "607416dcd36f35ee5552d1de"}, "guildId": "666295714724446209", "userId": "415490401626095616", "__v": 0, "name": "ManuelEndler", "totalXp": 14752471, "xp": 181228,
          "level": 83, "presence": -1, "points": 0, "weeklyUser": {"messages": 0, "words": 0, "images": 0, "files": 0}, "messages": 30, "words": 140, "commands": 3, "emojis": 1},
         {"_id": {"$oid": "60741700d36f35ee5552eb0c"}, "guildId": "666295714724446209", "userId": "327157607724875776", "__v": 0, "name": "Mercuriano", "totalXp": 18928, "xp": 4234, "lover": 2,
          "level": 12, "presence": -1, "points": 0, "weeklyUser": {"words": 0, "messages": 0, "images": 0, "files": 0}, "messages": 13, "words": 43, "emojis": 3, "replies": 1, "reactions": 3},
         {"_id": {"$oid": "60741723d36f35ee55530532"}, "guildId": "666295714724446209", "userId": "220683667134087189", "__v": 0, "name": "Dablestation",
          "totalXp": 506, "xp": 285, "level": 4, "lover": 2, "presence": -1, "points": 0, "weeklyUser": {"images": 0, "messages": 0, "words": 0, "files": 0}},
         {"_id": {"$oid": "6074173cd36f35ee55531698"}, "guildId": "666295714724446209", "userId": "235076665632489472", "__v": 0, "name": "Demiphius", "totalXp": 4710142, "xp": 68254,
          "lover": 3, "level": 60, "presence": -1, "points": 0, "weeklyUser": {"messages": 0, "images": 0, "words": 0, "files": 0}, "messages": 20, "words": 60, "emojis": 2},
         {"_id": {"$oid": "607417ded36f35ee55538a12"}, "guildId": "666295714724446209",
          "userId": "214955224933203985", "__v": 0, "name": "Killermanjer", "totalXp": 0, "xp": 0},
         {"_id": {"$oid": "60741811d36f35ee5553abca"}, "guildId": "666295714724446209", "userId": "284772672443777025", "__v": 0, "name": "Vendo", "totalXp": 1124321, "xp": 17894, "level": 40, "lover": 1, "weeklyUser": {
             "messages": 0, "words": 0, "images": 0, "files": 0}, "messages": 285, "points": 0, "words": 1100, "mutes": 4, "presence": -1, "emojis": 51, "reactions": 3, "commands": 6, "replies": 14, "files": 3},
         {"_id": {"$oid": "60741849d36f35ee5553d078"}, "guildId": "666295714724446209", "userId": "133677252708663296", "__v": 0, "name": "Kitty Kat",
          "totalXp": 289264, "xp": 15704, "level": 27, "lover": 8, "presence": -1, "points": 0, "weeklyUser": {"images": 0, "messages": 0, "words": 0, "files": 0}},
         {"_id": {"$oid": "60756365d36f35ee5559b807"}, "guildId": "666295714724446209",
          "userId": "788156551470514228", "__v": 0, "name": "Trent", "totalXp": 0, "xp": 0},
         {"_id": {"$oid": "60761e4bd36f35ee5501abdd"}, "guildId": "666295714724446209", "userId": "310086714481704960", "__v": 0, "name": "InmortalKaktus", "totalXp": 20861702, "xp": 715938, "level": 91,
          "lover": 5, "presence": -1, "points": 0, "weeklyUser": {"images": 0, "words": 0, "messages": 0, "files": 0}, "messages": 120, "words": 892, "replies": 14, "emojis": 4, "files": 1},
         {"_id": {"$oid": "607950f81dbc6543cb2edc43"}, "guildId": "666295714724446209", "userId": "463652507328053259", "__v": 0, "lover": 2, "name": "Arma_7x", "level": 5,
          "totalXp": 641, "xp": 99, "presence": -1, "points": 0, "weeklyUser": {"images": 0, "messages": 0, "words": 0, "files": 0}, "messages": 1, "commands": 1, "words": 1},
         {"_id": {"$oid": "607950f81dbc6543cb2edc5f"}, "guildId": "666295714724446209", "userId": "480391890835996672", "__v": 0, "lover": 3, "name": "AxiosX", "level": 3, "totalXp": 183,
          "xp": 117, "mutes": 2, "presence": -1, "points": 0, "weeklyUser": {"images": 0, "messages": 0, "words": 0, "files": 0}, "messages": 1, "words": 1, "replies": 1},
         {"_id": {"$oid": "6079519d1dbc6543cb2f4e26"}, "guildId": "666295714724446209", "userId": "315399792551264266", "__v": 0, "name": "iniesgar",
          "lover": 4, "level": 6, "totalXp": 1897, "xp": 797, "presence": -1, "points": 0, "weeklyUser": {"images": 0, "messages": 0, "words": 0, "files": 0}},
         {"_id": {"$oid": "607f6824daf97859abc36997"}, "guildId": "666295714724446209",
          "userId": "628664261723553793", "__v": 0, "name": "PINGU", "totalXp": 325, "xp": 104, "level": 4},
         {"_id": {"$oid": "607fd7fedaf97859ab1e1154"}, "guildId": "666295714724446209",
          "userId": "230509764809850881", "__v": 0, "name": "Tigeric", "totalXp": 687, "xp": 146, "level": 5},
         {"_id": {"$oid": "607fffe0daf97859ab46c98c"}, "guildId": "666295714724446209",
          "userId": "665676628231192586", "__v": 0, "name": "Swapnil282002", "totalXp": 208, "xp": 142, "level": 3},
         {"_id": {"$oid": "608036c40b1bbe00985ca2c5"}, "coins": 200, "xp": 146, "totalXp": 687, "level": 5,
          "lover": 0, "guildId": "834429765284528138", "userId": "791656668618031104", "__v": 0},
         {"_id": {"$oid": "608134aadaf97859ab98a2d1"}, "guildId": "666295714724446209", "userId": "293091785930964992", "__v": 0, "lover": 1, "name": "spotify_premium",
          "level": 22, "totalXp": 143289, "xp": 11736, "presence": -1, "points": 0, "weeklyUser": {"messages": 0, "images": 0, "words": 0, "files": 0}},
         {"_id": {"$oid": "608134aadaf97859ab98a2e7"}, "guildId": "666295714724446209", "userId": "304280586003021824", "__v": 0, "lover": 8, "name": "abg._.blanco",
          "level": 7, "totalXp": 2244, "xp": 263, "presence": -1, "points": 0, "weeklyUser": {"messages": 0, "images": 0, "words": 0, "files": 0}},
         {"_id": {"$oid": "6082800bdaf97859ab075ce6"}, "guildId": "666295714724446209", "userId": "671756255890767892", "__v": 0, "lover": 4, "name": "miguel6761",
          "level": 8, "totalXp": 4710, "xp": 1433, "presence": -1, "points": 0, "weeklyUser": {"messages": 0, "images": 0, "words": 0, "files": 0}},
         {"_id": {"$oid": "6084506ddaf97859ab3ac4ca"}, "guildId": "666295714724446209", "userId": "691355112043446373", "__v": 0, "lover": 2, "name": "Camaloran",
          "level": 3, "totalXp": 208, "xp": 142, "presence": -1, "points": 0, "weeklyUser": {"images": 0, "messages": 0, "words": 0, "files": 0}, "reactions": 1},
         {"_id": {"$oid": "60869fd6daf97859ab0ee856"}, "guildId": "666295714724446209", "userId": "280352905234743296", "__v": 0, "lover": 3, "name": "guti",
          "level": 3, "totalXp": 91, "xp": 25, "presence": -1, "points": 0, "weeklyUser": {"messages": 0, "images": 0, "words": 0, "files": 0}},
         {"_id": {"$oid": "60869fd7daf97859ab0ee87b"}, "guildId": "666295714724446209", "userId": "272096941515603970", "__v": 0, "lover": 3, "name": "Nitro",
          "level": 10, "totalXp": 10494, "xp": 2977, "presence": -1, "points": 0, "weeklyUser": {"messages": 0, "images": 0, "words": 0, "files": 0}},
         {"_id": {"$oid": "60888d80daf97859ab9a9e57"}, "guildId": "666295714724446209", "userId": "465629042251530257", "__v": 0, "name": "Yuri", "totalXp": 1627019, "xp": 76213, "level": 44,
          "presence": -1, "points": 0, "weeklyUser": {"images": 0, "words": 0, "messages": 0, "files": 0}, "messages": 76, "words": 310, "replies": 19, "commands": 4, "reactions": 3, "lover": 1},
         {"_id": {"$oid": "608a639bdaf97859abf68fbd"}, "guildId": "666295714724446209", "userId": "683065121970323553", "__v": 0, "lover": 1, "name": "andresmacia45",
          "level": 14, "totalXp": 26309, "xp": 536, "presence": -1, "points": 0, "weeklyUser": {"images": 0, "messages": 0, "words": 0, "files": 0}},
         {"_id": {"$oid": "608bd6b7daf97859aba32526"}, "guildId": "666295714724446209", "userId": "654167830635216907", "__v": 0, "lover": 3, "name": "funeria",
          "level": 2, "totalXp": 26, "xp": 16, "presence": -1, "points": 0, "weeklyUser": {"images": 0, "messages": 0, "words": 0, "files": 0}},
         {"_id": {"$oid": "608d1d46daf97859ab41d3e3"}, "guildId": "666295714724446209", "userId": "728543517542055957", "__v": 0, "name": "Landriu", "totalXp": 32147044, "xp": 1038781, "level": 103, "presence": 2, "points": 31,
          "weeklyUser": {"messages": 151, "words": 546, "images": 0, "files": 6}, "messages": 1988, "words": 7285, "replies": 356, "commands": 152, "emojis": 42, "music": 107, "reactions": 47, "files": 58, "mutes": 13, "pongs": 12820},
         {"_id": {"$oid": "60925954daf97859ab777c1f"}, "guildId": "666295714724446209", "userId": "715666874725302412", "__v": 0,
          "lover": 2, "name": "ViruZ", "presence": -1, "points": 0, "weeklyUser": {"words": 0, "messages": 0, "images": 0, "files": 0}},
         {"_id": {"$oid": "60939c8ddaf97859abd4cd47"}, "guildId": "666295714724446209", "userId": "263563691939594240", "__v": 0, "name": "DaddyZargo",
          "totalXp": 260203, "xp": 21112, "level": 26, "lover": 4, "presence": -1, "points": 0, "weeklyUser": {"images": 0, "words": 0, "messages": 0, "files": 0}},
         {"_id": {"$oid": "6093a08bdaf97859abd92ac7"}, "guildId": "666295714724446209", "userId": "582921189295521813", "__v": 0, "name": "Cubecraft",
          "totalXp": 3588, "xp": 311, "level": 8, "presence": -1, "points": 0, "weeklyUser": {"messages": 0, "words": 0, "images": 0, "files": 0}, "lover": 1},
         {"_id": {"$oid": "6093be07daf97859abf850a0"}, "guildId": "666295714724446209", "userId": "776148008311062568", "__v": 0, "name": "Syntez",
          "totalXp": 32293, "xp": 6520, "level": 14, "lover": 2, "presence": -1, "points": 0, "weeklyUser": {"words": 0, "images": 0, "messages": 0, "files": 0}},
         {"_id": {"$oid": "6093be30daf97859abf87cb7"}, "guildId": "666295714724446209", "userId": "825117888096370728", "__v": 0, "name": "Angrypickle", "totalXp": 30522, "xp": 4741, "level": 14,
          "lover": 3, "presence": -1, "points": 0, "weeklyUser": {"messages": 0, "images": 0, "words": 0, "files": 0}, "messages": 48, "words": 133, "reactions": 7, "files": 2, "replies": 4, "mutes": 3},
         {"_id": {"$oid": "6093f5b9daf97859ab357003"}, "guildId": "666295714724446209", "userId": "818679331571630090", "__v": 0, "name": "LookOverDare",
          "totalXp": 208, "xp": 142, "level": 3, "presence": -1, "points": 0, "weeklyUser": {"messages": 0, "words": 0, "images": 0, "files": 0}},
         {"_id": {"$oid": "6094352edaf97859ab80dc67"}, "guildId": "666295714724446209", "userId": "761067033626148894",
          "__v": 0, "name": "Stephen Warshall", "totalXp": 208, "xp": 142, "level": 3, "presence": -1, "points": 0},
         {"_id": {"$oid": "609438dddaf97859ab84f942"}, "guildId": "666295714724446209",
          "userId": "376971428509122580", "__v": 0, "name": "Itssunnyk", "totalXp": 7332, "xp": 2245, "level": 9},
         {"_id": {"$oid": "60964e62daf97859abcbd852"}, "guildId": "666295714724446209", "userId": "657755664118054922", "__v": 0, "name": "Raquisaurius", "totalXp": 132084, "xp": 522, "level": 22,
          "presence": -1, "points": 0, "weeklyUser": {"messages": 0, "images": 0, "words": 0, "files": 0}, "messages": 82, "words": 339, "commands": 1, "files": 1, "replies": 5, "reactions": 2, "lover": 1},
         {"_id": {"$oid": "6097d905daf97859ab8075a4"}, "guildId": "666295714724446209",
          "userId": "725334060666192004", "__v": 0, "name": "Eagle-From-Aut", "totalXp": 210, "xp": 144, "level": 3},
         {"_id": {"$oid": "609814f1daf97859abc4f802"}, "guildId": "666295714724446209", "userId": "744716225820753952", "__v": 0, "name": "Redstone", "totalXp": 1152, "xp": 50,
          "level": 6, "presence": -1, "points": 0, "weeklyUser": {"messages": 0, "images": 0, "words": 0, "files": 0}, "messages": 5, "words": 18, "emojis": 3, "lover": 1},
         {"_id": {"$oid": "6098fd53daf97859abc3a2b6"}, "guildId": "666295714724446209", "userId": "459724108373164033", "__v": 0, "name": "Matte",
          "totalXp": 2694, "xp": 713, "level": 7, "lover": 1, "presence": -1, "points": 0, "weeklyUser": {"images": 0, "words": 0, "messages": 0, "files": 0}},
         {"_id": {"$oid": "609903a3daf97859abcb3234"}, "guildId": "666295714724446209",
          "userId": "841010417307484210", "__v": 0, "name": "green", "totalXp": 689, "xp": 148, "level": 5},
         {"_id": {"$oid": "60992886daf97859abf6dfc8"}, "guildId": "666295714724446209",
          "userId": "736129295415771180", "__v": 0, "name": "CrunchieRoll", "totalXp": 210, "xp": 144, "level": 3},
         {"_id": {"$oid": "60993d5adaf97859ab0f88ec"}, "guildId": "666295714724446209",
          "userId": "159062086700367872", "__v": 0, "name": "kenliecer", "totalXp": 210, "xp": 144, "level": 3},
         {"_id": {"$oid": "60994f34daf97859ab24d481"}, "guildId": "666295714724446209",
          "userId": "714670623863078994", "__v": 0, "name": "LittleCircles", "totalXp": 93, "xp": 27, "level": 3},
         {"_id": {"$oid": "609ba25adaf97859ab52abeb"}, "guildId": "666295714724446209", "userId": "565574564516462605", "__v": 0,
          "lover": 3, "name": "DonVlaz", "presence": -1, "points": 0, "weeklyUser": {"messages": 0, "words": 0, "images": 0, "files": 0}},
         {"_id": {"$oid": "609baee9daf97859ab5c7de5"}, "guildId": "666295714724446209", "userId": "716482285431685190", "__v": 0, "name": "milky", "totalXp": 462, "xp": 241,
          "level": 4, "presence": -1, "points": 0, "weeklyUser": {"messages": 0, "words": 0, "images": 0, "files": 0}, "lover": 1, "messages": 1, "words": 3, "replies": 1},
         {"_id": {"$oid": "609bf299daf97859ab936d92"}, "guildId": "666295714724446209", "userId": "715579379761152032", "__v": 0, "name": "zixMC", "totalXp": 185, "xp": 119,
          "level": 3, "presence": -1, "points": 0, "weeklyUser": {"messages": 0, "images": 0, "words": 0, "files": 0}, "messages": 1, "words": 1, "emojis": 1, "lover": 1},
         {"_id": {"$oid": "609ca20055bda50b930362f3"}, "guildId": "666295714724446209", "userId": "662485264316235781", "__v": 0, "name": "FIREBALL_Z42",
          "totalXp": 2, "xp": 2, "presence": -1, "points": 0, "weeklyUser": {"messages": 0, "words": 0, "images": 0, "files": 0}, "lover": 2},
         {"_id": {"$oid": "609d63cb55bda50b93932961"}, "guildId": "666295714724446209", "userId": "813086780197699595", "__v": 0, "name": "Sirms",
          "totalXp": 508, "xp": 287, "level": 4, "lover": 1, "presence": -1, "points": 0, "weeklyUser": {"images": 0, "messages": 0, "words": 0, "files": 0}},
         {"_id": {"$oid": "609d778c55bda50b93a32838"}, "guildId": "666295714724446209",
          "userId": "547168740261756992", "__v": 0, "lover": 1, "name": "Louie"},
         {"_id": {"$oid": "609fc92355bda50b93722f1f"}, "guildId": "666295714724446209", "userId": "530550822321520647", "__v": 0, "name": "bvella",
          "totalXp": 210, "xp": 144, "level": 3, "presence": -1, "points": 0, "weeklyUser": {"images": 0, "messages": 0, "words": 0, "files": 0}, "lover": 2},
         {"_id": {"$oid": "609fe6ec55bda50b938f2314"}, "guildId": "666295714724446209", "userId": "610537838340997143", "__v": 0, "lover": 4,
          "name": "Azimondius", "presence": -1, "points": 0, "weeklyUser": {"messages": 0, "images": 0, "words": 0, "files": 0}},
         {"_id": {"$oid": "60a28be555bda50b938d005f"}, "guildId": "666295714724446209",
          "userId": "681548144219258919", "__v": 0, "name": "jashual", "totalXp": 2246, "xp": 265, "level": 7},
         {"_id": {"$oid": "60a83c4dfd632d364a6b0464"}, "guildId": "666295714724446209", "userId": "505015615308824577", "__v": 0,
          "lover": 1, "name": "xSolexD", "presence": -1, "points": 0, "weeklyUser": {"messages": 0, "images": 0, "words": 0, "files": 0}},
         {"_id": {"$oid": "60acd083fd632d364a0a5940"}, "guildId": "666295714724446209",
          "userId": "494297184234110986", "__v": 0, "name": "Lul", "totalXp": 327, "xp": 106, "level": 4},
         {"_id": {"$oid": "60ae16b7fd632d364a39124f"}, "guildId": "666295714724446209", "userId": "746090211087351900", "__v": 0, "name": "Alice", "totalXp": 50323430, "xp": 83019, "level": 118, "presence": -1, "points": 0,
          "weeklyUser": {"messages": 0, "words": 0, "images": 0, "files": 0}, "messages": 1853, "words": 10298, "mutes": 2, "replies": 271, "reactions": 251, "emojis": 286, "commands": 95, "files": 189, "weekly": 0, "pongs": 507, "music": 22},
         {"_id": {"$oid": "60ae38e3fd632d364a7af07c"}, "guildId": "666295714724446209", "userId": "687824320311197758", "__v": 0, "name": "LordHybe", "totalXp": 119477, "xp": 8128, "level": 21,
          "messages": 47, "weeklyUser": {"messages": 0, "words": 0, "images": 0, "files": 0}, "points": 0, "words": 188, "presence": -1, "files": 3, "replies": 6, "emojis": 8, "reactions": 2, "commands": 1},
         {"_id": {"$oid": "60ae4a4cfd632d364a9df2f3"}, "guildId": "666295714724446209", "userId": "437296242817761292", "__v": 0, "name": "lenrik", "totalXp": 65780, "xp": 1798, "level": 18, "presence": -1,
          "points": 0, "messages": 57, "weeklyUser": {"messages": 0, "words": 0, "images": 0, "files": 0}, "words": 460, "replies": 12, "emojis": 1, "reactions": 11, "files": 3, "commands": 1, "pongs": 2500},
         {"_id": {"$oid": "60ae57b8fd632d364ab84fba"}, "guildId": "666295714724446209", "userId": "614253780002799638", "__v": 0, "name": "vytross", "totalXp": 57564, "xp": 5503, "level": 17,
          "presence": -1, "points": 0, "weeklyUser": {"images": 0, "messages": 0, "words": 0, "files": 0}, "messages": 8, "words": 56, "emojis": 1, "replies": 1, "reactions": 1, "lover": 2},
         {"_id": {"$oid": "60ae6b07fd632d364adf6993"}, "guildId": "666295714724446209",
          "userId": "315851790967111680", "__v": 0, "name": "Feenix", "totalXp": 93, "xp": 27, "level": 3},
         {"_id": {"$oid": "60aecac6fd632d364a92a3ec"}, "guildId": "666295714724446209", "userId": "694086494792712282", "__v": 0, "name": "KingCobra", "totalXp": 437, "xp": 215,
          "level": 4, "presence": -1, "points": 0, "weeklyUser": {"words": 0, "images": 0, "messages": 0, "files": 0}, "lover": 2, "messages": 2, "words": 9, "replies": 1, "reactions": 2},
         {"_id": {"$oid": "60af9da317fc4a8507d13cae"}, "coins": 0, "xp": 0, "totalXp": 0, "level": 0, "lover": 4, "mutes": 0, "name": "IdleCapitalist",
          "guildId": "829448956417015828", "userId": "512079641981353995", "__v": 0, "presence": 0, "points": 0, "weeklyUser": {"messages": 0, "words": 0, "images": 0, "files": 0}},
         {"_id": {"$oid": "60af9da317fc4a8507d13cb1"}, "coins": 0, "xp": 0, "totalXp": 0, "level": 0, "lover": 9, "mutes": 0, "name": "LogiCraft Engine", "guildId": "829448956417015828",
          "userId": "824989001999712337", "__v": 0, "presence": 0, "points": 12, "weeklyUser": {"images": 0, "messages": 0, "words": 0, "files": 0}, "reactions": 12},
         {"_id": {"$oid": "60af9da317fc4a8507d13caf"}, "coins": 0, "xp": 0, "totalXp": 0, "level": 0, "lover": 4, "mutes": 0, "name": "EPIC RPG", "guildId": "829448956417015828",
          "userId": "555955826880413696", "__v": 0, "presence": 0, "points": 0, "weeklyUser": {"messages": 0, "images": 0, "words": 0, "files": 0}},
         {"_id": {"$oid": "60af9da317fc4a8507d13cb0"}, "coins": 0, "xp": 0, "totalXp": 0, "level": 0, "lover": 5, "mutes": 0, "name": "Gamble Bot", "guildId": "829448956417015828",
          "userId": "744883471004205147", "__v": 0, "presence": 0, "points": 0, "weeklyUser": {"images": 0, "words": 0, "messages": 0, "files": 0}},
         {"_id": {"$oid": "60af9da317fc4a8507d13cb3"}, "coins": 0, "xp": 0, "totalXp": 0, "level": 0, "lover": 3, "mutes": 0, "name": "LogiBot Dev", "guildId": "829448956417015828",
          "userId": "829091397906464829", "__v": 0, "presence": 0, "points": 9930, "weeklyUser": {"messages": 0, "words": 0, "images": 0, "files": 0}, "messages": 224, "words": 838, "weekly": 1},
         {"_id": {"$oid": "60afa0b7b7f0728a89fee7f8"}, "coins": 0, "xp": 495, "totalXp": 1041, "level": 5, "lover": 10, "mutes": 41, "name": "Music test",
          "guildId": "829448956417015828", "userId": "832981465444515940", "__v": 0, "presence": 0, "points": 0, "weeklyUser": {"messages": 0, "words": 0, "images": 0, "files": 0}},
         {"_id": {"$oid": "60b6d4abfd632d364aa7caba"}, "guildId": "666295714724446209",
          "userId": "308975521272823809", "__v": 0, "name": "fnkyheh", "totalXp": 2, "xp": 2},
         {"_id": {"$oid": "60b8923a73644c1dae9cfeed"}, "name": "mariod2", "coins": 0, "xp": 15782132, "totalXp": 8.427349656E+09, "level": 508, "lover": 0, "mutes": 0, "pongs": 0, "weekly": 1, "messages": 259, "words": 426, "images": 0,
          "presence": 0, "points": 5676, "weeklyUser": {"messages": 1, "images": 0, "words": 2, "files": 0}, "guildId": "829448956417015828", "userId": "323378898794446850", "__v": 0, "emojis": 9, "commands": 461, "music": 104, "reactions": 39},
         {"_id": {"$oid": "60ba05ec0b98296427b4b8c9"}, "name": "TacoShack", "coins": 0, "xp": 0, "totalXp": 0, "level": 0, "lover": 0, "mutes": 0, "pongs": 0, "weekly": 0, "messages": 0, "words": 0,
          "images": 0, "presence": 0, "points": 0, "weeklyUser": {"messages": 0, "images": 0, "words": 0, "files": 0}, "guildId": "829448956417015828", "userId": "490707751832649738", "__v": 0},
         {"_id": {"$oid": "60ba2db86f979a00042d0bb2"}, "name": "VinageCookie", "coins": 0, "xp": 0, "totalXp": 0, "level": 0, "lover": 2, "mutes": 0, "pongs": 0, "weekly": 0, "messages": 0, "words": 0,
          "images": 0, "presence": -1, "points": 0, "weeklyUser": {"messages": 0, "images": 0, "words": 0, "files": 0}, "guildId": "666295714724446209", "userId": "242363909737021441", "__v": 0},
         {"_id": {"$oid": "60ba2db96f979a00042d0bb4"}, "name": "AniZpit", "coins": 0, "xp": 0, "totalXp": 0, "level": 0, "lover": 0, "mutes": 0, "pongs": 0, "weekly": 0, "messages": 0,
          "words": 0, "images": 0, "presence": -1, "points": 0, "weeklyUser": {"messages": 0, "images": 0, "words": 0}, "guildId": "666295714724446209", "userId": "578948515791896599", "__v": 0},
         {"_id": {"$oid": "60ba2db96f979a00042d0bb3"}, "name": "BROTHER TEMPLAR", "coins": 0, "xp": 7437, "totalXp": 215303, "level": 25, "lover": 1, "mutes": 0, "pongs": 4604, "weekly": 0, "messages": 173, "words": 505, "images": 0, "presence": -1,
          "points": 0, "weeklyUser": {"messages": 34, "images": 0, "words": 76, "files": 4}, "guildId": "666295714724446209", "userId": "398639925781594112", "__v": 0, "replies": 3, "files": 23, "commands": 1, "music": 1, "reactions": 2, "emojis": 1},
         {"_id": {"$oid": "60ba2db96f979a00042d0bb5"}, "name": "MEE6", "coins": 0, "xp": 0, "totalXp": 0, "level": 0, "lover": 0, "mutes": 0, "pongs": 0, "weekly": 0, "messages": 0, "words": 0,
          "images": 0, "presence": -1, "points": 0, "weeklyUser": {"messages": 0, "images": 0, "words": 0}, "guildId": "666295714724446209", "userId": "159985870458322944", "__v": 0},
         {"_id": {"$oid": "60ba2db96f979a00042d0bb6"}, "name": "DISBOARD", "coins": 0, "xp": 0, "totalXp": 0, "level": 0, "lover": 0, "mutes": 0, "pongs": 0, "weekly": 0, "messages": 0, "words": 0,
          "images": 0, "presence": -1, "points": 0, "weeklyUser": {"messages": 0, "images": 0, "words": 0, "files": 0}, "guildId": "666295714724446209", "userId": "302050872383242240", "__v": 0},
         {"_id": {"$oid": "60ba2db96f979a00042d0bb7"}, "name": "LogiCraft Engine", "coins": 0, "xp": 0, "totalXp": 0, "level": 0, "lover": 0, "mutes": 0, "pongs": 0, "weekly": 0, "messages": 0, "words": 0,
          "images": 0, "presence": -1, "points": 0, "weeklyUser": {"messages": 0, "images": 0, "words": 0, "files": 0}, "guildId": "666295714724446209", "userId": "824989001999712337", "__v": 0},
         {"_id": {"$oid": "60ba2db96f979a00042d0bb8"}, "name": "zanahorio3000", "coins": 0, "xp": 0, "totalXp": 0, "level": 0, "lover": 1, "mutes": 0, "pongs": 0, "weekly": 0, "messages": 0, "words": 0,
          "images": 0, "presence": -1, "points": 0, "weeklyUser": {"messages": 0, "images": 0, "words": 0, "files": 0}, "guildId": "666295714724446209", "userId": "605497886716854314", "__v": 0},
         {"_id": {"$oid": "60ba2db96f979a00042d0bb9"}, "name": "Pabbels", "coins": 0, "xp": 13, "totalXp": 82, "level": 3, "lover": 3, "mutes": 0, "pongs": 0, "weekly": 0, "messages": 3, "words": 26,
          "images": 0, "presence": -1, "points": 0, "weeklyUser": {"messages": 0, "images": 0, "words": 0, "files": 0}, "guildId": "666295714724446209", "userId": "85512071243894784", "__v": 0, "replies": 1},
         {"_id": {"$oid": "60bbaf2740b6dc00042e9583"}, "name": "AADad", "coins": 0, "xp": 1, "totalXp": 2, "level": 1, "lover": 2, "mutes": 0, "pongs": 0, "weekly": 0, "messages": 1, "words": 1, "files": 0, "emojis": 0, "commands": 0,
          "music": 0, "reactions": 0, "replies": 0, "presence": -1, "points": 0, "weeklyUser": {"messages": 0, "images": 0, "words": 0, "files": 0}, "guildId": "666295714724446209", "userId": "379059848635219976", "__v": 0},
         {"_id": {"$oid": "60bbc4c740b6dc00042e9584"}, "name": "Menotbot", "coins": 0, "xp": 0, "totalXp": 0, "level": 0, "lover": 0, "mutes": 0, "pongs": 0, "weekly": 0, "messages": 0, "words": 0, "files": 0, "emojis": 0, "commands": 0,
          "music": 0, "reactions": 0, "replies": 0, "presence": -1, "points": 0, "weeklyUser": {"messages": 0, "images": 0, "words": 0, "files": 0}, "guildId": "666295714724446209", "userId": "720561456365436929", "__v": 0},
         {"_id": {"$oid": "60bc3b79e3410c00047bf2a0"}, "name": "꧁༒☬ⒸⓄⓃⒺⒿⓄℴ_ℴⒷⓄⓂⒷⒶ☬༒꧂", "coins": 0, "xp": 0, "totalXp": 0, "level": 0, "lover": 0, "mutes": 0, "pongs": 0, "weekly": 0, "messages": 0, "words": 0, "files": 0, "emojis": 0,
          "commands": 0, "music": 0, "reactions": 0, "replies": 0, "presence": -1, "points": 0, "weeklyUser": {"messages": 0, "images": 0, "words": 0, "files": 0}, "guildId": "666295714724446209", "userId": "742802748419998157", "__v": 0},
         {"_id": {"$oid": "60c0528c15578000045b89c2"}, "name": "Mr_Tcraft", "coins": 0, "xp": 0, "totalXp": 0, "level": 0, "lover": 1, "mutes": 0, "pongs": 0, "weekly": 0, "messages": 0, "words": 0, "files": 0, "emojis": 0,
          "commands": 0, "music": 0, "reactions": 0, "replies": 0, "presence": -1, "points": 0, "weeklyUser": {"messages": 0, "files": 0, "words": 0}, "guildId": "666295714724446209", "userId": "364531574886367234", "__v": 0},
         {"_id": {"$oid": "60c0826015578000045b89c3"}, "name": "___", "coins": 0, "xp": 41, "totalXp": 266, "level": 4, "lover": 1, "mutes": 0, "pongs": 0, "weekly": 0, "messages": 5, "words": 159, "files": 1, "emojis": 0,
          "commands": 0, "music": 0, "reactions": 0, "replies": 2, "presence": -1, "points": 0, "weeklyUser": {"messages": 0, "files": 0, "words": 0}, "guildId": "666295714724446209", "userId": "753997379350429866", "__v": 0},
         {"_id": {"$oid": "60c3d8d56ed2100004c3cf0d"}, "name": ".Andrew", "coins": 0, "xp": 0, "totalXp": 0, "level": 0, "lover": 0, "mutes": 0, "pongs": 0, "weekly": 0, "messages": 0, "words": 0, "files": 0, "emojis": 0,
          "commands": 0, "music": 0, "reactions": 0, "replies": 0, "presence": -1, "points": 0, "weeklyUser": {"messages": 0, "files": 0, "words": 0}, "guildId": "666295714724446209", "userId": "788693812788592641", "__v": 0},
         {"_id": {"$oid": "60c4d21647dfd20004f6d915"}, "name": "UN SER DE LUZ", "coins": 0, "xp": 2386, "totalXp": 7482, "level": 9, "lover": 0, "mutes": 0, "pongs": 0, "weekly": 0, "messages": 29, "words": 128, "files": 4, "emojis": 2,
          "commands": 2, "music": 1, "reactions": 0, "replies": 1, "presence": -1, "points": 0, "weeklyUser": {"messages": 0, "files": 0, "words": 0}, "guildId": "666295714724446209", "userId": "224190921170878474", "__v": 0},
         {"_id": {"$oid": "60d4b0242237c90004af4315"}, "name": "Pokétwo", "coins": 0, "xp": 0, "totalXp": 0, "level": 0, "lover": 0, "mutes": 0, "pongs": 0, "weekly": 0, "messages": 0, "words": 0, "files": 0, "emojis": 0,
          "commands": 0, "music": 0, "reactions": 54, "replies": 0, "presence": -1, "points": 54, "weeklyUser": {"messages": 0, "files": 0, "words": 0}, "guildId": "666295714724446209", "userId": "716390085896962058", "__v": 0},
         {"_id": {"$oid": "60d7642e3b2a2c0004dfff42"}, "name": "Mod オスカー Yang", "coins": 0, "xp": 0, "totalXp": 0, "level": 0, "lover": 0, "mutes": 0, "pongs": 0, "weekly": 0, "messages": 0, "words": 0, "files": 0, "emojis": 0,
          "commands": 0, "music": 0, "reactions": 0, "replies": 0, "presence": -1, "points": 0, "weeklyUser": {"messages": 0, "files": 0, "words": 0}, "guildId": "666295714724446209", "userId": "319622631441825803", "__v": 0},
         {"_id": {"$oid": "60d97975f14bfd000415a693"}, "name": "Muffin", "coins": 0, "xp": 0, "totalXp": 0, "level": 0, "lover": 0, "mutes": 0, "pongs": 0, "weekly": 0, "messages": 0, "words": 0, "files": 0, "emojis": 0,
          "commands": 0, "music": 0, "reactions": 0, "replies": 0, "presence": -1, "points": 0, "weeklyUser": {"messages": 0, "files": 0, "words": 0}, "guildId": "666295714724446209", "userId": "163501944353193984", "__v": 0},
         {"_id": {"$oid": "60dd65a394c05e0004be23ec"}, "name": "OutLegolas", "coins": 0, "xp": 0, "totalXp": 0, "level": 0, "lover": 0, "mutes": 0, "pongs": 0, "weekly": 0, "messages": 0, "words": 0, "files": 0, "emojis": 0,
          "commands": 0, "music": 0, "reactions": 0, "replies": 0, "presence": -1, "points": 0, "weeklyUser": {"messages": 0, "files": 0, "words": 0}, "guildId": "666295714724446209", "userId": "694304648386969730", "__v": 0},
         {"_id": {"$oid": "60e48cae799a0a0004fe8c9f"}, "name": "Marcoos", "coins": 0, "xp": 0, "totalXp": 0, "level": 0, "lover": 0, "mutes": 0, "pongs": 0, "weekly": 0, "messages": 0, "words": 0, "files": 0, "emojis": 0,
          "commands": 0, "music": 0, "reactions": 0, "replies": 0, "presence": -1, "points": 0, "weeklyUser": {"messages": 0, "files": 0, "words": 0}, "guildId": "666295714724446209", "userId": "841267937046036503", "__v": 0},
         {"_id": {"$oid": "60ecb64d5f12240004ac916e"}, "name": "polarbub", "coins": 0, "xp": 202, "totalXp": 2190, "level": 7, "lover": 0, "mutes": 0, "pongs": 0, "weekly": 0, "messages": 15, "words": 64, "files": 0, "emojis": 2,
          "commands": 0, "music": 0, "reactions": 0, "replies": 1, "presence": -1, "points": 0, "weeklyUser": {"messages": 0, "files": 0, "words": 0}, "guildId": "666295714724446209", "userId": "667155361970782244", "__v": 0},
         {"_id": {"$oid": "60ecb8095f12240004ac916f"}, "name": "Melyam", "coins": 0, "xp": 495, "totalXp": 1041, "level": 5, "lover": 0, "mutes": 0, "pongs": 0, "weekly": 0, "messages": 10, "words": 30, "files": 0, "emojis": 1,
          "commands": 1, "music": 0, "reactions": 0, "replies": 3, "presence": -1, "points": 0, "weeklyUser": {"messages": 0, "files": 0, "words": 0}, "guildId": "666295714724446209", "userId": "505823941080776734", "__v": 0},
         {"_id": {"$oid": "60ecb8a95f12240004ac9170"}, "name": "îяυ", "coins": 0, "xp": 19374, "totalXp": 150949, "level": 22, "lover": 0, "mutes": 0, "pongs": 0, "weekly": 0, "messages": 144, "words": 452, "files": 0, "emojis": 0,
          "commands": 2, "music": 0, "reactions": 0, "replies": 0, "presence": -1, "points": 2, "weeklyUser": {"messages": 1, "files": 0, "words": 2}, "guildId": "666295714724446209", "userId": "192030588922888192", "__v": 0},
         {"_id": {"$oid": "60f3724784e7d80004722219"}, "name": "El Abuelo", "coins": 0, "xp": 1, "totalXp": 2, "level": 1, "lover": 0, "mutes": 0, "pongs": 0, "weekly": 0, "messages": 1, "words": 2, "files": 0, "emojis": 0,
          "commands": 0, "music": 0, "reactions": 0, "replies": 0, "presence": -1, "points": 0, "weeklyUser": {"messages": 0, "files": 0, "words": 0}, "guildId": "666295714724446209", "userId": "222655684263673866", "__v": 0},
         {"_id": {"$oid": "60fc6ab38096c50004d79cf7"}, "name": "trytryw", "coins": 0, "xp": 0, "totalXp": 0, "level": 0, "lover": 0, "mutes": 0, "pongs": 0, "weekly": 0, "messages": 0, "words": 0, "files": 0, "emojis": 0,
          "commands": 0, "music": 0, "reactions": 0, "replies": 0, "presence": -1, "points": 0, "weeklyUser": {"messages": 0, "files": 0, "words": 0}, "guildId": "666295714724446209", "userId": "574304558839365636", "__v": 0},
         {"_id": {"$oid": "61065c5ce9958f00041b0726"}, "name": "!Duartyh", "coins": 0, "xp": 0, "totalXp": 0, "level": 0, "lover": 0, "mutes": 0, "pongs": 0, "weekly": 0, "messages": 0, "words": 0, "files": 0, "emojis": 0,
          "commands": 0, "music": 0, "reactions": 0, "replies": 0, "presence": -1, "points": 0, "weeklyUser": {"messages": 0, "files": 0, "words": 0}, "guildId": "666295714724446209", "userId": "713485161395781713", "__v": 0},
         {"_id": {"$oid": "6107ffefb101480004f9f39c"}, "name": "FORTUNE", "coins": 0, "xp": 176, "totalXp": 401, "level": 4, "lover": 0, "mutes": 0, "pongs": 0, "weekly": 0, "messages": 6, "words": 6, "files": 0, "emojis": 0,
          "commands": 2, "music": 0, "reactions": 0, "replies": 0, "presence": -1, "points": 0, "weeklyUser": {"messages": 0, "files": 0, "words": 0}, "guildId": "666295714724446209", "userId": "387614089347858433", "__v": 0},
         {"_id": {"$oid": "610b06f7eb866b00040f629c"}, "name": "OK", "coins": 0, "xp": 15, "totalXp": 27, "level": 2, "lover": 0, "mutes": 0, "pongs": 0, "weekly": 0, "messages": 2, "words": 3, "files": 0, "emojis": 0,
          "commands": 0, "music": 0, "reactions": 0, "replies": 0, "presence": -1, "points": 0, "weeklyUser": {"messages": 0, "files": 0, "words": 0}, "guildId": "666295714724446209", "userId": "852324539631403049", "__v": 0},
         {"_id": {"$oid": "610da74e0cb08600047c765b"}, "name": "Balaito", "coins": 0, "xp": 0, "totalXp": 0, "level": 0, "lover": 0, "mutes": 0, "pongs": 0, "weekly": 0, "messages": 0, "words": 0, "files": 0, "emojis": 0,
          "commands": 0, "music": 0, "reactions": 0, "replies": 0, "presence": -1, "points": 0, "weeklyUser": {"messages": 0, "files": 0, "words": 0}, "guildId": "666295714724446209", "userId": "739276649962405888", "__v": 0},
         {"_id": {"$oid": "611320f7a94991000467ab82"}, "name": "DutchWario", "coins": 0, "xp": 0, "totalXp": 0, "level": 0, "lover": 0, "mutes": 0, "pongs": 0, "weekly": 0, "messages": 0, "words": 0, "files": 0, "emojis": 0,
          "commands": 0, "music": 0, "reactions": 0, "replies": 0, "presence": -1, "points": 0, "weeklyUser": {"messages": 0, "files": 0, "words": 0}, "guildId": "666295714724446209", "userId": "688895759164375067", "__v": 0},
         {"_id": {"$oid": "6113c20ca94991000467ab83"}, "name": "Unax -_-", "coins": 0, "xp": 41, "totalXp": 266, "level": 4, "lover": 0, "mutes": 0, "pongs": 0, "weekly": 0, "messages": 5, "words": 5, "files": 0, "emojis": 0,
          "commands": 1, "music": 0, "reactions": 0, "replies": 2, "presence": -1, "points": 0, "weeklyUser": {"messages": 0, "files": 0, "words": 0}, "guildId": "666295714724446209", "userId": "678349571000238128", "__v": 0},
         {"_id": {"$oid": "6113e6e6a94991000467ab84"}, "name": "jaja", "coins": 0, "xp": 13, "totalXp": 82, "level": 3, "lover": 0, "mutes": 0, "pongs": 0, "weekly": 0, "messages": 3, "words": 8, "files": 0, "emojis": 0,
          "commands": 0, "music": 0, "reactions": 0, "replies": 0, "presence": -1, "points": 0, "weeklyUser": {"messages": 0, "files": 0, "words": 0}, "guildId": "666295714724446209", "userId": "743504860934307860", "__v": 0},
         {"_id": {"$oid": "6115547383565500045df5d0"}, "name": "senditsammy", "coins": 0, "xp": 0, "totalXp": 0, "level": 0, "lover": 0, "mutes": 0, "pongs": 0, "weekly": 0, "messages": 0, "words": 0, "files": 0, "emojis": 0,
          "commands": 0, "music": 0, "reactions": 0, "replies": 0, "presence": -1, "points": 0, "weeklyUser": {"messages": 0, "files": 0, "words": 0}, "guildId": "666295714724446209", "userId": "678076433624596480", "__v": 0},
         {"_id": {"$oid": "6117a4b23dcef70004bdf370"}, "name": "agirre2", "coins": 0, "xp": 15, "totalXp": 27, "level": 2, "lover": 0, "mutes": 0, "pongs": 0, "weekly": 0, "messages": 2, "words": 2, "files": 0, "emojis": 0,
          "commands": 1, "music": 0, "reactions": 0, "replies": 0, "presence": -1, "points": 0, "weeklyUser": {"messages": 0, "files": 0, "words": 0}, "guildId": "666295714724446209", "userId": "680525040856727740", "__v": 0},
         {"_id": {"$oid": "6118353971e866000462817a"}, "name": "Nogassov", "coins": 0, "xp": 1230, "totalXp": 4515, "level": 8, "lover": 0, "mutes": 0, "pongs": 0, "weekly": 0, "messages": 22, "words": 88, "files": 0, "emojis": 0,
          "commands": 0, "music": 0, "reactions": 0, "replies": 0, "presence": -1, "points": 0, "weeklyUser": {"messages": 0, "files": 0, "words": 0}, "guildId": "666295714724446209", "userId": "635041188008689666", "__v": 0},
         {"_id": {"$oid": "611d5c70d49373000453b230"}, "name": "Jeditech", "coins": 0, "xp": 0, "totalXp": 0, "level": 0, "lover": 0, "mutes": 0, "pongs": 0, "weekly": 0, "messages": 0, "words": 0, "files": 0, "emojis": 0,
          "commands": 0, "music": 0, "reactions": 0, "replies": 0, "presence": -1, "points": 0, "weeklyUser": {"messages": 0, "files": 0, "words": 0}, "guildId": "666295714724446209", "userId": "847863798903865364", "__v": 0},
         {"_id": {"$oid": "6124df931c5dbf0004a325dc"}, "name": "Squiddert", "coins": 0, "xp": 105, "totalXp": 174, "level": 3, "lover": 0, "mutes": 0, "pongs": 0, "weekly": 0, "messages": 4, "words": 15, "files": 0, "emojis": 0,
          "commands": 0, "music": 0, "reactions": 0, "replies": 0, "presence": -1, "points": 0, "weeklyUser": {"messages": 0, "files": 0, "words": 0}, "guildId": "666295714724446209", "userId": "778684338887327804", "__v": 0},
         {"_id": {"$oid": "6133a8de2d063a0004861b6d"}, "name": "Grey_1212", "coins": 0, "xp": 0, "totalXp": 0, "level": 0, "lover": 0, "mutes": 0, "pongs": 0, "weekly": 0, "messages": 0, "words": 0, "files": 0, "emojis": 0,
          "commands": 0, "music": 0, "reactions": 0, "replies": 0, "presence": -1, "points": 0, "weeklyUser": {"messages": 0, "files": 0, "words": 0}, "guildId": "666295714724446209", "userId": "628749021149790208", "__v": 0},
         {"_id": {"$oid": "6145ffacbd06240004c1a238"}, "name": "Nameless Knight", "coins": 0, "xp": 400, "totalXp": 7927, "level": 10, "lover": 0, "mutes": 0, "pongs": 0, "weekly": 0, "messages": 30, "words": 88, "files": 0, "emojis": 0,
          "commands": 18, "music": 12, "reactions": 0, "replies": 1, "presence": -1, "points": 0, "weeklyUser": {"messages": 8, "files": 0, "words": 19}, "guildId": "666295714724446209", "userId": "451410039664541706", "__v": 0},
         {"_id": {"$oid": "614a916740f0860004718f33"}, "name": "CaptainDoggo", "coins": 0, "xp": 0, "totalXp": 0, "level": 0, "lover": 0, "mutes": 0, "pongs": 0, "weekly": 0, "messages": 0, "words": 0, "files": 0, "emojis": 0,
          "commands": 0, "music": 0, "reactions": 0, "replies": 0, "presence": -1, "points": 0, "weeklyUser": {"messages": 0, "files": 0, "words": 0}, "guildId": "666295714724446209", "userId": "620708924093628436", "__v": 0},
         {"_id": {"$oid": "6156feb7eb10d2000468eb64"}, "name": "rexaril", "coins": 0, "xp": 0, "totalXp": 0, "level": 0, "lover": 0, "mutes": 0, "pongs": 0, "weekly": 0, "messages": 0, "words": 0, "files": 0, "emojis": 0,
          "commands": 0, "music": 0, "reactions": 0, "replies": 0, "presence": -1, "points": 0, "weeklyUser": {"messages": 0, "files": 0, "words": 0}, "guildId": "666295714724446209", "userId": "496496409135284234", "__v": 0},
         {"_id": {"$,oid": "6157a10050ae30000416982e"}, "name": "Logicrux", "coins": 0, "xp": 0, "totalXp": 0, "level": 0, "lover": 0, "mutes": 0, "pongs": 0, "weekly": 0, "messages": 0, "words": 0, "files": 0, "emojis": 0,
          "commands": 0, "music": 0, "reactions": 0, "replies": 0, "presence": -1, "points": 0, "weeklyUser": {"messages": 0, "files": 0, "words": 0}, "guildId": "829448956417015828", "userId": "893590163912007690", "__v": 0},
         ]


def clamp(num, min_num, max_num):
    return min(max(num, min_num), max_num)


def extract_emojis(s):
    emojis = 0
    for c in s:
        if c in emoji.UNICODE_EMOJI['en']:
            emojis += 1
    return emojis


def getXpPerLvl(level):
    return math.floor(math.pow(level, 2.5))


def getXpPerMsg(level, content):
    return math.floor(math.pow(level, 1.2)) * 100 * (math.floor(clamp(len(content.split(" ")), 0, 30) / 30) + 1)


def getXP(message, level, xp, totalXp):
    xpMsg = getXpPerMsg(level, message)
    xpLvl = getXpPerLvl(level)
    xp += xpMsg
    totalXp += xpMsg
    if(xp >= xpLvl):
        xp -= xpLvl
        level += 1
    return [xp, totalXp, level]


def parse_csv(file):
    with open(file, "r") as f:
        reader = csv.reader(x.replace('\0', '') for x in f)
        user = ""
        for line in reader:
            if line[0] not in data:
                data[line[0]] = {
                    "name": "undefined",
                    "messages": 0,
                    "words": 0,
                    "attachments": 0,
                    "unicode": 0,
                    "custom": 0,
                    "used": [],
                    "level": 0,
                    "xp": 0,
                    "totalXp": 0,
                    "reactions": 0,
                    "mutes": 0,
                    "userId": ""
                }
            for _user in mongo:
                if _user["userId"] == data[line[0]]:
                    data[line[0]]["reactions"] += _user["reactions"]
                    data[line[0]]["mutes"] += _user["mutes"]
                    break
            data[line[0]]["messages"] += 1
            data[line[0]]["userId"] = line[0]
            data[line[0]]["words"] += len(line[3].split(" "))
            data[line[0]]["name"] = line[1]
            if line[4] != "":
                data[line[0]]["attachments"] += 1
            for e in re.findall(customEmojis, line[3]):
                found = False
                for u in data[line[0]]["used"]:
                    if(u["name"] == e):
                        u["amount"] += 1
                        found = True
                        break
                if not found:
                    data[line[0]]["used"].append({
                        "name": e,
                        "amount": 1
                    })
            data[line[0]]["custom"] += len(re.findall(customEmojis, line[3]))
            data[line[0]]["unicode"] += extract_emojis(line[3])
            [xp, totalXp, level] = getXP(
                line[3], data[line[0]]["level"], data[line[0]]["xp"], data[line[0]]["totalXp"])
            data[line[0]]["xp"] = xp
            data[line[0]]["totalXp"] = totalXp
            data[line[0]]["level"] = level


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
    json_data = json.dumps(data, indent=4)
    with open(os.path.join(path, "..", "server-data.json"), "w") as o:
        o.write(json_data)


if __name__ == "__main__":
    main()
