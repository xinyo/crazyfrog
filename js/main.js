$(document).ready(methodToFixLayout);
$(window).on("resize", methodToFixLayout);
$(window).on("scroll", doanimations);

$('.carousel').carousel({
  interval: 6000
})

function doanimations(){
	var offset =$(window).scrollTop();
	if (offset == 0){
		//alert($("div").scrollTop() + " px");
		$(".navbar").addClass('animated');
	}
	else {
		$(".navbar").removeClass('animated').css("background","rgba(70,70,70,0.8)");
	}
}

function methodToFixLayout( e ) {
	var winHeight = $(window).height();
	var winWidth = $(window).width();
	var scale =0;
	var moveUp=0;
	var m = "";
	if (winWidth < 1280){
		$(".carousel").css("height", winWidth/16*9);
		$(".carousel .item").css("height", winWidth/16*9);
		$(".carousel-inner .item img").css("top", 0);
	}
	else {
		scale =	winWidth/1280;
		moveUp = Math.floor((scale-1)*360);
		m ="-"+moveUp+"px";
		console.log(scale, m);
		$(".carousel").css("height", "720px");
		$(".carousel .item").css("height", "720px");
		$(".carousel-inner .item img").css("top", m);
	}
};

