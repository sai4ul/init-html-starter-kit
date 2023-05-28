/*----------------------------------------------
    Index Of Script
------------------------------------------------

    @version  :	1.0.0
    @author   : initTheme
    @url 	  : https://themeforest.net/user/inittheme
    

    :: Preloader                      
    :: Data-background                :: Back To TOP
    :: Nice Scroll js                 :: Mouse Cursor
    :: slick Nav                      :: SelectPricing & Tag
    :: WOW active                     :: Nab Pricing Nav
    :: Sticky And Scroll Up           :: Product Counter Cart Table
    :: select 2                       :: Hover section Tilt Effect
    :: Nice Scroll                    :: Documentation sidebar

------------------------------------------------
    End-of Script
------------------------------------------------*/

(function ($) {
    "use strict";

    /*----------------------------------------------
        Preloader
    ----------------------------------------------*/
    $(window).on('load', function () {
        $('#preloader-active').delay(450).fadeOut('slow');
        $('body').delay(450).css({
            'overflow': 'visible'
        });
        var counter = 0;
        var c = 0;
        var i = setInterval(function () {
            $(".loading-page .counter .number").html(c + "%");
            $(".loading-page .counter .line").css("width", c + "%");

            counter++; c++;
            if (counter == 101) {
                clearInterval(i);
            }
        }, 10);
    });

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
    // (function(){
    //     var progressPath = document.querySelector('.progressParent path');
    //     var pathLength = progressPath.getTotalLength();
    //     progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    //     progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    //     progressPath.style.strokeDashoffset = pathLength;
    //     progressPath.getBoundingClientRect();
    //     progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
    //     var updateProgress = function () {
    //     var scroll = $(window).scrollTop();
    //     var height = $(document).height() - $(window).height();
    //     var progress = pathLength - (scroll * pathLength / height);
    //     progressPath.style.strokeDashoffset = progress;
    //     }
    //     updateProgress();
    //     $(window).scroll(updateProgress);	
    //     var offset = 50;
    //     var duration = 550;
    //     jQuery(window).on('scroll', function() {
    //     if (jQuery(this).scrollTop() > offset) {
    //         jQuery('.progressParent').addClass('rn-backto-top-active');
    //     } else {
    //         jQuery('.progressParent').removeClass('rn-backto-top-active');
    //     }
    //     });				
    //     jQuery('.progressParent').on('click', function(event) {
    //     event.preventDefault();
    //     jQuery('html, body').animate({scrollTop: 0}, duration);
    //     return false;
    //     })
    // })();

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
        Nab Pricing Nav
    -----------------------------------*/
    $('.tab-menu li a').on('click', function(){
        var target = $(this).attr('data-rel');
        $('.tab-menu li a').removeClass('active');
        $(this).addClass('active');
        $("#"+target).fadeIn('slow').siblings(".singleTab-items").hide();
        return false;
    });

        
    /*-----------------------------------
        slick Nav
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


    /*----------------------------------------------
        Documentation sidebar
    ----------------------------------------------*/
    $(document).on('click', '.close-sidebar, .sidebar-body-overlay', function() {
        $('.panel-sidebar-close, .panel-sidebar, .sidebar-body-overlay').removeClass('active');
    });
    $(document).on('click', '.sidebar-icon', function() {
        $('.panel-sidebar-close, .panel-sidebar, .sidebar-body-overlay').addClass('active');
    });


    /*----------------------------------------------
        Documentation Chick Menu
    ----------------------------------------------*/
    $(document).on('click', '.doc-list-wrapper .single-list .items', function() {
        $('.doc-list-wrapper .single-list .items').removeClass('selected');
    });
    $(document).on('click', '.doc-list-wrapper .single-list .items', function() {
        $(this).addClass('selected');
    });





    /*----------------------------------------------
        html2canvas
    ----------------------------------------------*/
    $('#bill-download').on('click', function () {
      var downloadSection = $('#download-section');
      var cWidth = downloadSection.width();
      var cHeight = downloadSection.height();
      var topLeftMargin = 0;
      var pdfWidth = cWidth + topLeftMargin * 2;
      var pdfHeight = pdfWidth * 1.5 + topLeftMargin * 2;
      var canvasImageWidth = cWidth;
      var canvasImageHeight = cHeight;
      var totalPDFPages = Math.ceil(cHeight / pdfHeight) - 1;
  
      html2canvas(downloadSection[0], { allowTaint: true }).then(function (
        canvas
      ) {
        canvas.getContext('2d');
        var imgData = canvas.toDataURL('image/png', 1.0);
        var pdf = new jsPDF('p', 'pt', [pdfWidth, pdfHeight]);
        pdf.addImage(
          imgData,
          'PNG',
          topLeftMargin,
          topLeftMargin,
          canvasImageWidth,
          canvasImageHeight
        );
        for (var i = 1; i <= totalPDFPages; i++) {
          pdf.addPage(pdfWidth, pdfHeight);
          pdf.addImage(
            imgData,
            'PNG',
            topLeftMargin,
            -(pdfHeight * i) + topLeftMargin * 0,
            canvasImageWidth,
            canvasImageHeight
          );
        }
        pdf.save('download.pdf');
      });
    });
  




}(jQuery));
