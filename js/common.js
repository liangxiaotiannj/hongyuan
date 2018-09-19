// 页面刷新返回顶部
window.onload = function(){setTimeout(function(){$(window).scrollTop(0)},10);}
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
