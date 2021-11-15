  //func for addition
 function add () {
    x = parseInt(jQuery('#op1').html());
    y = parseInt(jQuery('#op2').html());
    z = x + y
    jQuery('#result').html(z);
}
//func for subtraction
function sub () {
   x = parseInt(jQuery('#op1').html());
   y = parseInt(jQuery('#op2').html());
   z = x - y
   jQuery('#result').html(z);
}
//func for multiplication
function mul () {
   x = parseInt(jQuery('#op1').html());
   y = parseInt(jQuery('#op2').html());
   z = x * y
   jQuery('#result').html(z);
}
//func for div
function div () {
   x = parseInt(jQuery('#op1').html());
   y = parseInt(jQuery('#op2').html());
   z = x / y
   jQuery('#result').html(z);
}

 function setup () {
    jQuery('#trigger_the_add').click(add)
    jQuery('#trigger_the_add').click(sub)
    jQuery('#trigger_the_add').click(mul)
    jQuery('#trigger_the_add').click(div)

}

jQuery(document).ready(setup)
