// Ryan Laurents
// 1000763099
// 10/16/2020

// University of Texas at Arlington
// CSE 3302 - Lab 1
// Lab 1 is our first look into Functional Programming using JavaScript


//  ---------------
//  | Question #1 |
//  ---------------

const inputtable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Output for Question 1:");
console.log(inputtable);


//  ------------------
//  | Question #2(a) |
//  ------------------

var count = 0;
var test5 = [];

// multiples is a function that can produce multiples of any number (num)
// it will return an array (output) that contains (num)*(inputtable[count])
// Setting the function up to be generalized will work for section b as well
function multiples(inputtable, output, num, count)
{
    // Check if we have cycled through the input array. If so, return the output array
    if(count == (inputtable.length))
    {
        return output;
    }

    output[count] = (num * inputtable[count]);
    
    // recursive call to cycle through the input table
    return multiples(inputtable, output, num, count + 1);
}

var fiveTable = multiples(inputtable, test5, 5, count);
console.log("Output for Question 2a:");
console.log(fiveTable);


//  ------------------
//  | Question #2(b) |
//  ------------------

var test13 = [];

var thirteenTable = multiples(inputtable, test13, 13, count);
console.log("Output for Question 2b:");
console.log(thirteenTable);


//  ------------------
//  | Question #2(c) |
//  ------------------

var testSquares = [];

// squares will take an input array and square each item
// it will then return the output array
function squares(inputtable, output, count)
{
    if(count == (inputtable.length))
    {
        return output;
    }

    output[count] = (inputtable[count] * inputtable[count]);

    // recursive call to cycle through the input table
    return squares(inputtable, output, count + 1);
}

var squaresTable = squares(inputtable, testSquares, count);
console.log("Output for Question 2c:");
console.log(squaresTable);


//  ---------------
//  | Question #3 |
//  ---------------

var oddCount = 0;
var oddTest = [];

// Since the input table contains [1-10], we cant easily use it directly to calculate odd multiples of 5
// so we use the input table as a break check for its length, and an additional counter that will only
// execute the code if it is odd. When it doesnt execute, it recursively calls itself with only the extra
// counter incremented. So the code will execute on odd numbers, up to 10 (input table length) odd numbers.
function multiplesOdd(inputtable, output, num, count, oddCount)
{
    if(oddCount % 2 == 1)
    {
        // Check if we have cycled through the input array. If so, return the output array
        if(count == (inputtable.length))
        {
            return output;
        }

        output[count] = (num * oddCount);
    
        // recursive call to cycle through the input table
        return multiplesOdd(inputtable, output, num, count + 1, oddCount + 1);
    }
    // recursive call with only oddCount incremented
    return multiplesOdd(inputtable, output, num, count, oddCount + 1);
}

var oddTable = multiplesOdd(inputtable, oddTest, 5, count, oddCount);
console.log("Output for Question 3:");
console.log(oddTable);


//  ---------------
//  | Question #4 |
//  ---------------

var evenSumCount = 0;
var sum = 0;

// We use a sum parameter to keep the correct values, the number we want to do multiples of (7),
// the cap (100), and a counter to check if it is even or odd.
function sumEvenMultiples(output, num, cap, count)
{
    // Check if it is an even multiple
    if(count % 2 == 0)
    {
        var temp = count * num;
        if(temp > cap)
        {
            // returns the output before the new value was calculated
            return output;
        }
        else
        {
            // recursive call to continue the function with the updated sum and count
            return sumEvenMultiples(output + temp, num, cap, count + 1);
        }
    }
    return sumEvenMultiples(output, num, cap, count + 1);
}

var evenMultiples = sumEvenMultiples(sum, 7, 100, evenSumCount);
console.log("Output for Question 4:");
console.log(evenMultiples);


//  ---------------
//  | Question #5 |
//  ---------------

// curried volume function
var cylinderVolume = pi => r => h => pi * r * r * h;

var r = 5;
var h = 10;
var pi = 3.14;

// Must call curried functions with parenthesis on each individual parameter
var volume = cylinderVolume(pi)(r)(h);

console.log("Output for Question 5:");
console.log(volume);


//  ---------------
//  | Question #6 |
//  ---------------

makeTag = function(beginTag, endTag)
{
    return function(textcontent)
    {
        return beginTag +textcontent +endTag;
    }
}

