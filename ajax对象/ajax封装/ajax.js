function ajax(url,success,error) {
    var xmlhttp;
    if (window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest();
    } else{
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("GET",url,true);
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