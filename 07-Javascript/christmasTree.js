var input = 2;//making sure the while loop is false to start with
while (input % 2 == 0) {
    input = prompt("Give me an odd number");
}
function spaces(count) {
    return loopedString(count, " ");
}
function stars(count) {
    return loopedString(count, "*");
}
function loopedString(count, str) {
    if (count == 0) {
        return "";
    }
    for (var retval = ""; retval.length < count; retval += str) {}
    return retval;
}
var out = "";
var columns = parseInt(input);
var lines = (columns+1)/2;
for(var l = 0; l < lines; l++){
    var numSpaces = lines-l;
    var numStars = 2*l+1;
    out+=spaces(numSpaces) + stars(numStars) + spaces(numSpaces) + "\n";
}
console.log(out);