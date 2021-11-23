  //func for addition
 function add () {
    x = parseInt(jQuery('#op1').val());
    y = parseInt(jQuery('#op2').val());
    z = x + y
    jQuery('#result').html(z);

    sampl = '<span id=" ">' + x + ' + ' + y + ' = '+ z + '<button id="delete"> delete</button>' + '<br>' + '</span>';
   jQuery('#History').append( sampl );
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
  jQuery ('#History').attr('style', 'display:none')
}







// func for buttons
 function setup () {
    jQuery('#trigger_the_add').click(add);
    jQuery('#trigger_the_sub').click(sub);
    jQuery('#trigger_the_mul').click(mul);
    jQuery('#trigger_the_div').click(div);
// to show and hide history
    jQuery('#show').click(show_history);
    jQuery('#hide').click(hide_history);
    jQuery('body').on('click','#delete', delete_);
}

//jQuery(document).ready(setup) or
$(setup)
