def is_solved(board):
    # check row
    for row in board:
        if all([row[0] == i and i != 0 for i in row]):
            return row[0]

    # check col
    for colIndex in range(3):
        if all([row[colIndex] == board[0][colIndex] and board[0][colIndex] != 0 for row in board]):
            return board[0][colIndex]

    # check diag
    if all(board[i][2-i] == board[0][2] and board[0][2] != 0 for i in range(3)):
        return board[0][2]

    if all([board[i][i] == board[0][0] and board[0][0] != 0 for i in range(3)]):
        return board[0][0]

    noZero = True

    for row in board:
        for i in row:
            if i == 0:
                noZero = False

    if noZero:
        return 0

    return -1


print(is_solved([[2, 0, 2], [2, 1, 1], [1, 2, 1]]))       # -1
print(is_solved([[0, 0, 2], [0, 0, 0], [1, 0, 1]]))       # -1
print(is_solved([[1, 2, 0], [0, 1, 2], [0, 0, 1]]))       # 1
