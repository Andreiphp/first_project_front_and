// верхнее меню категории
$(function () {
    $('.top_menu').on('click',function () {
        $('.menu').slideToggle(300, function () {
            if($(this).css('display') === 'none'){
                $(this).removeAttr('style');

            }
        });
    });
});

// нижнее меню
$(function () {
    $('.bottom_menu').on('click',function () {
        $('.footer_adapt_list').slideToggle(300, function () {
            if($(this).css('display') === 'none'){
                $(this).removeAttr('style');
            }
        });
    });
});
// верхнее меню
$(function () {
    $('.top_menu_top').on('click',function () {
        $('.footer_adapt_list_top').slideToggle(300, function () {
            if($(this).css('display') === 'none'){
                $(this).removeAttr('style');

            }
        });
    });
});



$('.single-item').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    centerPadding:100

});
$('.slider_3').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    centerPadding:100

});

// ползунок диапазона цен


$(".accordion .product_discription_hide").hide().prev().click(function (){
    $(".accordion .product_discription_hide").not(this).slideUp();
    $(this).next().not(":visible").slideDown();
});

jQuery(function($) {
    $(window).scroll(function(){
        if($(this).scrollTop()>140){
            $('#navigation').addClass('fixed');
        }
        else if ($(this).scrollTop()<140){
            $('#navigation').removeClass('fixed');
        }
    });
});
