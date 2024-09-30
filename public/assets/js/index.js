// sidebar
document.getElementById('openSidebar').addEventListener('click', function () {
    document.getElementById('sidebar').classList.add('show');
});
document.getElementById('closeSidebar').addEventListener('click', function () {
    document.getElementById('sidebar').classList.remove('show');
});

// swipper
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 1, /* pastikan satu slide untuk mobile */
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 2, /* sesuaikan untuk desktop */
            spaceBetween: 40,
        },
        1200: {
            slidesPerView: 3, /* sesuaikan untuk desktop lebar */
            spaceBetween: 50,
        },
    }
});