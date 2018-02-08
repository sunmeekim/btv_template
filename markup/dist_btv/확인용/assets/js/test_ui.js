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

});