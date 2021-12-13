
function process_(data) {
  $('#city_temperature').html(data.main.temp)
  console.log(data);
}

function get_ajax() {
  $.ajax({
    url: `https://api.openweathermap.org/data/2.5/weather?q=${jQuery('#city_name_input').val()}&appid=4fb5b285bcee66db7bdb2625df769f54
&units=metric`,
    type: 'GET',
    success: process_
  })
}

function setup() {
  $('#get_temperature_button').click(get_ajax)
}

$(setup)
