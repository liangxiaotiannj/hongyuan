// 页面刷新返回顶部
window.onload = function(){setTimeout(function(){$(window).scrollTop(0)},10);$('.pageHeader').show();}
// 通用页面加载头部和底部
$('header').load('/public/pageHeader.html')

$('footer').load('/public/pageFooter.html')
//获取路由地址
function getUrlParams (name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]); return null;
}
//注册动画
var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true
});
setTimeout(function(){
  wow.init();
},50)

//页面锚点
function loadToolbar(){
  if(!!toolbarConfig){
    var html = '';
    for(var i = 0;i<toolbarConfig.length;i++){
      html+='<span onclick="jumpToMao(this)" data-id="'+toolbarConfig[i]['mao']+'">'+toolbarConfig[i]['name']+'</span>';
    }
    $('#toolbarMaos').html(html);
  }
}


function showToolbar(){
  if(typeof toolbarConfig!="undefined"&&toolbarConfig.length>0&&document.body.clientWidth>768){
    if($(window).scrollTop()>60){
      $('.header_toolbar').show();
      loadToolbar();
      $('.pageHeader').hide();
    }else{
      $('.header_toolbar').hide();
      $('.pageHeader').show();
    }
  }
}

function jumpToMao(mao){
  var maot = $(mao).attr("data-id");
  $("html,body").animate({scrollTop:$('#'+maot).offset().top-60},500);
}

// 判断底部是否固定
function judgeFixedfooter(){
  var fotterHeight  = $('.page_footer').offset().top;
  var sHeight = window.screen.availHeight;
 
  if(fotterHeight<sHeight){
      $('.page_footer').css({
          position:'fixed',
          bottom:'0'
      })
  }
}