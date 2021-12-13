

function process(data) {
    console.log(data)
    jQuery('#submit').html(data.main.temp)
}

function ajax_get() {
    searchInput = jQuery('#searchInput').val()

    $.ajax({
        url:`https://imdb-api.com/en/API/Wikipedia/k_c1a3piib/?q=${searchInput}&appid=tt1375666`,
        type:'GET',
        success: process
    })
}

setup = function() {
    jQuery('#submit').click(ajax_get)
}

jQuery(document).ready(setup);
