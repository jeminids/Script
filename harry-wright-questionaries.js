// v3.1
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
    ['#q1', '#q2', '#q3', '#q4', '#beginner-1-advanced'].forEach(id => $(id).appendTo('[slider-4="list"]'));
    swiper4.update();

    // reset
    $('[slider-arrow-4="reset"]').on('click', function () {
        let container = $('[slider-4="container"]');
        let list = $('[slider-4="list"]');
        list.children().appendTo(container);
        let initQ = ['#q1', '#q2', '#q3', '#q4', '#beginner-1-advanced'];
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
        ['#q1a', ['#q1', '#q2', '#q3', '#q4', '#beginner-1-advanced']],
        ['#q1b', ['#q1', '#q5', '#q6', '#q7', '#beginner-1-advanced']],
        ['#q1c', ['#q1', '#q8', '#q9', '#q10', '#beginner-1-advanced']],
        ['#q1d', ['#q1', '#q11', '#q12', '#q13', '#q14', '#q14', '#beginner-1-advanced']],
        ['#q2b, #q3b', ['#new-parent-infant']],
        ['#q2a', ['#q3', '#q4', '#beginner-1-advanced']],
        ['#q3a', ['#q4', '#beginner-1-advanced']],
        ['#q4a', ['#parent-infant-advanced']],
        ['#q4b', ['#existing-parent-infant']],
        ['#q5a', ['#q6', '#q7', '#beginner-1-non-swimmerbeginner-1-advancedpreschool-advanced']],
        ['#q5b, #q6b', ['#new-preschool']],
        ['#q6a', ['#q7', '#preschool-advanced']],
        ['#q7a', ['#q9', '#preschool-advanced']],
        ['#q7b', ['#existing-preschool']],
        ['#q8a, #q8b', ['#q10', '#beginner-1-non-swimmer']],
        ['#q10a', ['#beginner-1-non-swimmer']],
        ['#q10b', ['#beginner-1-swimmer']],
        ['#q10c', ['#beginner-1-advanced']],
        ['#q10d', ['#beginner-2']],
        ['#q10e', ['#beginner-2-advanced']],
        ['#q10f', ['#beginner-3']],
        ['#q10g', ['#beginner-4']],
        ['#q10h', ['#improver']],
        ['#q9a', ['#beginner-1-swimmer']],
        ['#q9b', ['#preschool-advanced']],
        ['#q8d', ['#competitive-programme']],
        ['#q11a, #q11b', ['#aqua-aerobics']],
        ['#q11c, #q11d, #q11e', ['#q12', '#q13', '#adult-beginner']],
        ['#q12a', ['#adult-beginner']],
        ['#q12b', ['#adult-advanced-beginner']],
        ['#q12c', ['#adult-intermediate']],
        ['#q12d', ['#q14', '#adult-pre-competitive-senior']],
        ['#q14a', ['#adult-pre-competitive-senior']],
        ['#q14b', ['#adult-pre-competitive']],
        ['#q12e', ['#q15', '#adult-competitive-senior']],
        ['#q15a', ['#adult-competitive-senior']],
        ['#q15b', ['#adult-competitive']],
    );


    // end
});