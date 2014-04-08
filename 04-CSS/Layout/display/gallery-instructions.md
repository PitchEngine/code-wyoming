#Get your content on the page!
* Four list items (one for each image in the gallery)
* Each item contains
    1. A thumbnail image
    2. A full-sized image
    3. A caption for the full size image
* We need a way to talk about the full-size image and the caption together in our css. How do we do that?

# Style it!
1. Remove the dots from the list, those are ugly (hint: list-style)
2. Make the big images and the captions disappear (hint: display:none)
3. Make the big images reappear when we hover over their li parent (hint:   li:hover)
4. Make the big images position themselves in the right place (use <code>position:absolute;</code> and the <abbr title="Top Right Bottom Left">TRBL</abbr> offsets)

##My images are too big!
You can give classes to your thumbnails, for instance, class="thumb" and style them like this:

<code>.thumb { width:150px; height: auto}</code>

Do something similar for your full-size image. the "<code>height:auto</code>" bit keeps our image's aspect ratio correct