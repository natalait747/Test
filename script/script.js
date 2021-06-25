var slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("carousel");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1;}
  if (n < 1) {slideIndex = slides.length;  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display ="none" ;
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
   }
   slides[slideIndex-1].style.display = " block"; 
   dots[slideIndex-1].className += " active";
  };
  /*var widthImg=760;
  var bisness=1321;
  function maxImg(){
    sizeImg(widthImg*1.10);
  }
  function smallImg(){
    sizeImg(widthImg%1.10)
  }
  var img_bisness = document.getElementsByClassName("img_bisness");
  var bisness = document.getElementsByClassName("bisness");
  console.log(bisness);
  console.log(img);
  if(bisness.style.width < img_bisness.style.width){
    widthImg= widthImg%2;

  }
  console.log(widthImg);
  }*/









