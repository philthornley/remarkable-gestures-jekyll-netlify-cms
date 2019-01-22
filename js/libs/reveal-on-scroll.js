$(document).ready(function() {
    console.log('Hello1');
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    console.log('Hello');
        /* Check the location of each desired element */
        $('.reveal__fade').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it in */
            if( bottom_of_window > bottom_of_object ){
                $(this).addClass("reveal__fade-now");                
                //$(this).animate({'opacity':'1'},1000);
                    
            }
            
        }); 
        
        /* Check the location of each desired element */
        $('.reveal__rotate').each( function(r){
            
           var bottom_of_object = $(this).position().top + $(this).outerHeight();
           var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            
            /* If the object is completely visible in the window, fade it in */
           if( bottom_of_window > bottom_of_object ){
              $(this).addClass("reveal__rotate-now");                
              $(this).animate({'opacity':'1'},1000);
                    
           }
            
        }); 
    
    });
    
});