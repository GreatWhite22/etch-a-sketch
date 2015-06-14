$(document).ready(function(){
	var size = 16;
	var width = 16;
	$("#grid").append("<table class='board'>test</table>");
	for (var i = 16; i > 0; i--) {
		$(".board").append("<tr><td>hello</td><td>hi</td></tr>");
		$('td').css("height", "35px");
		$('td').css("width", "35px");
		$('td').css("background-color", "gray");
		$('td').css({"border-color": "black", 
             "border-width":"2px", 
             "border-style":"solid"});
		size --;
	}
});
