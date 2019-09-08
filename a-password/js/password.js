$(document).ready(function() {

    $('.password .unlock').click(function(e) {
        var passwordDiv = $(this).parent();
        if(passwordDiv.children('input').val()=='twinkle') {
            window.location = '../a-twinkle/twinkle.html';
        }else{
            passwordDiv.addClass('false');
            setTimeout(function() {
                passwordDiv.removeClass('false');
            }, 2500);
        }
    })

    $('input').keypress(function(e) {
        if(e.keyCode == 13){
            var passwordDiv = $(this).parent();
            if(passwordDiv.children('input').val()=='twinkle') {
                window.location = '../a-twinkle/twinkle.html';
            }else{
                passwordDiv.addClass('false');
                setTimeout(function() {
                    passwordDiv.removeClass('false');
                }, 2500);
            }
        }
    })

});