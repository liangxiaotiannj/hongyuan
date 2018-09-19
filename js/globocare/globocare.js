
setTimeout(function(){
    var mao = getUrlParams('mao');
    if(!!mao){
        $('.embed_container').load('/public/characteristic.html',function(){
            // if(mao=='characteristic'){
            //     $("html,body").animate({scrollTop:$('#characteristic').offset().top-60},100);
            // }
        });
    }
},500)


var mySwiper = new Swiper('.swiper-container', {
    paginationClickable:true,
    pagination : '.swiper-pagination',
    autoplay:8000
});
// 地图定位
var map = new BMap.Map("baiduMap");

var localSearch = new BMap.LocalSearch(map);

localSearch.setSearchCompleteCallback(function (searchResult) {
    var poi = searchResult.getPoi(0);
    map.centerAndZoom(poi.point, 13);
    var marker = new BMap.Marker(new BMap.Point(poi.point.lng, poi.point.lat));  // 创建标注，为要查询的地址对应的经纬度
    map.addOverlay(marker);
});

localSearch.search($('#address').text());