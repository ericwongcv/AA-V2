
def duplicate_encode(word):
    dict = {}
    for char in word:
        if char not in dict:
            dict[char] = 1
        else:
            dict[char] += 1
            
    str = ""
    
    for i in range(len(word)):
        if dict[word[i]] > 1:
            str += ")"
        else:
            str += '('
    return str

print(duplicate_encode("(( @"))
