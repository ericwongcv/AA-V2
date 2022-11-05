def last_digit(lst):
    if (len(lst) == 0):
        return 1
    elif (lst[0] == 0 and lst[1] != 0):
        return 1
    elif (lst[0] == 0 and len(lst) % 2 == 0):
        return 1
    elif (lst[0] == 0):
        return 0

    mods = [100]
    modedLst = []

    for i in range(len(lst)):
        if i != len(lst) - 1:
            mods.append(int(primeDiv(mods[-1])))

    for i, n in enumerate(lst):
        modedLst.append(n % mods[i])

    last = modedLst[-1]

    for i in range(len(modedLst) - 2, -1, -1):
        if modedLst[i] == 0 and last == 0:
            last = 1
        elif modedLst[i] != 0 and last == 0:
            last = 1
        else:
            next = pow(modedLst[i], last, mods[i])
            if next != 0 or next != 1:
                last = next
            else:
                last = pow(modedLst[i], last)

    return last % 10, modedLst, mods, lst

def primeDiv(n):
    if n <= 16:
        return n * (1 - 1/2)
    return n * (1 - 1 / 2) * (1 - 1 / 5)

# print(last_digit([0, 0]) == 1)
# print(last_digit([0, 0, 0]) == 0)
# print(last_digit([3, 4, 5]) == 1)
# print(last_digit([12, 30, 21]) == 6)
# print(last_digit([2, 0, 1]) == 1)
# print(last_digit([2, 2, 2, 0]) == 4)
# print(last_digit([937640, 767456, 981242]) == 0)
# print(last_digit([123232, 694022, 140249]) == 6)
print(last_digit([625703, 43898, 614961, 448629]), 1)
