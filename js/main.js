$(function () {
  $(".slider__content").slick({
    prevArrow:
      '<img class="slick-prev slick-arrow" src="images/al.png" alt="">',
    nextArrow:
      '<img class="slick-next slick-arrow" src="images/ar.png" alt="">',
    responsive: [
      {
        breakpoint: 510,
        settings: {
          arrows: false,
        },
      },
    ],
  });
  $(".login").on("click", function () {
    $(".menu__items").toggleClass("menu__items--active");
  });
});
