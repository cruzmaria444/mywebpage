  //func for addition
 function add () {
    x = parseInt(jQuery('#op1').html());
    y = parseInt(jQuery('#op2').html());
    z = x + y
    jQuery('#result').html(z);
    //this func same as appending
    sampl = jQuery('#History').html()
    jQuery('#History').html(sampl + x + ' + ' + y + ' = ' + z + '<br>');
}
//func for subtraction
function sub () {
   x = parseInt(jQuery('#op1').html());
   y = parseInt(jQuery('#op2').html());
   z = x - y
   jQuery('#result').html(z);

   sampl = jQuery('#History').html()
   jQuery('#History').html(sampl + x + ' - ' + y + ' = ' + z + '<br>');

}
//func for multiplication
function mul () {
   x = parseInt(jQuery('#op1').html());
   y = parseInt(jQuery('#op2').html());
   z = x * y
   jQuery('#result').html(z);

   sampl = jQuery('#History').html()
   jQuery('#History').html(sampl + x + ' * ' + y + ' = ' + z + '<br>');

}
//func for div
function div () {
   x = parseInt(jQuery('#op1').html());
   y = parseInt(jQuery('#op2').html());
   z = x / y
   jQuery('#result').html(z);

   sampl = jQuery('#History').html()
   jQuery('#History').html(sampl + x + ' / ' + y + ' = ' + z + '<br>');

}

function be_sad() {
    jQuery('img#face').attr('src', 'https://tenor.com/view/pleading-puppy-eyes-emoji-puppy-dog-eyes-pleading-emoji-gif-20694234')
}

function be_happy() {
    jQuery('img#face').attr('src', 'https://similarpng.com/happy-emoji-vector-on-transparent-background-png/')
}

// func for buttons
 function setup () {
    jQuery('#trigger_the_add').click(add);
    jQuery('#trigger_the_sub').click(sub);
    jQuery('#trigger_the_mul').click(mul);
    jQuery('#trigger_the_div').click(div);

    jQuery('#happy').click(be_happy);
    jQuery('#sad').click(be_sad);
}

jQuery(document).ready(setup)
