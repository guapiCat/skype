/**
 * Created by Administrator on 2018/4/23.
 */
(function(){$("#header").load("header.html",function(){
    console.log("成功加载header");
    //头部监视器
    window.addEventListener("scroll",function(){
        //	console.log(document.querySelector("#header"));
        var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
        if(scrollTop>=70){
            $(".header").addClass("header_fixed");
        }else{
            $(".header").removeClass("header_fixed");
        }
    })
})})();
