def fib(n):
    a = 0
    b = 1
    while a < n:
        yield a
        a, b = b, a+b



def euler2(n):
    return sum(x for x in fib(n) if not (x % 2))



def checker():
    print(list(fib(100)))
    print(euler2(100))

checker()
