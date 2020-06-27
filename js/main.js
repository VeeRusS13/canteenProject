$(document).ready(function () {
	$(".slider").slick({
		speed: 1500,
		arrows: true,
		easing: "ease",
		autoplay: true,
		autoplaySpeed: 5000,
	});

	$(".meal__item-1").on("click", function () {
		$(".meal-1").css("display", "flex");
		$(".meal-2").css("display", "none");
		$(".meal-3").css("display", "none");
		$(".meal__item-1").addClass("active");
		$(".meal__item-2").removeClass("active");
		$(".meal__item-3").removeClass("active");
	});
	$(".meal__item-2").on("click", function () {
		$(".meal-2").css("display", "flex");
		$(".meal-1").css("display", "none");
		$(".meal-3").css("display", "none");
		$(".meal__item-2").addClass("active");
		$(".meal__item-1").removeClass("active");
		$(".meal__item-3").removeClass("active");
	});
	$(".meal__item-3").on("click", function () {
		$(".meal-3").css("display", "flex");
		$(".meal-2").css("display", "none");
		$(".meal-1").css("display", "none");
		$(".meal__item-3").addClass("active");
		$(".meal__item-1").removeClass("active");
		$(".meal__item-2").removeClass("active");
	});

	$(".menu__button").on("click", function () {
		$(".menu__list").toggleClass("menu__change");
		$(".menu__button").toggleClass("menu__button__change");
		$(".header").toggleClass("header__change");
	});
});
