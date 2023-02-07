import sys

def collatz(x):
    while x != 1:
        print(x)
        if x % 2 == 1:
            x = 3*  x + 1
        else:
            x = x // 2
    print(x)

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("USAGE: python collatz x")
        exit()
    collatz(int(sys.argv[1]))
