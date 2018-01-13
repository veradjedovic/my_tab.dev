$(document).ready(function(){

	$(".tab").animate({
		width: "70%"
	}, 1000, "swing");
	$(".tab-content").first().css("display", "block").animate({padding: "30"}, 2000, "swing");
	$(".tab-nav-btn").first().addClass("active");

	$("button").click(function(){

		$(".tab-content").css("display", "none").animate({padding: "20"}, 1);
		$(".tab-nav-btn").removeClass("active");

		var id = $(this).data("id");

		$(this).addClass("active");
		$("#" + id).css("display", "block").animate({padding: "30"}, 2000, "swing");

		console.log($(this));
	});
});