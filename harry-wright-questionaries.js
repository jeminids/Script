$(document).ready(function () {
    // slider related conf. 4 questionaries
    const swiper4 = new Swiper('[slider="4"]', {
        autoHeight: true,
        slidesPerView: 1,
        spaceBetween: 110,
        allowTouchMove: false,
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
        speed: 1000,
        navigation: {
            nextEl: '[slider-arrow-4="next"]',
            prevEl: '[slider-arrow-4="prev"]',
        }
    });


    // init 
    $('[slider-4="container"]').hide();
    ['#q1', '#q2', '#q3', '#q4', '#b1a'].forEach(id => $(id).appendTo('[slider-4="list"]'));
    swiper4.update();

    // reset
    $('[slider-arrow-4="reset"]').on('click', function () {
        let container = $('[slider-4="container"]');
        let list = $('[slider-4="list"]');
        list.children().appendTo(container);
        let initQ = ['#q1', '#q2', '#q3', '#q4', '#b1a'];
        initQ.forEach(id => {
            container.find(id).appendTo(list);
        });
        swiper4.update();
        swiper4.slideTo(0);
    });

    // question logic
    function updateSlides(...handlers) {
        handlers.forEach(([selector, appendElements]) => {
            $(selector).on('click', function () {
                $('[slider-4="list"] .swiper-slide-active').nextAll().appendTo('[slider-4="container"]');
                appendElements.forEach(el => {
                    $('[slider-4="container"]').find(el).appendTo('[slider-4="list"]');
                });
                swiper4.update();
                swiper4.slideNext();
            });
        });
    }
    updateSlides(
        ['#q1a', ['#q1', '#q2', '#q3', '#q4', '#b1a']],
        ['#q1b', ['#q1', '#q5', '#q6', '#q7', '#b1a']],
        ['#q1c', ['#q1', '#q8', '#q9', '#q10', '#b1a']],
        ['#q1d', ['#q1', '#q11', '#q12', '#q13', '#q14', '#q14', '#b1a']],
        ['#q2b, #q3b', ['#npi']],
        ['#q2a', ['#q3', '#q4', '#b1a']],
        ['#q3a', ['#q4', '#b1a']],
        ['#q4a', ['#pia']],
        ['#q4b', ['#epi']],
        ['#q5a', ['#q6', '#q7', '#pa']],
        ['#q5b, #q6b', ['#np']],
        ['#q6a', ['#q7', '#pa']],
        ['#q7a', ['#pa']],
        ['#q7b', ['#ep']],
        ['#q8a, #q8b, #q9b', ['#q10', '#b1ns']],
        ['#q10a', ['#b1ns']],
        ['#q10b', ['#b1s']],
        ['#q10c', ['#b1a']],
        ['#q10d', ['#b2']],
        ['#q10e', ['#b2a']],
        ['#q10f', ['#b3']],
        ['#q10g', ['#b4']],
        ['#q10h', ['#ip']],
        ['#q8c', ['#q9', '#sff']],
        ['#q9a', ['#sff']],
        ['#q8d', ['#cp']],
        ['#q11a, #q11b', ['#aqa']],
        ['#q11c, #q11d, #q11e', ['#q12', '#q13', '#aa']],
        ['#q12a', ['#ab']],
        ['#q12b', ['#aab']],
        ['#q12c', ['#q13', '#aa']],
        ['#q13a', ['#aa']],
        ['#q13b', ['#ai']],
        ['#q12d', ['#q14', '#spc']],
        ['#q14a', ['#spc']],
        ['#q14b', ['#apc']],
        ['#q12e', ['#q15', '#sc']],
        ['#q15a', ['#sc']],
        ['#q15b', ['#ac']],
    );


    // end
});