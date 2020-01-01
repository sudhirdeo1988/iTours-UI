$(document).ready(function() {
  if ($("#price-range").length > 0) {
    $("#price-range").slider({
      range: true,
      min: 0,
      max: 1000,
      values: [0, 1000],
      slide: function(event, ui) {
        $(".min-price").html("$" + ui.values[0]);
        $(".max-price").html("$" + ui.values[1]);
      }
    });
    $(".min-price").val("$" + $("#price-range").slider("values", 0));
    $(".max-price").val("$" + $("#price-range").slider("values", 1));
  }

  if ($(".js-cardSlider").length > 0) {
    $(".js-cardSlider").owlCarousel({
      loop: false,
      margin: 16,
      nav: true,
      dots: false,
      responsive: {
        0: {
          items: 1
        },
        560: {
          items: 2
        },
        960: {
          items: 3
        },
        1024: {
          items: 4
        }
      }
    });
  }


  if ($(".js-photoGallery").length > 0) {
    $(".js-photoGallery").owlCarousel({
      loop: false,
      margin: 16,
      nav: true,
      dots: false,
      lazyLoad: true,
      slideBy: 2,
      navText:['<i class="icon it itours-arrow-left"></i>','<i class="icon it itours-arrow-right"></i>'],
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        }
      }
    });
  }


  if ($(".js-mainSlider").length > 0) {
    $(".js-mainSlider").owlCarousel({
      margin: 0,
      nav: false,
      dots: false,
      items: 1,
      loop: true,
      autoplay: true,
      autoplayHoverPause: true,
      smartSpeed: 1500
    });
  }

    // filters option
    $(".c-checkSquare .filterCheckbox").on('click',function() {
      //e.preventDefault();
      if ($(this).hasClass("st-checked")) {
          $(this).removeClass("st-checked");
      } else {
          $(this).addClass("st-checked");
      }
  });

});
