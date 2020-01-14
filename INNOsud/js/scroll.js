/* scroll settings back to top  */
$(document).ready(function(){
    $(window).scroll(function(){

        if($(this).scrollTop() >100){
            $('#top').fadeIn('200');
        }else{
            $('#top').fadeOut('300');
        }
    });
    $('#top').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 2000 );
        return false;
    });
});

