# Ryan Laurents
# 1000763099
# 12/02/2020
# Windows 10
# Lab 3 - Brace depth

depth = 0
file = open("input.txt", "r")

# This code is quite simple. We loop through the input file line by line.
# For each line, we will check to see if it has either a comment or a println
# If it has either of these, it will not count brackets on that line. Otherwise,
# it will increment and decrement as we come across the proper brackets.
# If we just hit a closing bracket, we need to print depth + 1 instead of depth
for line in file:
    words = []
    comment = False
    printing = False
    closing = False

    if("//" in line):
        comment = True

    if("println" in line):
        printing = True

    if("{" in line and not comment and not printing):
        depth += 1

    if("}" in line and not comment and not printing):
        depth -= 1
        closing = True

    if(closing):
        print(depth + 1, line)

    else:
        print(depth, line)

file.close()
