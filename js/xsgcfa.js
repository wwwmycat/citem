$('#xsnav ul li').hover(function(){
	$(this).addClass('ch');
	$(this).children('a').addClass('ch');
},function(){
	if($(this).hasClass('ch1')){
		
	}else{
		$(this).removeClass('ch');
		$(this).children('a').removeClass('ch');	
	}	
})
/*nav样式的变化*/
function nscroll(n){
	 $('#xsnav ul li').eq(n).addClass('ch').addClass('ch1');
	 $('#xsnav ul li').eq(n).children().addClass('ch');
	 $('#xsnav ul li').eq(n).siblings().removeClass('ch').removeClass('ch1');
	 $('#xsnav ul li').eq(n).siblings().children().removeClass('ch');
	 
}

function clickk(num){
	$('html,body').stop().animate({'scrollTop':$('section').eq(num).offset().top - 50},1000);
}
/*nav的click事件*/
$('#xsnav ul li').click(function(){
	var num = $(this).index();
	clickk(num);
});

/*nav的scroll事件*/
$(window).scroll(function(){
	var st = $(window).scrollTop();
	var st0 = $('section').eq(0).offset().top - 220;
	var st1 = $('section').eq(1).offset().top - 220;
	var st2 = $('section').eq(2).offset().top - 220;
	var st3 = $('section').eq(3).offset().top - 220;
	
	/*位置*/
	if(st<220){
		$('#xsnav').removeClass('xs-nav2');		
		$('#xsnav').addClass('xs-nav');
	}else{
		$('#xsnav').removeClass('xs-nav');
		$('#xsnav').addClass('xs-nav2');
	};
	
	/*样式*/
	if(st>st0&&st<st1){
		nscroll(0);
	}else if(st>st1&&st<st2){
		nscroll(1);
	}else if(st>st2&&st<st3){
		nscroll(2);
	}else if(st>st3){
		nscroll(3);
	}
	

})