
//代参
// 转化
function objTostr(data) {
    data.t = new Date().getDate();
    var res = [];
    for (var key in data){
        res.push(key + "=" + data[key]);
    }
    return res.join("&");
}
function ajax(url,data,success,error) {
    var xmlhttp;
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
            if (xmlhttp.status >= 200 && xmlhttp.status<300 || xmlhttp.status == 304){
                success(xmlhttp);
            } else {
                error("请求失败");
            }
        }
    }

}