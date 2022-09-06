def queue_time(customers, n):
    # TODO
    if len(customers) == 0:
        return 0
    
    dict = {}
    
    while len(customers) > 0:
        
        for i in range(n):
            if i not in dict:
                dict[i] = []
            if len(customers) > 0 and len(dict[i]) == 0:
                dict[i].append(customers.pop(0))
            elif len(customers) > 0:
                index = 0
                for key in dict.keys():
                    if sum(dict[key]) < sum(dict[index]):
                        index = key
                dict[index].append(customers.pop(0))
                
    return max([sum(value) for value in dict.values()])

customers = [38, 1, 5, 34, 31, 9, 5, 14, 26, 5, 39, 37, 14, 26, 45, 6, 2, 2, 43] 

print(queue_time(customers, 5)) # 101
