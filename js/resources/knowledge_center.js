

//获取热门文章 最多显示10条
function getHotText(){
    var hotTexts = [1,2,3,4,5,6,7,8,9,10,11,12,13];
    var html = '';
    for (var i = 0;i<hotTexts.length;i++){
        html+='<div class="item">'+i+'.xxxxxxxxs</div>';
    }
    
    $('#knowledgeHeadline').html(html);
}

//获取其余信息
function getKnowledges(){
    var hotTexts = [1,2,3,4,5,6,7,8,9,10,11,12,13];
    var html = '';
    for (var i = 0;i<hotTexts.length;i++){
        html+='<div class="knowledge_card wow animated fadeInLeft" data-wow-duration="1s" data-wow-delay="0.5s">';
        html+='<div class="img_box">';
        html+='<img class="img" src="" alt="">';
        html+='</div>';
        html+='<div class="knowledge_info">';
        html+='<div class="knowledge_title">'+i+'.xxxxx标题</div>';
        html+='<div class="knowledge_text">xxxx摘要xxxx摘要xxxx摘要xxxx摘要xxxx摘要xxxx摘要xxxx摘要xxxx摘要xxxx摘要xxxx摘要xxxx摘要xxxx摘要xxxx摘要xxxx摘要xxxx摘要xxxx摘要xxxx摘要xxxx摘要xxxx摘要xxxx摘要xxxx摘要xxxx摘要xxxx摘要xxxx摘要xxxx摘要xxxx摘要xxxx摘要xxxx摘要xxxx摘要xxxx摘要</div>';
        html+='</div>';
        html+='</div>';
    }
    
    $('#knowledgeCenter').html(html);
}


getHotText()

getKnowledges()