#Box Model
##Rectangles
Applies to all elements

Is a rectangular or "box" of four parts
1. Content
2. Padding
3. Border
4. Margin

## Design & Display
Box Model is how we do layout. 
Elements naturally have two displays.
1. Block
2. Inline

### Block elements
Form a separate block that takes up the full width of a page
Newline before and after each block element
* div
* paragraph
* headings
* list elements

### Inline elements
Only takes up as much width as it needs
Do not force any new lines: stay "inline" with the rest of the document
Stay in line
* span
* img
* strong
* anchor

## Padding, borders, margins
These are the properties that wrap the content area in the "box". They interact with each other to build the finished product

### Padding
Wraps the content, pushes out the border. Shares background with the content

### Border
Outer-most part of the box, optional. Thickness, type, color can all be applied.

### Margin
Exists outside the box
The space outside the element that separates it from other elements.

## Dev tools: Metrics pane

### Padding again
Values can be lengths or percentages, no negatives
Can be specified per side, ala
*padding-top:
*padding-right:
*padding-bottom:
*padding-left:
Or to cut down on repeating yourself, use *padding*:, a shorthand property.

## Shorthand properties
*Single value: all sides
* Two Values: Top-bottom, left-right
* Three values: Top, left-right, bottom
* Four values: Top, right, bottom, left

### Borders
* border-width:
* border-style
* border-color

#### Border-width
 * keyword (thin, med, thick)
 * length
 * no negatives
 * no % (def: med)
 * can specify each side

#### Border-style
* none (default)
* dotted, dash, solid
* Can also be per-side

#### Border-color
* Any color vaues (keywords, hex, rgba, hsla)
* border-top-color, border-right-color, border-bottom-color, border-top-color
* Border-color shorthan
* Border color inherits from color

### Margin
* Shorthand or per-side
* Lengths, %, negative okay!
* Margins only appear on block or inline-block elements

#### Negative margins
* Top or left: Pulls the element
* Bottom or right: moves its containing parent
* See [smashing magazine]([http://coding.smashingmagazine.com/2009/07/27/the-definitive-guide-to-using-negative-margins/)
#### Auto margin
* Need to specify a width to use margin




# Width, height, display
## Display
* none
* block
* inline
* inline block

### none
Cloak of invisibility! Takes up no space.

### Block
Default for block elements. Generate a block level block with no 

### Inline block
Can't have negative top and bottom margins

## Visibility
Hidden: like display:none, but still affects document. 
Can use visibility:visible

## Width & Height
By default, wide and tall enough to hold content
### Values
* Lengths (px, em)
* Percentages

#### On percentages
* Can't use height percentage unless parent has explicit height

### Calculating a box's size
* Width & height are only applied to content
* Must add padding & border.

## Making a perfectly sized box
* Do annoying math
* Or use box-sizing:border-box;

## Aside: browser prefixes

## Min & max values

## Max-height causes overflow

## Overflow
* Overflow: visible (default), hidden, scroll, auto



