$(document).ready(function() {
  if ($("#price-range").length > 0) {

    $("#price-range").slider({
      range: true,
      min: 0,
      max: 1000,
      values: [0, 1000],
      slide: function(event, ui) {
        $(".min-price").val("$" + ui.values[0]);
        $(".max-price").val("$" + ui.values[1]);
      }
    });
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

  $(".js-roomCount").on("change", function() {
    var roomCount = $(this).val();
    var html =
      '<div class="c-lineDiv">' +
      '<span class="c-midHeading">Room' +
      parseInt(i) +
      "</span>" +
      '<div class="row">' +
      '<div class="col-md-6 col-sm-6 col-12">' +
      '<div class="form-group">' +
      "<label>Adults</label>" +
      '<div class="selector">' +
      '<select class="full-width">' +
      '<option value="1">01</option>' +
      '<option value="2">02</option>' +
      '<option value="3">03</option>' +
      '<option value="4">04</option>' +
      "</select>" +
      "</div>" +
      "</div>" +
      "</div>" +
      '<div class="col-md-6 col-sm-6 col-12">' +
      '<div class="form-group">' +
      "<label>Childrens</label>" +
      '<div class="selector">' +
      '<select class="full-width">' +
      '<option value="1">01</option>' +
      '<option value="2">02</option>' +
      '<option value="3">03</option>' +
      '<option value="4">04</option>' +
      "</select>" +
      "</div>" +
      "</div>" +
      "</div>" +
      '<div class="col-12 c-childSection">' +
      '<div class="row">' +
      '<div class="col-md-4 col-sm-6 col-12">' +
      '<div class="form-group">' +
      "<label>Child 1 Age</label>" +
      '<div class="selector">' +
      '<select class="full-width">' +
      '<option value="1">01</option>' +
      '<option value="2">02</option>' +
      '<option value="3">03</option>' +
      '<option value="4">04</option>' +
      "</select>" +
      "</div>" +
      "</div>" +
      "</div>" +
      '<div class="col-md-4 col-sm-6 col-12">' +
      '<div class="form-group">' +
      "<label>Child 2 Age</label>" +
      '<div class="selector">' +
      '<select class="full-width">' +
      '<option value="1">01</option>' +
      '<option value="2">02</option>' +
      '<option value="3">03</option>' +
      '<option value="4">04</option>' +
      "</select>" +
      "</div>" +
      "</div>" +
      "</div>" +
      '<div class="col-md-4 col-sm-6 col-12">' +
      '<div class="form-group">' +
      "<label>Child 3 Age</label>" +
      '<div class="selector">' +
      '<select class="full-width">' +
      '<option value="1">01</option>' +
      '<option value="2">02</option>' +
      '<option value="3">03</option>' +
      '<option value="4">04</option>' +
      "</select>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>";

    for (var i = 0; i < roomCount; i++) {
      $(".c-roomListing").append(html);
    }
    initilizeDropdown();
  });

  // $('.c-select2DD select').select2({
  //   minimumInputLength: 2
  // });

  if ($(".c-select2DD").length > 0) {
    $(".c-select2DD select").select2();
  }
});
