var burg = document.getElementById('burger');

burg.onclick = function(){
  addMenu() 
}

function addMenu(){
    document.getElementById('menu').classList.toggle('show');
}

/*$('.parallax-window').parallax({imageSrc:'Layer\ 502.png'});*/

$(window).scroll(function(){
  parallax();
})
function parallax() {
  var wScroll = $(window).scrollTop();
  $('.parallax-window').css('background-position','right '+(wScroll*0.75)+'px')
}
