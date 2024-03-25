$(document).ready(function () {
// why video on click
$('#video_why').click(function() {
    var video = this;
    video.paused ? video.play() : video.pause();
});
// mute unmute why video
$('.why_video_control').click(function() {
    var video = $('#video_why')[0];
    video.muted = !video.muted;
});
// lottie width
var Webflow = Webflow || [];
Webflow.push(function() {
    window.addEventListener('resize', function() {
    window.Webflow.require("lottie").lottie.resize();
    });	
});
// dynamic navbar
$(window).scroll(function () {
    var s = $(this).scrollTop() > 250;
    $('.header').toggleClass('is-color', s);
    $('[navbar-logo="white"]').toggle(!s);
    $('[navbar-logo="color"]').toggle(s);
});

// sliderrelated conf. 1
const swiper = new Swiper('[slider="1"]', {
    createElements: true,
    centeredSlides: true,
    speed: 1000,
    loop: true,
    breakpoints: {
    0: {
        slidesPerView: 2.2,
        spaceBetween: 10
    },
    767: {
        slidesPerView: 'auto',
        spaceBetween: 48
    }
    },
    navigation: {
    nextEl: '[slider-arrow="next"]',
    prevEl: '[slider-arrow="prev"]',
    }
});

// slider related conf. 2
$('.slider_nav.is-filter').hide();
const swiper2 = new Swiper('[slider="2"]', {
    createElements: true,
    slidesPerView: 1.4,
    allowTouchMove: false,
    speed: 1000,
    spaceBetween: 24,
    navigation: {
    prevEl: '[slider-arrow-2="prev"]'
    },
    on: {
    slideChange: function () {
        var lastIndex = this.slides.length - 1;
        var secondIndex = this.activeIndex + 1;
        // prev button
        if (secondIndex => 2) {
        $('[slider-arrow-2="prev"]').show();
        } else {
        $('[slider-arrow-2="prev"]').hide();
        }
        // next button
        if (this.activeIndex === lastIndex - 1) {
        $('[slider-arrow-2="next"]').show();
        } else {
        $('[slider-arrow-2="next"]').hide();
        }
    }
    }
});

// open filter option
$('[hero-filter^="select-"]').each(function () {
    const number = $(this).attr('hero-filter').split('-')[1];
    $(this).on('click', function () {
    $(`[hero-filter="option-list-${number}"]`).toggleClass('is-hidden');
    });
});

// add attribute to option
$('[hero-filter^="option-list-"]').each(function () {
    var number = $(this).attr('hero-filter').split('-')[2];
    $(this).children().attr('hero-filter', 'option-' + number);
});

// select option
$('[hero-filter^="option-"]').each(function () {
    $(this).on('click', function () {
    var number = $(this).attr('hero-filter').split('-')[1];
    var text = $(this).find('.heading-style-h5').text().toUpperCase();
    $('[hero-filter="select-' + number + '"]').children().removeClass('is-opacity-50').text(text);
    if ($(this).attr('hero-filter').includes('option-list')) {
        $(this).toggleClass('is-hidden');
    }
    if (!$(this).parent().is(':last-child')) {
        swiper2.slideNext();
    }
    });
});

// venue conditional logic 
var filter_term = {
    'sute': ['scaa'],
    'spte': ['scaa', 'wis', 'ks'],
    'adsw': ['scaa']
};
$('[hero-filter="option-list-1"]').children('[data-id]').on('click', function () {
    var option_attribute = $(this).attr('data-id');
    var option = filter_term[option_attribute] || []; // Ensure filter_term is defined
    var $options_list = $('[hero-filter="option-list-2"]').children().hide();
    option.forEach(function (id) {
    $options_list.filter('[data-id="' + id + '"]').show()
        .attr('data-term', option_attribute);
    });
});

// level conditional logic 
var termToShowMapping = {
    'scaa': {
    'sute': ['npi', 'np'],
    'spte': ['npi', 'epi', 'pia', 'np', 'ep', 'pa', 'b1nw', 'nb1', 'b1', 'b1a', 'b2', 'b2a', 'b3', 'b4', 'ip'],
    'adsw': ['ab', 'ai', 'aa', 'apc', 'apcs', 'ac', 'acs', 'aqa']
    },
    'wis': {
    'spte': ['npi', 'epi', 'pia', 'np', 'ep', 'pa', 'b1nw', 'nb1', 'b1', 'b1a', 'b2', 'b2a', 'b3', 'b4', 'ip', 'sff']
    },
    'ks': {
    'spte': ['npi', 'epi', 'pia', 'np', 'ep', 'pa', 'b1ns', 'nb1', 'b1', 'b1a', 'b2', 'b2a', 'b3']
    }
};
$('[hero-filter="option-list-2"]').children().on('click', function () {
    var dataTerm = $(this).attr('data-term');
    var dataId = $(this).attr('data-id');
    var $optionsList = $('[hero-filter="option-list-3"]').children().hide();

    var selectorsToShow = termToShowMapping[dataId][dataTerm];

    if (selectorsToShow) {
    var selectorString = selectorsToShow.map(id => `[data-id="${id}"]`).join(', ');
    $optionsList.filter(selectorString).show();
    }
});

// hide active option on back           
$(' [slider-arrow-2="prev"]').on('click', function () {
    $('.hero_home_filter-wrap').children().addClass('is-hidden');
});

// update link 
function processText(selector) {
    return $(selector).text().trim().toLowerCase().replace(/ +/g, ' ').replace(/\b\w/g, function (l) { return l.toUpperCase() }).replace(/ /g, '%20');
}
$('[hero-filter="option-3"]').on('click', function () {
    var selected_term = processText('[hero-filter="select-1"]');
    var selected_venue = processText('[hero-filter="select-2"]');
    var selected_level = processText('[hero-filter="select-3"]');
    var filter_link = "https://enrol.harrywright.com.hk/application.asp?term=" + selected_term + "&venue=" + selected_venue + "&coursetype=" + selected_level;
    $('.slider_nav.is-filter').attr('href', filter_link);
});

// reset filter
$('[hero-filter="select-1"]').click(function () {
    $('[hero-filter^="select-"]').not('[hero-filter="select-1"]').each(function () {
    $(this).children().addClass('is-opacity-50').text('Please select');
    });
});

// slider related conf. 3
const swiper3 = new Swiper('[slider="3"]', {
    createElements: true,
    centeredSlides: true,
    speed: 1000,
    slidesPerView: 8,
    spaceBetween: 24,
    navigation: {
    nextEl: '[slider-arrow-3="next"]',
    prevEl: '[slider-arrow-3="prev"]',
    }
});

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