	var num=-1;
	var timer;
	var n=0;
	//轮播图 
	function move(n){
		 $('.hero-title').eq(n).show().siblings().hide();
		 $('.myLine li').eq(n).addClass('two').siblings().removeClass('two');
		 $('.myLine li').eq(n).addClass('hh').siblings().removeClass('hh');
		 $('.slides').css('left',-n*100+'%');
	}
	function go(){
		timer=setInterval(function(){
			num++;
			if(num>2){
				num=0;
			}
			move(num);
		 },2000)
	}
	go();
    $('.slideTop').hover(function(){
    	$('.slideTop>span').fadeIn();
    },
      function(){
      	$('.slideTop>span').fadeOut();
      }
   )
    //轮播图左右点击
     $('.tag-left').click(function(){
    	clearInterval(timer);
    	n--;
		if(n<-2){
			n=0;
		}
		move(-n);
		go();
    })
    $('.tag-right').click(function(){
    	clearInterval(timer);
    	num++;
		if(num>2){
			num=0;
		}
		move(num);
		go();
    })
    
    //车型信息点击
    $('.car-lists li').click(function(){
		if($(this).hasClass('third')){
	    	$('.click-left').hide();
	    	$('.click-right').hide();
	    }else{
	    	$('.click-right').show();
	    }
    	$(this).children().css('border-bottom','2px solid red');
    	$(this).siblings().children().css('border-bottom','none');
    	n=$(this).index();
        $('.picList').eq(n).show().siblings('.picList').hide();
   })
    
    //车型详细信息左右点击
    $('.click-left').click(function(){
		$('.click-right').show();
		$('.click-left').hide();
    	$('.picList').css('left','0');
    })
    $('.click-right').click(function(){
		$('.click-right').hide();
		$('.click-left').show();
    	$('.picList').css('left','-224px');
    })
    if($(window).width()<768){
    	$('.click-right').click(function(){
    		num++;
    	   $('.click-left').hide();
    	   $('.click-right').show();
           $('.picList').css('left',num*'-100%');
	    })
    }

     //地图
    $('.yourList span').click(function(){
    	var n=$(this).index();
    	$(this).addClass('lists').siblings('span').removeClass('lists')
    	$('.list-content .theSame').eq(n).show().siblings('.theSame').hide();
    })
    $('.menu-up').click(function(){
    	if(n==0){
    		$(this).addClass('come');
    		 $(this).parent().css('height','auto');
    		 n++;
    	}else{
    		$(this).removeClass('come');
    	    $(this).parent().css('height','120px');
    	    n--;
    	}
    	
    })
    
     //AMG公司
     $('.mywrite1 li').click(function(){
     	$(this).addClass('slantLine').siblings().removeClass('slantLine');
     	n=$(this).index();
     	$('.storys').eq(n).show().siblings('.storys').hide();
     	$('.mypics').eq(n).show().siblings('.mypics').hide(); 
     })
     $('.longLiness li').click(function(){
     	$(this).addClass('long').siblings().removeClass('long');
     	n=$(this).index();
     	$('.No').eq(n).show().siblings('.No').hide();
     	$('.storys').eq(n).show().siblings('.storys').hide();
     	$('.mypics').eq(n).show().siblings('.mypics').hide();
     })
     
     //AMG故事
     $('.mywrite2 li').click(function(){
     	$(this).addClass('slantLine').siblings().removeClass('slantLine');
     	var n=$(this).index();
     	$('.story').eq(n).show().siblings('.story').hide();
     	$('.mPic').eq(n).show().siblings('.mPic').hide();
     })
     $('.longLines li').click(function(){
     	$(this).addClass('long').siblings().removeClass('long');
     	n=$(this).index();
     	$('.phase').eq(n).show().siblings('.phase').hide();
     	$('.story').eq(n).show().siblings('.story').hide();
     	$('.mPic').eq(n).show().siblings('.mPic').hide();
     })

     //AMG工程技术
     $('.mywrite3 li').click(function(){
     	$(this).addClass('slantLine').siblings().removeClass('slantLine');
     	n=$(this).index();
     	$('.storyss').eq(n).show().siblings('.storyss').hide();
     	$('.picss').eq(n).show().siblings('.picss').hide();
     })
     $('.my li').click(function(){
     	$(this).addClass('long').siblings().removeClass('long');
     	n=$(this).index();
     	$('.myPhase').eq(n).show().siblings('.myPhase').hide();
     	$('.storyss').eq(n).show().siblings('.storyss').hide();
     	$('.picss').eq(n).show().siblings('.picss').hide();
     })
     
	 $(window).scroll(function(){
     	 var st=$(window).scrollTop();
 		 if(st<660){
 		 $('.con').removeClass('xsnav');
 	  }
		if(st>$('.myCar').offset().top){
		 	$('.con').addClass('xsnav');
		}
	})
   
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
		//点击导航栏回到对应的地方
		function clickk(num){
			$('html,body').stop().animate({'scrollTop':$('.myNav').eq(num).offset().top - 50},1000);
		}
		/*nav的click事件*/
		$('#xsnav ul li').click(function(){
			var num = $(this).index();
			clickk(num);
		}); 
		
		/*nav的scroll事件*/
		$(window).scroll(function(){
			var st = $(window).scrollTop();
			var st0 = $('.myNav').eq(0).offset().top - 40;
			var st1 = $('.myNav').eq(1).offset().top - 40;
			var st2 = $('.myNav').eq(2).offset().top - 40;
			var st3 = $('.myNav').eq(3).offset().top - 40;
			var st4 = $('.myNav').eq(4).offset().top - 40;
			var st5 = $('.myNav').eq(5).offset().top - 40;
			
		/*样式*/
		if(st>st0&&st<st1){
			nscroll(0);
		}else if(st>st1&&st<st2){
			nscroll(1);
		}else if(st>st2&&st<st3){
			nscroll(2);
		}else if(st>st3&&st<st4){
			nscroll(3);
		}else if(st>st4&&st<st5){
			nscroll(4);
		}else if(st>st5){
			nscroll(5);
		}
		})
		      
	      
      
      
