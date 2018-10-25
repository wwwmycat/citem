	$(window).resize(function(){
		if($(window).width()<768){
			$('.bottomInfo>span').removeClass('attention');
			$('.bottomInfo>span').addClass('hh')
	    }else if($(window).width()>768){
			$('.bottomInfo>span').removeClass('hh');
			$('.bottomInfo>span').addClass('attention')
	    }
	})
	
	//轮播图
	var num=-1;
	var timer;
    function move(n){
		$('.lines li').eq(n).addClass('two').siblings().removeClass('two')
		$('.lines li').eq(n).addClass('myLines').siblings().removeClass('myLines')
		$('.slide-info').eq(n).show().siblings('.slide-info').hide();
    }

	function go(){
		timer=setInterval(function(){
			num++;
			if(num>1){
				num=0;
			}
			$('.slide ul').css('left',-num*100+'%');
			move(num);
		},2000)
		
	}
	go();
    
    $('.slide').hover(function(){
    	  $('.slide>span').fadeIn();
       },
       function(){
       	  $('.slide>span').fadeOut();
       }
    )
    //轮播图左右点击
    $('.arrow-left').click(function(){
    	clearInterval(timer);
    	num--;
		if(num<-1){
			num=0;
		}
		$('.slide ul').css('left',num*100+'%');
		move(num);
    })
    
    $('.arrow-right').click(function(){
    	clearInterval(timer);
    	num++;
		if(num>1){
			num=0;
		}
		$('.slide ul').css('left',-num*100+'%');
		move(num);
    })
    //地图
    $('.yourList span').click(function(){
    	var n=$(this).index();
    	$(this).addClass('lists').siblings('span').removeClass('lists')
    	$('.list-content .same').eq(n).show().siblings('.same').hide();
    })
    //input
    $('.upCon').click(function(){
    	if($('.myInputs').css("display")=="none"){
    		$('.myInputs').show()
    		$('.upCon').children().addClass('change');
    		$('.inputs1').slideUp();
    	}else{
    		$('.myInputs').hide()
    		$('.inputs1').slideDown();
    		$('.upCon').children().removeClass('change');
    	}

    })
    
