//GLOBAL!
var students = [];
//Functions
function alert(msg) {
    $('#alert').text(msg).fadeIn('fast');
    setTimeout(function () {
        $('#alert').fadeOut('slow');
    }, 4000);
}

function addStudent(name) {
    if (students.indexOf(name) != -1) {
        alert("Student already in class.")
    } else {
        //Add the student li
        $newStudent = $('<li><span>' + name + '</span><button>Delete</button></li>');
        //Make it clickable
        $newStudent.find('button').click(removeStudent);
        //Add it to the DOM
        $('#students').append($newStudent);
        //Add the new name to the array of students
        students.push(name);

        updateCount();
    }
}

function removeStudent() {
    var $btn = $(this);
    //dom manip
    var name = $btn.parent().find('span').text();
    $btn.parent().fadeOut('slow');
    alert($btn.parent().find('span').text() + " removed from class.");
    //model manip
    students.splice(students.indexOf(name), 1);

    updateCount();
}

function updateCount() {
    console.log('hi')
    $('#counter span').text(students.length);
}

function addClick() {
    var $input = $('input[type="text"]');
    if ($input.val()) {
        addStudent($input.val());
        $input.val('');

    }
}

function main() {
    $.each(['Brad', 'Justin', 'Marc', 'Crystal'], function (i, v) {
        addStudent(v);
    });

    $('input + button').click(addClick);

    $('input').keydown(function (e) {
        if (e.keyCode == 13) {
            addClick();
        }
    });
}

main();