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
        530:{
            items:2
        },
        840:{
            items:3
        },
        1100:{
            items:4
        },
       
    }
});


$(".similar-item .owl-carousel").owlCarousel({
  dots:false,
  loop:false,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      360:{
          items:2
      },
      1000:{
          items:4
      },
     
  }
});


$("#bannerarea .owl-carousel").owlCarousel({
    dots:true,
    loop:false,
    nav:false,
    items:1
  
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
var wishitem= document.querySelector(".number");
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
        this.style.color="blue";
      
        sum++;
        wishitem.textContent=sum;
        

          console.log(sum);
         
          
       }

       

    });
 } 

 






//Product quantity addition////
var qtyup = $(".qty-up");
var qtydown = $(".qty-down");
var qty_input = $(".qty_input");

 qtyup.click( function(){
   let $input = $(`.qty_input[data-id='${$(this).data("id")}']`);
   if($input.val()>= 1 && $input.val()<= 9){
       $input.val(function(i, oldval){
           return ++oldval;
       });
 }
});

qtydown.click( function(){
   let $input = $(`.qty_input[data-id='${$(this).data("id")}']`);
   if($input.val()> 1 && $input.val()<= 10){
       $input.val(function(i, oldval){
           return --oldval;
       });
 }
});
////// product 1 page/////

$('.card-option  .col1').on({mouseenter:function(){

    document.querySelector("#bannerarea .item img").setAttribute("src","img/card1.jpg");
 

},});


$('.card-option  .col2').on({mouseenter:function(){

 document.querySelector("#bannerarea .item img").setAttribute("src","all hd images/kp (2).jpg");

},});
$('.card-option  .col3').on({mouseenter:function(){

 document.querySelector("#bannerarea .item img").setAttribute("src","all hd images/kp (13).jpg");

},});
$('.card-option  .col4').on({mouseenter:function(){

 document.querySelector("#bannerarea .item img").setAttribute("src","all hd images/kp (1).jpg");

},});
//////product 1 page mouse enter effect////////////

$('#productpart2 .card-option  .col1').on({mouseenter:function(){

    document.querySelector("#productpart2 #bannerarea .item img").setAttribute("src","img/card2.jpg");
 

},});


$('#productpart2 .card-option  .col2').on({mouseenter:function(){

 document.querySelector("#productpart2 #bannerarea .item img").setAttribute("src","all hd images/kp (4).jpg");

},});
$('#productpart2 .card-option  .col3').on({mouseenter:function(){

 document.querySelector("#productpart2 #bannerarea .item img").setAttribute("src","all hd images/kp (6).jpg");

},});
$('#productpart2 .card-option  .col4').on({mouseenter:function(){

 document.querySelector("#productpart2 #bannerarea .item img").setAttribute("src","all hd images/kp (18).jpg");

},});
/////product 2 page card//////

$('#productpart3 .card-option  .col1').on({mouseenter:function(){

    document.querySelector("#productpart3 #bannerarea .item img").setAttribute("src","img/card3.jpg");
 

},});


$('#productpart3 .card-option  .col2').on({mouseenter:function(){

 document.querySelector("#productpart3 #bannerarea .item img").setAttribute("src","all hd images/kp (5).jpg");

},});
$('#productpart3 .card-option  .col3').on({mouseenter:function(){

 document.querySelector("#productpart3 #bannerarea .item img").setAttribute("src","all hd images/kp (15).jpg");

},});
$('#productpart3 .card-option  .col4').on({mouseenter:function(){

 document.querySelector("#productpart3 #bannerarea .item img").setAttribute("src","all hd images/kp (19).jpg");

},});


////product 3 card/////

$('#productpart4 .card-option  .col1').on({mouseenter:function(){

    document.querySelector("#productpart4 #bannerarea .item img").setAttribute("src","img/card4.jpg");
 

},});


$('#productpart4 .card-option  .col2').on({mouseenter:function(){

 document.querySelector("#productpart4 #bannerarea .item img").setAttribute("src","all hd images/kp (11).jpg");

},});
$('#productpart4 .card-option  .col3').on({mouseenter:function(){

 document.querySelector("#productpart4 #bannerarea .item img").setAttribute("src","all hd images/kp (12).jpg");

},});
$('#productpart4 .card-option  .col4').on({mouseenter:function(){

 document.querySelector("#productpart4 #bannerarea .item img").setAttribute("src","all hd images/kp (7).jpg");

},});




////heart animation 
$(".animation i").click(function(){
  $(this).css("color","red");
 $(".heart").addClass("heart1");
 setTimeout(function(){
 $(".heart").removeClass("heart1");},4000);
});


/////bg effect logic
$(".bg-effect").click(function(){
 $("#bannerarea img").addClass("bg-effect-item");
 console.log("whhjjhhh");
});



});
