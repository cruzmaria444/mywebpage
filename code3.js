
function process_(data) {
  console.log(data);
  $('#city_temperature').html(data.main.temp)
  $('#city_weather').html(data.weather[0].main)
}

function get_ajax() {
  $.ajax({
    url: `https://api.openweathermap.org/data/2.5/weather?q=${jQuery('#city_name_input').val()}&appid=8f4372e59d9d1d5c204a8053af0d9d4a&units=metric`,
    type: 'GET',
    success: process_
  })
}

function setup() {
  $('#get_temperature_button').click(get_ajax)
}

$(setup)
