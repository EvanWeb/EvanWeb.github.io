$(document).ready(function() {
    $(window).scroll( function(){
        $('.fadeinleft').each( function(i){
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-left':'0px'},1000);
            }
        }); 
    });
});

$(document).ready(function() {
    $(window).scroll( function(){
        $('.fadeinright').each( function(i){
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-left':'0px'},1000);
            }
            
        }); 
    });
});