import time

def enum():
    n = 0
    while True:
        print('0'*n + '1'*n)
        n += 1
        time.sleep(1)
        
enum()