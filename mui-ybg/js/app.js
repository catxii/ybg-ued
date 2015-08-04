$(document).on('pageInit', '#client_index', function(e, id, content){
	$("#picker").picker({
	  toolbarTemplate: '<header class="bar bar-nav">\
	  <button class="button button-link pull-right close-picker">确定</button>\
	  <h1 class="title">请选择销售人员</h1>\
	  </header>',
	  cols: [
	    {
	      textAlign: 'center',
	      values: ['所有销售', '销售人员 4S', '销售人员 5', '销售人员 5S', '销售人员 6', '销售人员 6 Plus', '销售人员 2', '销售人员 Retina', '销售人员 Air', '销售人员 mini', '销售人员 mini 2', '销售人员 mini 3']
	    }
	  ]
	});
});
$(document).on('pageInit', '#page-detail', function(e, id, content){
//初始化 page-detail
});