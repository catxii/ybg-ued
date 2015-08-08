// 公用初始化
$(document).on('pageInit', function(e, id, content){
  //迷你弹出等待框
  $(document).on('click','.wait-loading', function () {
      $.showIndicator();
      setTimeout(function () {
          $.hideIndicator();
      }, 2000);
  });
  // 标准弹出等待框，带标题
  $(document).on('click','.wait-loading-large', function () {
    $.showPreloader('加载中，请稍后')
    setTimeout(function () {
        $.hidePreloader();
    }, 2000);
  });

});

// 客户首页初始化
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
$(document).on('pageInit', '#saler_me_statistics', function(e, id, content){
	$("#date_picker").calendar();
});

// 司机端-送货页面
$(document).on('pageInit', '#driver_model', function(e, id, content){

    $(document).on('click', '#add_delivery_cost',function () {
      $.prompt('请输入搬运费金额（元）', '搬运费', 
        function (value) {
          $.alert(' 你输入的运费是' + value +'元');
        },
        function (value) {
          $.alert('你输入的运费是' + value +'元');
        }
      );
  });

});
