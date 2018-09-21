
//代参
// 转化
//超时传输
//编码字符串
function objTostr(data) {
    data.t = new Date().getDate();
    var res = [];
    for (var key in data){
        //再URL中不可以出现中文的 需要转码encodeURIComponent
        res.push(encodeURIComponent(key)+ "=" + encodeURIComponent(data[key]));
    }
    return res.join("&");
}
function ajax(url,data,timeout,success,error) {
    var xmlhttp,timer;
    var str = objTostr(data);//对象转化为字符串
    if (window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest();
    } else{
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("GET",url+"?"+str,true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function (ev2) {
        if (xmlhttp.readyState ==4){
            clearInterval(timer);
            if (xmlhttp.status >= 200 && xmlhttp.status<300 || xmlhttp.status == 304){
                success(xmlhttp);
            } else {
                error("请求失败");
            }
        }
    }
    // 判断外界是否输入timeout
    if (timeout){
        timer = setInterval(function () {
            console.log("中断请求");
            xmlhttp.abort();
            clearInterval(timer);
        },timeout);
    }

}