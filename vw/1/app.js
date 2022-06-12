var t = Math.floor((Math.random() * 11514) + 1);
$(window).bind('load', function(){
  setTimeout(function(){
    $('.site-container-progress').addClass('remove');
  },t)
})

$('.site-as span').click(function(){
  location.href = '/';
})