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
// Bootstrap Form Validator
// import "https://cdnjs.cloudflare.com/ajax/libs/jquery.bootstrapvalidator/0.5.2/js/bootstrapValidator.min.js";


// Option 2
//
// Import just what we need

// If you're importing tooltips or popovers, be sure to include our Popper.js dependency
// import "https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.9.1/umd/popper.min.js";
// import "https://cdnjs.cloudflare.com/ajax/libs/javascript.util/0.12.12/javascript.util.min.js";
// import "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-modal/2.2.6/js/bootstrap-modal.js";
import "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.js";
// import "https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/js/lightbox.js";


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

//Animation trigger
(function() {
  var elements;
  var windowHeight;

  function init() {
    elements = document.querySelectorAll('.hidden');
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
        element.classList.add('tracking-in-expand');
        element.classList.remove('hidden');
      }
    }
  }

  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', init);

  init();
  checkPosition();
})();

// img-Lightbox
imgLightbox("img-lightbox-link");

//Contact Form
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  // prevent the form submit from refreshing the page
  event.preventDefault();

  const { name, email, message } = event.target;

	// Use your API endpoint URL you copied from the previous step
  const endpoint =
    "https://7wk9opy0d9.execute-api.us-east-2.amazonaws.com/default/sendContactEmail";
  // We use JSON.stringify here so the data can be sent as a string via HTTP
	const body = JSON.stringify({
    senderName: name.value,
    senderEmail: email.value,
    message: message.value
  });
  const requestOptions = {
    method: "POST",
    body
  };

  fetch(endpoint, requestOptions)
    .then((response) => {
      if (!response.ok) throw new Error("Error in fetch");
      return response.json();
    })
    .then((response) => {
      document.getElementById("result-text").innerText =
        "Email sent successfully!";
    })
    .catch((error) => {
      document.getElementById("result-text").innerText =
        "An unkown error occured.";
    });
});