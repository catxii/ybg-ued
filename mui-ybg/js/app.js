
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
				        window.location.href="user_address_index_second_index.html"
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

    //调用图片浏览器方法
    function imgBrower(img){
      var myPhotoBrowserPopup = $.photoBrowser({
          photos : [ img[0],img[1] ], //显示的图片
          type: 'popup',
          theme: 'light',
          type: 'standalone'
      });

      //点击打开图片
      $(".img-brower-list .img").click(function () {
        //获取点击的图片索引
        var index = $(this).index();
        //打开图片显示
        myPhotoBrowserPopup.open(index);
        //增加删除按钮
        $(".photo-browser .bar-nav").append("<a class='icon icon-remove pull-right'></a>");
      
        //删除图片按钮
        $(".icon-remove").click(function(){
          //当前展示的图片索引值
          var currentImgNum = parseFloat($(".photo-browser-current").text())-1;
          //上传按钮html
          var uploadImgBtn ='<li><a href="javascript:void(0)" class="add-img-brower button button-light"><i class="icon icon-picture"></i>+</a></li>';
          //删除数组对应的图片路劲数据位置
          imgArray.splice([currentImgNum],1)
          imgBrower(imgArray);
          $(".img-brower-list li").eq(currentImgNum).remove();
          $(".img-brower-list").append(uploadImgBtn);
          $(".photo-browser").remove();

          //打印
          console.log(imgArray);
        })

      });
    }
    //新增加的图片
    var imgArray = ["img/mall-index-ad.jpg","img/mall-index-ad.jpg"]; 
    imgBrower(imgArray);

    

});
// 用户端-新增工地
$(document).on('pageInit', '#user_order_list', function(e, id, content){

    //调用图片浏览器方法
    function imgBrower(img){
      var myPhotoBrowserPopup = $.photoBrowser({
          photos : [ img[0],img[1] ], //显示的图片
          type: 'popup',
          theme: 'light',
          type: 'standalone'
      });

      //点击打开图片
      $(".img-brower-list .img").click(function () {
        //获取点击的图片索引
        var index = $(this).index();
        //打开图片显示
        myPhotoBrowserPopup.open(index);

      });
    }
    //新增加的图片
    var imgArray = ["img/mall-index-ad.jpg","img/mall-index-ad.jpg"]; 
    imgBrower(imgArray);

});


// 用户端-新增工地
$(document).on('pageInit', '#address_add', function(e, id, content){

    $(document).on('click', '#add_new_linkman',function () {
      var html = '<div class="list-block address-add-list" id="default_address_add">'+
      '<a class="button button-danger remove-user position-right">删除</a>'+
      '<ul>'+
        '<li>'+
          '<div class="item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title label">收货人：</div>'+
              '<div class="item-input" style="padding-right: 2.4rem;">'+
                '<input type="text" placeholder="请输入收货人名称">'+
              '</div>'+
            '</div>'+
          '</div>'+
        '</li>'+
        '<li>'+
          '<div class="item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title label">联系电话：</div>'+
              '<div class="item-input"  style="padding-right: 2.4rem;">'+
                '<input type="tel" placeholder="请输入联系电话">'+
              '</div>'+
            '</div>'+
          '</div>'+
        '</li>'+
      '</ul>'+
    '</div>';
      $('.address-add-list').last().after(html);
    });

   $(document).on("click",".remove-user",function(){
      $(this).siblings().css("background","#fefeac");
      var that = $(this);
      setTimeout(function(){
        that.parent().remove();
      },300)
      
   });


});

// 切换城市
$(document).on('pageInit', '#address_Model', function(e, id, content){
  $(".change-city").click(function () {
        var buttons1 = [
          {
            text: '请选择您的城市',
            label: true
          },
          {
            text: '长沙',
            onClick: function() {
              $(".city-area").text( groups[0][1].text );
            }
          },
          {
            text: '武汉',
            onClick: function() {
              $(".city-area").text( groups[0][2].text );
            }
          }
        ];
        var buttons2 = [
          {
            text: '取消',
          }
        ];
        var groups = [buttons1, buttons2];
        $.actions(groups);
  });
});
