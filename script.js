// $(document).ready(function(){

// $('#menu').click(function(){
//   $(this).toggleClass('fa-times');
//   $('header').toggleClass('toggle');
// });

// $(window).on('scroll load',function(){

//   $('#menu').removeClass('fa-times');
//   $('header').removeClass('toggle');

//   if($(window).scrollTop() > 0){
//     $('.top').show();
//   }else{
//     $('.top').hide();
//   }

// });

// smooth scrolling

// $('a[href*="#"]').on('click',function(e){

//   e.preventDefault();

//   $('html, body').animate({

//     scrollTop : $($(this).attr('href')).offset().top,

//   },
//     500,
//     'linear'
//   );

// });

// });
// document.getElementById("menu").addEventListener("click", function () {
//   this.classList.toggle("fa-times");
//   document.querySelector("header").classList.toggle("toggle");
// });

// window.addEventListener("scroll", function () {
//   document.getElementById("menu").classList.remove("fa-times");
//   document.querySelector("header").classList.remove("toggle");
//   if (window.pageYOffset > 0) {
//     document.querySelector(".top").style.display = "block";
//   } else {
//     document.querySelector(".top").style.display = "none";
//   }
// });

// window.addEventListener("load", function () {
//   document.getElementById("menu").classList.remove("fa-times");
//   document.querySelector("header").classList.remove("toggle");

//   if (window.pageYOffset > 0) {
//     document.querySelector(".top").style.display = "block";
//   } else {
//     document.querySelector(".top").style.display = "none";
//   }
// });












// document.getElementById("menu").addEventListener("click", function () {
//   var menu = document.getElementById("menu");
//   var header = document.querySelector("header");
  
//   menu.classList.toggle("fa-times");
//   header.classList.toggle("toggle");
// });                                    expected to change the appearance of the page 

// window.addEventListener("scroll", function () {
//   var menu = document.getElementById("menu");
//   var header = document.querySelector("header");
//   var top = document.querySelector(".top");
  
//   menu.classList.remove("fa-times");
//   header.classList.remove("toggle");


//   //below code ensures that if the page is scrolled down then the top button will be visible otherwise make it invisible.

//   if (window.pageYOffset > 0) {
//     top.style.display = "block";
//   } else {
//     top.style.display = "none";
//   }
// });

// window.addEventListener("load", function () {
//   var menu = document.getElementById("menu");
//   var header = document.querySelector("header");
//   var top = document.querySelector(".top");
  
//   menu.classList.remove("fa-times");
//   header.classList.remove("toggle");

  
// });



let mybutton = document.getElementById("myBtn");


window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}











// document.getElementById("menu").addEventListener("click", toggleMenu);

// window.addEventListener("scroll", toggleTopButtonVisibility);

// window.addEventListener("load", resetElements);

// let mybutton = document.getElementById("myBtn");

// window.onscroll = scrollFunction;

// function toggleMenu() {
//   var menu = document.getElementById("menu");
//   var header = document.querySelector("header");
  
//   menu.classList.toggle("fa-times");
//   header.classList.toggle("toggle");
// }

// function toggleTopButtonVisibility() {
//   if (window.pageYOffset > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// function resetElements() {
//   var menu = document.getElementById("menu");
//   var header = document.querySelector("header");
  
//   menu.classList.remove("fa-times");
//   header.classList.remove("toggle");
// }

// function scrollFunction() {
//   if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }
