var v = '1.0.41';
console.log(`%c${v}`,'font-size:19px;padding:7px;');
$('.version').text('');

$('.head').text('Verify With Words');

var visual = ['감기', '기생', '생활', '발생', '생명', '명암', '암석', '석탄', '탄소', '소금', '금성', '성공', '공부', '부채', '채무', '무기', '기괴', '괴물', '물리', '리본', '본드', '드릴', '후기', '리뷰', '행동', '동물', '식물', '자아', '기타', '타조', '조수', '수질', '질소', '소동', '동사', '사물', '물가', '가치', '치욕', '욕망', '망치', '치약', '약물', '물건', '원장', '운송', '코딩', '코팅', '고무', '당근', '오이', '사과', '가지', '김치', '자두', '치킨', '피자', '음료', '키위', '영상', '사진', '기능', '화장', '독감', '세균', '마약', '버스', '택시', '항공', '로봇', '음악', '문학', '사회', '과학', '천재', '바보', '범죄', '교육', '생신', '생선', '풍선', '성별', '염색', '유사', '장난', '게임', '시청', '질병', '약초', '산림', '봉두', '서울', '경기', '성남', '분당', '강남', '영주', '충북', '충남', '경북', '경남', '전북', '전남', '인천', '동해', '서해', '영어', '독해', '독서', '동거', '독성', '심리', '죄수', '시민', '주소', '주미민', '시간', '개인', '전철', '집행', '방해', '경찰', '구조', '기관', '정부', '독재', '민주', '노동', '인생', '고독', '희미', '유령', '음식', '고기', '독도', '영토', '토지', '농민', '농부', '부자', '계급', '공평', '공정', '이익', '한글', '관계', '통신', '무전', '남성', '여성', '신발', '홍수', '산불', '가뭄', '태풍', '대기', '기압', '온난', '한랭', '기단', '우박', '뇌우', '폭설', '황사', '지구', '화학', '영화', '단축', '가요', '국내', '해외', '도로', '날씨', '가로', '세로', '연소', '장어', '연구', '발사', '강풍', '가을', '겨울', '여름', '희망', '역사', '한강', '기적', '시험', '수행'];
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