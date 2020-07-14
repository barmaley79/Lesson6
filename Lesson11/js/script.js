var burg = document.getElementById('burger');

burg.onclick = function(){
  addMenu() 
}

function addMenu(){
    document.getElementById('menu').classList.toggle('show');
}
var paral = document.getElementById('container2')

$('paral').parallax({imageSrc:'Layer\ 502.png'});
$('parallax-window').parallax({imageSrc:'Layer\ 502.png'});