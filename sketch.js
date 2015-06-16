var height = 16;
var width = 16;
var boxSize = 35
$(document).ready(function(){
	newgrid();
	mouseHover();
	$(":button").click(function(){
	height = prompt("Enter a new grid size");
	width = height;
	boxSize = 560/height;
	$(".board").replaceWith(newgrid());
	mouseHover();
});

});

function newgrid(){
	$("#grid").append("<table class='board'></table>");
	for (var i = 0; i < height; i++){
		$(".board").append("<tr></tr>");
	}
	for (var i = 0; i < width; i++){
		$("tr").append("<td></td>");
	}
	$('td').css("height", boxSize);
	$('td').css("width", boxSize);
	$('td').css("background-color", "white");
	$('td').css({"border-color": "black", 
		"border-width":"2px", 
		"border-style":"solid"});
	return;
};

function mouseHover(){
	$("td").hover(function(){
		$(this).css("background-color", "blue");
	},function(){}
	);
	return;
}