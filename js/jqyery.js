// верхнее меню
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


// слайдер с товарами
$('.slider_body').slick({
    centerMode: true,
    centerPadding: '30px',
    slidesToShow: 4,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '2px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 500,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '2px',
                slidesToShow: 2
            }
        }
    ]
});

// ползунок диапазона цен
$( function() {
    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 500,
        values: [ 0, 500 ],
        slide: function( event, ui ) {
            $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
        " - $" + $( "#slider-range" ).slider( "values", 1 ) );
});

$(".accordion .product_discription_hide").hide().prev().click(function (){
    $(".accordion .product_discription_hide").not(this).slideUp();
    $(this).next().not(":visible").slideDown();
});

