
add = function () {
  x = jQuery('#op1').html();
  y = jQuery('#op2').html();
  alert (x+y)
}

setup  function () {
  jQuery('#trigger_the_add').click(add)
}

jQuery(document).ready(setup)
