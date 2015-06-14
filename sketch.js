$(document).ready(function(){
	var size = 16;
	var width = 16;
	$("#grid").append("<table class='board'>test</table>");
	for (var i = 16; i > 0; i--) {
		$(".board").append("<tr><td/><td/><td/><td/><td/><td/><td/><td/><td/><td/><td/><td/><td/><td/><td/><td/></tr>");
		size --;
	}
	$('td').css("height", "35px");
	$('td').css("width", "35px");
	$('td').css("background-color", "white");
	$('td').css({"border-color": "black", 
		"border-width":"2px", 
		"border-style":"solid"});
	$("td").hover(function(){
		$(this).css("background-color", "blue");
	},function(){}
	);

});