var titles = [];
var set1 = [];
var set2 = [];

var sections = [];

var tab = makeTag("<table>\n", "</table>\n");
var tr = makeTag(" <tr>\n", " </tr>\n");
var th = makeTag("  <th>", "</th>\n");

// titles, set1, and set2 are arrays with all values wrapped in th tags
titles.push(th("Name"));
titles.push(th("DOB"));
titles.push(th("Sex"));

set1.push(th("Ryan"));
set1.push(th("Jan. 13"));
set1.push(th("Male"));

set2.push(th("Kylie"));
set2.push(th("May 18"));
set2.push(th("Female"));

// use .join('') to remove the commas when printing the arrays
// sections is an array of arrays that are wrapped in the tr tag
sections.push(tr(titles.join('')));
sections.push(tr(set1.join('')));
sections.push(tr(set2.join('')));

// table is an array of arrays that get wrapped in the table tag
var table = tab(sections.join(''));

console.log("Output for Question 6:");
console.log(table);


//  ----------------
//  | Extra Credit |
//  ----------------

console.log("Output for Extra Credit:");

// receive input from the user to help with the function
var evenOdd = window.prompt("[EXTRA CREDIT] Would you like even or odd multiples? [even, odd] :");
var sumTable = window.prompt("Would you like to sum the multiples or print a table? [sum, table] :");
var num = window.prompt("What number would you like to use? :");

var genericOutput = []
var genericSum = 0;

// genericMultiples will ask the user for input on [even/odd], [sum/table], and number
// we will pass those parameters in and perform the functions based on the users answers
// the function uses nested ifs to differentiate between even/odd multiples and sum/table output. 
// the function operates recursively until we hit our given cap of 100; at which point we return the results.
// GenericMultiples is a mix of code from question 3 and 4. The odd half and Even half are mirrored, with a
// single exception for the count check. (count % 2 == 1) vs (count % 2 == 0).
function genericMultiples(evenOdd, sumTable, num, output, sum, count)
{
    if(num > 100)
    {
        console.log("Invalid number. Must be in range [1-100]")
        return 0;
    }
    if(evenOdd == "odd")
    {
        if(sumTable == "sum")
        {
            if(count % 2 == 1)
            {
                var temp = num * count;
                if(temp > 100)
                {
                    return sum;
                }
                else
                {
                    sum = sum + temp;
                    return genericMultiples(evenOdd, sumTable, num, output, sum, count + 1);
                }
            }
            else
            {
                return genericMultiples(evenOdd, sumTable, num, output, sum, count + 1);
            }
        }
        else if(sumTable == "table")
        {
            if(count % 2 == 1)
            {
                var temp = num * count;
                if(temp > 100)
                {
                    return output;
                }
                else
                {
                    output.push(temp);
                    return genericMultiples(evenOdd, sumTable, num, output, sum, count + 1);
                }
            }
            else
            {
                return genericMultiples(evenOdd, sumTable, num, output, sum, count + 1);
            }
        }
        else
        {
            console.log("Invalid input for [sum, table]].");
            return 0;
        }
    }
    else if(evenOdd == "even")
    {
        if(sumTable == "sum")
        {
            if(count % 2 == 0)
            {
                var temp = num * count;
                if(temp > 100)
                {
                    return sum;
                }
                else
                {
                    sum = sum + temp;
                    return genericMultiples(evenOdd, sumTable, num, output, sum, count + 1);
                }
            }
            else
            {
                return genericMultiples(evenOdd, sumTable, num, output, sum, count + 1);
            }
        }
        else if(sumTable == "table")
        {
            if(count % 2 == 0 && count != 0)
            {
                var temp = num * count;
                if(temp > 100)
                {
                    return output;
                }
                else
                {
                    output.push(temp);
                    return genericMultiples(evenOdd, sumTable, num, output, sum, count + 1);
                }
            }
            else
            {
                return genericMultiples(evenOdd, sumTable, num, output, sum, count + 1);
            }
        }
        else
        {
            console.log("Invalid input for sum/table.");
            return 0;
        }
    }
    else
    {
        console.log("Invalid input for [even, odd]");
        return 0;
    }
}

var genericResult = genericMultiples(evenOdd, sumTable, num, genericOutput, genericSum, count);
console.log(genericResult);
console.log("All done, thanks for grading!");