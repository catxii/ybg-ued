$(".button-fill").click(function(){
	if( $("#siteName").val()==="" ){
		$.alert("请输入工地名称");
		return false;
	}else if( $("#siteMore").val()==="" ){
		$.alert("请输入工地地址");
		return false;
	}
})
 