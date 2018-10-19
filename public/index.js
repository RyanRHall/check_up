function _changeSlider(slider) {
   $('#slider_output').html(slider.value)
}

function _handleSmileSelect(id) {
  $(".smile-img").removeClass("selected")
  $("#smile-" + id.toString()).addClass("selected")
}

function _handleYesSelect(id) {
  $(".yes-img").removeClass("selected")
  $("#yes-" + id.toString()).addClass("selected")
}
