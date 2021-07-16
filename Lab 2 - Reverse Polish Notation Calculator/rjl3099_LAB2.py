# Ryan Laurents
# ID: 1000763099
# 11/08/2020
# Windows 64bit OS

# Lab 2 - Reverse Polish Notation

myFile = open("input_RPN.txt", "r")

# iterate through each line of the file, and through each character in the line
for line in myFile:
    index = 0
    numbers = []
    isValid = True
    for char in line:
        # Check if the character is an operation, space, end line, or just a numbers
        # In each operation, perform operation on previous two nums stored. Store
        # result in index - 2 (first num) and pop index - 1(second num). Decrement index to match
        if (char == "+"):
            numbers[index - 2] = numbers[index - 2] + numbers[index - 1]
            numbers.pop(index - 1)
            index -= 1

        elif(char == "-"):
            numbers[index - 2] = numbers[index - 2] - numbers[index - 1]
            numbers.pop(index - 1)
            index -= 1

        elif(char == "*"):
            numbers[index - 2] = numbers[index - 2] * numbers[index - 1]
            numbers.pop(index - 1)
            index -= 1

        elif(char == "/"):
            numbers[index - 2] = numbers[index - 2] / numbers[index - 1]
            numbers.pop(index - 1)
            index -= 1

        elif(char == " "):
            # do nothing
            temp = 0

        # If reach the end of the line, break out of this loop
        elif(char == "\n" or char == "\r" or char == "CR"):
            break

        # If only a number, append to array and increment index
        elif(char.isdigit()):
            numbers.append(int(char))
            index += 1

        else:
            isValid = False
            print("Invalid input: ", char)
            break

    # print the result of each line
    if(isValid):
        print(numbers[0])

myFile.close()
