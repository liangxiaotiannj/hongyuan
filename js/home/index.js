
var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    pagination : '.swiper-pagination',
    mousewheelControl : true,
    paginationClickable:true,
    speed:800,
    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
      swiperAnimateCache(swiper); //隐藏动画元素 
      swiperAnimate(swiper); //初始化完成开始动画
    }, 
    onSlideChangeEnd: function(swiper){ 
      swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
    },
    onTransitionStart: function(swiper){
        closeMeun()
    }
});




function indexCloseMenu(){
    $('.pageHeader').hide();
    $('.contact_type_box').show();
    $('.index_mask').hide();
}

function jumpToPage(href){
    window.location.href = href;
}

function indexOpenMenu(){
    $('.pageHeader').show();
    $('.pageHeader').removeClass('pageHeaderStatus');
    $('.contact_type_box').hide();
    $('.index_mask').show();
    openMenu();
}