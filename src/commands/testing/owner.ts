import moment from "moment"
import { ICommand } from "wokcommands"
import { setGlobalStats, setUsername } from "../../utils/mongo"
import { cleanSpecialCharacters } from "../../utils/string"

const stats: any = {
    "458738156695584770": {
        "name": "The_Siber#3448",
        "messages": 43812,
        "words": 214435,
        "attachments": 2963,
        "unicode": 922,
        "custom": 2243,
        "used": [
            {
                "name": "ECreeper",
                "amount": 9
            },
            {
                "name": "CRINGE",
                "amount": 33
            },
            {
                "name": "NothingHere",
                "amount": 7
            },
            {
                "name": "Sibergun",
                "amount": 33
            },
            {
                "name": "GOTOHORNYJAIL",
                "amount": 50
            },
            {
                "name": "lmfao",
                "amount": 76
            },
            {
                "name": "siberGun",
                "amount": 18
            },
            {
                "name": "omaeWaSiber",
                "amount": 14
            },
            {
                "name": "fix",
                "amount": 298
            },
            {
                "name": "kekw",
                "amount": 845
            },
            {
                "name": "shy",
                "amount": 19
            },
            {
                "name": "kekwPurple",
                "amount": 41
            },
            {
                "name": "dorimeCheems",
                "amount": 28
            },
            {
                "name": "death",
                "amount": 78
            },
            {
                "name": "stevegun",
                "amount": 54
            },
            {
                "name": "emoji_59",
                "amount": 1
            },
            {
                "name": "hornier",
                "amount": 9
            },
            {
                "name": "horny",
                "amount": 3
            },
            {
                "name": "monkaW",
                "amount": 75
            },
            {
                "name": "noU",
                "amount": 19
            },
            {
                "name": "peepoShy",
                "amount": 4
            },
            {
                "name": "Madge",
                "amount": 31
            },
            {
                "name": "crimge",
                "amount": 4
            },
            {
                "name": "Sadge",
                "amount": 45
            },
            {
                "name": "niceDiamond",
                "amount": 19
            },
            {
                "name": "OmaeWaSiber",
                "amount": 34
            },
            {
                "name": "COMMIE",
                "amount": 1
            },
            {
                "name": "Preseasonslogo",
                "amount": 6
            },
            {
                "name": "cringe",
                "amount": 6
            },
            {
                "name": "redditArgentium",
                "amount": 1
            },
            {
                "name": "niceGold",
                "amount": 14
            },
            {
                "name": "heart",
                "amount": 17
            },
            {
                "name": "POGGERS",
                "amount": 11
            },
            {
                "name": "catHeart",
                "amount": 3
            },
            {
                "name": "2iq",
                "amount": 2
            },
            {
                "name": "Prayge",
                "amount": 1
            },
            {
                "name": "feelsBadMan",
                "amount": 6
            },
            {
                "name": "feelsSpecialMan",
                "amount": 2
            },
            {
                "name": "monkaHmm",
                "amount": 8
            },
            {
                "name": "pepeLaugh",
                "amount": 5
            },
            {
                "name": "peepoRiot",
                "amount": 2
            },
            {
                "name": "peepoG",
                "amount": 1
            },
            {
                "name": "KekwHyper",
                "amount": 6
            },
            {
                "name": "MindBlown",
                "amount": 8
            },
            {
                "name": "niceIron",
                "amount": 15
            },
            {
                "name": "omaeWa",
                "amount": 60
            },
            {
                "name": "ua",
                "amount": 7
            },
            {
                "name": "pog",
                "amount": 10
            },
            {
                "name": "NoU",
                "amount": 7
            },
            {
                "name": "NiceDiamond",
                "amount": 4
            },
            {
                "name": "NiceNetherite",
                "amount": 10
            },
            {
                "name": "DAB",
                "amount": 14
            },
            {
                "name": "snap",
                "amount": 1
            },
            {
                "name": "concern",
                "amount": 2
            },
            {
                "name": "hugz",
                "amount": 4
            },
            {
                "name": "iLogi",
                "amount": 2
            },
            {
                "name": "ThinkingCheems",
                "amount": 5
            },
            {
                "name": "Nicewood",
                "amount": 3
            },
            {
                "name": "Kekw",
                "amount": 1
            },
            {
                "name": "21",
                "amount": 1
            },
            {
                "name": "CheskerTransparent",
                "amount": 16
            },
            {
                "name": "sus",
                "amount": 2
            },
            {
                "name": "commie",
                "amount": 5
            },
            {
                "name": "ban",
                "amount": 1
            },
            {
                "name": "Itwasagathaallalong",
                "amount": 2
            },
            {
                "name": "Chesker",
                "amount": 7
            },
            {
                "name": "Season1Logo",
                "amount": 3
            },
            {
                "name": "Season1LogoTransparent",
                "amount": 4
            },
            {
                "name": "BIGBRAIN",
                "amount": 5
            },
            {
                "name": "BrainlightSteve",
                "amount": 13
            },
            {
                "name": "UNOReverse",
                "amount": 3
            },
            {
                "name": "kekwemote",
                "amount": 2
            },
            {
                "name": "OmaeWa",
                "amount": 3
            },
            {
                "name": "CARGED",
                "amount": 2
            },
            {
                "name": "woodnice",
                "amount": 2
            },
            {
                "name": "ironnice",
                "amount": 1
            },
            {
                "name": "goldnice",
                "amount": 1
            },
            {
                "name": "dianice",
                "amount": 1
            },
            {
                "name": "Netheritenice",
                "amount": 2
            },
            {
                "name": "NiceGold",
                "amount": 1
            },
            {
                "name": "fua",
                "amount": 1
            },
            {
                "name": "fua2",
                "amount": 1
            },
            {
                "name": "PunchDogo2",
                "amount": 3
            },
            {
                "name": "thinkingCheems",
                "amount": 1
            },
            {
                "name": "RedditAllPowerfulAward",
                "amount": 9
            },
            {
                "name": "Cheskowo",
                "amount": 2
            },
            {
                "name": "redditUpvote",
                "amount": 1
            },
            {
                "name": "FIX",
                "amount": 9
            },
            {
                "name": "Death",
                "amount": 2
            },
            {
                "name": "DEATH",
                "amount": 2
            },
            {
                "name": "bigBrain",
                "amount": 4
            },
            {
                "name": "emoji_33",
                "amount": 1
            },
            {
                "name": "redditAllPowerfulAward",
                "amount": 3
            },
            {
                "name": "carged",
                "amount": 1
            },
            {
                "name": "emoji_46",
                "amount": 2
            },
            {
                "name": "preseasonsLogo",
                "amount": 1
            },
            {
                "name": "sadge",
                "amount": 1
            },
            {
                "name": "redditPlatinum",
                "amount": 1
            },
            {
                "name": "redditSilver",
                "amount": 1
            },
            {
                "name": "LeTroll",
                "amount": 12
            },
            {
                "name": "troll",
                "amount": 2
            },
            {
                "name": "emoji_62",
                "amount": 2
            },
            {
                "name": "madge",
                "amount": 2
            },
            {
                "name": "bruh",
                "amount": 1
            },
            {
                "name": "no",
                "amount": 1
            },
            {
                "name": "mindBlown",
                "amount": 1
            },
            {
                "name": "thonk",
                "amount": 2
            },
            {
                "name": "trolldge",
                "amount": 1
            },
            {
                "name": "notLikeThis",
                "amount": 1
            },
            {
                "name": "HyperKekw",
                "amount": 2
            },
            {
                "name": "glubglub",
                "amount": 1
            }
        ],
        "level": 1111,
        "xp": 32784637,
        "totalXp": 13071859500,
        "reactions": 0,
        "mutes": 0,
        "userId": "458738156695584770"
    },
    "664432205598031882": {
        "name": "Dark Spirit#3670",
        "messages": 8301,
        "words": 39375,
        "attachments": 470,
        "unicode": 67,
        "custom": 75,
        "used": [
            {
                "name": "OmaeWa",
                "amount": 1
            },
            {
                "name": "fix",
                "amount": 14
            },
            {
                "name": "heart",
                "amount": 3
            },
            {
                "name": "stevegun",
                "amount": 8
            },
            {
                "name": "elrichGG",
                "amount": 1
            },
            {
                "name": "fua",
                "amount": 1
            },
            {
                "name": "commie",
                "amount": 6
            },
            {
                "name": "kappa",
                "amount": 27
            },
            {
                "name": "pog",
                "amount": 3
            },
            {
                "name": "shy",
                "amount": 1
            },
            {
                "name": "32",
                "amount": 1
            },
            {
                "name": "PunchDogo2",
                "amount": 1
            },
            {
                "name": "Chesker",
                "amount": 1
            },
            {
                "name": "omaeWaSiber",
                "amount": 1
            },
            {
                "name": "niceGold",
                "amount": 1
            },
            {
                "name": "CheskerTransparent",
                "amount": 1
            },
            {
                "name": "death",
                "amount": 1
            },
            {
                "name": "feelsSpecialMan",
                "amount": 2
            },
            {
                "name": "kekw",
                "amount": 1
            }
        ],
        "level": 538,
        "xp": 4565899,
        "totalXp": 1033188200,
        "reactions": 0,
        "mutes": 0,
        "userId": "664432205598031882"
    },
    "355636164897669122": {
        "name": "SISPLAU#7555",
        "messages": 29445,
        "words": 115185,
        "attachments": 767,
        "unicode": 128,
        "custom": 911,
        "used": [
            {
                "name": "kekwemote",
                "amount": 54
            },
            {
                "name": "GOTOHORNYJAIL",
                "amount": 16
            },
            {
                "name": "kekw",
                "amount": 238
            },
            {
                "name": "LUL",
                "amount": 84
            },
            {
                "name": "monkaHmm",
                "amount": 16
            },
            {
                "name": "ua",
                "amount": 25
            },
            {
                "name": "POGSLIDE",
                "amount": 14
            },
            {
                "name": "KEKW",
                "amount": 33
            },
            {
                "name": "NOPERS",
                "amount": 1
            },
            {
                "name": "Sadge",
                "amount": 16
            },
            {
                "name": "Madge",
                "amount": 26
            },
            {
                "name": "pepeD",
                "amount": 12
            },
            {
                "name": "Applecatrun",
                "amount": 43
            },
            {
                "name": "commie",
                "amount": 8
            },
            {
                "name": "niceWood",
                "amount": 1
            },
            {
                "name": "niceNetherite",
                "amount": 1
            },
            {
                "name": "niceIron",
                "amount": 1
            },
            {
                "name": "niceGold",
                "amount": 2
            },
            {
                "name": "niceDiamond",
                "amount": 3
            },
            {
                "name": "notLikeThis",
                "amount": 22
            },
            {
                "name": "sus",
                "amount": 1
            },
            {
                "name": "fix",
                "amount": 17
            },
            {
                "name": "ibaiDeLocos",
                "amount": 3
            },
            {
                "name": "2iq",
                "amount": 5
            },
            {
                "name": "monkaW",
                "amount": 20
            },
            {
                "name": "kekwPurple",
                "amount": 2
            },
            {
                "name": "pepeLaugh",
                "amount": 14
            },
            {
                "name": "monkePls",
                "amount": 18
            },
            {
                "name": "dorimeCheems",
                "amount": 1
            },
            {
                "name": "monkaX",
                "amount": 1
            },
            {
                "name": "POGGERS",
                "amount": 6
            },
            {
                "name": "ibaiLetsgo",
                "amount": 1
            },
            {
                "name": "catJAM",
                "amount": 10
            },
            {
                "name": "pogSlide",
                "amount": 23
            },
            {
                "name": "peepoClap",
                "amount": 1
            },
            {
                "name": "weirdChamp",
                "amount": 4
            },
            {
                "name": "noggers",
                "amount": 2
            },
            {
                "name": "PepeLaugh",
                "amount": 4
            },
            {
                "name": "kappa",
                "amount": 4
            },
            {
                "name": "omaeWa",
                "amount": 8
            },
            {
                "name": "41",
                "amount": 1
            },
            {
                "name": "peepoShy",
                "amount": 7
            },
            {
                "name": "peepoRiot",
                "amount": 42
            },
            {
                "name": "appleCatRun",
                "amount": 6
            },
            {
                "name": "PeepoNoob",
                "amount": 1
            },
            {
                "name": "GNOMEGALUL",
                "amount": 1
            },
            {
                "name": "PepeHands",
                "amount": 2
            },
            {
                "name": "peepoLeave",
                "amount": 1
            },
            {
                "name": "PepeOk",
                "amount": 1
            },
            {
                "name": "Prayge",
                "amount": 2
            },
            {
                "name": "Kappa",
                "amount": 3
            },
            {
                "name": "elmSTEER",
                "amount": 3
            },
            {
                "name": "noU",
                "amount": 3
            },
            {
                "name": "PEPEDS",
                "amount": 8
            },
            {
                "name": "peepoGordo",
                "amount": 1
            },
            {
                "name": "feelsSpecialMan",
                "amount": 5
            },
            {
                "name": "lmfao",
                "amount": 6
            },
            {
                "name": "ThinkingCheems",
                "amount": 1
            },
            {
                "name": "PogChamp",
                "amount": 1
            },
            {
                "name": "RedReverseCard",
                "amount": 1
            },
            {
                "name": "youtube",
                "amount": 1
            },
            {
                "name": "BrainlightSteve",
                "amount": 1
            },
            {
                "name": "ibaiWillynice",
                "amount": 2
            },
            {
                "name": "NiceDiamond",
                "amount": 1
            },
            {
                "name": "fua",
                "amount": 2
            },
            {
                "name": "fua2",
                "amount": 3
            },
            {
                "name": "NothingHere",
                "amount": 1
            },
            {
                "name": "peepoG",
                "amount": 12
            },
            {
                "name": "pog",
                "amount": 1
            },
            {
                "name": "PogU",
                "amount": 5
            },
            {
                "name": "PogO",
                "amount": 1
            },
            {
                "name": "trollface",
                "amount": 1
            },
            {
                "name": "troll",
                "amount": 1
            },
            {
                "name": "peepoAim",
                "amount": 1
            },
            {
                "name": "monkaSTEER",
                "amount": 5
            },
            {
                "name": "PepegaCredit",
                "amount": 1
            },
            {
                "name": "popCat",
                "amount": 1
            },
            {
                "name": "POOGERS",
                "amount": 1
            },
            {
                "name": "Pog",
                "amount": 2
            },
            {
                "name": "peepoRun",
                "amount": 3
            },
            {
                "name": "DAB",
                "amount": 1
            },
            {
                "name": "FeelsSadMan",
                "amount": 1
            },
            {
                "name": "partyFrog",
                "amount": 2
            },
            {
                "name": "preseasonsLogo",
                "amount": 1
            },
            {
                "name": "CheskerTransparent",
                "amount": 1
            },
            {
                "name": "crimge",
                "amount": 2
            }
        ],
        "level": 934,
        "xp": 1306186,
        "totalXp": 7102508300,
        "reactions": 0,
        "mutes": 0,
        "userId": "355636164897669122"
    },
    "323378898794446850": {
        "name": "marivik#5321",
        "messages": 15841,
        "words": 69210,
        "attachments": 861,
        "unicode": 2733,
        "custom": 1062,
        "used": [
            {
                "name": "CRINGE",
                "amount": 13
            },
            {
                "name": "OmaeWaSiber",
                "amount": 9
            },
            {
                "name": "flushed",
                "amount": 1
            },
            {
                "name": "NothingHere",
                "amount": 6
            },
            {
                "name": "upvote",
                "amount": 12
            },
            {
                "name": "lmfao",
                "amount": 8
            },
            {
                "name": "kekwPurple",
                "amount": 27
            },
            {
                "name": "kekw",
                "amount": 50
            },
            {
                "name": "shy",
                "amount": 25
            },
            {
                "name": "platinumAward",
                "amount": 3
            },
            {
                "name": "GOTOHORNYJAIL",
                "amount": 12
            },
            {
                "name": "dorimeCheems",
                "amount": 2
            },
            {
                "name": "monkaHmm",
                "amount": 4
            },
            {
                "name": "feelsSpecialMan",
                "amount": 38
            },
            {
                "name": "monkaW",
                "amount": 6
            },
            {
                "name": "pepeLaugh",
                "amount": 15
            },
            {
                "name": "fix",
                "amount": 6
            },
            {
                "name": "POGGERS",
                "amount": 11
            },
            {
                "name": "noggers",
                "amount": 4
            },
            {
                "name": "peepoAim",
                "amount": 21
            },
            {
                "name": "9d5badlydrawnthinkingemoji115628",
                "amount": 1
            },
            {
                "name": "23",
                "amount": 1
            },
            {
                "name": "thonkang",
                "amount": 2
            },
            {
                "name": "redditDownvote",
                "amount": 3
            },
            {
                "name": "redditUpvote",
                "amount": 8
            },
            {
                "name": "2cat",
                "amount": 1
            },
            {
                "name": "780073319583186945",
                "amount": 2
            },
            {
                "name": "emoji",
                "amount": 1
            },
            {
                "name": "season1LogoTransparent",
                "amount": 3
            },
            {
                "name": "logiCoin",
                "amount": 1
            },
            {
                "name": "partyFrog",
                "amount": 16
            },
            {
                "name": "three",
                "amount": 3
            },
            {
                "name": "pogSlide",
                "amount": 90
            },
            {
                "name": "peepoRun",
                "amount": 88
            },
            {
                "name": "hero",
                "amount": 2
            },
            {
                "name": "CheskerTransparent",
                "amount": 47
            },
            {
                "name": "780074414711898122",
                "amount": 4
            },
            {
                "name": "peepotle",
                "amount": 2
            },
            {
                "name": "slimeballRainbow",
                "amount": 23
            },
            {
                "name": "lens",
                "amount": 2
            },
            {
                "name": "leftArrow",
                "amount": 1
            },
            {
                "name": "button5",
                "amount": 4
            },
            {
                "name": "exit",
                "amount": 6
            },
            {
                "name": "feelsBadMan",
                "amount": 9
            },
            {
                "name": "popcornPeepo5",
                "amount": 5
            },
            {
                "name": "petThePeepo",
                "amount": 8
            },
            {
                "name": "high",
                "amount": 1
            },
            {
                "name": "PepeJediDance",
                "amount": 69
            },
            {
                "name": "button3",
                "amount": 3
            },
            {
                "name": "logiCoinOld",
                "amount": 4
            },
            {
                "name": "kappa",
                "amount": 14
            },
            {
                "name": "back",
                "amount": 1
            },
            {
                "name": "online",
                "amount": 1
            },
            {
                "name": "heart",
                "amount": 8
            },
            {
                "name": "redditGold",
                "amount": 8
            },
            {
                "name": "appleCatRun",
                "amount": 10
            },
            {
                "name": "ua",
                "amount": 21
            },
            {
                "name": "troll",
                "amount": 1
            },
            {
                "name": "speedycatvibes",
                "amount": 5
            },
            {
                "name": "NiceGold",
                "amount": 4
            },
            {
                "name": "kekwemote",
                "amount": 29
            },
            {
                "name": "pog",
                "amount": 4
            },
            {
                "name": "redditAllPowerfulAward",
                "amount": 1
            },
            {
                "name": "Raticate",
                "amount": 1
            },
            {
                "name": "horny",
                "amount": 3
            },
            {
                "name": "pepePopcorn",
                "amount": 1
            },
            {
                "name": "Pepe_interesting",
                "amount": 1
            },
            {
                "name": "alextrollCab",
                "amount": 3
            },
            {
                "name": "alextrollBraz1",
                "amount": 2
            },
            {
                "name": "alextrollBraz2",
                "amount": 2
            },
            {
                "name": "alextrollPie1",
                "amount": 2
            },
            {
                "name": "alextrollPie2",
                "amount": 2
            },
            {
                "name": "monkePls",
                "amount": 54
            },
            {
                "name": "what",
                "amount": 2
            },
            {
                "name": "catHeart",
                "amount": 1
            },
            {
                "name": "robodab",
                "amount": 1
            },
            {
                "name": "pepehonk",
                "amount": 1
            },
            {
                "name": "noU",
                "amount": 1
            },
            {
                "name": "RobloxDab",
                "amount": 1
            },
            {
                "name": "robloxOOF",
                "amount": 47
            },
            {
                "name": "YESYESYESYESYES",
                "amount": 1
            },
            {
                "name": "musicDiscPigstep",
                "amount": 1
            },
            {
                "name": "barrendome",
                "amount": 1
            },
            {
                "name": "none",
                "amount": 1
            },
            {
                "name": "muted",
                "amount": 1
            },
            {
                "name": "notLikeThis",
                "amount": 2
            },
            {
                "name": "pepeWhat",
                "amount": 1
            },
            {
                "name": "pepegaNeedIt",
                "amount": 13
            },
            {
                "name": "Chesker",
                "amount": 9
            },
            {
                "name": "silveraward",
                "amount": 1
            },
            {
                "name": "goldAward",
                "amount": 2
            },
            {
                "name": "argentium",
                "amount": 2
            },
            {
                "name": "ternionallpowerfulAward",
                "amount": 1
            },
            {
                "name": "Season1Logo",
                "amount": 2
            },
            {
                "name": "downvote",
                "amount": 2
            },
            {
                "name": "preseasonsLogo",
                "amount": 2
            },
            {
                "name": "OmaeWa",
                "amount": 1
            },
            {
                "name": "fua",
                "amount": 2
            },
            {
                "name": "PepoDance",
                "amount": 1
            },
            {
                "name": "alextroll10",
                "amount": 1
            },
            {
                "name": "ECreeper",
                "amount": 1
            },
            {
                "name": "MindBlown",
                "amount": 7
            },
            {
                "name": "Nicewood",
                "amount": 1
            },
            {
                "name": "stevegun",
                "amount": 3
            },
            {
                "name": "PogChamp",
                "amount": 1
            },
            {
                "name": "ternionAllPowerfulAward",
                "amount": 2
            },
            {
                "name": "niceWood",
                "amount": 7
            },
            {
                "name": "NiceNetherite",
                "amount": 7
            },
            {
                "name": "niceIron",
                "amount": 7
            },
            {
                "name": "niceGold",
                "amount": 7
            },
            {
                "name": "niceDiamond",
                "amount": 8
            },
            {
                "name": "silverAward",
                "amount": 1
            },
            {
                "name": "Cheskowo",
                "amount": 2
            },
            {
                "name": "FIX",
                "amount": 2
            },
            {
                "name": "mindBlown",
                "amount": 2
            },
            {
                "name": "commie",
                "amount": 1
            },
            {
                "name": "hugz",
                "amount": 2
            },
            {
                "name": "siberSex",
                "amount": 1
            },
            {
                "name": "LUL",
                "amount": 1
            },
            {
                "name": "weirdEyes",
                "amount": 1
            },
            {
                "name": "peeposcreech",
                "amount": 1
            },
            {
                "name": "lol",
                "amount": 11
            },
            {
                "name": "Pepe_Clown_dance",
                "amount": 9
            },
            {
                "name": "peepoSip",
                "amount": 1
            },
            {
                "name": "PopcornPepe",
                "amount": 1
            },
            {
                "name": "Pepe_Cry",
                "amount": 1
            },
            {
                "name": "PepeHUH",
                "amount": 1
            },
            {
                "name": "pepenotes",
                "amount": 1
            },
            {
                "name": "pepecoof",
                "amount": 1
            },
            {
                "name": "sadapplecat",
                "amount": 2
            },
            {
                "name": "peepoPuke",
                "amount": 1
            },
            {
                "name": "omaeWa",
                "amount": 1
            },
            {
                "name": "redditPlatinum",
                "amount": 5
            }
        ],
        "level": 714,
        "xp": 5868476,
        "totalXp": 2777978800,
        "reactions": 0,
        "mutes": 0,
        "userId": "323378898794446850"
    },
    "480391890835996672": {
        "name": "AxiosX#8210",
        "messages": 91,
        "words": 415,
        "attachments": 1,
        "unicode": 2,
        "custom": 1,
        "used": [
            {
                "name": "SAD",
                "amount": 1
            }
        ],
        "level": 69,
        "xp": 35529,
        "totalXp": 795500,
        "reactions": 0,
        "mutes": 0,
        "userId": "480391890835996672"
    },
    "400578808094130186": {
        "name": "GaliGoat#1176",
        "messages": 9084,
        "words": 44012,
        "attachments": 296,
        "unicode": 431,
        "custom": 302,
        "used": [
            {
                "name": "kekw",
                "amount": 36
            },
            {
                "name": "Madge",
                "amount": 15
            },
            {
                "name": "monkaW",
                "amount": 33
            },
            {
                "name": "Sadge",
                "amount": 22
            },
            {
                "name": "horny",
                "amount": 20
            },
            {
                "name": "POGGERS",
                "amount": 5
            },
            {
                "name": "hugz",
                "amount": 3
            },
            {
                "name": "peepoShy",
                "amount": 6
            },
            {
                "name": "pepeLaugh",
                "amount": 8
            },
            {
                "name": "dorimeCheems",
                "amount": 1
            },
            {
                "name": "GOTOHORNYJAIL",
                "amount": 3
            },
            {
                "name": "pog",
                "amount": 14
            },
            {
                "name": "stevegun",
                "amount": 15
            },
            {
                "name": "feelsBadMan",
                "amount": 8
            },
            {
                "name": "notLikeThis",
                "amount": 7
            },
            {
                "name": "PogU",
                "amount": 1
            },
            {
                "name": "peepoG",
                "amount": 3
            },
            {
                "name": "Prayge",
                "amount": 1
            },
            {
                "name": "heart",
                "amount": 3
            },
            {
                "name": "fix",
                "amount": 15
            },
            {
                "name": "Kekw",
                "amount": 1
            },
            {
                "name": "death",
                "amount": 2
            },
            {
                "name": "CRINGE",
                "amount": 16
            },
            {
                "name": "monkaHmm",
                "amount": 3
            },
            {
                "name": "track",
                "amount": 1
            },
            {
                "name": "NoU",
                "amount": 1
            },
            {
                "name": "shy",
                "amount": 11
            },
            {
                "name": "DAB",
                "amount": 1
            },
            {
                "name": "omaeWa",
                "amount": 5
            },
            {
                "name": "catHeart",
                "amount": 1
            },
            {
                "name": "feelsSpecialMan",
                "amount": 1
            },
            {
                "name": "commie",
                "amount": 1
            },
            {
                "name": "redditUpvote",
                "amount": 21
            },
            {
                "name": "trollface",
                "amount": 2
            },
            {
                "name": "troll",
                "amount": 3
            },
            {
                "name": "ua",
                "amount": 3
            },
            {
                "name": "peepoRiot",
                "amount": 1
            },
            {
                "name": "preseasonsLogo",
                "amount": 1
            },
            {
                "name": "season1Logo",
                "amount": 1
            },
            {
                "name": "mindBlown",
                "amount": 1
            },
            {
                "name": "carged",
                "amount": 1
            },
            {
                "name": "bigBrain",
                "amount": 1
            },
            {
                "name": "kappa",
                "amount": 1
            },
            {
                "name": "kekwPurple",
                "amount": 1
            },
            {
                "name": "LeTroll",
                "amount": 1
            },
            {
                "name": "Hollow",
                "amount": 1
            }
        ],
        "level": 561,
        "xp": 1200073,
        "totalXp": 1192294000,
        "reactions": 0,
        "mutes": 0,
        "userId": "400578808094130186"
    },
    "671756255890767892": {
        "name": "miguel6761#6641",
        "messages": 16,
        "words": 22,
        "attachments": 5,
        "unicode": 1,
        "custom": 0,
        "used": [],
        "level": 16,
        "xp": 13823,
        "totalXp": 18000,
        "reactions": 0,
        "mutes": 0,
        "userId": "671756255890767892"
    },
    "415490401626095616": {
        "name": "Apep\u00faJuice#6500",
        "messages": 773,
        "words": 8271,
        "attachments": 50,
        "unicode": 24,
        "custom": 4,
        "used": [
            {
                "name": "peepoRiot",
                "amount": 1
            },
            {
                "name": "ThinkingCheems",
                "amount": 3
            }
        ],
        "level": 194,
        "xp": 142890,
        "totalXp": 28937400,
        "reactions": 0,
        "mutes": 0,
        "userId": "415490401626095616"
    },
    "622141448980135937": {
        "name": "Esqueleto full hierro encantado#8642",
        "messages": 356,
        "words": 1423,
        "attachments": 33,
        "unicode": 1,
        "custom": 16,
        "used": [
            {
                "name": "lmfao",
                "amount": 1
            },
            {
                "name": "elrichNACHO",
                "amount": 2
            },
            {
                "name": "elrichRICH",
                "amount": 4
            },
            {
                "name": "elrichSAD",
                "amount": 2
            },
            {
                "name": "XD",
                "amount": 2
            },
            {
                "name": "elrichLOVE",
                "amount": 1
            },
            {
                "name": "shadouMoai",
                "amount": 1
            },
            {
                "name": "PogChamp",
                "amount": 1
            },
            {
                "name": "in_progress",
                "amount": 1
            },
            {
                "name": "kekwemote",
                "amount": 1
            }
        ],
        "level": 134,
        "xp": 158666,
        "totalXp": 8012900,
        "reactions": 0,
        "mutes": 0,
        "userId": "622141448980135937"
    },
    "159985870458322944": {
        "name": "MEE6#4876",
        "messages": 978,
        "words": 4156,
        "attachments": 103,
        "unicode": 332,
        "custom": 18,
        "used": [
            {
                "name": "XMARK6",
                "amount": 18
            }
        ],
        "level": 211,
        "xp": 67851,
        "totalXp": 38732100,
        "reactions": 0,
        "mutes": 0,
        "userId": "159985870458322944"
    },
    "220683667134087189": {
        "name": "Dablestation#3702",
        "messages": 116,
        "words": 899,
        "attachments": 4,
        "unicode": 5,
        "custom": 1,
        "used": [
            {
                "name": "stevegun",
                "amount": 1
            }
        ],
        "level": 79,
        "xp": 26062,
        "totalXp": 1250500,
        "reactions": 0,
        "mutes": 0,
        "userId": "220683667134087189"
    },
    "214955224933203985": {
        "name": "Killermanjer#9979",
        "messages": 238,
        "words": 1496,
        "attachments": 8,
        "unicode": 15,
        "custom": 5,
        "used": [
            {
                "name": "LeoDecaprio",
                "amount": 1
            },
            {
                "name": "GoldenKek",
                "amount": 1
            },
            {
                "name": "PEP_peepoShrug",
                "amount": 1
            },
            {
                "name": "KappaPleb",
                "amount": 1
            },
            {
                "name": "PepoThink",
                "amount": 1
            }
        ],
        "level": 112,
        "xp": 61283,
        "totalXp": 4243200,
        "reactions": 0,
        "mutes": 0,
        "userId": "214955224933203985"
    },
    "235076665632489472": {
        "name": "Demiphius#0099",
        "messages": 459,
        "words": 1854,
        "attachments": 6,
        "unicode": 21,
        "custom": 62,
        "used": [
            {
                "name": "elmo",
                "amount": 1
            },
            {
                "name": "GOTOHORNYJAIL",
                "amount": 11
            },
            {
                "name": "fua",
                "amount": 35
            },
            {
                "name": "ThinkingCheems",
                "amount": 2
            },
            {
                "name": "NoU",
                "amount": 1
            },
            {
                "name": "fua2",
                "amount": 9
            },
            {
                "name": "fua3",
                "amount": 1
            },
            {
                "name": "niceGold",
                "amount": 2
            }
        ],
        "level": 151,
        "xp": 60468,
        "totalXp": 12008600,
        "reactions": 0,
        "mutes": 0,
        "userId": "235076665632489472"
    },
    "824989001999712337": {
        "name": "LogiCraft Engine#2050",
        "messages": 6271,
        "words": 36606,
        "attachments": 0,
        "unicode": 588,
        "custom": 3099,
        "used": [
            {
                "name": "regional_indicator_f",
                "amount": 12
            },
            {
                "name": "chesker",
                "amount": 2
            },
            {
                "name": "season1Logo",
                "amount": 7
            },
            {
                "name": "season1LogoTransparent",
                "amount": 3
            },
            {
                "name": "CheskerTransparent",
                "amount": 49
            },
            {
                "name": "bigBrain",
                "amount": 7
            },
            {
                "name": "carged",
                "amount": 7
            },
            {
                "name": "cringe",
                "amount": 2
            },
            {
                "name": "noU",
                "amount": 7
            },
            {
                "name": "mindBlown",
                "amount": 7
            },
            {
                "name": "kekw",
                "amount": 235
            },
            {
                "name": "lmfao",
                "amount": 7
            },
            {
                "name": "omaeWa",
                "amount": 7
            },
            {
                "name": "omaeWaSiber",
                "amount": 2
            },
            {
                "name": "GOTOHORNYJAIL",
                "amount": 101
            },
            {
                "name": "pog",
                "amount": 7
            },
            {
                "name": "siberGun",
                "amount": 2
            },
            {
                "name": "stevegun",
                "amount": 7
            },
            {
                "name": "thinkingCheems",
                "amount": 2
            },
            {
                "name": "niceIron",
                "amount": 7
            },
            {
                "name": "niceNetherite",
                "amount": 2
            },
            {
                "name": "niceDiamond",
                "amount": 7
            },
            {
                "name": "niceGold",
                "amount": 7
            },
            {
                "name": "niceWood",
                "amount": 2
            },
            {
                "name": "commie",
                "amount": 7
            },
            {
                "name": "preseasonsLogo",
                "amount": 7
            },
            {
                "name": "fua",
                "amount": 2
            },
            {
                "name": "fua2",
                "amount": 7
            },
            {
                "name": "punchDogo2",
                "amount": 2
            },
            {
                "name": "heart",
                "amount": 25
            },
            {
                "name": "redditSilver",
                "amount": 7
            },
            {
                "name": "redditGold",
                "amount": 90
            },
            {
                "name": "redditPlatinum",
                "amount": 7
            },
            {
                "name": "redditArgentium",
                "amount": 7
            },
            {
                "name": "redditAllPowerfulAward",
                "amount": 7
            },
            {
                "name": "redditUpvote",
                "amount": 7
            },
            {
                "name": "redditDownvote",
                "amount": 7
            },
            {
                "name": "kekwPurple",
                "amount": 7
            },
            {
                "name": "shy",
                "amount": 8
            },
            {
                "name": "Cheskowo",
                "amount": 2
            },
            {
                "name": "fix",
                "amount": 128
            },
            {
                "name": "death",
                "amount": 7
            },
            {
                "name": "kappa",
                "amount": 210
            },
            {
                "name": "DAB",
                "amount": 46
            },
            {
                "name": "catHeart",
                "amount": 37
            },
            {
                "name": "notLikeThis",
                "amount": 3
            },
            {
                "name": "feelsBadMan",
                "amount": 3
            },
            {
                "name": "pepeLaugh",
                "amount": 3
            },
            {
                "name": "POGGERS",
                "amount": 50
            },
            {
                "name": "monkaW",
                "amount": 3
            },
            {
                "name": "monkaHmm",
                "amount": 3
            },
            {
                "name": "feelsSpecialMan",
                "amount": 79
            },
            {
                "name": "logiCoin",
                "amount": 5
            },
            {
                "name": "partyFrog",
                "amount": 172
            },
            {
                "name": "three",
                "amount": 9
            },
            {
                "name": "musicDiscStrad",
                "amount": 56
            },
            {
                "name": "musicDiscStal",
                "amount": 53
            },
            {
                "name": "musicDiscMall",
                "amount": 57
            },
            {
                "name": "button3",
                "amount": 42
            },
            {
                "name": "logiCoinOld",
                "amount": 94
            },
            {
                "name": "back",
                "amount": 27
            },
            {
                "name": "online",
                "amount": 17
            },
            {
                "name": "exit",
                "amount": 15
            },
            {
                "name": "upvote",
                "amount": 61
            },
            {
                "name": "little",
                "amount": 3
            },
            {
                "name": "moderate",
                "amount": 7
            },
            {
                "name": "high",
                "amount": 3
            },
            {
                "name": "appleCatRun",
                "amount": 174
            },
            {
                "name": "musicDisc13",
                "amount": 58
            },
            {
                "name": "musicDiscCat",
                "amount": 58
            },
            {
                "name": "musicDiscBlocks",
                "amount": 40
            },
            {
                "name": "troll",
                "amount": 13
            },
            {
                "name": "speedycatvibes",
                "amount": 26
            },
            {
                "name": "petThePeepo",
                "amount": 56
            },
            {
                "name": "musicDiscWait",
                "amount": 52
            },
            {
                "name": "musicDiscMellohi",
                "amount": 43
            },
            {
                "name": "ua",
                "amount": 275
            },
            {
                "name": "musicDiscChirp",
                "amount": 51
            },
            {
                "name": "musicDiscWard",
                "amount": 60
            },
            {
                "name": "musicDiscPigstep",
                "amount": 78
            },
            {
                "name": "iLogi",
                "amount": 34
            },
            {
                "name": "pogSlide",
                "amount": 34
            },
            {
                "name": "Sadge",
                "amount": 41
            },
            {
                "name": "monkePls",
                "amount": 37
            },
            {
                "name": "slimeballRainbow",
                "amount": 27
            },
            {
                "name": "Applecatrun",
                "amount": 46
            },
            {
                "name": "hugz",
                "amount": 2
            },
            {
                "name": "LUL",
                "amount": 1
            },
            {
                "name": "dorimeCheems",
                "amount": 1
            },
            {
                "name": "Itwasagathaallalong",
                "amount": 1
            },
            {
                "name": "634537486093254679",
                "amount": 1
            }
        ],
        "level": 478,
        "xp": 3877773,
        "totalXp": 683610100,
        "reactions": 0,
        "mutes": 0,
        "userId": "824989001999712337"
    },
    "788156551470514228": {
        "name": "Trent#8130",
        "messages": 1,
        "words": 1,
        "attachments": 0,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 1,
        "xp": 0,
        "totalXp": 0,
        "reactions": 0,
        "mutes": 0,
        "userId": "788156551470514228"
    },
    "826187083654758471": {
        "name": "SibOwO#5222",
        "messages": 410,
        "words": 1634,
        "attachments": 4,
        "unicode": 22,
        "custom": 10,
        "used": [
            {
                "name": "heart",
                "amount": 4
            },
            {
                "name": "kekw",
                "amount": 1
            },
            {
                "name": "kekwPurple",
                "amount": 1
            },
            {
                "name": "shy",
                "amount": 1
            },
            {
                "name": "omaeWa",
                "amount": 1
            },
            {
                "name": "catHeart",
                "amount": 1
            },
            {
                "name": "DAB",
                "amount": 1
            }
        ],
        "level": 143,
        "xp": 85902,
        "totalXp": 9954900,
        "reactions": 0,
        "mutes": 0,
        "userId": "826187083654758471"
    },
    "176294550896115713": {
        "name": "Spectraul#0001",
        "messages": 20,
        "words": 63,
        "attachments": 1,
        "unicode": 0,
        "custom": 1,
        "used": [
            {
                "name": "PepeSad",
                "amount": 1
            }
        ],
        "level": 20,
        "xp": 20861,
        "totalXp": 30200,
        "reactions": 0,
        "mutes": 0,
        "userId": "176294550896115713"
    },
    "376971428509122580": {
        "name": "Itssunnyk#3373",
        "messages": 20,
        "words": 54,
        "attachments": 2,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 20,
        "xp": 20861,
        "totalXp": 30200,
        "reactions": 0,
        "mutes": 0,
        "userId": "376971428509122580"
    },
    "788145895665041438": {
        "name": "Pandoritaa#6976",
        "messages": 405,
        "words": 1412,
        "attachments": 11,
        "unicode": 114,
        "custom": 11,
        "used": [
            {
                "name": "fix",
                "amount": 1
            },
            {
                "name": "kekw",
                "amount": 6
            },
            {
                "name": "notLikeThis",
                "amount": 1
            },
            {
                "name": "lmfao",
                "amount": 1
            },
            {
                "name": "stevegun",
                "amount": 1
            },
            {
                "name": "niceDiamond",
                "amount": 1
            }
        ],
        "level": 142,
        "xp": 159783,
        "totalXp": 9788500,
        "reactions": 0,
        "mutes": 0,
        "userId": "788145895665041438"
    },
    "662485264316235781": {
        "name": "FIREBALL_Z42#1274",
        "messages": 1,
        "words": 1,
        "attachments": 0,
        "unicode": 0,
        "custom": 1,
        "used": [
            {
                "name": "dorimeCheems",
                "amount": 1
            }
        ],
        "level": 1,
        "xp": 0,
        "totalXp": 0,
        "reactions": 0,
        "mutes": 0,
        "userId": "662485264316235781"
    },
    "813086780197699595": {
        "name": "Notes#2898",
        "messages": 5,
        "words": 14,
        "attachments": 1,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 5,
        "xp": 1047,
        "totalXp": 1100,
        "reactions": 0,
        "mutes": 0,
        "userId": "813086780197699595"
    },
    "681548144219258919": {
        "name": "jashual#7938",
        "messages": 9,
        "words": 45,
        "attachments": 4,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 9,
        "xp": 4194,
        "totalXp": 4700,
        "reactions": 0,
        "mutes": 0,
        "userId": "681548144219258919"
    },
    "746090211087351900": {
        "name": "Alice#1458",
        "messages": 2218,
        "words": 12519,
        "attachments": 204,
        "unicode": 120,
        "custom": 274,
        "used": [
            {
                "name": "peepoRiot",
                "amount": 2
            },
            {
                "name": "thinkass",
                "amount": 1
            },
            {
                "name": "silove",
                "amount": 8
            },
            {
                "name": "thonk",
                "amount": 2
            },
            {
                "name": "wonk",
                "amount": 2
            },
            {
                "name": "06",
                "amount": 1
            },
            {
                "name": "kekw",
                "amount": 27
            },
            {
                "name": "yeefuckinghaw",
                "amount": 2
            },
            {
                "name": "ear",
                "amount": 1
            },
            {
                "name": "fix",
                "amount": 5
            },
            {
                "name": "siblue",
                "amount": 2
            },
            {
                "name": "bapcat",
                "amount": 2
            },
            {
                "name": "stevegun",
                "amount": 3
            },
            {
                "name": "omaeWa",
                "amount": 23
            },
            {
                "name": "catHeart",
                "amount": 7
            },
            {
                "name": "pepeLaugh",
                "amount": 1
            },
            {
                "name": "ohno",
                "amount": 6
            },
            {
                "name": "emoji_name",
                "amount": 1
            },
            {
                "name": "kappa",
                "amount": 2
            },
            {
                "name": "feelsBadMan",
                "amount": 4
            },
            {
                "name": "Chuckle",
                "amount": 1
            },
            {
                "name": "pain3",
                "amount": 6
            },
            {
                "name": "pain2",
                "amount": 4
            },
            {
                "name": "gotobed",
                "amount": 1
            },
            {
                "name": "laxsleep",
                "amount": 1
            },
            {
                "name": "atagoyes",
                "amount": 1
            },
            {
                "name": "bullymintoslep",
                "amount": 1
            },
            {
                "name": "fromtimeimportsleep",
                "amount": 1
            },
            {
                "name": "eviltomato",
                "amount": 1
            },
            {
                "name": "wat",
                "amount": 1
            },
            {
                "name": "peepoG",
                "amount": 1
            },
            {
                "name": "concern",
                "amount": 2
            },
            {
                "name": "Sadge",
                "amount": 5
            },
            {
                "name": "bruhcket",
                "amount": 1
            },
            {
                "name": "pog",
                "amount": 2
            },
            {
                "name": "lmfao",
                "amount": 9
            },
            {
                "name": "44",
                "amount": 1
            },
            {
                "name": "POGGERS",
                "amount": 1
            },
            {
                "name": "iLogi",
                "amount": 2
            },
            {
                "name": "cat_fucking_heart",
                "amount": 1
            },
            {
                "name": "xDoubt",
                "amount": 2
            },
            {
                "name": "partyFrog",
                "amount": 2
            },
            {
                "name": "pathetic",
                "amount": 1
            },
            {
                "name": "lewd",
                "amount": 1
            },
            {
                "name": "gooselove",
                "amount": 1
            },
            {
                "name": "treehugger",
                "amount": 1
            },
            {
                "name": "disbelief",
                "amount": 1
            },
            {
                "name": "aanglegrinder",
                "amount": 2
            },
            {
                "name": "monkaHmm",
                "amount": 4
            },
            {
                "name": "LSHearto",
                "amount": 1
            },
            {
                "name": "yeefuckinhaw",
                "amount": 1
            },
            {
                "name": "monkaW",
                "amount": 1
            },
            {
                "name": "admin_abooz_plz_give_admin_too",
                "amount": 1
            },
            {
                "name": "madbot",
                "amount": 1
            },
            {
                "name": "iwonderehy",
                "amount": 1
            },
            {
                "name": "notLikeThis",
                "amount": 3
            },
            {
                "name": "horny",
                "amount": 4
            },
            {
                "name": "feelsSpecialMan",
                "amount": 1
            },
            {
                "name": "LUL",
                "amount": 7
            },
            {
                "name": "kekwPurple",
                "amount": 1
            },
            {
                "name": "whistle",
                "amount": 1
            },
            {
                "name": "GOTOHORNYJAIL",
                "amount": 3
            },
            {
                "name": "okbuddy",
                "amount": 1
            },
            {
                "name": "bonk",
                "amount": 2
            },
            {
                "name": "ihaveconcerns",
                "amount": 1
            },
            {
                "name": "pain",
                "amount": 2
            },
            {
                "name": "evillaugh",
                "amount": 1
            },
            {
                "name": "this",
                "amount": 1
            },
            {
                "name": "peepoShy",
                "amount": 1
            },
            {
                "name": "commie",
                "amount": 1
            },
            {
                "name": "hugz",
                "amount": 1
            },
            {
                "name": "pain1",
                "amount": 2
            },
            {
                "name": "glory3",
                "amount": 2
            },
            {
                "name": "glory2",
                "amount": 2
            },
            {
                "name": "glory1",
                "amount": 2
            },
            {
                "name": "monkePls",
                "amount": 5
            },
            {
                "name": "Snippingrainbowsheep",
                "amount": 7
            },
            {
                "name": "partyparrot",
                "amount": 7
            },
            {
                "name": "ultrafastparrot",
                "amount": 4
            },
            {
                "name": "ohyes",
                "amount": 1
            },
            {
                "name": "vibin2",
                "amount": 8
            },
            {
                "name": "kittergasm",
                "amount": 1
            },
            {
                "name": "mewpat",
                "amount": 4
            },
            {
                "name": "Naughty",
                "amount": 3
            },
            {
                "name": "nyaR",
                "amount": 1
            },
            {
                "name": "Silove",
                "amount": 2
            },
            {
                "name": "nyaL",
                "amount": 1
            },
            {
                "name": "nameButcher",
                "amount": 1
            },
            {
                "name": "honk3",
                "amount": 1
            },
            {
                "name": "honk1",
                "amount": 1
            },
            {
                "name": "honk2",
                "amount": 1
            },
            {
                "name": "gooseright",
                "amount": 1
            },
            {
                "name": "honk4",
                "amount": 1
            },
            {
                "name": "goosehonkright2",
                "amount": 1
            },
            {
                "name": "gooselogo",
                "amount": 1
            },
            {
                "name": "goosehonkleft2",
                "amount": 1
            },
            {
                "name": "partymeow",
                "amount": 1
            },
            {
                "name": "partyblobnom",
                "amount": 1
            },
            {
                "name": "neko",
                "amount": 1
            },
            {
                "name": "kirbparty",
                "amount": 1
            },
            {
                "name": "goosedisco",
                "amount": 1
            },
            {
                "name": "partyleek",
                "amount": 1
            },
            {
                "name": "Fastparrot",
                "amount": 1
            },
            {
                "name": "ravecat",
                "amount": 1
            },
            {
                "name": "pleaseNoDemote",
                "amount": 1
            },
            {
                "name": "axolotl",
                "amount": 1
            },
            {
                "name": "Madge",
                "amount": 1
            },
            {
                "name": "what",
                "amount": 1
            },
            {
                "name": "Pensive",
                "amount": 1
            },
            {
                "name": "kkomrade",
                "amount": 1
            },
            {
                "name": "f",
                "amount": 1
            },
            {
                "name": "corrinwink",
                "amount": 1
            }
        ],
        "level": 304,
        "xp": 414361,
        "totalXp": 139565000,
        "reactions": 0,
        "mutes": 0,
        "userId": "746090211087351900"
    },
    "437296242817761292": {
        "name": "lenrik#5193",
        "messages": 164,
        "words": 1252,
        "attachments": 12,
        "unicode": 3,
        "custom": 7,
        "used": [
            {
                "name": "kekwPurple",
                "amount": 2
            },
            {
                "name": "feelsBadMan",
                "amount": 1
            },
            {
                "name": "Madge",
                "amount": 2
            },
            {
                "name": "fix",
                "amount": 1
            },
            {
                "name": "kekw",
                "amount": 1
            }
        ],
        "level": 95,
        "xp": 8218,
        "totalXp": 2352000,
        "reactions": 0,
        "mutes": 0,
        "userId": "437296242817761292"
    },
    "728543517542055957": {
        "name": "Landriu#3507",
        "messages": 4265,
        "words": 14939,
        "attachments": 160,
        "unicode": 206,
        "custom": 42,
        "used": [
            {
                "name": "POGGERS",
                "amount": 2
            },
            {
                "name": "pogslide",
                "amount": 1
            },
            {
                "name": "niceGold",
                "amount": 1
            },
            {
                "name": "sunglasses",
                "amount": 1
            },
            {
                "name": "pog",
                "amount": 2
            },
            {
                "name": "commie",
                "amount": 1
            },
            {
                "name": "noU",
                "amount": 2
            },
            {
                "name": "heart",
                "amount": 1
            },
            {
                "name": "kekw",
                "amount": 3
            },
            {
                "name": "Sadge",
                "amount": 4
            },
            {
                "name": "monkaW",
                "amount": 2
            },
            {
                "name": "Madge",
                "amount": 1
            },
            {
                "name": "YESYESYESYES",
                "amount": 1
            },
            {
                "name": "stevegun",
                "amount": 2
            },
            {
                "name": "omaeWa",
                "amount": 1
            },
            {
                "name": "feelsBadMan",
                "amount": 2
            },
            {
                "name": "peepoRiot",
                "amount": 3
            },
            {
                "name": "notLikeThis",
                "amount": 3
            },
            {
                "name": "redditUpvote",
                "amount": 2
            },
            {
                "name": "fua",
                "amount": 1
            },
            {
                "name": "yesyesyesyes",
                "amount": 1
            },
            {
                "name": "crimge",
                "amount": 1
            },
            {
                "name": "LeTroll",
                "amount": 2
            },
            {
                "name": "fix",
                "amount": 1
            },
            {
                "name": "niceDiamond",
                "amount": 1
            }
        ],
        "level": 403,
        "xp": 1675956,
        "totalXp": 375451900,
        "reactions": 0,
        "mutes": 0,
        "userId": "728543517542055957"
    },
    "720561456365436929": {
        "name": "Menotbot#7216",
        "messages": 401,
        "words": 5725,
        "attachments": 43,
        "unicode": 3,
        "custom": 763,
        "used": [
            {
                "name": "x",
                "amount": 50
            },
            {
                "name": "eyes",
                "amount": 4
            },
            {
                "name": "white_check_mark",
                "amount": 5
            },
            {
                "name": "one",
                "amount": 92
            },
            {
                "name": "bomb",
                "amount": 154
            },
            {
                "name": "two",
                "amount": 69
            },
            {
                "name": "zero",
                "amount": 233
            },
            {
                "name": "three",
                "amount": 46
            },
            {
                "name": "four",
                "amount": 21
            },
            {
                "name": "ping_pong",
                "amount": 9
            },
            {
                "name": "stuck_out_tongue",
                "amount": 4
            },
            {
                "name": "five",
                "amount": 11
            },
            {
                "name": "six",
                "amount": 8
            },
            {
                "name": "kekw",
                "amount": 3
            },
            {
                "name": "00",
                "amount": 4
            },
            {
                "name": "congratulations",
                "amount": 2
            },
            {
                "name": "seven",
                "amount": 1
            },
            {
                "name": "cry",
                "amount": 36
            },
            {
                "name": "54",
                "amount": 1
            },
            {
                "name": "heart",
                "amount": 10
            }
        ],
        "level": 143,
        "xp": 33502,
        "totalXp": 9902500,
        "reactions": 0,
        "mutes": 0,
        "userId": "720561456365436929"
    },
    "398639925781594112": {
        "name": "BROTHER TEMPLAR#6420",
        "messages": 410,
        "words": 1189,
        "attachments": 49,
        "unicode": 3,
        "custom": 1,
        "used": [
            {
                "name": "monkaHmm",
                "amount": 1
            }
        ],
        "level": 143,
        "xp": 110602,
        "totalXp": 9979600,
        "reactions": 0,
        "mutes": 0,
        "userId": "398639925781594112"
    },
    "192030588922888192": {
        "name": "\u00ee\u044f\u03c5#8009",
        "messages": 351,
        "words": 1114,
        "attachments": 9,
        "unicode": 0,
        "custom": 1,
        "used": [
            {
                "name": "feelsSpecialMan",
                "amount": 1
            }
        ],
        "level": 133,
        "xp": 114965,
        "totalXp": 7765200,
        "reactions": 0,
        "mutes": 0,
        "userId": "192030588922888192"
    },
    "716482285431685190": {
        "name": "milk#8357",
        "messages": 5,
        "words": 13,
        "attachments": 0,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 5,
        "xp": 1047,
        "totalXp": 1100,
        "reactions": 0,
        "mutes": 0,
        "userId": "716482285431685190"
    },
    "778684338887327804": {
        "name": "Squiddert#8613",
        "messages": 5,
        "words": 22,
        "attachments": 0,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 5,
        "xp": 1047,
        "totalXp": 1100,
        "reactions": 0,
        "mutes": 0,
        "userId": "778684338887327804"
    },
    "224190921170878474": {
        "name": "UN SER DE LUZ#5474",
        "messages": 33,
        "words": 135,
        "attachments": 8,
        "unicode": 2,
        "custom": 0,
        "used": [],
        "level": 33,
        "xp": 38621,
        "totalXp": 94500,
        "reactions": 0,
        "mutes": 0,
        "userId": "224190921170878474"
    },
    "716390085896962058": {
        "name": "Pok\u00e9two#8236",
        "messages": 4013,
        "words": 20087,
        "attachments": 5,
        "unicode": 25,
        "custom": 0,
        "used": [],
        "level": 391,
        "xp": 2974594,
        "totalXp": 339179700,
        "reactions": 0,
        "mutes": 0,
        "userId": "716390085896962058"
    },
    "893590163912007690": {
        "name": "Logicrux#1987",
        "messages": 358,
        "words": 2093,
        "attachments": 0,
        "unicode": 41,
        "custom": 112,
        "used": [
            {
                "name": "none",
                "amount": 2
            },
            {
                "name": "musicDiscBlocks",
                "amount": 1
            },
            {
                "name": "commie",
                "amount": 48
            },
            {
                "name": "pog",
                "amount": 22
            },
            {
                "name": "regional_indicator_f",
                "amount": 2
            },
            {
                "name": "musicDiscMall",
                "amount": 1
            },
            {
                "name": "dorimeCheems",
                "amount": 36
            }
        ],
        "level": 135,
        "xp": 165711,
        "totalXp": 8227800,
        "reactions": 0,
        "mutes": 0,
        "userId": "893590163912007690"
    },
    "791103973124997120": {
        "name": "Rash#8991",
        "messages": 8,
        "words": 99,
        "attachments": 1,
        "unicode": 1,
        "custom": 0,
        "used": [],
        "level": 8,
        "xp": 3175,
        "totalXp": 3500,
        "reactions": 0,
        "mutes": 0,
        "userId": "791103973124997120"
    },
    "710990518372532275": {
        "name": "la m roja#8166",
        "messages": 31,
        "words": 262,
        "attachments": 2,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 31,
        "xp": 37363,
        "totalXp": 82100,
        "reactions": 0,
        "mutes": 0,
        "userId": "710990518372532275"
    },
    "327157607724875776": {
        "name": "Mercu#3851",
        "messages": 149,
        "words": 879,
        "attachments": 9,
        "unicode": 8,
        "custom": 1,
        "used": [
            {
                "name": "pepeLaugh",
                "amount": 1
            }
        ],
        "level": 89,
        "xp": 41440,
        "totalXp": 1904400,
        "reactions": 0,
        "mutes": 0,
        "userId": "327157607724875776"
    },
    "235088799074484224": {
        "name": "Rythm#3722",
        "messages": 564,
        "words": 3396,
        "attachments": 0,
        "unicode": 514,
        "custom": 219,
        "used": [
            {
                "name": "x2",
                "amount": 14
            },
            {
                "name": "youtube",
                "amount": 148
            },
            {
                "name": "page_facing_up",
                "amount": 21
            },
            {
                "name": "thumbsup",
                "amount": 31
            },
            {
                "name": "spotify",
                "amount": 5
            }
        ],
        "level": 165,
        "xp": 171698,
        "totalXp": 16483600,
        "reactions": 0,
        "mutes": 0,
        "userId": "235088799074484224"
    },
    "828636402656870440": {
        "name": "Logicrux#0000",
        "messages": 25,
        "words": 159,
        "attachments": 0,
        "unicode": 3,
        "custom": 1,
        "used": [
            {
                "name": "discohook",
                "amount": 1
            }
        ],
        "level": 25,
        "xp": 29626,
        "totalXp": 50400,
        "reactions": 0,
        "mutes": 0,
        "userId": "828636402656870440"
    },
    "302050872383242240": {
        "name": "DISBOARD#2760",
        "messages": 52,
        "words": 52,
        "attachments": 0,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 51,
        "xp": 473,
        "totalXp": 261900,
        "reactions": 0,
        "mutes": 0,
        "userId": "302050872383242240"
    },
    "310086714481704960": {
        "name": "Kaktus#4899",
        "messages": 1733,
        "words": 11884,
        "attachments": 102,
        "unicode": 138,
        "custom": 1,
        "used": [
            {
                "name": "morphclown",
                "amount": 1
            }
        ],
        "level": 274,
        "xp": 292931,
        "totalXp": 96960300,
        "reactions": 0,
        "mutes": 0,
        "userId": "310086714481704960"
    },
    "669627189624307712": {
        "name": "Community Updates#0000",
        "messages": 1,
        "words": 80,
        "attachments": 0,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 1,
        "xp": 0,
        "totalXp": 0,
        "reactions": 0,
        "mutes": 0,
        "userId": "669627189624307712"
    },
    "356065937318871041": {
        "name": "Aki#9694",
        "messages": 1,
        "words": 1,
        "attachments": 0,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 1,
        "xp": 0,
        "totalXp": 0,
        "reactions": 0,
        "mutes": 0,
        "userId": "356065937318871041"
    },
    "783485775869902898": {
        "name": "Actualizaciones de comunidades#0000",
        "messages": 2,
        "words": 584,
        "attachments": 2,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 2,
        "xp": 199,
        "totalXp": 200,
        "reactions": 0,
        "mutes": 0,
        "userId": "783485775869902898"
    },
    "909089306889551882": {
        "name": "MC Devs Twitter#0000",
        "messages": 2,
        "words": 2,
        "attachments": 0,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 2,
        "xp": 99,
        "totalXp": 100,
        "reactions": 0,
        "mutes": 0,
        "userId": "909089306889551882"
    },
    "284772672443777025": {
        "name": "santiac#5923",
        "messages": 775,
        "words": 3297,
        "attachments": 27,
        "unicode": 38,
        "custom": 99,
        "used": [
            {
                "name": "Madge",
                "amount": 6
            },
            {
                "name": "FeelsRainMan",
                "amount": 3
            },
            {
                "name": "Applecatrun",
                "amount": 7
            },
            {
                "name": "PepoG",
                "amount": 1
            },
            {
                "name": "appleCatRun",
                "amount": 2
            },
            {
                "name": "peepoRun",
                "amount": 2
            },
            {
                "name": "Nerdge",
                "amount": 1
            },
            {
                "name": "PepeHands",
                "amount": 1
            },
            {
                "name": "MLADY",
                "amount": 1
            },
            {
                "name": "YIKERS",
                "amount": 1
            },
            {
                "name": "PepegaGun",
                "amount": 1
            },
            {
                "name": "monkaGun",
                "amount": 1
            },
            {
                "name": "elmillorCara1",
                "amount": 2
            },
            {
                "name": "elmillorCara2",
                "amount": 2
            },
            {
                "name": "elmillorCara3",
                "amount": 2
            },
            {
                "name": "elmillorCara4",
                "amount": 2
            },
            {
                "name": "elmillorYikes",
                "amount": 1
            },
            {
                "name": "elmillorPapad4",
                "amount": 1
            },
            {
                "name": "elmillorChad",
                "amount": 4
            },
            {
                "name": "CRINGE",
                "amount": 1
            },
            {
                "name": "NOPERS",
                "amount": 1
            },
            {
                "name": "kekwemote",
                "amount": 1
            },
            {
                "name": "elmillor70iq",
                "amount": 2
            },
            {
                "name": "elmillorCringe",
                "amount": 2
            },
            {
                "name": "kekw",
                "amount": 2
            },
            {
                "name": "elmillorPepega",
                "amount": 1
            },
            {
                "name": "elmillor2iq",
                "amount": 1
            },
            {
                "name": "elmillorResident",
                "amount": 2
            },
            {
                "name": "elmillorPOGU",
                "amount": 1
            },
            {
                "name": "elmillorFace",
                "amount": 1
            },
            {
                "name": "peepoG",
                "amount": 1
            },
            {
                "name": "Prayge",
                "amount": 7
            },
            {
                "name": "peepoShy",
                "amount": 1
            },
            {
                "name": "peepoRiot",
                "amount": 14
            },
            {
                "name": "Sadge",
                "amount": 1
            },
            {
                "name": "PogO",
                "amount": 1
            },
            {
                "name": "OOOO",
                "amount": 1
            },
            {
                "name": "peepoGordo",
                "amount": 2
            },
            {
                "name": "Pog",
                "amount": 2
            },
            {
                "name": "nymnCorn",
                "amount": 2
            },
            {
                "name": "monkaW",
                "amount": 1
            },
            {
                "name": "peepoArrive",
                "amount": 1
            },
            {
                "name": "peepoLeave",
                "amount": 1
            },
            {
                "name": "catJAM",
                "amount": 1
            },
            {
                "name": "ratJAM",
                "amount": 1
            },
            {
                "name": "PepeLaugh",
                "amount": 2
            },
            {
                "name": "modCheck",
                "amount": 1
            },
            {
                "name": "peepoGiggles",
                "amount": 1
            },
            {
                "name": "HACKERMANS",
                "amount": 1
            },
            {
                "name": "KappaPride",
                "amount": 1
            }
        ],
        "level": 190,
        "xp": 446252,
        "totalXp": 27210700,
        "reactions": 0,
        "mutes": 0,
        "userId": "284772672443777025"
    },
    "776148008311062568": {
        "name": "Syntez#0983",
        "messages": 42,
        "words": 213,
        "attachments": 0,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 42,
        "xp": 31195,
        "totalXp": 162700,
        "reactions": 0,
        "mutes": 0,
        "userId": "776148008311062568"
    },
    "234395307759108106": {
        "name": "Groovy#7254",
        "messages": 15,
        "words": 19,
        "attachments": 0,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 15,
        "xp": 12194,
        "totalXp": 15500,
        "reactions": 0,
        "mutes": 0,
        "userId": "234395307759108106"
    },
    "473503639391043584": {
        "name": "\ud835\udd7d\ud83e\udd40#7738",
        "messages": 2,
        "words": 9,
        "attachments": 0,
        "unicode": 1,
        "custom": 0,
        "used": [],
        "level": 2,
        "xp": 99,
        "totalXp": 100,
        "reactions": 0,
        "mutes": 0,
        "userId": "473503639391043584"
    },
    "804653635304423434": {
        "name": "MEE6#0000",
        "messages": 202,
        "words": 203,
        "attachments": 0,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 103,
        "xp": 54505,
        "totalXp": 3169400,
        "reactions": 0,
        "mutes": 0,
        "userId": "804653635304423434"
    },
    "428042800441982976": {
        "name": "Argent#0949",
        "messages": 13,
        "words": 48,
        "attachments": 0,
        "unicode": 0,
        "custom": 1,
        "used": [
            {
                "name": "ThinkingCheems",
                "amount": 1
            }
        ],
        "level": 13,
        "xp": 9136,
        "totalXp": 11100,
        "reactions": 0,
        "mutes": 0,
        "userId": "428042800441982976"
    },
    "339785179872624642": {
        "name": "HuharevD#4898",
        "messages": 24,
        "words": 107,
        "attachments": 0,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 24,
        "xp": 27947,
        "totalXp": 45900,
        "reactions": 0,
        "mutes": 0,
        "userId": "339785179872624642"
    },
    "665676628231192586": {
        "name": "Swapnil282002#1600",
        "messages": 3,
        "words": 9,
        "attachments": 0,
        "unicode": 1,
        "custom": 0,
        "used": [],
        "level": 3,
        "xp": 294,
        "totalXp": 300,
        "reactions": 0,
        "mutes": 0,
        "userId": "665676628231192586"
    },
    "465629042251530257": {
        "name": "Yuri#8868",
        "messages": 371,
        "words": 1407,
        "attachments": 2,
        "unicode": 13,
        "custom": 4,
        "used": [
            {
                "name": "cat_heart",
                "amount": 2
            },
            {
                "name": "FeelsHug",
                "amount": 1
            },
            {
                "name": "UwUblush",
                "amount": 1
            }
        ],
        "level": 136,
        "xp": 208356,
        "totalXp": 8482200,
        "reactions": 0,
        "mutes": 0,
        "userId": "465629042251530257"
    },
    "725334060666192004": {
        "name": "Eagle-From-Aut#6062",
        "messages": 3,
        "words": 17,
        "attachments": 0,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 3,
        "xp": 294,
        "totalXp": 300,
        "reactions": 0,
        "mutes": 0,
        "userId": "725334060666192004"
    },
    "315851790967111680": {
        "name": "Feenix#1378",
        "messages": 2,
        "words": 2,
        "attachments": 0,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 2,
        "xp": 99,
        "totalXp": 100,
        "reactions": 0,
        "mutes": 0,
        "userId": "315851790967111680"
    },
    "687824320311197758": {
        "name": "LordHybe#0849",
        "messages": 123,
        "words": 503,
        "attachments": 6,
        "unicode": 3,
        "custom": 21,
        "used": [
            {
                "name": "concern",
                "amount": 2
            },
            {
                "name": "weeeb",
                "amount": 1
            },
            {
                "name": "belson_punch",
                "amount": 1
            },
            {
                "name": "creeper_boom",
                "amount": 1
            },
            {
                "name": "Bean2",
                "amount": 1
            },
            {
                "name": "punchwaman",
                "amount": 1
            },
            {
                "name": "wink",
                "amount": 1
            },
            {
                "name": "sadcat",
                "amount": 2
            },
            {
                "name": "Shulkerping",
                "amount": 2
            },
            {
                "name": "ANGERY",
                "amount": 1
            },
            {
                "name": "smart",
                "amount": 1
            },
            {
                "name": "ohno",
                "amount": 1
            },
            {
                "name": "dorimecheems",
                "amount": 1
            },
            {
                "name": "honk",
                "amount": 2
            },
            {
                "name": "BES_Sad",
                "amount": 1
            },
            {
                "name": "wobroll",
                "amount": 1
            },
            {
                "name": "coolblob",
                "amount": 1
            }
        ],
        "level": 81,
        "xp": 28248,
        "totalXp": 1365400,
        "reactions": 0,
        "mutes": 0,
        "userId": "687824320311197758"
    },
    "85512071243894784": {
        "name": "Pabbels#1834",
        "messages": 3,
        "words": 26,
        "attachments": 0,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 3,
        "xp": 294,
        "totalXp": 300,
        "reactions": 0,
        "mutes": 0,
        "userId": "85512071243894784"
    },
    "387614089347858433": {
        "name": "FORTUNE#4872",
        "messages": 4,
        "words": 4,
        "attachments": 0,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 4,
        "xp": 579,
        "totalXp": 600,
        "reactions": 0,
        "mutes": 0,
        "userId": "387614089347858433"
    },
    "743504860934307860": {
        "name": "jajan't (funny not)#7605",
        "messages": 3,
        "words": 8,
        "attachments": 0,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 3,
        "xp": 294,
        "totalXp": 300,
        "reactions": 0,
        "mutes": 0,
        "userId": "743504860934307860"
    },
    "594909598746673173": {
        "name": "coldsoul#8993",
        "messages": 1,
        "words": 1,
        "attachments": 0,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 1,
        "xp": 0,
        "totalXp": 0,
        "reactions": 0,
        "mutes": 0,
        "userId": "594909598746673173"
    },
    "688773099499552884": {
        "name": "sadlittlelizard#9697",
        "messages": 51,
        "words": 104,
        "attachments": 14,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 50,
        "xp": 7250,
        "totalXp": 251000,
        "reactions": 0,
        "mutes": 0,
        "userId": "688773099499552884"
    },
    "689217480006172699": {
        "name": "Heraisxd#5090",
        "messages": 103,
        "words": 941,
        "attachments": 5,
        "unicode": 6,
        "custom": 0,
        "used": [],
        "level": 74,
        "xp": 41793,
        "totalXp": 1014300,
        "reactions": 0,
        "mutes": 0,
        "userId": "689217480006172699"
    },
    "657755664118054922": {
        "name": "Raquisaurius#2473",
        "messages": 120,
        "words": 549,
        "attachments": 1,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 80,
        "xp": 27591,
        "totalXp": 1307500,
        "reactions": 0,
        "mutes": 0,
        "userId": "657755664118054922"
    },
    "614253780002799638": {
        "name": "vytross#1807",
        "messages": 82,
        "words": 462,
        "attachments": 0,
        "unicode": 1,
        "custom": 7,
        "used": [
            {
                "name": "monkaW",
                "amount": 2
            },
            {
                "name": "LUL",
                "amount": 1
            },
            {
                "name": "kekw",
                "amount": 2
            },
            {
                "name": "stevegun",
                "amount": 1
            },
            {
                "name": "feelsBadMan",
                "amount": 1
            }
        ],
        "level": 66,
        "xp": 5291,
        "totalXp": 655000,
        "reactions": 0,
        "mutes": 0,
        "userId": "614253780002799638"
    },
    "660815831462182923": {
        "name": "andresmacia45#6151",
        "messages": 7,
        "words": 24,
        "attachments": 1,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 7,
        "xp": 2304,
        "totalXp": 2500,
        "reactions": 0,
        "mutes": 0,
        "userId": "660815831462182923"
    },
    "133677252708663296": {
        "name": "Snowwy#4750",
        "messages": 122,
        "words": 582,
        "attachments": 19,
        "unicode": 12,
        "custom": 0,
        "used": [],
        "level": 81,
        "xp": 8748,
        "totalXp": 1345900,
        "reactions": 0,
        "mutes": 0,
        "userId": "133677252708663296"
    },
    "304280586003021824": {
        "name": "abg._.blanco#0405",
        "messages": 11,
        "words": 20,
        "attachments": 1,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 11,
        "xp": 6435,
        "totalXp": 7500,
        "reactions": 0,
        "mutes": 0,
        "userId": "304280586003021824"
    },
    "469501062290866176": {
        "name": "Michigun D. Kamukura#4125",
        "messages": 1,
        "words": 12,
        "attachments": 0,
        "unicode": 1,
        "custom": 0,
        "used": [],
        "level": 1,
        "xp": 0,
        "totalXp": 0,
        "reactions": 0,
        "mutes": 0,
        "userId": "469501062290866176"
    },
    "683065121970323553": {
        "name": "andresmacia45#4596",
        "messages": 38,
        "words": 139,
        "attachments": 7,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 38,
        "xp": 37776,
        "totalXp": 130000,
        "reactions": 0,
        "mutes": 0,
        "userId": "683065121970323553"
    },
    "293091785930964992": {
        "name": "spotify_premium#0679",
        "messages": 87,
        "words": 619,
        "attachments": 2,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 69,
        "xp": 3229,
        "totalXp": 763200,
        "reactions": 0,
        "mutes": 0,
        "userId": "293091785930964992"
    },
    "315399792551264266": {
        "name": "iniesgar#0129",
        "messages": 10,
        "words": 32,
        "attachments": 2,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 10,
        "xp": 5251,
        "totalXp": 6000,
        "reactions": 0,
        "mutes": 0,
        "userId": "315399792551264266"
    },
    "784033658188857344": {
        "name": "MEE6#0000",
        "messages": 15,
        "words": 15,
        "attachments": 0,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 15,
        "xp": 12194,
        "totalXp": 15500,
        "reactions": 0,
        "mutes": 0,
        "userId": "784033658188857344"
    },
    "184405311681986560": {
        "name": "FredBoat\u266a\u266a#7284",
        "messages": 76,
        "words": 1268,
        "attachments": 0,
        "unicode": 4,
        "custom": 2,
        "used": [
            {
                "name": "26",
                "amount": 1
            },
            {
                "name": "00",
                "amount": 1
            }
        ],
        "level": 63,
        "xp": 23024,
        "totalXp": 574400,
        "reactions": 0,
        "mutes": 0,
        "userId": "184405311681986560"
    },
    "272096941515603970": {
        "name": "Nitro#7580",
        "messages": 24,
        "words": 81,
        "attachments": 0,
        "unicode": 5,
        "custom": 0,
        "used": [],
        "level": 24,
        "xp": 27947,
        "totalXp": 45900,
        "reactions": 0,
        "mutes": 0,
        "userId": "272096941515603970"
    },
    "603967375276113959": {
        "name": "Milei-Chan#6055",
        "messages": 35,
        "words": 143,
        "attachments": 0,
        "unicode": 1,
        "custom": 0,
        "used": [],
        "level": 35,
        "xp": 39026,
        "totalXp": 107900,
        "reactions": 0,
        "mutes": 0,
        "userId": "603967375276113959"
    },
    "451410039664541706": {
        "name": "TrueGamerGuy#8841",
        "messages": 28,
        "words": 85,
        "attachments": 0,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 28,
        "xp": 34068,
        "totalXp": 65200,
        "reactions": 0,
        "mutes": 0,
        "userId": "451410039664541706"
    },
    "229280755371474954": {
        "name": "\u0396\u03b5\u03cd\u03c2\u0398#9660",
        "messages": 11,
        "words": 25,
        "attachments": 2,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 11,
        "xp": 6435,
        "totalXp": 7500,
        "reactions": 0,
        "mutes": 0,
        "userId": "229280755371474954"
    },
    "344440098676539393": {
        "name": "y0gur#9200",
        "messages": 110,
        "words": 535,
        "attachments": 3,
        "unicode": 3,
        "custom": 0,
        "used": [],
        "level": 77,
        "xp": 20520,
        "totalXp": 1139200,
        "reactions": 0,
        "mutes": 0,
        "userId": "344440098676539393"
    },
    "364426096147431425": {
        "name": "selune#7950",
        "messages": 25,
        "words": 115,
        "attachments": 0,
        "unicode": 3,
        "custom": 0,
        "used": [],
        "level": 25,
        "xp": 34126,
        "totalXp": 54900,
        "reactions": 0,
        "mutes": 0,
        "userId": "364426096147431425"
    },
    "411906203908702224": {
        "name": "Tobal#4022",
        "messages": 34,
        "words": 94,
        "attachments": 0,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 34,
        "xp": 38966,
        "totalXp": 101100,
        "reactions": 0,
        "mutes": 0,
        "userId": "411906203908702224"
    },
    "526466721914290177": {
        "name": "Berridex#6352",
        "messages": 13,
        "words": 82,
        "attachments": 0,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 13,
        "xp": 9136,
        "totalXp": 11100,
        "reactions": 0,
        "mutes": 0,
        "userId": "526466721914290177"
    },
    "323373912685543424": {
        "name": "gabboman92#9642",
        "messages": 3,
        "words": 23,
        "attachments": 0,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 3,
        "xp": 294,
        "totalXp": 300,
        "reactions": 0,
        "mutes": 0,
        "userId": "323373912685543424"
    },
    "313053368157208576": {
        "name": "Sheik!#0447",
        "messages": 7,
        "words": 45,
        "attachments": 0,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 7,
        "xp": 2304,
        "totalXp": 2500,
        "reactions": 0,
        "mutes": 0,
        "userId": "313053368157208576"
    },
    "255708711392116736": {
        "name": "vllnd_db#1252",
        "messages": 8,
        "words": 30,
        "attachments": 0,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 8,
        "xp": 3175,
        "totalXp": 3500,
        "reactions": 0,
        "mutes": 0,
        "userId": "255708711392116736"
    },
    "295230412362481664": {
        "name": "JuaNan_19#9398",
        "messages": 1,
        "words": 6,
        "attachments": 0,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 1,
        "xp": 0,
        "totalXp": 0,
        "reactions": 0,
        "mutes": 0,
        "userId": "295230412362481664"
    },
    "133291119445409792": {
        "name": "Santi42#0086",
        "messages": 48,
        "words": 230,
        "attachments": 4,
        "unicode": 2,
        "custom": 0,
        "used": [],
        "level": 48,
        "xp": 8419,
        "totalXp": 219400,
        "reactions": 0,
        "mutes": 0,
        "userId": "133291119445409792"
    },
    "434312304977379339": {
        "name": "alxsd01#5417",
        "messages": 9,
        "words": 34,
        "attachments": 1,
        "unicode": 2,
        "custom": 0,
        "used": [],
        "level": 9,
        "xp": 4194,
        "totalXp": 4700,
        "reactions": 0,
        "mutes": 0,
        "userId": "434312304977379339"
    },
    "222347081719873546": {
        "name": "Rabbid95#9931",
        "messages": 5,
        "words": 40,
        "attachments": 0,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 5,
        "xp": 1047,
        "totalXp": 1100,
        "reactions": 0,
        "mutes": 0,
        "userId": "222347081719873546"
    },
    "229277144537235456": {
        "name": "Rvben#8215",
        "messages": 1,
        "words": 11,
        "attachments": 0,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 1,
        "xp": 0,
        "totalXp": 0,
        "reactions": 0,
        "mutes": 0,
        "userId": "229277144537235456"
    },
    "414379305125281793": {
        "name": "ReneSchmitke#4847",
        "messages": 9,
        "words": 35,
        "attachments": 0,
        "unicode": 5,
        "custom": 0,
        "used": [],
        "level": 9,
        "xp": 4194,
        "totalXp": 4700,
        "reactions": 0,
        "mutes": 0,
        "userId": "414379305125281793"
    },
    "280352905234743296": {
        "name": "guti#0067",
        "messages": 2,
        "words": 7,
        "attachments": 0,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 2,
        "xp": 99,
        "totalXp": 100,
        "reactions": 0,
        "mutes": 0,
        "userId": "280352905234743296"
    },
    "270904126974590976": {
        "name": "Dank Memer#5192",
        "messages": 16,
        "words": 50,
        "attachments": 1,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 16,
        "xp": 13823,
        "totalXp": 18000,
        "reactions": 0,
        "mutes": 0,
        "userId": "270904126974590976"
    },
    "716962243400564786": {
        "name": "ThatMooooCow#8610",
        "messages": 2,
        "words": 5,
        "attachments": 0,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 2,
        "xp": 99,
        "totalXp": 100,
        "reactions": 0,
        "mutes": 0,
        "userId": "716962243400564786"
    },
    "463652507328053259": {
        "name": "Arma_7x#9652",
        "messages": 5,
        "words": 54,
        "attachments": 0,
        "unicode": 2,
        "custom": 0,
        "used": [],
        "level": 5,
        "xp": 1047,
        "totalXp": 1100,
        "reactions": 0,
        "mutes": 0,
        "userId": "463652507328053259"
    },
    "635041188008689666": {
        "name": "Nogassov#9743",
        "messages": 26,
        "words": 106,
        "attachments": 0,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 26,
        "xp": 31201,
        "totalXp": 55100,
        "reactions": 0,
        "mutes": 0,
        "userId": "635041188008689666"
    },
    "666304079865184257": {
        "name": "MEE6#0000",
        "messages": 62,
        "words": 62,
        "attachments": 0,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 56,
        "xp": 15290,
        "totalXp": 379100,
        "reactions": 0,
        "mutes": 0,
        "userId": "666304079865184257"
    },
    "531432046548090892": {
        "name": "Naoki Giobama#0001",
        "messages": 3,
        "words": 15,
        "attachments": 0,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 3,
        "xp": 294,
        "totalXp": 300,
        "reactions": 0,
        "mutes": 0,
        "userId": "531432046548090892"
    },
    "760028855930060800": {
        "name": "SantiF#7385",
        "messages": 2,
        "words": 16,
        "attachments": 0,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 2,
        "xp": 99,
        "totalXp": 100,
        "reactions": 0,
        "mutes": 0,
        "userId": "760028855930060800"
    },
    "536064314327695387": {
        "name": "Yukiko \u266a#8235",
        "messages": 1,
        "words": 3,
        "attachments": 0,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 1,
        "xp": 0,
        "totalXp": 0,
        "reactions": 0,
        "mutes": 0,
        "userId": "536064314327695387"
    },
    "382087705573589003": {
        "name": "alextoomeme#6074",
        "messages": 11,
        "words": 63,
        "attachments": 0,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 11,
        "xp": 6435,
        "totalXp": 7500,
        "reactions": 0,
        "mutes": 0,
        "userId": "382087705573589003"
    },
    "456226577798135808": {
        "name": "Deleted User#0000",
        "messages": 32,
        "words": 58,
        "attachments": 1,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 32,
        "xp": 38113,
        "totalXp": 88200,
        "reactions": 0,
        "mutes": 0,
        "userId": "456226577798135808"
    },
    "396349846061318145": {
        "name": "Danioscu#9946",
        "messages": 17,
        "words": 122,
        "attachments": 0,
        "unicode": 3,
        "custom": 0,
        "used": [],
        "level": 17,
        "xp": 15499,
        "totalXp": 20700,
        "reactions": 0,
        "mutes": 0,
        "userId": "396349846061318145"
    },
    "551876749013549219": {
        "name": "julenpro20#4426",
        "messages": 14,
        "words": 108,
        "attachments": 0,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 14,
        "xp": 10627,
        "totalXp": 13200,
        "reactions": 0,
        "mutes": 0,
        "userId": "551876749013549219"
    },
    "649491760980164638": {
        "name": "archery | fb#2389",
        "messages": 1,
        "words": 3,
        "attachments": 0,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 1,
        "xp": 0,
        "totalXp": 0,
        "reactions": 0,
        "mutes": 0,
        "userId": "649491760980164638"
    },
    "431923609037045770": {
        "name": "Billy552#8006",
        "messages": 18,
        "words": 222,
        "attachments": 4,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 18,
        "xp": 19808,
        "totalXp": 26200,
        "reactions": 0,
        "mutes": 0,
        "userId": "431923609037045770"
    },
    "321289525705834497": {
        "name": "Kyara#7350",
        "messages": 5,
        "words": 24,
        "attachments": 0,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 5,
        "xp": 1047,
        "totalXp": 1100,
        "reactions": 0,
        "mutes": 0,
        "userId": "321289525705834497"
    },
    "784443383619649578": {
        "name": "HeyMaat#1155",
        "messages": 2,
        "words": 2,
        "attachments": 0,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 2,
        "xp": 99,
        "totalXp": 100,
        "reactions": 0,
        "mutes": 0,
        "userId": "784443383619649578"
    },
    "628716392610267137": {
        "name": "\u2022\ud835\udd64\ud835\udd6a\ud835\udd5f\ud835\udd5f\u2022#7452",
        "messages": 2,
        "words": 5,
        "attachments": 0,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 2,
        "xp": 99,
        "totalXp": 100,
        "reactions": 0,
        "mutes": 0,
        "userId": "628716392610267137"
    },
    "786514262772154388": {
        "name": "snow man#5452",
        "messages": 15,
        "words": 43,
        "attachments": 0,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 15,
        "xp": 12194,
        "totalXp": 15500,
        "reactions": 0,
        "mutes": 0,
        "userId": "786514262772154388"
    },
    "752598585131925525": {
        "name": "Ramonchu07#3602",
        "messages": 3,
        "words": 13,
        "attachments": 0,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 3,
        "xp": 294,
        "totalXp": 300,
        "reactions": 0,
        "mutes": 0,
        "userId": "752598585131925525"
    },
    "825117888096370728": {
        "name": "AngryPickle#5326",
        "messages": 54,
        "words": 196,
        "attachments": 2,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 52,
        "xp": 4099,
        "totalXp": 284100,
        "reactions": 0,
        "mutes": 0,
        "userId": "825117888096370728"
    },
    "430843932793110529": {
        "name": "Kentaishi#4242",
        "messages": 22,
        "words": 189,
        "attachments": 2,
        "unicode": 1,
        "custom": 0,
        "used": [],
        "level": 22,
        "xp": 24653,
        "totalXp": 37800,
        "reactions": 0,
        "mutes": 0,
        "userId": "430843932793110529"
    },
    "823587421290496050": {
        "name": "Dr-DiVianco01#1312",
        "messages": 1,
        "words": 1,
        "attachments": 0,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 1,
        "xp": 0,
        "totalXp": 0,
        "reactions": 0,
        "mutes": 0,
        "userId": "823587421290496050"
    },
    "230509764809850881": {
        "name": "Tigeric#7386",
        "messages": 6,
        "words": 28,
        "attachments": 0,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 6,
        "xp": 1592,
        "totalXp": 1700,
        "reactions": 0,
        "mutes": 0,
        "userId": "230509764809850881"
    },
    "263563691939594240": {
        "name": "DaddyZargo#8160",
        "messages": 115,
        "words": 458,
        "attachments": 0,
        "unicode": 0,
        "custom": 7,
        "used": [
            {
                "name": "peperub",
                "amount": 1
            },
            {
                "name": "4weirdw",
                "amount": 1
            },
            {
                "name": "wow",
                "amount": 1
            },
            {
                "name": "rottendonys",
                "amount": 1
            },
            {
                "name": "OwoThink",
                "amount": 1
            },
            {
                "name": "uwu2",
                "amount": 1
            },
            {
                "name": "gaefrog",
                "amount": 1
            }
        ],
        "level": 78,
        "xp": 42294,
        "totalXp": 1213000,
        "reactions": 0,
        "mutes": 0,
        "userId": "263563691939594240"
    },
    "818679331571630090": {
        "name": "LookOverDare#3615",
        "messages": 2,
        "words": 6,
        "attachments": 0,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 2,
        "xp": 99,
        "totalXp": 100,
        "reactions": 0,
        "mutes": 0,
        "userId": "818679331571630090"
    },
    "761067033626148894": {
        "name": "Free Sex#6499",
        "messages": 3,
        "words": 3,
        "attachments": 0,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 3,
        "xp": 294,
        "totalXp": 300,
        "reactions": 0,
        "mutes": 0,
        "userId": "761067033626148894"
    },
    "744716225820753952": {
        "name": "Redstone#8583",
        "messages": 9,
        "words": 28,
        "attachments": 0,
        "unicode": 0,
        "custom": 4,
        "used": [
            {
                "name": "shy",
                "amount": 2
            },
            {
                "name": "Madge",
                "amount": 1
            },
            {
                "name": "peepoShy",
                "amount": 1
            }
        ],
        "level": 9,
        "xp": 4194,
        "totalXp": 4700,
        "reactions": 0,
        "mutes": 0,
        "userId": "744716225820753952"
    },
    "459724108373164033": {
        "name": "Matte#6411",
        "messages": 12,
        "words": 39,
        "attachments": 0,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 12,
        "xp": 7734,
        "totalXp": 9200,
        "reactions": 0,
        "mutes": 0,
        "userId": "459724108373164033"
    },
    "841010417307484210": {
        "name": "green#1146",
        "messages": 6,
        "words": 52,
        "attachments": 0,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 6,
        "xp": 1592,
        "totalXp": 1700,
        "reactions": 0,
        "mutes": 0,
        "userId": "841010417307484210"
    },
    "159062086700367872": {
        "name": "kenliecer#8341",
        "messages": 3,
        "words": 7,
        "attachments": 0,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 3,
        "xp": 294,
        "totalXp": 300,
        "reactions": 0,
        "mutes": 0,
        "userId": "159062086700367872"
    },
    "714670623863078994": {
        "name": "LittleCircles#9856",
        "messages": 2,
        "words": 31,
        "attachments": 0,
        "unicode": 1,
        "custom": 0,
        "used": [],
        "level": 2,
        "xp": 99,
        "totalXp": 100,
        "reactions": 0,
        "mutes": 0,
        "userId": "714670623863078994"
    },
    "715579379761152032": {
        "name": "zixx#5838",
        "messages": 3,
        "words": 3,
        "attachments": 0,
        "unicode": 0,
        "custom": 1,
        "used": [
            {
                "name": "PING",
                "amount": 1
            }
        ],
        "level": 3,
        "xp": 294,
        "totalXp": 300,
        "reactions": 0,
        "mutes": 0,
        "userId": "715579379761152032"
    },
    "530550822321520647": {
        "name": "glowsquid#9237",
        "messages": 3,
        "words": 5,
        "attachments": 0,
        "unicode": 0,
        "custom": 2,
        "used": [
            {
                "name": "horny",
                "amount": 2
            }
        ],
        "level": 3,
        "xp": 294,
        "totalXp": 300,
        "reactions": 0,
        "mutes": 0,
        "userId": "530550822321520647"
    },
    "494297184234110986": {
        "name": "Lul#5887",
        "messages": 4,
        "words": 4,
        "attachments": 1,
        "unicode": 0,
        "custom": 1,
        "used": [
            {
                "name": "kekw",
                "amount": 1
            }
        ],
        "level": 4,
        "xp": 579,
        "totalXp": 600,
        "reactions": 0,
        "mutes": 0,
        "userId": "494297184234110986"
    },
    "694086494792712282": {
        "name": "KingCobra#7199",
        "messages": 7,
        "words": 21,
        "attachments": 0,
        "unicode": 1,
        "custom": 1,
        "used": [
            {
                "name": "PING",
                "amount": 1
            }
        ],
        "level": 7,
        "xp": 2304,
        "totalXp": 2500,
        "reactions": 0,
        "mutes": 0,
        "userId": "694086494792712282"
    },
    "590385832934768640": {
        "name": "(Josh)#6183",
        "messages": 1,
        "words": 1,
        "attachments": 0,
        "unicode": 1,
        "custom": 0,
        "used": [],
        "level": 1,
        "xp": 0,
        "totalXp": 0,
        "reactions": 0,
        "mutes": 0,
        "userId": "590385832934768640"
    },
    "308975521272823809": {
        "name": "fnkyheh#5655",
        "messages": 1,
        "words": 6,
        "attachments": 0,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 1,
        "xp": 0,
        "totalXp": 0,
        "reactions": 0,
        "mutes": 0,
        "userId": "308975521272823809"
    },
    "667155361970782244": {
        "name": "polarbub#1187",
        "messages": 15,
        "words": 64,
        "attachments": 0,
        "unicode": 1,
        "custom": 1,
        "used": [
            {
                "name": "concern",
                "amount": 1
            }
        ],
        "level": 15,
        "xp": 12194,
        "totalXp": 15500,
        "reactions": 0,
        "mutes": 0,
        "userId": "667155361970782244"
    },
    "505823941080776734": {
        "name": "Melyam#0734",
        "messages": 9,
        "words": 29,
        "attachments": 0,
        "unicode": 1,
        "custom": 0,
        "used": [],
        "level": 9,
        "xp": 4194,
        "totalXp": 4700,
        "reactions": 0,
        "mutes": 0,
        "userId": "505823941080776734"
    },
    "222655684263673866": {
        "name": "El Abuelo#6387",
        "messages": 1,
        "words": 2,
        "attachments": 0,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 1,
        "xp": 0,
        "totalXp": 0,
        "reactions": 0,
        "mutes": 0,
        "userId": "222655684263673866"
    },
    "852324539631403049": {
        "name": "OK98#4082",
        "messages": 1,
        "words": 1,
        "attachments": 0,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 1,
        "xp": 0,
        "totalXp": 0,
        "reactions": 0,
        "mutes": 0,
        "userId": "852324539631403049"
    },
    "753997379350429866": {
        "name": "___#5424",
        "messages": 5,
        "words": 159,
        "attachments": 1,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 5,
        "xp": 1247,
        "totalXp": 1300,
        "reactions": 0,
        "mutes": 0,
        "userId": "753997379350429866"
    },
    "678349571000238128": {
        "name": "Unax -_-#8533",
        "messages": 4,
        "words": 4,
        "attachments": 0,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 4,
        "xp": 579,
        "totalXp": 600,
        "reactions": 0,
        "mutes": 0,
        "userId": "678349571000238128"
    },
    "680525040856727740": {
        "name": "agirre2#2399",
        "messages": 1,
        "words": 1,
        "attachments": 0,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 1,
        "xp": 0,
        "totalXp": 0,
        "reactions": 0,
        "mutes": 0,
        "userId": "680525040856727740"
    },
    "620271294893654016": {
        "name": "hunter.#0877",
        "messages": 2,
        "words": 9,
        "attachments": 0,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 2,
        "xp": 99,
        "totalXp": 100,
        "reactions": 0,
        "mutes": 0,
        "userId": "620271294893654016"
    },
    "690356940211355757": {
        "name": "ScratInHD#0582",
        "messages": 16,
        "words": 37,
        "attachments": 0,
        "unicode": 0,
        "custom": 1,
        "used": [
            {
                "name": "peepoG",
                "amount": 1
            }
        ],
        "level": 16,
        "xp": 13823,
        "totalXp": 18000,
        "reactions": 0,
        "mutes": 0,
        "userId": "690356940211355757"
    },
    "424841521540628487": {
        "name": "ThorJaime#8615",
        "messages": 2,
        "words": 4,
        "attachments": 0,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 2,
        "xp": 99,
        "totalXp": 100,
        "reactions": 0,
        "mutes": 0,
        "userId": "424841521540628487"
    },
    "685525967900377094": {
        "name": "carpoke#2641",
        "messages": 1,
        "words": 3,
        "attachments": 0,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 1,
        "xp": 0,
        "totalXp": 0,
        "reactions": 0,
        "mutes": 0,
        "userId": "685525967900377094"
    },
    "730742657046806529": {
        "name": "MINECRAFT #changelogs#0000",
        "messages": 142,
        "words": 16803,
        "attachments": 0,
        "unicode": 1039,
        "custom": 60,
        "used": [
            {
                "name": "pigline_brute",
                "amount": 2
            },
            {
                "name": "crafting_table",
                "amount": 1
            },
            {
                "name": "mojang",
                "amount": 1
            },
            {
                "name": "axolotl",
                "amount": 6
            },
            {
                "name": "rock",
                "amount": 4
            },
            {
                "name": "glow_squid",
                "amount": 1
            },
            {
                "name": "emerald",
                "amount": 1
            },
            {
                "name": "crystal_ball",
                "amount": 1
            },
            {
                "name": "telescope",
                "amount": 1
            },
            {
                "name": "sparkles",
                "amount": 1
            },
            {
                "name": "spider_web",
                "amount": 1
            },
            {
                "name": "fish",
                "amount": 1
            },
            {
                "name": "orange_square",
                "amount": 1
            },
            {
                "name": "cloud_lightning",
                "amount": 1
            },
            {
                "name": "leaves",
                "amount": 1
            },
            {
                "name": "bucket_of_axolotl",
                "amount": 6
            },
            {
                "name": "gold",
                "amount": 2
            },
            {
                "name": "candle",
                "amount": 1
            },
            {
                "name": "seedling",
                "amount": 1
            },
            {
                "name": "map",
                "amount": 1
            },
            {
                "name": "gear",
                "amount": 1
            },
            {
                "name": "boom",
                "amount": 1
            },
            {
                "name": "dragon_face",
                "amount": 1
            },
            {
                "name": "level_slider",
                "amount": 1
            },
            {
                "name": "headphones",
                "amount": 1
            },
            {
                "name": "calling",
                "amount": 1
            },
            {
                "name": "fire",
                "amount": 1
            },
            {
                "name": "snowflake",
                "amount": 1
            },
            {
                "name": "crossed_swords",
                "amount": 1
            },
            {
                "name": "control_knobs",
                "amount": 1
            },
            {
                "name": "bug",
                "amount": 1
            },
            {
                "name": "nether_portal",
                "amount": 6
            },
            {
                "name": "netherite",
                "amount": 1
            },
            {
                "name": "alex_not_like_this",
                "amount": 1
            },
            {
                "name": "iron",
                "amount": 1
            },
            {
                "name": "steve_villager",
                "amount": 1
            },
            {
                "name": "diamond",
                "amount": 2
            },
            {
                "name": "drowned",
                "amount": 1
            },
            {
                "name": "dedicated_server",
                "amount": 1
            }
        ],
        "level": 109,
        "xp": 74038,
        "totalXp": 3875200,
        "reactions": 0,
        "mutes": 0,
        "userId": "730742657046806529"
    },
    "691355112043446373": {
        "name": "Camaloran#0497",
        "messages": 3,
        "words": 27,
        "attachments": 0,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 3,
        "xp": 294,
        "totalXp": 300,
        "reactions": 0,
        "mutes": 0,
        "userId": "691355112043446373"
    },
    "654167830635216907": {
        "name": "funeria#9584",
        "messages": 1,
        "words": 15,
        "attachments": 0,
        "unicode": 0,
        "custom": 0,
        "used": [],
        "level": 1,
        "xp": 0,
        "totalXp": 0,
        "reactions": 0,
        "mutes": 0,
        "userId": "654167830635216907"
    }
}

