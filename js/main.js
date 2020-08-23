$(document).ready(function()
    {
        var x = window.matchMedia("(max-width:992px)")
         var homeNAV = $("#home-nav");
         var offset = homeNAV.offset();
         $(window).on("scroll",function(){
           if(screen.width>992){
            if($(window).scrollTop()>offset.top){
                $("#nav").css({
                   "background-color":"#ffff",
                 
                   
                   
                })
               
              
                $("a").css(  "color","black");
                $("a").mouseenter(function(){
                    $(this).css("color","#29ca8e");
                })
                $("a").mouseleave(function(){
                    $(this).css("color","black");
                })
            }else{
               $("#nav").css({
                   "background-color":"transparent", 
                   
                })
              
                $("a").css(  "color","#ffff");
                $("a").mouseenter(function(){
                    $(this).css("color","#29ca8e");
                })
                $("a").mouseleave(function(){
                    $(this).css("color","#ffff");
                })
                
              
            }
           }
           else{
            $("#nav").css({
                "background-color":"#ffff",
              
                
                
             })
            
           
             $("a").css(  "color","black");
             $("a").mouseenter(function(){
                 $(this).css("color","#29ca8e");
             })
             $("a").mouseleave(function(){
                 $(this).css("color","black");
             })
           }
         })



})