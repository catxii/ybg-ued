
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

// 工地管理
$(document).on("pageInit","#address_view",function(e,id, content){
  var js = '<script src="libs/islider/js/iSlider.js"></script><script src="libs/islider/js/plugins/dot.js"></script><script src="libs/islider/js/plugins/button.js"></script><link rel="stylesheet" href="libs/islider/style/iSlider.css"/>';
  $("body").append(js);

  //滚动图片js
      var list = [{
            content: "img/my-site-view_11.jpg",
        },{
            content: "img/my-site-view_11.jpg",
        },{
            content: "img/my-site-view_11.jpg",
        }];
      var islider = new iSlider(
      document.getElementById("islider"), list, {
          // data: list
          dom: document.getElementById("islider"),
          // isVertical: true,
          isLooping: 1,
          isOverspread: 1,
          animateType: 'default',
          animateTime: 500,
          fixPage: 1,
          isDebug: 1,
          // isDebug: 0,
          // isLoading: true,
          // isAutoplay: true,
          // duration: 5000,
          plugins: [['dot', {locate:'relative'}], 'button', ['zoompic', {zoomFactor: 2}]],
          onslide: function () {
              console.debug(arguments)
          },
          onslidechange: function () {
              console.debug(arguments, 'Change~ juse one time');
              this.off('slideChange', arguments.callee);
          }
      });


      //订单轨迹js
      var firstStatusBigBox = $(".card-message").eq(0);
      var firststatusBox = firstStatusBigBox.find(".ps-status-box");
      firststatusBox.show();
      firstStatusBigBox.find(".order_status_btn").attr("data-status","关闭记录").removeClass("close");
      $(document).on("click",".card-header",function(){
        var that = $(this).find(".order_status_btn");
        if( that.attr("data-status") =="查看记录" ){
          that.attr("data-status","关闭记录").removeClass("close");
          that.closest(".card-header").siblings(".card-content").find(".ps-status-box").show();
        }else{
          that.attr("data-status","查看记录").addClass("close");
          that.closest(".card-header").siblings(".card-content").find(".ps-status-box").hide();
        }
        
      })


    var kitListBtn = $(".kit-list-index li"); //获取按钮的变量
    if( kitListBtn.length<4 ){ //如果按钮的数量小于4个
      kitListBtn.parent().addClass("three"); //添加three
    }

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




// $(document).on("pageInit", "#page-infinite-scroll",function(e, id, page) {

//     // 加载flag
//     var loading = false;
//     // 最多可加载的条目
//     var maxItems = 100;

//     // 每次加载添加多少条目
//     var itemsPerLoad = 20;
 
//     function addItems(number, lastIndex) {
//         // 生成新条目的HTML
//         var html = '';
//         for (var i = lastIndex + 1; i <= lastIndex + number; i++) {
//             html += '<li class="item-content"><div class="item-inner"><div class="item-title">Item ' + i + '</div></div></li>';
//         }
//         // 添加新条目
//         $('.list-container').append(html);

//     }
//     //预先加载20条
//     addItems(itemsPerLoad, 0);

//     // 上次加载的序号
//     var lastIndex = 20;

//     // 注册'infinite'事件处理函数
//     $(document).on('infinite', '.infinite-scroll',
//     function() {

//         // 如果正在加载，则退出
//         if (loading) return;

//         // 设置flag
//         loading = true;

//         // 模拟1s的加载过程
//         setTimeout(function() {
//             // 重置加载flag
//             loading = false;

//             if (lastIndex >= maxItems) {
//                 // 加载完毕，则注销无限加载事件，以防不必要的加载
//                 $.detachInfiniteScroll($('.infinite-scroll'));
//                 // 删除加载提示符
//                 $('.infinite-scroll-preloader').remove();
//                 return;
//             }

//             // 添加新条目
//             addItems(itemsPerLoad, lastIndex);
//             // 更新最后加载的序号
//             lastIndex = $('.list-container li').length;
//             //容器发生改变,如果是js滚动，需要刷新滚动
//             $.refreshScroller();
//         },
//         1000);
//     });

//     $(document).on("pageInit", "#page-infinite-scroll",
//     function(e, id, page) {
//         function addItems(number, lastIndex) {
//             // 生成新条目的HTML
//             var html = '';
//             for (var i = 0; i < 20; i++) {
//                 html += '<li class="item-content"><div class="item-inner"><div class="item-title">新条目</div></div></li>';
//             }
//             // 添加新条目
//             $('.infinite-scroll .list-container').append(html);
//         }
//         var loading = false;
//         $(page).on('infinite',
//         function() {

//             // 如果正在加载，则退出
//             if (loading) return;

//             // 设置flag
//             loading = true;

//             // 模拟1s的加载过程
//             setTimeout(function() {
//                 // 重置加载flag
//                 loading = false;

//                 addItems();
//                 $.refreshScroller();
//             },
//             1000);
//         });
//     });
// });

$(document).on("pageInit", "#page-infinite-scroll",function(e, id, page) {

    // 加载flag
    var loading = false;
    // 最多可加载的条目
    var maxItems = 100;

    // 每次加载添加多少条目
    var itemsPerLoad = 3;
 
    function addItems(number, lastIndex) {
        // 生成新条目的HTML
        var html = '';
        var url = "json/sheng1.json";
        $.ajax({
              url:url,
              type:'get',
              success:function(data){
                  for (var i = lastIndex + 1; i <= lastIndex + number; i++) {
                        var Id = data.list[i].id;
                        var name = data.list[i].nickname;
                        var mobile = data.list[i].mobile;
                        html += '<li class="item-content"><a href="/index.php?m=Weixin&amp;c=Sales&amp;a=order&amp;id='+Id+'" data-transition="slide-in" class="item-inner arrow-bg-padding-right" data-ignore="push"><div class="item-title-row black-color"><div class="item-title">'+name+'</div></div><div class="item-subtitle clearfix"><div class="pull-left black-color">'+mobile+'</div><div class="pull-right" style="font-size:.6rem; line-height: 1rem;"><span class="warning-color"><span class="icon icon-app"></span> 订单进行中</span></div></div></a></li>';
                        
                         
                  }
                  console.log(html);
                  // 添加新条目
                  $('.list-container').append(html);
               }
         });
        


    }
    //预先加载条
    addItems(itemsPerLoad, 0);

    // 上次加载的序号
    var lastIndex = 3;

    // 注册'infinite'事件处理函数
    $(document).on('infinite', '.infinite-scroll',
    function() {

        // 如果正在加载，则退出
        if (loading) return;

        // 设置flag
        loading = true;

        // 模拟1s的加载过程
        setTimeout(function() {
            // 重置加载flag
            loading = false;

            if (lastIndex >= maxItems) {
                // 加载完毕，则注销无限加载事件，以防不必要的加载
                $.detachInfiniteScroll($('.infinite-scroll'));
                // 删除加载提示符
                $('.infinite-scroll-preloader').remove();
                return;
            }

            // 添加新条目
            addItems(itemsPerLoad, lastIndex);
            // 更新最后加载的序号
            lastIndex = $('.list-container li').length;
            //容器发生改变,如果是js滚动，需要刷新滚动
            $.refreshScroller();
        },
        1000);
    });

    $(document).on("pageInit", "#page-infinite-scroll",
    function(e, id, page) {
        function addItems(number, lastIndex) {
            // 生成新条目的HTML
            var html = '';
            for (var i = 0; i < 20; i++) {
                html += '<li class="item-content"><div class="item-inner"><div class="item-title">新条目</div></div></li>';
            }
            // 添加新条目
            $('.infinite-scroll .list-container').append(html);
        }
        var loading = false;
        $(page).on('infinite',
        function() {

            // 如果正在加载，则退出
            if (loading) return;

            // 设置flag
            loading = true;

            // 模拟1s的加载过程
            setTimeout(function() {
                // 重置加载flag
                loading = false;

                addItems();
                $.refreshScroller();
            },
            1000);
        });
    });
});

$(document).on("pageInit", "#pay_info_model",function(e, id, page) {
  function copyUrl2(name,text,imgsrc){
      // var  Url2 = document.getElementById(textarea);
      // Url2.select(); // 选择对象 
      // document.execCommand("Copy"); // 执行浏览器复制命令
      $.alert("<p class='explain-area'>1，银行收款人均为：<span style='color:red;'>宁峥辉</span>；</br>2，长按银行卡号可复制粘贴；</br>3，二维码图片长按图片并点击“识别二维码“可快速添加。</p><p class='bank-name'>"+name+"</p><img src='"+imgsrc+"'><p class='bank-name danger-color'>"+text+"</p>");
    }
    $(".bank-list .item-content").click(function(){
      var textarea =$(this).find("textarea").attr("id");
      var copyNumber = $(this).find(".item-title").attr("data-id");
      var name = $(this).find(".item-title").attr("data-name");
      var imgsrc = $(this).find(".item-title").attr("data-img");
      copyUrl2(name,copyNumber,imgsrc);
    })
});
