(function($) {

    "use strict";

    /*Page Loader active
    ========================================================*/

    //===== Prealoder

    $(window).on('load', function(event) {
        $('#preloader').delay(0.1).fadeOut(500);
    });

    //===== Sticky

    $(window).on('scroll', function(event) {
        var scroll = $(window).scrollTop();
        if (scroll < 20) {
            $(".navigation").removeClass("sticky");
        } else {
            $(".navigation").addClass("sticky");
        }
    });

    //===== Section Menu Active

    var scrollLink = $('.page-scroll');
    // Active link switching
    $(window).scroll(function() {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function() {

            var sectionOffset = $(this.hash).offset().top - 73;

            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });
    });

    //===== close navbar-collapse when a  clicked

    $(".navbar-nav a").on('click', function() {
        $(".navbar-collapse").removeClass("show");
    });

    //===== Mobile Menu

    $(".navbar-toggler").on('click', function() {
        $(this).toggleClass("active");
    });

    $(".navbar-nav a").on('click', function() {
        $(".navbar-toggler").removeClass('active');
    });

    /* ==========================================================================
       countdown timer
       ========================================================================== */
    jQuery('#clock').countdown('2022-09-1 16:00', function(event) {
        var $this = jQuery(this).html(event.strftime('' + '<div class="time-entry days"><span>%-D</span> Days</div> ' + '<div class="time-entry hours"><span>%H</span> Hours</div> ' + '<div class="time-entry minutes"><span>%M</span> Minutes</div> ' + '<div class="time-entry seconds"><span>%S</span> Seconds</div> '));
    });

    /* WOW Scroll Spy
    ========================================================*/
    var wow = new WOW({
        //disabled for mobile
        //mobile: false
        mobile: true


    });
    wow.init();



    /* Nivo Lightbox
    ========================================================*/
    $('.lightbox').nivoLightbox({
        effect: 'fadeScale',
        keyboardNav: true,
    });

    /* Back Top Link active
    ========================================================*/

    // Show or hide the sticky footer button
    $(window).on('scroll', function(event) {
        if ($(this).scrollTop() > 900) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });

    //Animate the scroll to yop
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });

}(jQuery));


// COPY TO CLIPBOARD
// Attempts to use .execCommand('copy') on a created text field
// Falls back to a selectable alert if not supported
// Attempts to display status in Bootstrap tooltip
// ------------------------------------------------------------------------------

function copyToClipboard(text, el) {
  var copyTest = document.queryCommandSupported('copy');
  var elOriginalText = el.attr('data-original-title');

  if (copyTest === true) {
    var copyTextArea = document.createElement("textarea");
    copyTextArea.value = text;
    document.body.appendChild(copyTextArea);
    copyTextArea.select();
    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'Copied!' : 'Whoops, not copied!';
      el.attr('data-original-title', msg).tooltip('show');
    } catch (err) {
      console.log('Oops, unable to copy');
    }
    document.body.removeChild(copyTextArea);
    el.attr('data-original-title', elOriginalText);
  } else {
    // Fallback if browser doesn't support .execCommand('copy')
    window.prompt("Copy to clipboard: Ctrl+C or Command+C, Enter", text);
  }
}

$(document).ready(function() {
  // Initialize
  // ---------------------------------------------------------------------

  // Tooltips
  // Requires Bootstrap 3 for functionality
  $('.js-tooltip').tooltip();

  // Copy to clipboard
  // Grab any text in the attribute 'data-copy' and pass it to the
  // copy function
  $('.js-copy').click(function() {
    var text = $(this).attr('data-copy');
    var el = $(this);
    copyToClipboard(text, el);
  });
});
