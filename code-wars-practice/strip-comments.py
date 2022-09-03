def strip_comments(string, markers):
    
    arr = string.split('\n')

    for idx, line in enumerate(arr):
        for i, char in enumerate(line):
            if char in markers:
                if line[i-1] == ' ':
                    arr[idx] = arr[idx][:i-1]
                else:
                    arr[idx] = arr[idx][:i]

    for i, val in enumerate(arr):
        if val == ' ' or val == '\t':
            arr[i] = ''
            
    result = '\n'.join(arr)
    
    return result

# print(strip_comments('apples, pears # and bananas\ngrapes\nbananas !apples', ['#', '!']))
# print(strip_comments('a #b\nc\nd $e f g', ['#', '$']))
# print(strip_comments(' a #b\nc\nd $e f g', ['#', '$']))
print(strip_comments("\t?\napples oranges . @ = #\n. ! strawberries bananas '\n@ avocados oranges lemons watermelons", ['#', "'", '?', '^', '=', '!', ',', '@', '-']))
    #'\noranges = apples .\navocados avocados\n. lemons bananas'
# print(strip_comments('  #\noranges = apples .\navocados avocados\n. lemons bananas', ['#', "'", '-']))
    #'\napples oranges .\n.\n'