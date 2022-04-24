
var slideIndex = 1;

showSlides(slideIndex);



function plusSlides(n) {
  showSlides(slideIndex += n);
}


function showSlides(n) {
  var i;
  var img = document.getElementsByClassName("mySlides");
  if (n > img.length) {slideIndex = 1}
  if (n < 1) {slideIndex = img.length} ;
  for (i = 0; i <img.length; i++) {
    img[i].style.display = "none";
  }
  img[slideIndex-1].style.display = "block";

}

var stop;
function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
   stop=setTimeout(carousel, 1500); 
  
}

function stopSlide()
{
    clearTimeout(stop);
}
