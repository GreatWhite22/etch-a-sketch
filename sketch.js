$(document).ready(function(){
	var size = 16;
	var width = 16;
	$("#grid").append("<table class='board'>test</table>");
	for (var i = 16; i > 0; i--) {
		$(".board").append		
		$('.board').css("height", "50px");
		$('.board').css("width", "50px");
		$('.board').css("background-color", "gray");
		$('.board').css({"border-color": "black", 
             "border-width":"2px", 
             "border-style":"solid"});
		size --;
	}
});
