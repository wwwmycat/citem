var index = 0;
var s = $(window).width();
function show(i){	
	$('.tabcontent').eq(i).addClass('tab').siblings().removeClass('tab');	
}
$('.tab-list li').click(function(){	
	index = $(this).index();	
	if (s<768){
		$(this).addClass('tab-li').siblings().removeClass('tab-li');
	}else{
		$(this).addClass('tabone').siblings().removeClass('tabone');
	}
	show(index);
})
$('.tab-list-2 li').click(function(){
	index = $(this).index();
	$(this).addClass('tab-li').siblings().removeClass('tab-li');
	$('.sone .media').eq(index).fadeIn().siblings('.sone .media').fadeOut()
})
$('.tab-list-3 li').click(function(){
	index = $(this).index();
	$(this).addClass('tab-li').siblings().removeClass('tab-li');
	$('.stwo .media').eq(index).addClass('shows').siblings('.stwo .media').removeClass('shows');
})
$('.tab-list-4 li').click(function(){
	index = $(this).index();
	$(this).addClass('tab-li').siblings().removeClass('tab-li');
	$('.sthree .media').eq(index).fadeIn().siblings('.sthree .media').fadeOut()
})
//车型规格
$('.model-toggle').each(function(i){
	$(this).click(function(){
		var s = $('.model-info').css('display');
		$('.toggle-up').eq(i).toggleClass('shows');
		$('.model-info').eq(i).slideToggle();
		$(this).children('span').eq(i).toggleClass('model');
		if (s == 'none') {
			$(this).children('.showmore').html('收起更多数据');
		}else{
			$(this).children('.showmore').html('展开更多数据');
		}		
	})
})
$('.toggle-up p').each(function(i){
	$(this).click(function(e){
		$('.model-info').eq(i).slideToggle();
		$(this).hide();
		// e.stopPropagation()
	})
})

//车型配置
$('.model-btns span').click(function(){
	index = $(this).index();
	$('.model-tips').eq(index).addClass('tab').siblings().removeClass('tab');
	$(this).addClass('outside').siblings().removeClass('outside');
})
//优惠方案
$('.sale-list li').click(function(){
	index = $(this).index();
	$('.sale-tips').eq(index).addClass('shows').siblings().removeClass('shows');
	$(this).children('label').addClass('s-label');
	$(this).siblings().children('label').removeClass('s-label');
})
//月份
$('.month').click(function(e){
	$('.sale-month').show();
	e.stopPropagation();
})
$('.sale-month li').click(function(e){
	var sh = $(this).children('span').html();
	$('.month .oo').html(sh);
	$(this).parent().hide()
	e.stopPropagation();
})
$(document).click(function(){
	$('.sale-month').hide()
})
//图片与视频
$('.menu-select-list li').click(function(){
	index = $(this).index();
	$(this).addClass('liafter').siblings().removeClass('liafter')
	$('.view-more').eq(index).fadeIn().siblings().fadeOut()
})
$('.view-more img').hover(function(){
	$(this).fadeTo(1000,0.5)
},function(){
	$(this).fadeTo(1000,1)
})
//滚轮事件
$(window).scroll(function(event) {	
	var ss = $(window).scrollTop();
	var navs = $('.nav').offset().top;
	var s1 = $('.sone').offset().top;
	var s2 = $('.stwo').offset().top;
	var s3 = $('.sthree').offset().top;
	var s4 = $('.sfour').offset().top;
	var s5 = $('.snine').offset().top;
	if(ss>=navs){
		$('.nav').addClass('fix');		
	}
	if(ss<671){
		$('.nav').removeClass('fix');
	}
	if(ss>=s5){
		$('.aa').eq(4).addClass('s-text');
		$('.aa').eq(4).parent().siblings().children('a').removeClass('s-text');
	}
	if(ss>=s4 && ss<s5){
		$('.aa').eq(3).addClass('s-text');
		$('.aa').eq(3).parent().siblings().children('a').removeClass('s-text');
	}
	if(ss>=s3 && ss<s4){
		$('.aa').eq(2).addClass('s-text');	
		$('.aa').eq(2).parent().siblings().children('a').removeClass('s-text');
	}
	if(ss>=s2 && ss<s3){
		$('.aa').eq(1).addClass('s-text');
		$('.aa').eq(1).parent().siblings().children('a').removeClass('s-text');
	}
	if(ss>=s1 && ss<s2){
		$('.aa').eq(0).addClass('s-text');	
		$('.aa').eq(0).parent().siblings().children('a').removeClass('s-text');
	}	
});
$('.lis').click(function(){
	index = $(this).index();
	$('html,body').animate({'scrollTop':$('.sss').eq(index).offset().top-40},1000);
	$(this).children('.aa').addClass('s-text');
	$(this).siblings('.lis').children('.aa').removeClass('s-text');
})
var elem = $('.slide-range');
console.log(elem)
var spans = $('.fspan');
console.log(elem.val())
spans.eq(0).html(elem.eq(0).val());
spans.eq(1).html(elem.eq(1).val());
$(elem).each(function(i){
	$(this).change(function(){
		var newValue = $(this).val();
		spans.eq(i).html(newValue);
	})
})



