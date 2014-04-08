$("header a").click(linkClicked);

function linkClicked() {
    //*this* is the <a> that was clicked on
    
    
    //$($(this).attr("href")).addClass('highlight');
    //The above line does the same as the four below.
    
    var $aLink = $(this);
    var whatImLinkingTo = $aLink.attr('href');
    var $divThatWasLinkedTo = $(whatImLinkingTo);
    $divThatWasLinkedTo.addClass('highlight');

    //setTimeout(removeHighlight, 500);
    setTimeout(function(){
        $divThatWasLinkedTo.removeClass('highlight');
    }, 500)
}

/*function removeHighlight() {
    $('.highlight').removeClass('highlight');
}*/