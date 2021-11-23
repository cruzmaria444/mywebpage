  //func for addition
 function add () {
    x = parseInt($('#op1').val());
    y = parseInt($('#op2').val());
    z = x + y
    $('#result').html(z);

    sampl = '<span id=" ">' + x + ' + ' + y + ' = '+ z + '<button id="delete"> delete</button>' + '<br>' + '</span>';
    $('#History').append( sampl );


    //this func same as appending
    // sampl = jQuery('#History').html()
    // jQuery('#History').html(sampl + x + ' + ' + y + ' = ' + z + '<br>');
    //console.log (jQuery('#result').val());
}
//func for subtraction
function sub () {
   x = parseInt($('#op1').val());
   y = parseInt($('#op2').val());
   z = x - y
   $('#result').html(z);

   sampl = '<span id=" ">' + x + ' - ' + y + ' = '+ z + '<button id="delete"> delete</button>' + '<br>' + '</span>';
   $('#History').append( sampl );


}
//func for multiplication
function mul () {
   x = parseInt($('#op1').val());
   y = parseInt($('#op2').val());
   z = x * y
   $('#result').html(z);

   sampl = '<span id=" ">' + x + ' * ' + y + ' = '+ z + '<button id="delete"> delete</button>' + '<br>' + '</span>';
   $('#History').append( sampl );

}
//func for div
function div () {
   x = parseInt($('#op1').val());
   y = parseInt($('#op2').val());
   z = x / y
   $('#result').html(z);

   sampl = '<span id=" ">' + x + ' / ' + y + ' = '+ z + '<button id="delete"> delete</button>' + '<br>' + '</span>';
   $('#History').append( sampl );
}

function show_history() {
  //  jQuery ('#History').show(); or
  $('#History').attr('style', '')
}

function hide_history() {
  //  jQuery ('#History').hide(); or
  $('#History').attr('style', 'display:none')
}

function delete_() {
  $(this).parent().remove();
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
    $('#trigger_the_add').click(add);
    $('#trigger_the_sub').click(sub);
    $('#trigger_the_mul').click(mul);
    $('#trigger_the_div').click(div);
    // jQuery('#happy').click(be_happy);
    // jQuery('#sad').click(be_sad);
    $('#show').click(show_history);
    $('#hide').click(hide_history);
    // jQuery for delete
    $('body').on('click', '#delete',delete_);
}

//jQuery(document).ready(setup) or
$(setup)
