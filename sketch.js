$(document).ready(function(){
	gridMaker(16);

});

function gridMaker(size){
	var count = 0;
	while(size>0){
		$('#grid').append(<div class='board'></div>);
		$('.board').css("height", "100px");
		$('.board').css("width", "100px");
		$('.board').css("background-color", "gray");
		$('.board').css({"border-color": "#C1E0FF", 
             "border-width":"1px", 
             "border-style":"solid"});
		size--;
	}
	return;
}