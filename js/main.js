$(document).ready(function(){
	init();
    setInterval(fadeImg,5000);   //5초마다setInterval
})

//모바일 - 화살표 버튼 / 삼선버튼

var menuOpen;

function init(){
	//화살표 버튼 누르면 메뉴 펼쳐지기
    $('#open-btn2').click(function(){
        if(menuOpen){ //메뉴 닫기
            $('nav.global').removeClass('on');
            $(this).html('&darr;');
       }else{ //메뉴펼치기
            $('nav.global').addClass('on');
            $(this).html('&uarr;');
        }
    menuOpen =!menuOpen;
    })

	//왼쪽 삼선버튼 누르면 왼쪽 메뉴 나타나기
	$('#open-btn1').click(function(){
		$('body').toggleClass('leftMenu-on');
	})
}


//banner 효과

var showImg,nexImg;

function fadeImg(){
    //showImg에 현재 보이고 있는 이미지 담기
    showImg =$('#banner img:eq(0)');
    //nextImg에 다음에 보일 이미지 담기
    nextImg = $('#banner img:eq(1)');
    //다음 사진 보이도록 클래스 추가하기
    nextImg.addClass('photo_on');
    //사진 효과 적용
    nextImg.css('opacity','0').animate({opacity:'1'},1000,function(){
        //배너 안에 이미지 순서 바꾸기
        $('#banner').append(showImg);
        showImg.removeClass('photo_on');
    });
    
}