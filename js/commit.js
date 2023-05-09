$(document).ready(function () {
  $('#fullpage').fullpage({
    //options here
    autoScrolling: true,
    scrollHorizontally: true,
    navigation: true,
    lockAnchors: false,
    scrollBar: false,
    navigationPosition: 'left',
    scrollingSpeed: 1200,
    responsiveWidth: 1024,//풀페이지가 768px 에서는 일반홈페이지처럼 스크롤
    scrollOverflow: true,
    scrollBar: false,
    anchors: ['main', 'about', 'Stack', 'web', 'Contact', 'footer'],
  });
});

$(function () {

  $(".move").click(function () {
    $(this).toggleClass("on");
    $('.full_menu').toggleClass("on");
    $('#fp-nav').toggleClass("on");
  });
  
  $(".menuInner>ul>li>a").click(function () {
    $('.full_menu').removeClass("on");
    $('#fp-nav').removeClass("on");
    $('.move').removeClass("on");
  });

});

    // 메인 텍스트 - 애니메이션
    const $text = document.querySelector(".main-text p");

    // 글자 모음 - 개행문자(\n)로 줄바꿈
    const letters = [
      "web publisher \n portfolio."
    ];

    // 글자 입력 속도
    const speed = 200;
    let i = 0;

    // 줄바꿈을 위한 <br> 치환
    const changeLineBreak = (letter) => {
      return letter.map(text => text === "\n" ? "<br>" : text);
    }

    // 타이핑 효과
    const typing = async () => {
      // 기존코드에서 개행치환코드 추가
      const letter = changeLineBreak(letters[i].split(""));

      while (letter.length) {
        await wait(speed);
        $text.innerHTML += letter.shift();
      }

      // 잠시 대기
      await wait(200);
    }

    // 딜레이 기능 ( 마이크로초 )
    function wait(ms) {
      return new Promise(res => setTimeout(res, ms))
    }

    // 초기 실행
    setTimeout(typing, 1000) ;

    $(window).resize(function () {
      if (window.innerWidth > 1024) {  // 다바이스 크기가 1024이상일때 
      } else {
      }
    
    }).resize(); 