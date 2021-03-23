// Importing JavaScript
//
// You have two choices for including Bootstrap's JS files—the whole thing,
// or just the bits that you need.


// Option 1
//
// Import Bootstrap's bundle (all of Bootstrap's JS + Popper.js dependency)

// import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "https://cdn.jsdelivr.net/gh/englishextra/img-lightbox@latest/img-lightbox.min.js";
import "https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js";

// Option 2
//
// Import just what we need

// If you're importing tooltips or popovers, be sure to include our Popper.js dependency
// import "https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.9.1/umd/popper.min.js";
// import "https://cdnjs.cloudflare.com/ajax/libs/javascript.util/0.12.12/javascript.util.min.js";
// import "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-modal/2.2.6/js/bootstrap-modal.js";
import "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.js";
// import "https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/js/lightbox.js";

// Get the video
var video = document.getElementById("myVideo");
// Get the button
var btn = document.getElementById("myBtn");
// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

// Owl Carousel
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:40,
  responsiveClass:true,
  autoplay:true,
  autoplayTimeout:5000,
  // autoplayHoverPause:true,
  responsive:{
      0:{
          items:1,
          nav:true,
          loop:true
      },
      400:{
        items:2,
        nav:false,
        loop:true
      },
      600:{
          items:3,
          nav:false,
          loop:true
      },
      1000:{
          items:4,
          nav:true,
          loop:true
      }
  }
})

// Change class on vertical scroll
$(function() {
  //caches a jQuery object containing the header element
  var header = $(".bg1");
  $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      if (scroll >= 150) {
          header.removeClass('bg1').addClass("bg2");
      } else {
          header.removeClass("bg2").addClass('bg1');
      }
  });
});

// img-Lightbox
imgLightbox("img-lightbox-link");

// module.exports = {
//   // .. configuration
//   module: { 
//     rules: [
//       // .. other rules
//       {
//         test: /\.(svg|jpeg|gif|png|jpg)$/, // lightbox2 requires png and gif images to be imported
//                                            // ensure `node_modules` folder is not excluded
//         use: {
//           loader: 'file-loader',
//           options: {
//             name: "[name].[ext]",
//             outputPath: "Images"
//           }
//         },
//       },
//       // .. yet other rules
//     ]
//   }
// }