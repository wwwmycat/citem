$('.cal-title p').eq(0).click(function(){
	$(this).addClass('ch');
	$(this).siblings().removeClass('ch');
	$('.con-one').css('display','block');
	$('.con-two').css('display','none');
})
$('.cal-title p').eq(1).click(function(){
	$(this).addClass('ch');
	$(this).siblings().removeClass('ch');
	$('.con-two').css('display','block');
	$('.con-one').css('display','none');
})
function slider_range(range,slider) {
    document.getElementsByName(range.replace(2,1))[1].value = slider;
}
function range_slider(range,slider) {
    document.getElementsByName(range.replace(1,2))[0].value = slider;
}
function slider_range1(range,slider) {
    document.getElementsByName(range.replace(2,1))[2].value = slider;
}
function range_slider1(range,slider) {
    document.getElementsByName(range.replace(1,2))[3].value = slider;
}
/*$("input[type=range]").change(function(){
	var num = $(this).value;
	console.log(num);
})*/