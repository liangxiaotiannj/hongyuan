var nums = 0

function autoShowSteps(){
    if(nums>11){
        nums = 0
    }
    if(document.body.clientWidth<768){
        nums = 11
    }
    $('.img_r').attr('src','/images/serviceItems/pregnant_plan/bottom_steps_'+nums+'.png')
    nums++
}

var t
var sdo = true

var lunStepsTop = 0

var lunStepsHeight = 0

setTimeout(function(){
    lunStepsTop = $('#lunSteps').offset().top
    lunStepsHeight = $('#lunSteps').height()
},500)

function doScroll(){
    var h = $(window).scrollTop()+lunStepsHeight/4*3
    if(h>lunStepsTop){
        if(sdo){
            t = setInterval(function(){
                autoShowSteps()
            },500)
        }
        sdo = false
    }else{
        nums = 0
        autoShowSteps()
        sdo = true
        clearInterval(t)
    }
}
