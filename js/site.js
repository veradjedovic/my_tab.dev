$(document).ready(function(){

	$(".tab-content").first().css("display", "block");
	$(".tab-nav-btn").first().addClass("active");
	$(".tab").animate({
		width: "70%"
	}, 1500, "swing");

	$("button").click(function(){

		$(".tab-content").css("display", "none");
		$(".tab-nav-btn").removeClass("active");

		var id = $(this).data("id");

		$(this).addClass("active");
		$("#" + id).css("display", "block").animate({transition: ""}, 2000);

		console.log($(this));
	});
});