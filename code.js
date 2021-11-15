
add = function() {
    x = parseInt(jQuery('#op1').html());
    y = parseInt(jQuery('#op2').html());
    z = x + y
    jQuery('#result').html(z); 
}
setup = function() {
    jQuery('#trigger_the_add').click(add)
}

jQuery(document).ready(setup)
