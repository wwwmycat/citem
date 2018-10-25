	function one(){
		if ($(window).width()<768) {
			$('.carMenu-list').removeClass('shows');
			$('.seeLi li').unbind('mouseenter').unbind('mouseleave');
		}
	}
	one();
	$('a').click(function(){
		$(this).css('text-decoration', 'none');
	})
	//导航栏
	$('.navbars li.nav-list').click(function(){
		index = $(this).index();	
		$(this).children('a').addClass('navColor');
		$(this).siblings().children('a').removeClass('navColor');
		$('.wrapper').eq(index).toggleClass('navActive').siblings('.wrapper').removeClass('navActive');	
		if ($('.wrapper').eq(index).hasClass('navActive')) {
			$(this).children('a').addClass('five')
			$(this).siblings('.navbars li.nav-list').children('a').removeClass('five');
		}
		else{
			$(this).children('a').removeClass('five');
			$(this).siblings('.navbars li.nav-list').children('a').removeClass('five');
		}
	})
	$('.nav-search span').click(function(){
		$('.searchBox').toggleClass('shows');
	})
	//所有车型
	$('.car-list li').click(function(){
		index = $(this).index();
		$(this).addClass('carActive').siblings().removeClass('carActive');
		$('.carMenu-list').eq(index).addClass('shows').siblings('.carMenu-list').removeClass('shows');	
	})
	//车型的左右点击
	$('.next').click(function(){
		$('.carMenu-list').css('left','-940px');
		$(this).addClass('disappear').siblings('.pre').removeClass('disappear');
	})
	$('.pre').click(function(){
		$('.carMenu-list').css('left','0px');
		$(this).addClass('disappear').siblings('.next').removeClass('disappear');
	})
	//手机导航栏
	$('.menu-toggle').click(function(){
		$(this).children('span').eq(0).toggleClass('lineone');
		$(this).children('span').eq(1).toggleClass('linetwo');
		$(this).children('span').eq(2).toggleClass('linethree');
		$('.menu-list').toggleClass('active');
		$('#content').toggleClass('linethree');
		$('.wrapper').each(function(i){
			var a = $(this).css('display');
			if(a == 'block'){
				$(this).addClass('linethree')
			}else{
				$(this).removeClass('linethree')
			}
		})
	})
	//手机菜单
	$('.menunav').click(function(){
		$(this).parent('.navbars').toggleClass('navone')
		$(this).parent('.navbars').siblings('.search-box').toggleClass('linethree');
		$(this).siblings('li').toggleClass('linethree');
		$(this).toggleClass('topmenu');
	})
	//手机车型
	$('.carmenu').click(function(){   
		index = $(this).index();
		var s = $(this).siblings().eq(0).css('display');
		console.log(s)
		$(this).toggleClass('topmenu');
		if(s == 'none') {
			one();
		}else{
			$('.carMenu-list').eq(index).addClass('shows').siblings('.carMenu-list').removeClass('shows');
		}
		$(this).parent('.car-list').toggleClass('navone');
		$('.navbars,.carFooter').toggleClass('linethree');
		$(this).siblings('li').toggleClass('linethree');
	})
	//底部导航
	$('.footer-menu').click(function(){
		$(this).siblings('dd').toggleClass('show')
		$(this).children('span').toggleClass('myFont3');
	})
