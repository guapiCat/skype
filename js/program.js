/**
 * Created by Administrator on 2018/4/24.
 */
//切换各个项目start，，给导航样式，并切换相应的图片
$("#go_chuangke").on("click",function(){
    $(this).addClass("left_light").siblings().removeClass("left_light");
    $("#all_content_img").attr("src","");
});
$("#go_smartschool").on("click",function(){
    $(this).addClass("left_light").siblings().removeClass("left_light");
    $("#all_content_img").attr("src","");
});
$("#go_dailymath").on("click",function(){
    $(this).addClass("left_light").siblings().removeClass("left_light");
    $("#all_content_img").attr("src","img/daily_math.png");
});
//切换各个项目end
//点击事件前往详情页
$("#all_content_img").on("click",function(){
    if($(".daily_math")){
        $("#all_content_img").attr("src","img/daily_math_del.jpg");
    }
});


