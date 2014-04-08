#The Position Property
Position has four values

1. _static_ (default)
2. _relative_
3. _absolute_
4. _fixed_

Except for static, eah one works together with offsets to create new positions for an element.

## position:static
Nothing too interesting going on here. You never need to write "position:static", as its the default for _all_ elements.

## position:relative
* Moves the element (with the help of offsets) relative to where it would _normally_ be in the document flow.
* Remains in the normal document flow.

## position:absolute
* Positions the element relative to its first _non static_ parent. 
* If it has no non-static parent, positions the element relative to the viewport

## position:fixed
* Like absolute, except the element stays put even when we scroll!
* Not terribly versatile, but very dramatic.

# Offsets
"Offsets" is a generic name to describe a group of four properties often used with position.
 
* top
* bottom
* left
* right

## Offset usage
Use either top OR bottom in conjunction with right OR left.

Aka, <code>top:0;right:0;</code> is fine but <code>top:0;bottom:0;</code> is broken.

Offsets only work on non-static elements.

#Z-index
Lets us stack our elements in the way we desire. Z-index values have no units, and so look like this.

<code>z-index:5;</code>

The higher the number, the more "on top" the element is, so a 10 is on top of a -3.

On that note, z-index can be negative.