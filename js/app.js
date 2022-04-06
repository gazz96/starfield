const cardSlider = new Swiper('.card-slider', {
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: '.next-slide',
        prevEl: '.prev-slide'
    },

    breakpoints: {
        320: {
            slidesPerView: 2
        },
        450: {
            slidesPerView: 3
        },
        960: {
            slidesPerView: 5
        }
    }
})

const articleSlider = new Swiper('.article-slider', {
    loop: true,
    spaceBetween: 10,
    centeredSlides: true,
    navigation: {
        nextEl: '.next-slide',
        prevEl: '.prev-slide'
    },
    pagination: {
        el: '.article-pagination',
        clickable: true
    },
    breakpoints: {
        320: {
            slidesPerView: 2
        },
        450: {
            slidesPerView: 3
        },
        960: {
            slidesPerView: 5
        }
    },
    
})

const allDonationMainSlider = new Swiper('.all-donation-main-slider', {
    loop: true,
    spaceBetween: 30,
    watchSlidesProgress: true,
    centeredSlides: true,
    slidesPerView: 1,
    navigation: {
        nextEl: '#all-donation-slider-next',
        prevEl: '#all-donation-slider-prev'
    },
    pagination: {
        el: '.article-pagination',
        clickable: true
    },    
})

const newDonationMainSlider = new Swiper('.new-donation-main-slider', {
    spaceBetween: 30,
    slidesPerView: 3,
    navigation: {
        nextEl: '#new-donation-slider-next',
        prevEl: '#new-donation-slider-prev'
    }   
})

