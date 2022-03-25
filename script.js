$(function () {
  //메뉴 슬라이드
  $(".gnb > ul >li").on("mouseover focusin", function () {
    $(this).find(".submenu").stop().slideDown(200);
  });

  $(".gnb > ul> li").on("mouseout focusout", function () {
    $(this).find(".submenu").stop().slideUp(200);
  });

  // 메인 슬라이드
  $(".slide-wrap").slick({
    dots: true,
    autoplay: true,
    fade: true,
  });

  //메뉴 슬라이드
  $(".menu-slide").slick({
    slide: "div",
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 100,
    autoplay: true,
  });

  //푸터에 있는 배너 슬라이드
  $(".footer-banner").slick({
    dots: true,
    autoplay: true,
    arrows: false,
  });

  //메뉴 슬라이드에 마우스를 올렸을 때 나타나는 화살표

  const arrow = $(".menu button.slick-prev, .menu button.slick-next");
  console.log(arrow);

  $(".menu-slide").mouseover(function () {
    arrow.addClass("show");
  });

  $(".menu-slide").mouseleave(function () {
    arrow.removeClass("show");
  });

  // 배너 애니메이션 추가

  const pizzaText = $(".banner > h2");

  window.addEventListener("scroll", function () {
    let value = window.scrollY;

    if (value > 1404) {
      pizzaText.css("animation", "disappear 1s ease-out forwards");
    } else {
      pizzaText.css("animation", "pizzaText 1s ease-out");
    }
  });
});

// pizzaText.style.animation = "disappear 1s ease-out forwards";
