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
	$(document).on('pageAnimationStart','#user_modal', function (e, id, content) {
  				$(document).on('click','#order_submit', function () {
				      $.confirm('请添加您的工地收货地址', function () {
				        window.location.href="user_address_new.html"
				      });
				  });

          $('.parent').click(function(){   // 获取父行
             $(this).siblings('.child_row').toggle();  // 隐藏/显示子行
            }).click();

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
  $(document).on('pageInit', '#saler_model', function(e, id, content){

     function list_ctrl(){
       util.toucher(document.getElementById('list_Group'))
        .on('swipeLeft','.item-content',function(){
          $(this).addClass('show-button');
          return false;
        })
        .on('swipeRight','.item-content',function(){
          $(this).removeClass('show-button');
          return false;
        })
     }
     list_ctrl();
  });
  $(document).on('pageInit', '#saler_me_statistics', function(e, id, content){
  	$("#date_picker").calendar();

    // 选择一个日期
    $(document).on("click","#date_picker_ul li",function(){
        $(this).addClass("current").siblings().removeClass("current");
        if( $(this).hasClass("custom-btn")){
          $(".date-info").hide();
          $(".custom-date-list").show();
        }else{
          $(".date-info").show();
          $(".custom-date-list").hide();
        }
    });

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