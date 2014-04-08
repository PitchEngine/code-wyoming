#Exercise 1 --- Area of a Circle
Write a program that calculates the area of a circle from the radius. The radius will be an integer read in from the keyboard. You will need to use <code>Math.PI</code> 

#Exercise 2 --- Cents to Dollars
Write a program that reads in a number of cents. The program will write out the number of dollars and cents, like this:
Input the cents: 324 That is 3 dollars and 24 cents.
###Hint:
You need Math.floor(*number*) to round a number down to an integer, and you'll use <code>% 100</code> to get the pennies

# Pie Eating Contest!
At the local heavyweight pie eating contest, contestants must weigh within 30 pounds of 250. 
Ask the contestant for their weight and let them know if they're eligible.
ie, "Your weight:" 220 //true
"Your weight:" 219 //false
"Your weight:" 280 //true

# Discount Prices
During a special sale at a store, a 10% discount is taken on purchases over $10.00. Write a program that asks for the amount of purchases, then calculates the discounted price.
Amount of purchases: 2000
Discounted price: 1800

# MAX
Write a function, max(a, b), that takes two inputs and returns the largest.

# Rock Paper Scissors Revisited
Can you rewrite your compare function so that it only uses the return keyword once?

# Last Chance Gas
Al's Last Chance Gas station sits on route 190 on the edge of Death Valley. There is no other gas station for 200 miles. You are to write a program to help drivers decide if they need gas. The program asks for:

The capacity of the gas tank, in gallons
The indication of the gas gauge in percent (full= 100, three quarters full = 75, and so on)
The miles per gallon of the car.
The program then writes out "Get Gas" or "Safe to Proceed" depending on if the car can cross the 200 miles with the gas remaining in the tank.
Tank capacity: 12
Gage reading: 50
Miles per gallon: 30
Get Gas!


# Correct Change
When cashiers in a store give you change they try first try to "fit" dollars into the amount you get back, then try to "fit" quarters (25 cent coins) into what is left over, they try to "fit" dimes (10 cent coins) into what is now left over, then try to "fit" nickels (5 cent coins) into what is left, and finally are left with a few odd cents. For example, say that your change is 163 cents:
One dollar fits into 163, leaving 63 cents.
Two quarters fit into 63 cents, leaving 13 cents.
One dime fits into 13 cents, leaving 3 cents.
No nickels are needed.
Three cents are left.Your change is : 1 dollar, two quarters, one dime, and three cents.

Write a program that reads change due to a user (in cents) and writes out how many dollars, quarters, dimes, nickels, and pennies she is due. If you are stuck, it will help to do an example problem with paper and pencil.

Also, you're going to need to use a bunch of variables..

# Order Checker
Bob's Discount Bolts charges the following prices:
5 cents per bolt
3 cents per nut
1 cent per washer
Write a program that asks the user for the number of bolts, nuts, and washers in their purchase and then calculates and prints out the total. As an added feature, the program checks the order. It is usually a mistake if there are more bolts than nuts. In this case the program writes out "Check the Order." Otherwise the program writes out "Order is OK." In either case the total price is written out.
Number of bolts: 12
Number of nuts: 8
Number of washers: 24

Check the Order

Total cost: 108

#Age Calculator

Ask the user for two inputs
1) The year they were born
2) The current year
Both should be given with just the last two digits, ie
1999 -> 99
so
"What year were you born?" 62
"What year is it?" 99
Given that, tell the user how old they are
###Age Calc: Moar
Add yet another series of prompts that asks the user for what month they were born, what month it is, and be more precise with their age.
(If I was born in December 2000 and it's August 2011, I'm not 11 yet...)