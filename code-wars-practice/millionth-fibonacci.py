def calc(n):
    if n == 0:
        return (0, 1)
    elif n == 1:
        return (1, 1)
    else:
        a, b = calc(n // 2)
        p = a * (2 * b - a)
        q = b * b + a * a
        return (p, q) if n % 2 == 0 else (q, p + q)

def fib(n):
    if n >= 0:
        return calc(n)[0]
    else:
        return -calc(-n)[0] if n % 2 == 0 else calc(-n)[0]

print(fib(300))