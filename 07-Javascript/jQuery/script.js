function hide(){
    var $btn = $(this);
    var $student = $btn.parent();
    $student.hide();
}
$('#students button').click(hide);