$(document).ready(function(){
	$('.allfw-in').click(function(){
		var index=$(this).index()
		$('.ev-in').removeClass('active').eq(index+7).addClass('active')
	})
})