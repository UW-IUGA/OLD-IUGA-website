$(function() {
	var url = window.location.href;
	var clicked = false;

	// if current URL is the URL of specific nav link
	// give it new class
	$("nav ul li a").each(function() {
		if (url === (this.href) || url.substring(0, url.length - 1) === (this.href) || url === (this.href.substring(0, url.length - 1))) {
			$(this).addClass("active");
		}
	});

	// allows toggling of small navbar for mobile devices
	$(".navbar-toggle").click(function() {
		if (!clicked) {
			$(".popup-nav").css("display", "block");
		} else {
			$(".popup-nav").css("display", "none");
		}

		clicked = !clicked;
	});

	$(window).resize(function() {
		if ($(window).width() > 892) {
			$(".popup-nav").css("display", "none");
		}
	});
})
