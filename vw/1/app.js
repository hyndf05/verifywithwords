var t = Math.floor((Math.random() * 11514) + 1);
$(window).bind('load', function(){
  setTimeout(function(){
    $('.site-container-progress').addClass('remove');
  },t)
})

$('.site-as span.head').click(function(){
  location.href = '/';
})

$('.ad-inner .b span').click(function(){
  window.open('https://chatanonymously-kr.hyndf05projects.repl.co/');
})

var backto =  document.referrer;

console.log('%cbackground images by picsum.photos', 'padding: 3px 6px;font-size:7px;color:#26466c;');