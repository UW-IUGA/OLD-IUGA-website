$(function() {
	var url = window.location.href;
	$("nav ul li a").each(function() {
		if (url == (this.href)) {
			$(this).addClass("active");
		}
	})
})