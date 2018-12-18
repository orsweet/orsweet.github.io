$(document).ready(function() {

    $('.password .unlock').click(function(e) {
        var passwordDiv = $(this).parent();
        if(passwordDiv.children('input').val()=='twinkle') {
            window.location = 'home/home.html';
        }else{
            passwordDiv.addClass('false');
            setTimeout(function() {
                passwordDiv.removeClass('false');
            }, 2500);
        }
    })

});