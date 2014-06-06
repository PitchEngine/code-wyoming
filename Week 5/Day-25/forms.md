#Forms

##The Form Element

* action:
        URL or file name/path for server-side processing script
        
        Alternatively, use "mailto" to open the user's default email client with your info
* method: get / post
* autocomplete: on/off (html5)

## Form Controls

### Form control attributes
* name
* value
* readonly
* required (html5)
* placeholder (html5)

### Input

##### Input "type"
* text (default)
* checkbox
* hidden
* password
* radio
* reset
* submit
* button
* email (html5)

#### Radio, Checkbox

* checked

#### Buttons
In ye old times, inputs were used as buttons. Now, we have the button element.

type
The type of the button. Possible values are:
submit: The button submits the form data to the server. This is the default if the attribute is not specified, or if the attribute is dynamically changed to an empty or invalid value.
reset: The button resets all the controls to their initial values.
button: The button has no default behavior. It can have client-side scripts associated with the element's events, which are triggered when the events occur.

Value is the text to be shown on the btn


### Textarea
opens & closes!

### Select & Option
####Select

* name
* visible (defaults to 1)

* Select has the name
* Options have the values
* Text inside option is displayed to user

## Label
Uses "for" to link to IDs of form controls

## Fieldset & Legend elements
### Fieldset
Groups fields together in a lovely box
### Legend
A heading for each fieldset. Should be the first thing in a fieldset (it's optional though)
