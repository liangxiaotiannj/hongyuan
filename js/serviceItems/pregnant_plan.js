// var nums = 0;

function autoShowSteps(nums){
    // if(nums>11){
        // nums = 0
    // }
    if(document.body.clientWidth<768){
        nums = 11
    }
    $('.img_r').attr('src','/images/serviceItems/pregnant_plan/bottom_steps_'+nums+'.png')
    // nums++;
}

var lunStepsTop = 0
var lunStepsTopUnit = 0


var lunStepsHeight = 0

setTimeout(function(){
    lunStepsTop = $('#lunSteps').offset().top
    lunStepsHeight = $('#lunSteps').height()
    lunStepsTopUnit = lunStepsHeight/12
},500)

function doScroll(){
    var h = $(window).scrollTop()+lunStepsHeight/4*3
    if(h>lunStepsTop){
        var nums = 0

        var pc = h - lunStepsTop
        if(0<pc&&pc<0.5*lunStepsTopUnit){
            nums = 1
        }else if(0.5*lunStepsTopUnit<pc&&pc<1.5*lunStepsTopUnit){
            nums = 2
        }else if(1.5*lunStepsTopUnit<pc&&pc<2*lunStepsTopUnit){
            nums = 3
        }else if(2*lunStepsTopUnit<pc&&pc<2.5*lunStepsTopUnit){
            nums = 4
        }else if(2.5*lunStepsTopUnit<pc&&pc<3*lunStepsTopUnit){
            nums = 5
        }else if(3*lunStepsTopUnit<pc&&pc<3.5*lunStepsTopUnit){
            nums = 6
        }else if(3.5*lunStepsTopUnit<pc&&pc<4*lunStepsTopUnit){
            nums = 7
        }else if(4*lunStepsTopUnit<pc&&pc<4.5*lunStepsTopUnit){
            nums = 8
        }else if(4.5*lunStepsTopUnit<pc&&pc<5*lunStepsTopUnit){
            nums = 9
        }else if(5*lunStepsTopUnit<pc&&pc<6*lunStepsTopUnit){
            nums = 10
        }else if(6*lunStepsTopUnit<pc){
            nums = 11
        }
        // this.console.log(nums)
        autoShowSteps(nums)
    }else{
        nums = 0
        autoShowSteps(nums)
    }
}