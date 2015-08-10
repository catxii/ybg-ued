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
  // 按钮弹出提示
	$(document).on('click','.confirm-ok', function () {
      		$.confirm('确定取消订单??', function () {
          		$.alert('你成功的取消了订单');
      		});
  		});

});
// 订单提交按钮提示
	$(document).on('pageInit','#user_modal', function (e, id, content) {
  
  				$(document).on('click','#order_submit', function () {
				      $.confirm('请添加您的工地收货地址', function () {
				        window.location.href="user_address_new.html"
				      });
				  });
	});
	
// 提交订单按钮提示
	$(document).on('pageInit','#user_submit', function (e, id, content) {
  
  				$(document).on('click','#user_order_submit', function () {
				      $.confirm('订单成功', function () {
				        window.location.href="user_mall_index.html"
				      });
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

