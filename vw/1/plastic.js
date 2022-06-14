var v = '1.0.34';
console.log(`%c${v}`,'font-size:19px;padding:7px;');
$('.version').text('');

$('.head').text('Verify With Words');

var visual = ['감기', '기생', '생활', '발생', '생명', '명암', '암석', '석탄', '탄소', '소금', '금성', '성공', '공부', '부채', '채무', '무기', '기괴', '괴물', '물리', '리본', '본드', '드릴', '후기', '리뷰', '행동', '동물', '식물', '자아', '아기', '기타', '타조', '조수', '수질', '질소', '소동', '동사', '사물', '물가', '가치', '치욕', '욕망', '망치', '치약', '약물', '물건', '원장', '운송', '코딩', '코팅', '고무', '당근', '오이', '사과', '가지', '김치', '자두', '치킨', '피자', '음료', '키위', '영상', '사진', '기능', '화장', '독감', '세균', '마약', '버스', '택시', '항공'];
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
    location.href = backto;
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