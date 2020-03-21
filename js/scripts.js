$(document).ready(function() {
  initilizeDropdown();

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
      navText: [
        '<i class="icon it itours-arrow-left"></i>',
        '<i class="icon it itours-arrow-right"></i>'
      ],
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
  $(".c-checkSquare .filterCheckbox").on("click", function() {
    //e.preventDefault();
    if ($(this).hasClass("st-checked")) {
      $(this).removeClass("st-checked");
    } else {
      $(this).addClass("st-checked");
    }
  });

  if ($(".c-select2DD").length > 0) {
    $(".c-select2DD select").select2();
  }

  if ($(".slider-input").length) {
    var rangeMinValue = $(".slider-input").data("min");
    var rangeMaxValue = $(".slider-input").data("max");
    var rangeStep = $(".slider-input").data("step");
    $(".slider-input").jRange({
      from: rangeMinValue,
      to: rangeMaxValue,
      step: rangeStep,
      showLabels: true,
      isRange: true,
      width: 230,
      showScale: false
    });
  }

  // ------ Function to load gallery after inirialize
  $("body").delegate(".js-gallery", "click", function() {
    const tabID = $(this).attr("id");
    const galleryID = $("#gallery-" + tabID.split("-")[1]);
    if (galleryID.hasClass("loaded")) {
      return;
    } else {
      galleryID.prepend('<div class="galleryLoader"></div>');
      setTimeout(function() {
        galleryID.children(".galleryLoader").remove();
        galleryID.find(".c-photoGallery").removeClass("js-dynamicLoad");
        galleryID.addClass("loaded");
      }, 1500);
    }
  });
});

// Debounce function for range slider
function getSliderValue() {
  console.log($(".slider-input").val());
}
const setSliderValue = function(fun) {
  let timer;
  return function() {
    let context = this;
    args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fun.apply(context, arguments);
    }, 400);
  };
};
const passSliderValue = setSliderValue(getSliderValue);
