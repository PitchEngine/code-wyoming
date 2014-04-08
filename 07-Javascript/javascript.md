#Today's subjects
* What is programming
* Data types
    * Numbers
    * Strings
    * Booleans
* If/else
* Manipulating numbers & strings
* Variables
* functions??
#What is programming
Tie your shoes

A series of instructions for a computer
"Algorithm"

# Javascript basics

Start things out typing directly into the console of a browser (namely chrome).

Everything we type in is evaluted, like a fancy calculator

...Terrific, but what is javascript for?
* make websites respond to user interaction
* build apps and games (e.g. blackjack)
* access information on the Internet (e.g. find out the top trending words on Twitter by topic)
* organize and present data (e.g. automate spreadsheet work; data visualization)

## Numbers
#### Adding & Subtracting
<code>3 + 4</code> //=> 7
<code>4 - 3</code>
<code>3 - 4</code>
#### Multiplying & Dividing
Multiplication and division are okay too!
<code>3 * 4</code>
<code>12 / 2</code>
#### Breaking stuff
<code>50 / 0</code>
### Order of operation
What's this code evaluate to?
<code>3 * 4 - 2 + 5 * 4</code>
When in doubt, use parentheses to make your meaning clear.
<code>(( 3 * 4) - 2) + (5 * 4) </code>


## Text
Javascript isn't just a number calculator though. It can also work with letters, words, sentences, or even whole books.
Words, sentences, or text of whatever sort, all  get wrapped in quotes and are referred to as "strings", as in, "a string of characters."
They look like this
<code>"Hello world"</code>
<code>"My name is Matt"</code>
<code>"This is a string!!!"</code>
<code>"534.34"</code>//=> is that a string?
## Booleans
Computers are good at answering yes / no questions. Instead of saying yes or no, though, they say <code>true</code> and <code>false</code>.
Here's some questions you can easily ask the computer

* greater than
* less than
* equal to

Well, that's terrific, but what are they good for?
Booleans allow us to effectively turn on and off different parts of our code.

#### Booleans and numbers
For instance, "Is five greater than four?" is asked like this

<code> 5 > 4</code>  //=> <code>true</code>

Is four greater than five?

<code> 4 > 5 </code> //=> <code>false</code>

Is five equal to four plus one?

<code> 4 + 1 == 5 </code>

Pay attention to how we say "equal to". It's two equal signs, not one!

#### One last bit of math
###### Modulo 

#### Booleans and strings
What's it mean for a string to be "greater than" another string? "Less than"? Equal to?
<code>"Hello" > "Hello my dear!"</code> //=> <code>true</code>
<code>"Xena, Warrior Princess" > "Alabama"</code> //=> <code>false</code>
<code>"Dog" < "Cat"</code> //=> <code>true</code>
<code>"Lunch" > "Dinner"</code> //=> <code>false</code>

##Properties
"How long is this sentence?".length

##Comments
// and /* */

#Where does Javascript go?
Into &lt;script&gt; tags!

#Doing things
Drive a car
I want to alert the user!
Prompt the user!

##Methods & Input
alert
prompt
confirm
console.log

#Flow control
## Blocks
Javascirpt syntax: {}

## If
if (this condition is true) 
{
    // do this code
}
else // "otherwise"
{
    // do this code instead
}

# String methods
##substring(from, to)
"Just show the first ten characters".substring(0,10)
ASIDE: Computers count from 0
##charAt
##indexOf
