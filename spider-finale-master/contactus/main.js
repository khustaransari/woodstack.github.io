$(document).ready(function(){
console.log("this is checked");
$("#newon2 .owl-carousel").owlCarousel({
    dots:false,
    loop:false,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        1000:{
            items:4
        },
       
    }
});

var $grid= $(".grid").isotope({
    itemSelector:'.grid-item',
    layoutMode:'masonry',
});
$(".button-group").on('click', 'button' ,function(){
var filtervalue=$(this).attr('data-filter');
console.log("heyyyy");
$grid.isotope({filter:filtervalue});




});

// wishlist card added java script//
var sum=0;
var wishitem= document.querySelector("#wish-item");
for(var i=0;i<document.querySelectorAll(".bottom-part .btn").length;i++){
  

   document.querySelectorAll(".bottom-part .btn i")[i].addEventListener("click",function(){
  
   if(this.flag==0){
     console.log("declicked");
     this.flag=1;
     this.style.color="black";
    
     sum--;
     wishitem.textContent=sum;
     
       console.log(sum);
      }
       else{

        console.log("clicked");
        this.flag=0;
        this.style.color="red";
      
        sum++;
        wishitem.textContent=sum;
        

          console.log(sum);
         
          
       }

       

    });
 } 

 

});
//=============================== NAVBAR PART==========================
var cart=document.querySelector(".list_item img");
var myNav = document.getElementById('tm-top-bar');
var number=document.querySelector(".number");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 110 || document.documentElement.scrollTop > 110) {
     cart.style.transform="translateY(2px)";
     number.style.top="0px";
  } else {
    cart.style.transform="translateY(34px)";
    number.style.top="31px";
  }
}
