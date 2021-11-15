  //func for addition
 function add () {
    x = parseInt(jQuery('#op1').html());
    y = parseInt(jQuery('#op2').html());
    z = x + y
    jQuery('#result').html(z);
    //this func same as appending
    sampl = jQuery('#History').html()
    jQuery('#History').html(sampl + x + ' + ' y + ' = ' + z +'<br>');
}
//func for subtraction
function sub () {
   x = parseInt(jQuery('#op1').html());
   y = parseInt(jQuery('#op2').html());
   z = x - y
   jQuery('#result').html(z);
   sampl = jQuery('#History').html()
   jQuery('#History').html(sampl + x + ' - ' y + ' = ' + z +'<br>');
}
//func for multiplication
function mul () {
   x = parseInt(jQuery('#op1').html());
   y = parseInt(jQuery('#op2').html());
   z = x * y
   jQuery('#result').html(z);
   sampl = jQuery('#History').html()
   jQuery('#History').html(sampl + x + ' * ' y + ' = ' + z +'<br>');
}
//func for div
function div () {
   x = parseInt(jQuery('#op1').html());
   y = parseInt(jQuery('#op2').html());
   z = x / y
   jQuery('#result').html(z);
   sampl = jQuery('#History').html()
   jQuery('#History').html(sampl + x + ' / ' y + ' = ' + z +'<br>');
}
// func for buttons
 function setup () {
    jQuery('#trigger_the_add').click(add)
    jQuery('#trigger_the_sub').click(sub)
    jQuery('#trigger_the_mul').click(mul)
    jQuery('#trigger_the_div').click(div)
// jQuery  obj
    jQuery('ul>li').html(jQuery('#op1').html())
}

jQuery(document).ready(setup)
