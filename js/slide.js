$(function(){
    let total = $(".panel li").length;
    console.log(total)
    let i = 0;

    sld();
    start();

    function sld (){
        $(".panel").stop().animate({"margin-left": -i * 500})
        $(".navi li").removeClass("on")
        $(".navi li").eq(i).addClass("on")
       } 

    function start(){
        timer = setInterval(function(){
            i++
            if(i == total - 1){
                $(".panel").stop().animate({"margin-left": "-2000px"}, function(){
                    $(".panel").css({"margin-left": 0})
                })
                i = 0;
            } else {
                $(".panel").stop().animate({"margin-left": -i * 500});
            } 
            
           $(".navi li").removeClass("on")
           $(".navi li").eq(i).addClass("on")
    
        },1500)
    


    }

    
    $(".next").on("click", function(){
        clearInterval(timer)
        i++
        if(i == total - 1){
            $(".panel").stop().animate({"margin-left": "-2000px"}, function(){
                $(".panel").css({"margin-left": 0})
            })
            i = 0;
        } else {
            $(".panel").stop().animate({"margin-left": -i * 500});
        } 
        
       $(".navi li").removeClass("on")
       $(".navi li").eq(i).addClass("on")
        start()
    })


    $(".prev").on("click", function(){
        clearInterval(timer)
        i--
        if(i < 0){
            $(".panel").css({"margin-left":-2000})
            $(".panel").stop().animate({"margin-left":-1500})
            i = 3;
        } else {
           
            
        } 
        sld()
        start()
        
    })


    $(".navi li").on("click", function(){
        clearInterval(timer)
        i = $(this).index()

        sld()
        start()
        
    })


})


// if(i == 0){
//     $(".panel").stop().animate({"margin-left":"0px"})
//     $(".navi li").stop().animate({"background-color":"red"})
//     i++
// } else if(i == 1){
//     $(".panel").stop().animate({"margin-left":"-500px"})
    
//     i++
// } else if(i == 2){
//     $(".panel").stop().animate({"margin-left":"-1000px"})
//     i++
// } else if(i == 3){
//     $(".panel").stop().animate({"margin-left":"-1500px"})
//     i = 0;
// }