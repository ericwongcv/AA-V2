roman = {
    "I": 1, 
    "V": 5, 
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
    "IV": 4,
    "IX": 9,
    "XL": 40,
    "XC": 90,
    "CD": 400,
    "CM": 900
}

def parse(val):
    index = 0
    sum = 0
    while index < len(val):
        if val[index: index + 2] in roman:
            sum += roman[val[index: index + 2]]
            index += 2
        elif val[index] in roman:
            sum += roman[val[index]]
            index += 1
    return sum
