  //func for addition
 function add () {
    x = parseInt(jQuery('#op1').val());
    y = parseInt(jQuery('#op2').val());
    z = x + y
    jQuery('#result').html(z);
    //this func same as appending
    sampl = jQuery('#History').html()
    jQuery('#History').html(sampl + x + ' + ' + y + ' = ' + z + '<br>');
    console.log (jQuery('#result').val());
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

/*
function be_happy() {
    jQuery('img#face').attr('src', 'https://images.unsplash.com/photo-1509909756405-be0199881695?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80')
}

function be_sad() {
    jQuery('img#face').attr('src', 'https://images.unsplash.com/photo-1597176116047-876a32798fcc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2FkfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')
}
*/



// func for buttons
 function setup () {
    jQuery('#trigger_the_add').click(add);
    jQuery('#trigger_the_sub').click(sub);
    jQuery('#trigger_the_mul').click(mul);
    jQuery('#trigger_the_div').click(div);
    // jQuery('#happy').click(be_happy);
    // jQuery('#sad').click(be_sad);
    jQuery('#show').click(show_history);
    jQuery('#hide').click(hide_history);

}

//jQuery(document).ready(setup) or
$(setup)
