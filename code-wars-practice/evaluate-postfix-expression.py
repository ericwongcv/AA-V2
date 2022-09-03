import math

def postfix_evaluator(expr):
    expr = expr.split()
    
    while len(expr) > 1:
        for i in range(len(expr)):
            if expr[i] in '+-*/':
                operator = expr.pop(i)
                match operator:
                    case '+':
                        expr[i-2] = int(float(expr[i-2])) + int(float(expr.pop(i - 1)))
                    case '-':
                        expr[i-2] = int(float(expr[i-2])) - int(float(expr.pop(i - 1)))
                    case '*':
                        expr[i-2] = int(float(expr[i-2])) * int(float(expr.pop(i - 1)))
                    case '/':
                        expr[i-2] = int(float(expr[i-2])) / int(float(expr.pop(i - 1)))
                if expr[i-2] < 0:
                    expr[i-2] = str(-1 * math.ceil(abs(expr[i-2])))
                else:
                    expr[i-2] = str(math.ceil(abs(expr[i-2])))
                    
                break

    if float(expr[0]) < 0:
        return -1 * math.ceil(abs(float(expr[0])))
    else:
        return math.ceil(float(expr[0]))


# print(postfix_evaluator("2 3 +"))
# print(postfix_evaluator("2 -3 +"))
# print(postfix_evaluator("-1"))
# print(postfix_evaluator("4 8 + 6 5 - * 3 2 - 2 2 + * /"))
# print(postfix_evaluator("-85 -71 -58 28 + 63 66 91 -86 * / 23 -75 * - / - * /"))
# print(postfix_evaluator("-25 48 /"))
# print(postfix_evaluator("64 10 / 89 42 * - 21 / -81 *"))
# print(postfix_evaluator("2 3 9 4 / + *"))
# print(postfix_evaluator("48 12 83 * 71 -2 -52 + / / 75 / +"))
