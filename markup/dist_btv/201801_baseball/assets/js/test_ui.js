$(function(){
    // 쇼핑/주문 버튼 활성화
    $('.order_btnbox .order_btnbox__button').on('click',function() {
        $(this).addClass('active').siblings().removeClass('active');
    });

    // 카드 리스트 활성화
    $('.card_wrap .card_wrap__item').on('click', function() {
        if ( !$(this).hasClass('none') && !$(this).hasClass('active')) {
            $(this).addClass('active').siblings().removeClass('active');
        } else if ($(this).hasClass('active')) {
            $(this).find('.iot_default_card__action').toggleClass('on');
        }
    });

    // 프로야구 순위 목록 활성화
    $('.teamrank_wrap__list .teamrank_wrap__list-item').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active').parent().siblings().find('.teamrank_wrap__list-item').removeClass('active');
    });

    $("#defaultOpen").click();

});
// 인클루드페이지 스위칭 하기(jquery)
$('.case__link').on('click', function() {
    var displayType = $(this).attr('href');
    //console.log(displayType);
    $('.content_area').hide();
    $(displayType).show();

    $('.case__link').removeClass('active');
    $(this).addClass('active');
});
//인클루드페이지 스위칭하기 (기본 스크립트)
// function includePage(evt, displayType) {
//     var i, tabcontent, tablinks;
//     tabcontent = document.getElementsByClassName("content_area");
//     for (i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display = "none";
//     }
//     tablinks = document.getElementsByClassName("case__link");
//     for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }
//     document.getElementById(displayType).style.display = "block";
//     evt.currentTarget.className += " active";
// }

// Get the element with id="defaultOpen" and click on it
// window.onload = function(){ document.getElementById('defaultOpen').click(); }
