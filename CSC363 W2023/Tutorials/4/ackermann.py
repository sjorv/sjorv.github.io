import sys

def ackermann(x, y):
    if x == 0:
        r = y + 1
        print(r)
        return r
    elif y == 0:
        r = ackermann(x - 1, y + 1)
        print(r)
        return r
    else:
        r = ackermann(x - 1, ackermann(x, y - 1))
        print(r)
        return r

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("USAGE: python ackermann x y")
        exit()
    ackermann(int(sys.argv[1]), int(sys.argv[2]))
