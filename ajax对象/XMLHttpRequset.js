function  createXMLHTTPObject() {
    var XMLHttpFactories = [
        function (){return new XMLHttpRequest();},//现在标准版本
        function (){return new ActiveXObject("Msxml2.XMLHTTP");},//一下三个是不同版本的IE
        function (){return new ActiveXObject("Msxml3.XMLHTTP");},
        function (){return new ActiveXObject("Microsoft.XMLHTTP");}
    ];  
    var xmlhttp = false;
    for (var i = 0; i<XMLHttpFactories.length; i++){
        try{
            xmlhttp = XMLHttpFactories[i]();
        }catch(e){
            continue;
        }
        break;
    }
    return xmlhttp;
}