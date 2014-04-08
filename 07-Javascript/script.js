var interests = ['Climbing', 'Coding', 'Skiing', 'Yoga-ing'];

function addInterest() {
    var $input = $('#intest_in')
    if ($input.val()) {
        interests.push($input.val());
    }
    input.val("");
    showInterests();
}

function showInterests() {
    var html = "<ul>";
    for (var i = 0; i < interests.length; i++) {
        html += "<li>" + interests[i] + "</li>"
    }
    html += "</ul";
    var $displayBox = $("#interests_display");
    $displayBox.html(html);
}
showInterests();