/**
 * Created by Administrator on 2018/4/24.
 */
//�л�������Ŀstart������������ʽ�����л���Ӧ��ͼƬ
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
//�л�������Ŀend
//����¼�ǰ������ҳ
$("#all_content_img").on("click",function(){
    if($(".daily_math")){
        $("#all_content_img").attr("src","img/daily_math_del.jpg");
    }
});


