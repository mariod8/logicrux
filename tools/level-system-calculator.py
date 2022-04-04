import math


def xp_per_msg(level):
    return math.floor(math.pow(level, 1.2)) * 100


def xp_per_lvl(level):
    return 5 * (level ^ 1.5) + (50 * level) + 100 - xp


def main():
    total_msg = 0
    for i in range(1, 1000):
        xpm = xp_per_msg(i)
        xpl = xp_per_lvl(i)
        msg = math.floor(xpl / xpm)
        total_msg += msg
        print(
            f"Nivel {i}: XP Necesaria: {xpl}, XP Mensaje: {xpm}, Msg/Lvl: {xpl / xpm}")
    print(total_msg)


if __name__ == "__main__":
    main()
