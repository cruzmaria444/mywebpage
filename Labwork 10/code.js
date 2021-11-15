  //func for addition
 function add () {
    x = parseInt(jQuery('#op1').html());
    y = parseInt(jQuery('#op2').html());
    z = x + y
    jQuery('#result').html(z);
    sampl = jQuery('#History').html()
    jQuery('History').html(sampl + z);
}
//func for subtraction
function sub () {
   x = parseInt(jQuery('#op1').html());
   y = parseInt(jQuery('#op2').html());
   z = x - y
   jQuery('#result').html(z);
   sampl = jQuery('#History').html()
   jQuery('History').html(sampl + z);
}
//func for multiplication
function mul () {
   x = parseInt(jQuery('#op1').html());
   y = parseInt(jQuery('#op2').html());
   z = x * y
   jQuery('#result').html(z);
   sampl = jQuery('#History').html()
   jQuery('History').html(sampl + z);
}
//func for div
function div () {
   x = parseInt(jQuery('#op1').html());
   y = parseInt(jQuery('#op2').html());
   z = x / y
   jQuery('#result').html(z);
   sampl = jQuery('#History').html()
   jQuery('History').html(sampl + z);
}
// func for buttons
 function setup () {
    jQuery('#trigger_the_add').click(add)
    jQuery('#trigger_the_sub').click(sub)
    jQuery('#trigger_the_mul').click(mul)
    jQuery('#trigger_the_div').click(div)
// jQuery  obj
    jQuery('ul>li').html(jQuery('#op').html())
}

jQuery(document).ready(setup)
