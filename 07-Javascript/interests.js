var interests = ['Climbing', 'Coding', 'Skiing', 'Yoga-ing'];

function addInterest() {
    var input = document.getElementById('interest_in');
    if (input.value) {
        interests.push(input.value);
    }
    input.value = "";
    showInterests();
}

function showInterests() {
    var html = "<ul>";
    for (var i = 0; i < interests.length; i++) {
        html += "<li>" + interests[i] + "</li>"
    }
    html += "</ul";
    var displayBox = document.getElementById("interests_display");
    displayBox.innerHTML = html;
}