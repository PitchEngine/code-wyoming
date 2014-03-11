Table of Contents
=================

Tools used in the class
------------------
* Google Chrome
* Brackets
* Git
* Github
* The Command Prompt

Core Concepts
------------------
* Internet
* Browsers & Servers
* Protocols?
* URL, URI, File Structure
* HTML

HTML Basics
-----------------
### Building Blocks
* tag / element
* attribute

### Template
* Doctype
* Page Template
* html
* head
* body
* Build a basic site

### Fundamental Elements
* Heading
* Paragraph
* Line Break
* Horizontal Rule
* Blockquote
* Phrase Elements
* Ordered Lists
* Unordered Lists
* Description Lists
* Special Characters
* Structural Elements (Div & Friends)
* Anchor

Web Design Basics
-----------------
* Use of text
* Wireframes & Page Layout
* Fixed & Fluid Layouts
* Mobile Web Design
* Response Web Design

CSS
-----------------
### Overview
* CSS
* CSS3
* CanIUse

### Basics
* Selectors & Rules
* Colors (no opacity)
* Inline CSS
* Embedded CSS
* External CSS

### Selectors
* Class
* Id
* Descendant

### Aside
* Naming things
* DRY
* span

Img
----------
* Formats
* File size
* Attributes
* Foreign/local
* Linking imgs

Project Setup
-----------------
* Keeping your working environment clean and crisp
* folders
* index.html

Styling Fundamentals
---------------
### Background Images
* url
* used with background-color
* background-repeat
* background-position
* background-size
* multipe images

### List Markers
* type
* image
* position

### Font & Text CSS
#### Size values
* px
* em
* %

#### Display Properties
* font-family
* font-size
* font-weight
* font-style
* text-transform
* line-height

#### Alignment and indentation
* text-align
* text-indent

### Dimensions
* width
* height
* min-, max-

### Box Model
* Box model
* TRBL

### Margin & Padding
* shorthand
* TRBL

### Borders
* width
* style
* color
* shorthand
* border-TRBL
* Border Radius

### Centering Content
* margin: auto

### Box Shadow & Text Shadow
* box-shadow
* text-shadow

### Opacity
* opacity
* rgba
* hsla

### Linear Gradient
* linear-gradient
* deg, to _direction_
* browser-specific settings

### Link Pseudo Classes
* LVHFA

Page Layout with CSS
--------------------
* Overflow
* Flow
* float
* display
* position


Advanced Pseudo Classes & Selectors
--------------------
* Before & After
*

Advanced Styles
----------------
* transform
* transition


Out-of-scope Topics
---------------
* Bootstrap
* Angular
* Node





Class Tools
=================
[Google Chrome][Chrome]
---------------
A browser with powerful developer tools that help us see inside our code.

[Brackets][Brackets]
----------
A web development IDE that plugs right into Chrome. We additionally use the following extensions.

Plugins we use:

* Beautify
   Helps us keep our code well formatted, making it easier to read and find mistakes.
* Emmet
   Makes writing html go much, much quicker.
   Don't use it until you have a grasp of how to do html by hand, though.
* Brackets Git
   Integrates Git(below) with Brackets

[Git][Git]
----------
Git is a popular version control tool that every web developer needs to know how to use.

We use Git to keep track of our projects' histories. That allows us to try new things without worrying about breaking something that works.
We also use Git, in combination with GitHub (see below), to easily share and collaborate on our projects.

[GitHub][GitHub]
-----------
From the GitHub website:
    GitHub is the best place to share code with friends, co-workers, classmates, and complete strangers. Over four million people use GitHub to build amazing things together.

GitHub is powered by Git. Git and GitHub combine to keep the world of web development running smoothly. It's a must-know for web developers, and free to use.

We use GitHub to share our code with each other, and to collaborate on projects.

The Command Prompt
------------------
The command prompt is what you see "hackers" typing into in movies.

![Command Prompt][prompt]

It's the quickest, most powerful way to interact with developer tools like Git.
The command prompt will also reinforce file system naviation.


Core Concepts
=================
Protocol
-----------

* SMTP / POP / IMAP
* HTTP
* FTP
* TCP/IP
* IP & IPv6

URLs
-----------
http://www.example.com/stuff/index.html
### Five parts:
1. protocol (http)
2. server name / subdomain (www)
3. domain name (example.com)
4. folder name (stuff)
5. file name (index.html)

### TLDs
.com, .org, and .net are on an "honor" system - no one's making sure you're actually a non-profit.
### DNS
Associates IP addresses domain names

HTML
----------
HyperText Markup Language
#### Hypertext
#### Markup Languages

### HTML5



HTML
===================
Template
--------------
Fundamentals
--------------
### Line Break
Line breaks aren't for general purpose formatting. Instead, they are for text that belongs together in a single paragraph tag, but that thematically needs to be on separate lines.
Examples are:

* Poetry
* Addresses

<pre class="language-html">

    Mozilla Foundation<span class="tag">br</span>

    1981 Landings Drive<span class="tag">br</span>

    Building K<span class="tag">br</span>

    Mountain View, CA 94043-0801<span class="tag">br</span>

    USA
</pre>
[Example via](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br "Mozilla Developer Network - Line Break")

### Horizontal Rule
    In HTML5, the horizontal rule element represents a thematic break between paragraph-level elements (for example, a change of scene in a story, or a shift of topic with a section)

[via](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr "MDN - Horizontal Rule")


### Blockquote



[brackets]: http://brackets.io       "Adobe Brackets"
[chrome]: http://google.com/chrome   "Google Chrome"
[git]: http://git-scm.com/           "Git Source Control Manager"
[github]: http://github.com          "GitHub"
[prompt]: ./laetus-research-src-1.png "Command Prompt"