async function setStats() {
    for (var stat in stats) {
        var stat_ = stats[stat] as any
        
        console.log(stat_.name)
        await setGlobalStats(
            {
                userID: stat_.userId,
                guildID: "666295714724446209",
            },
            {
                messages: stat_.messages,
                words: stat_.words,
                attachments: stat_.attachments,
                "emojis.unicode": stat_.unicode,
                "emojis.custom": stat_.custom,
                "emojis.used": stat_.used,
                level: stat_.level,
                xp: stat_.xp,
                totalXp: stat_.totalXp,
                reactions: stat_.reactions,
            }
        )
        await setUsername(
            {
                userID: stat_.userId,
                guildID: "666295714724446209",
            },
            stat_.name.substring(0, stat_.name.length - 5) as string
        )
    }
}

export default {
    category: "Testing",
    description: "Some tools for the owner to use",
    slash: true,
    testOnly: true,
    guildOnly: true,
    ownerOnly: true,
    options: [
        {
            name: "action",
            description: "Choose something to do",
            type: "STRING",
            required: true,
            choices: [
                {
                    name: "Member add",
                    value: "member_add",
                },
                {
                    name: "Member remove",
                    value: "member_remove",
                },
                {
                    name: "Current date",
                    value: "curr_date",
                },
                {
                    name: "Username",
                    value: "username",
                },
                {
                    name: "Reset",
                    value: "reset",
                },
                {
                    name: "Add",
                    value: "add",
                },
                {
                    name: "Stats",
                    value: "stats",
                },
            ],
        },
    ],
    callback: async ({ client, member, interaction }) => {
        const action = interaction.options.getString("action")

        if (action === "curr_date") {
            return moment().format("llll")
        } else if (action === "member_add") {
            client.emit("guildMemberAdd", member)
        } else if (action === "member_remove") {
            client.emit("guildMemberRemove", member)
        } else if (action === "username") {
            return cleanSpecialCharacters(member.user.username)
        } else if (action === "member_add") {
            client.emit("guildMemberAdd", member)
        } else if (action === "stats") {
            setStats()
            return "Upserting stats!"
        }
    },
} as ICommand
