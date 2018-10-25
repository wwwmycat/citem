var num = 0;

function min1(n){
			$('.cz-title1').children().children('i').toggle();
			
			$('.cz-title1 ul li').eq(n).siblings().children().toggle();		
			$('.cz-title1 ul li').eq(n).addClass('ch');
			$('.cz-title1 ul li').eq(n).removeClass('noch');
			$('.cz-title1 ul li').eq(n).siblings().removeClass('ch');
			$('.cz-title1 ul li').eq(n).siblings().addClass('noch');
			
			$('.cz-title1 ul li').eq(n).children('a').removeClass('noch');
			$('.cz-title1 ul li').eq(n).children('a').addClass('ch');
			$('.cz-title1 ul li').eq(n).siblings().children('a').removeClass('ch');
			$('.cz-title1 ul li').eq(n).siblings().children('a').addClass('noch');	
}
function max1(n){
	$('.cz-title ul li').children().addClass('ch');
	$('.cz-title ul li').eq(n).children().removeClass('ch')	
}
function change2(){
	$('.two').css('display','block');
	$('.one').css('display','none');	
}
function change1(){
	$('.one').css('display','block');
	$('.two').css('display','none');	
}

var re = window.matchMedia('(min-width:781px)');
var re1 = window.matchMedia('(max-width:780px)');
if(re.matches){
		$('.cz-title ul li').eq(0).click(function(){
			max1(1);
			change1();
		})
		$('.cz-title ul li').eq(1).click(function(){
			max1(0)
			change2()
		})
 
}else if(re1.matches){
	$('.cz-title1 ul li').eq(0).click(function(){
		min1(0);
		change1()	
	})
	$('.cz-title1 ul li').eq(1).click(function(){
		min1(1)
		change2()
	})
}

$(window).resize(function(){
	if(re.matches){
			$('.cz-title ul li').eq(0).click(function(){
				max1(1);
				change1();
			})
			$('.cz-title ul li').eq(1).click(function(){
				max1(0)
				change2()
			})
	 
	}else if(re1.matches){
		$('.cz-title1 ul li').eq(0).click(function(){
			min1(0);
			change1()	
		})
		$('.cz-title1 ul li').eq(1).click(function(){
			min1(1)
			change2()
		})
	}

})
 