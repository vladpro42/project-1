const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 40,
    navigation: {

        nextEl: '.novelties__navigation-btn--right',
        prevEl: '.novelties__navigation-btn--left',
    },
});