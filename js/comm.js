$(".van-tab").on("click", function() {
	$(this).addClass("van-tab--active");
	$(this).siblings(".van-tab").removeClass("van-tab--active");
	console.log($(this).index())


	$(".van-tabs__track").children(".van-tab__pane-wrapper").addClass("van-tab__pane-wrapper--inactive")
		.hide();

	$(".van-tabs__track").children(".van-tab__pane-wrapper").eq($(this).index())
		.removeClass("van-tab__pane-wrapper--inactive")
		.show();

})
$(".js-link").on("click", function() {
	window.location.href = "login.html"
})
$("#homelink").on("click", function(e) {
	e.stopPropagation();
	window.location.href = "index.html"
})