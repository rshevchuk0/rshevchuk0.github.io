$(function(){

    // We use JQuery to initialize Swiper Api
    // to create picture slideshow
    
    var mySwiper = new Swiper ('.slideshow-container', {
        loop: true, // slides interminably
        pagination: '.slideshow-pagination', // init pagination
        paginationClickable: true, // we can select image by clicking on on block according to it
        nextButton: '.slideshow-button-next',
        prevButton: '.slideshow-button-prev'
    });
    
});