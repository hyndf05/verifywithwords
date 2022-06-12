var v = '1.0.23';
console.log(`%c${v}`,'font-size:19px;padding:7px;');

var visual = ['안빈낙도', '안분지족', '군계일학', '자승자강', '자강불식', '선공후사', '일념통천', '유비무환', '언행일치', '고진감래', '각인각색', '각주구검', '간담상조', '갑론을박', '대명천지', '도원결의', '목불인견', '명명백백', '부창부사', '빙탄지간', '구밀복검', '막역지우', '난신적자', '백골난망', '부화내동', '용두사미', '조강지처', '천고마비', '표리부동', '함흥차사', '죽마고우', '백면서생', '환골탈태', '노심초사', '다다익선', '역지사지', '일석이조', '주객전도', '마이동풍'];
var mVisual = Math.random() * visual.length | 0;
var rVisual = visual[mVisual];
$('.section .text > span:nth-child(1)').text(rVisual);
var g = $('.section .text > span:nth-child(1)').height();

function go() {
  $('.check > input').blur();
  var word = $('.section .text > span:nth-child(1)').text();
  var check = $('.check > input');
  var checkV = check.val();
  var checkL = check.val().length;
  if (word == checkV && checkL > 0) {
    location.href = '/request/pass/index.html?from=ko1';
  } else if (word != checkV && checkL > 0) {
    var mVisual = Math.random() * visual.length | 0;
    var rVisual = visual[mVisual];
    $('.section .text > span:nth-child(1)').text(rVisual);
    $('.section').addClass('sg');
    var t = Math.floor((Math.random() * 7916) + 1);
    $('.site-container-progress').removeClass('remove');
    setTimeout(function(){
      $('.check > input').val('');
      $('.site-container-progress').addClass('remove');
      $('.section').removeClass('sg');
      $('.check > input').focus();
    },t)
  }
}

$('.check > .passport').click(function(){
  go();
})

$('.check > input').on('keyup', function(p){
  if (p.keyCode == 13) {
    go();
  }
})