(function() {
  // Add event listener
  document.addEventListener("mousemove", parallax);
  const elem = document.querySelector("#parallax");

  // const lg = elem.className += 'position-lg';
  // const md = elem.className += 'position-md';
  // const sm = elem.className += 'position-sm';
 

  // Magic happens here
  function parallax(e) {
      let _w = window.innerWidth/2;
      let _h = window.innerHeight/2;
      let _mouseX = e.clientX;
      let _mouseY = e.clientY;
      let _depth1 = `${45 - (_mouseX - _w) * 0.002}% ${80 - (_mouseY - _h) * 0.002}%`;
      let _depth2 = `${90 - (_mouseX - _w) * 0.003}% ${15 - (_mouseY - _h) * 0.003}%`;
      let _depth3 = `${15 - (_mouseX - _w) * 0.001}% ${13 - (_mouseY - _h) * 0.001}%`;
      let x = `${_depth3}, ${_depth2}, ${_depth1}`;
      //console.log(x);
      elem.style.backgroundPosition = x;
  }
  if ( document.getElementsByClassName("position-xs")) {
    
  } else {
    
  }

})();

 

if($(window).width() < 767)
{
  document.getElementById("parallax").className += 'position-xs';       
} else if($(window).width() > 768 || $(window).width() < 991){
  document.getElementById("parallax").className += 'position-sm';       
}
else if($(window).width() > 992 || $(window).width() < 1199){
  document.getElementById("parallax").className += 'position-md';       
}
else if($(window).width() > 1200){
  document.getElementById("parallax").className += 'position-lg';       
}

$(window).scroll(function() {
  if ($(this).scrollTop() > 50 ) {
      $('.scrolltop:hidden').stop(true, true).fadeIn();
  } else {
      $('.scrolltop').stop(true, true).fadeOut();
  }
});
$(function(){$(".scroll").click(function(){$("html,body").animate({scrollTop:$("body").offset().top},"1000");return false})})