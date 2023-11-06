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
        var offset = 40;
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
    Tab & Grid View Button color active
  -----------------------------------*/
    $(".tab-grid button").click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    /*-----------------------------------
    Tab vew & grid Vew Content
    -----------------------------------*/
    $(document).on("click", ".grid-view", function (){
        $(this).parent().parent().parent().parent().parent().parent().parent().find(".view-wrapper ").addClass("col-xl-12").removeClass("col-xl-4 col-lg-6 col-md-6 col-sm-12 ");
        $(this).parent().parent().parent().parent().parent().parent().parent().parent().find(".single-product ").addClass("grids-views");
    });
    $(document).on("click", ".tab-view", function (){
        $(this).parent().parent().parent().parent().parent().parent().parent().find(".view-wrapper ").removeClass("col-xl-12").addClass("col-xl-4 col-lg-6 col-md-6 col-sm-12");
        $(this).parent().parent().parent().parent().parent().parent().parent().parent().find(".single-product ").removeClass("grids-views");
    });


    /*-----------------------------------
        WOW active
    -----------------------------------*/
    new WOW().init();

    /*-----------------------------------
        Product Counter Cart Table
    -----------------------------------*/
        var incrementPlus;
        var incrementMinus;
        var buttonPlus  = $(".count-plus");
        var buttonMinus = $(".count-minus");

        var incrementPlus = buttonPlus.click(function() {
        var $n = $(this)
            .parent(".button-container")
            .parent(".productCount")
            .find(".qty");

            $n.val(Number($n.val())+1 );
        });
        var incrementMinus = buttonMinus.click(function() {
            var $n = $(this)
            .parent(".button-container")
            .parent(".productCount")
            .find(".qty");

            var amount = Number($n.val());
            if (amount > 0) {
                $n.val(amount-1);
            }
        });
		
    /*-----------------------------------
       Write Your Any JS/Jquery Syntax
    -----------------------------------*/


}(jQuery));
