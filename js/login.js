/**
 * Created by ���� on 2016/8/15.
 */

var Login = {
    loadHtml:function(){
        function loadScript(id,url,callback){
            var script=document.createElement('script');
            script.type="text/javaScript";
            if(script.readyState){//IE
                script.onreadystatechange=function(){
                    if(script.readyState=="loaded"||script.readyState=="complete"){
                        script.onreadystatechange=null; callback(); } };
            }else{//���������
                script.onload=function(){ callback(); }; } script.src=url;
            document.getElementsByTagName('head')[0].appendChild(script);
        }

        function loadLink(id,url,callback){
            var style=document.createElement('link');
            style.type='text/css';
            style.rel='stylesheet';
            style.id = id;
            if(style.readyState){//IE
                style.onreadystatechange=function(){
                    if(style.readyState=="loaded"||style.readyState=="complete"){
                        style.onreadystatechange=null; callback(); } };
            }else{//���������
                style.onload=function(){ callback(); }; } style.href=url;
            document.getElementsByTagName('head')[0].appendChild(style);
        }

        loadLink("login_css","css/login.css",function(){
            var obj1 = document.getElementsByTagName("body")[0]; //���body��ǩ
            obj1.innerHTML = obj1.innerHTML + "<div id='login_div' class='login_div'><input id='login_mobile'/><button id='login_btn' class='btn-submit'></button></div>"; //��body����׷������Ҫ��html����

            $("#login_div").css({
                left: ($(window).width() - $("#login_div").outerWidth())/2
            });

            $('.login_div').animate({top:($(window).height() - $("#login_div").outerHeight())/2},800,function(){

                $('#login_btn').click(function(){
                    $('.login_div').animate({top:(($(window).height() - $("#login_div").outerHeight())/2)+20},200,function(){
                        $('.login_div').animate({top:-$("#login_div").outerHeight()},1000,function(){
                            $('#login_css').remove();
                            $('.login_div').remove();
                        });
                    });
                });
            });
        });


    },

    login:function(){

    }
}