$('.c-tltie p').eq(0).click(function(){
	$(this).addClass('ch');
	$(this).siblings().removeClass('ch');
	$('.c-list').css('display','block');
	$('.c-choose').css('display','none');
});
$('.c-tltie p').eq(1).click(function(){
	$(this).addClass('ch');
	$(this).siblings().removeClass('ch');
	$('.c-list').css('display','none');
	$('.c-choose').css('display','block');		
});

var n = 0 ;	
var m = 0 ;
$('.c-down').click(function(){	
	if(n == 0){
		$(this).children('i').toggle();		
		$('.c-txt').slideUp(1000);
		$('.c-two').slideDown(100);
		n++;
		console.log(n);
	}else{
		$(this).children('i').toggle();		
		$('.c-txt').slideDown(1000);
		$('.c-two').slideUp(500);
		n--;
		console.log(n);
	}
	
});

$('.c-choose').children('span').click(function(){
	if(m==0){
		$(this).addClass('ch');
		m++
	}else{
		$(this).removeClass('ch');
		m--;
	}
})
