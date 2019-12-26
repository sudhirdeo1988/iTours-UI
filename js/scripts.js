tjq(document).ready(function() {
  if (tjq("#price-range").length > 0) {
    tjq("#price-range").slider({
      range: true,
      min: 0,
      max: 1000,
      values: [0, 1000],
      slide: function(event, ui) {
        tjq(".min-price").html("$" + ui.values[0]);
        tjq(".max-price").html("$" + ui.values[1]);
      }
    });
    tjq(".min-price").value("$" + tjq("#price-range").slider("values", 0));
    tjq(".max-price").value("$" + tjq("#price-range").slider("values", 1));
  }
});
