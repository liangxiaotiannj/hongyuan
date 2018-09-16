$('header').load('/public/pageHeader.html')

$('footer').load('/public/pageFooter.html')

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



function openMenu(){
    $('.contact_type_box').hide();
    $('.menu_bg').show();
    $('.menu_box_li').show();
}

function closeMenu(){
    $('.contact_type_box').show();
    $('.menu_bg').hide();
    $('.menu_box_li').hide();
}

$('.product_show').hover(function(){
    $('.product_box').show();
},function(){
    $('.product_box').hide();
})

function jumpToPage(href){
    window.location.href = href;
}