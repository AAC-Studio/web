
 $(document).ready(function(){
  $(function(){
    $(".typed").typed({
      strings: [ "Developers ", "Designers ", "Design And Develop "],
      // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
      stringsElement: null,
      // typing speed
      typeSpeed: 30,
      // time before typing starts
      startDelay: 1200,
      // backspacing speed
      backSpeed: 20,
      // time before backspacing
      backDelay: 500,
      // loop
      loop: true,
      // false = infinite
      loopCount: 5,
      // show cursor
      showCursor: false,
      // character for cursor
      cursorChar: "|",
      // attribute to type (null == text)
      attr: null,
      // either html or text
      contentType: 'html',
      // call when done callback function
      callback: function() {},
      // starting callback function before each string
      preStringTyped: function() {},
      //callback for every typed string
      onStringTyped: function() {},
      // callback for reset
      resetCallback: function() {}
    });
  });
  
  $('.count').each(function () {
         $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 3000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
  });
  $('.slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots:false,
    navText: [
      "<i class='fa fa-caret-left'></i>",
      "<i class='fa fa-caret-right'></i>"
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 2
      }
      
    }
  })
  
})
$('.latest-bolg-slider').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots:false,
  navText: [
    "<i class='fa fa-angle-left'></i>",
    "<i class='fa fa-angle-right'></i>"
  ],
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    }

  }
})
$('.project-slider').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots:false,
  navText: [
    "<i class='fa fa-long-arrow-left'></i>    ",
    "<i class='fa fa-long-arrow-right'></i>"
  ],
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    }

  }
})
$(window).scroll(function(){
  if ($(window).scrollTop() >= 30) {
      $('header').addClass('sticky');
      $('nav div #header-logo').addClass('hidden-logo');
      $('nav div #header-logo1').addClass('visibile-logo');
      
  }
  else {
      $('header').removeClass('sticky');
      $('nav div  #header-logo').removeClass('hidden-logo');
      $('nav div  #header-logo1').removeClass('visibile-logo');
    
  }
});
$(window).scroll(function(){
  if ($(window).scrollTop() >= 30) {
      $('header-1').addClass('sticky');  
  }
  else {
      $('header-1').removeClass('sticky');  
  }
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 50 ) {
      $('.scrolltop:hidden').stop(true, true).fadeIn();
  } else {
      $('.scrolltop').stop(true, true).fadeOut();
  }
});
$(function(){$(".scroll").click(function(){$("html,body").animate({scrollTop:$("body").offset().top},"1000");return false})})


