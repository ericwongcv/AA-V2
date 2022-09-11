# Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

# HH = hours, padded to 2 digits, range: 00 - 99
# MM = minutes, padded to 2 digits, range: 00 - 59
# SS = seconds, padded to 2 digits, range: 00 - 59
# The maximum time never exceeds 359999 (99:59:59)

import math

def make_readable(seconds):
    second = seconds % 60
    minute = math.floor(seconds / 60 % 60)
    hour = math.floor(seconds / 3600)
    if (second < 10): second = '0' + str(second)
    if (minute < 10): minute = '0' + str(minute)
    if (hour < 10): hour = '0' + str(hour)

    return f'{hour}:{minute}:{second}'


print(make_readable(0))             # "00:00:00"
print(make_readable(5))             # "00:00:05"
print(make_readable(60))            # "00:01:00"
print(make_readable(86399))         # "23:59:59"
print(make_readable(359999))        # "99:59:59"
