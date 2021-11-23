  //func for addition
 function add () {
    x = parseInt(jQuery('#op1').val());
    y = parseInt(jQuery('#op2').val());
    z = x + y
    jQuery('#result').html(z);

    $('#history').append(`<div id="hist"> ${x} + ${y} = ${z} <button id="delete">Delete</button> </div>`);
}

    //this func same as appending
    // sampl = jQuery('#History').html()
    // jQuery('#History').html(sampl + x + ' + ' + y + ' = ' + z + '<br>');
    //console.log (jQuery('#result').val());
}
//func for subtraction
function sub () {
   x = parseInt(jQuery('#op1').val());
   y = parseInt(jQuery('#op2').val());
   z = x - y
   jQuery('#result').html(z);

   sampl = jQuery('#History').html()
   jQuery('#History').html(sampl + x + ' - ' + y + ' = ' + z + '<br>');

}
//func for multiplication
function mul () {
   x = parseInt(jQuery('#op1').val());
   y = parseInt(jQuery('#op2').val());
   z = x * y
   jQuery('#result').html(z);

   sampl = jQuery('#History').html()
   jQuery('#History').html(sampl + x + ' * ' + y + ' = ' + z + '<br>');

}
//func for div
function div () {
   x = parseInt(jQuery('#op1').val());
   y = parseInt(jQuery('#op2').val());
   z = x / y
   jQuery('#result').html(z);

   sampl = jQuery('#History').html()
   jQuery('#History').html(sampl + x + ' / ' + y + ' = ' + z + '<br>');

}

function show_history() {
  //  jQuery ('#History').show(); or
  jQuery ('#History').attr('style', '')
}

function hide_history() {
  //  jQuery ('#History').hide(); or
  $ ('#History').attr('style', 'display:none')
}

function delete_ () {
  $(this).parent().remove();
}

// func for buttons
 function setup () {
    $('#trigger_the_add').click(add);
    $('#trigger_the_sub').click(sub);
    $('#trigger_the_mul').click(mul);
    $('#trigger_the_div').click(div);
// to show and hide history
    $('#show').click(show_history);
    $('#hide').click(hide_history);
//
    $('body').on('click','#delete', delete_);
}

//jQuery(document).ready(setup) or
$(setup)
