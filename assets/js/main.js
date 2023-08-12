/*----------------------------------------------
    Index Of Script
------------------------------------------------

    @version  :	1.0.0
    @author   : sai4ul
    @url 	  : https://github.com/sai4ul/init-html-starter-kit
    
                    
    :: Data-background               
    :: slick Nav                      
    :: Sticky And Scroll Up           
    :: Back To TOP      
    :: Mouse Cursor
    :: WOW active                    

------------------------------------------------
    End-of Script
------------------------------------------------*/

(function ($) {
    "use strict";

    /*----------------------------------------------
        Data-background
    ----------------------------------------------*/
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });


    /*----------------------------------------------
        Sticky And Scroll Up 
    ----------------------------------------------*/
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 400) {
            $(".header-sticky").removeClass("sticky-bar");
            $('#back-top').fadeOut(500);
        } else {
            $(".header-sticky").addClass("sticky-bar");
            $('#back-top').fadeIn(500);
        }
    });

    /*-----------------------------------
        Back To TOP
    -----------------------------------*/
    (function(){
        var progressPath = document.querySelector('.progressParent path');
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
        var updateProgress = function () {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
        }
        updateProgress();
        $(window).scroll(updateProgress);	
        var offset = 50;
        var duration = 550;
        jQuery(window).on('scroll', function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.progressParent').addClass('rn-backto-top-active');
        } else {
            jQuery('.progressParent').removeClass('rn-backto-top-active');
        }
        });				
        jQuery('.progressParent').on('click', function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
        })
    })();

    
    /*-----------------------------------
        Slick Nav
    -----------------------------------*/
    var menu = $('ul#navigation');
    if(menu.length){
        menu.slicknav({
            prependTo: ".mobile_menu",
            closedSymbol: '+',
            openedSymbol:'-'
        });
    };


    /*-----------------------------------
        WOW active
    -----------------------------------*/
    new WOW().init();


    /*-----------------------------------
       Write Your Any JS/Jquery Syntax
    -----------------------------------*/


}(jQuery));
