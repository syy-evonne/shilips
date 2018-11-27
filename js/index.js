$(document).ready(function(){
	//logo
	$(".logo-box").mouseenter(function(){
		$('.logo2').stop().animate({height:'50px'})
	}).mouseleave(function(){
		$('.logo2').stop().animate({height:'0'})
	})
	//返回顶部
back.onclick = function(){
            scrollTo(0,0);
        }
	//侧栏
	$(".sideBar").click(function() {
		$(this).stop().animate({right:"0px"})
	}).mouseleave(function(){
		$(this).stop().animate({right:"-50px"})
	})
})
