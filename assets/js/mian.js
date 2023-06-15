/*----------------------------------------------
    Index Of Script
------------------------------------------------

    @version  :	1.0.0
    @author   : SAIFUL ISLAM
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
        Mouse Cursor
    -----------------------------------*/
    var myCursor = $('.mouseCursor');
    if (myCursor.length) {
        if ($('body')) {
            const e = document.querySelector('.cursorInner'),
                t = document.querySelector('.cursorOuter');
            let n, i = 0,
                o = !1;
            window.onmousemove = function (s) {
                o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
            }, $('body').on("mouseenter", "a, .cursor-pointer", function () {
                e.classList.add('cursor-hover'), t.classList.add('cursor-hover')
            }), $('body').on("mouseleave", "a, .cursor-pointer", function () {
                $(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove('cursor-hover'), t.classList.remove('cursor-hover'))
            }), e.style.visibility = "visible", t.style.visibility = "visible"
        }
    }
    
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
