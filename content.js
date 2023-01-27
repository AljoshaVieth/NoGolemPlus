// Remove elements with the attribute data-article-id and class "golemplus"
const golemPlusArticles = document.querySelectorAll('[data-article-id]');
golemPlusArticles.forEach(function (element) {
    if (element.classList.contains("golemplus")) {
        element.remove();
    }
});

// Remove all elements with class "media-slider__item golemplus"
document.querySelectorAll('.media-slider__item.golemplus').forEach(elem => elem.remove());

// Remove Golem Plus button in top menu
document.querySelectorAll('.section-gplus__btn').forEach(elem => elem.remove());
document.querySelectorAll('#hn1-golemplus').forEach(elem => elem.remove());

// Remove all sections with class "golemplus"
const golemPlusSections = document.querySelectorAll("section.golemplus");
golemPlusSections.forEach(function (section) {
    section.remove();
});

// Remove all list items with class "golemplus"
const golemPlusLis = document.querySelectorAll("li.golemplus");
golemPlusLis.forEach(function (listItem) {
    listItem.remove();
});

// Add data-swiper-slide-index attribute to all elements with class "media-slider__item"
let mediaSliderItems = document.querySelectorAll(".media-slider__item");
for (let i = 0; i < mediaSliderItems.length; i++) {
    mediaSliderItems[i].setAttribute("data-swiper-slide-index", i);
    document.querySelector(".swiper-pagination-bullet").remove();
}

// Remove classes "swiper-slide-duplicate" and "swiper-slide-active" from last element and add them to first element of class "media-slider__item"
let mediaSliderItems2 = document.querySelectorAll(".media-slider__item");
let lastSlide = mediaSliderItems2[mediaSliderItems2.length - 1];
let firstSlide = mediaSliderItems2[0];
lastSlide.classList.remove("swiper-slide-duplicate", "swiper-slide-active");
firstSlide.classList.add("swiper-slide-duplicate", "swiper-slide-active");

// Force the browser to re-render the changes
firstSlide.offsetHeight;