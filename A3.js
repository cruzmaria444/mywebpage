
// function for viewing big picture
function view_bigimg(){
  imgSrc = $(this).attr('src')
  $('.bigimg > img').attr('src', imgSrc)
}
// 2nd function for clicking picture
function setup(){
  $('body').on('click', '.thumb > img', view_bigimg)
}

$(setup)
