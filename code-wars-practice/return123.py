import random


def one_two():
    return random.randint(1, 2)


def one_two_three():
    while True:
        (a, b) = one_two(), one_two()
        if a == 1 and b == 1:
            return 1
        elif a == 1 and b == 2:
            return 2
        elif a == 2 and b == 2:
            return 3


# print(one_two())
print(one_two_three())
