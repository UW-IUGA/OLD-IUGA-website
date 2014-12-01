$(function() {
	var url = window.location.href;

	// if current URL is the URL of specific nav link
	// give it new class
	$("nav ul li a").each(function() {
		if (url == (this.href)) {
			$(this).addClass("active");
		}
	})
})