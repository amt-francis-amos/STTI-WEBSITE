// ---- MENU BAR ------


let show = document.getElementById("nav-links")

  
function showMenu(){
   show.style.right = "0";
 
}

function closeMenu(){
   show.style.right = "-200px";

}






document.addEventListener("DOMContentLoaded", function () {
  
   var overlay = document.getElementById("overlay");
   overlay.style.display = "flex";
 

   window.addEventListener("load", function () {
     setTimeout(function () {
       overlay.style.display = "none";
     }, 4000); 
   });
 });
 




function scrollToTop() {

   function scrollToTopAnimation() {
     var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
 
     if (currentPosition > 0) {
       window.requestAnimationFrame(scrollToTopAnimation);
       window.scrollTo(0, currentPosition - currentPosition / 8);
     }
   }
 
   scrollToTopAnimation();
 }
 

 window.addEventListener("scroll", function () {
   var scrollButton = document.getElementById("scroll-to-top");
 
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
     scrollButton.style.display = "block";
   } else {
     scrollButton.style.display = "none";
   }
 });
 


 



