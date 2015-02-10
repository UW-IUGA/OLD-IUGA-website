$(function(){
	$(".name").click(function(){
		var value = this.classList[1];
		$(".statements>div").hide();
		$("#" + value).show();
	});
});