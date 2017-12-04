function BrowserType() 
 { 
   var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串 
   var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器 
   // var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器 
   var isIE=window.ActiveXObject || "ActiveXObject" in window
   // var isEdge = userAgent.indexOf("Windows NT 6.1; Trident/7.0;") > -1 && !isIE; //判断是否IE的Edge浏览器 
   var isEdge = userAgent.indexOf("Edge") > -1; //判断是否IE的Edge浏览器
   var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器 
   var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1; //判断是否Safari浏览器 
   var isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1&&!isEdge; //判断Chrome浏览器 

   if (isIE)  
   { 
      var reIE = new RegExp("MSIE (\\d+\\.\\d+);"); 
      reIE.test(userAgent); 
      var fIEVersion = parseFloat(RegExp["$1"]); 
      if(userAgent.indexOf('MSIE 6.0')!=-1){
          return "IE6";
      }else if(fIEVersion == 7) 
          { return "IE7";} 
      else if(fIEVersion == 8) 
          { return "IE8";} 
      else if(fIEVersion == 9) 
          { return "IE9";} 
      else if(fIEVersion == 10) 
          { return "IE10";} 
      else if(userAgent.toLowerCase().match(/rv:([\d.]+)\) like gecko/)){ 
              return "IE11";
          } 
      else
        { return "0"}//IE版本过低
    }//isIE end 

    if (isFF) { return "FF";} 
    if (isOpera) { return "Opera";} 
    if (isSafari) { return "Safari";} 
    if (isChrome) { return "Chrome";} 
    if (isEdge) { return "Edge";} 
  }//myBrowser() end 

  alert(BrowserType());

///////////////////////////////////////////////////////////

//下面是关于IE各浏览器的判断方法
// 下面是支持ie11的版本的，当然ie6-10也是支持的
    function isIE() { //ie?
        if (window.ActiveXObject || "ActiveXObject" in window){
            return true;
         }else{
             return false;
         }
    }

    alert(isIE())    
    IE11的userAgent里是没有MSIE标志的，，所以只可以判断IE10及10以下浏览器
    function isIE(){
        if (window.navigator.userAgent.indexOf("MSIE")>=1) 
        return true; 
        else
        return false; 
    }




    // //可以判断IE10及10以下浏览器，因为IE11不支持document.all了
     if(document.all){  
        alert("is   IE!");  
      }


    //判断是否是IE8及以下版本的浏览器
    //原理是利用了IE8及以下版本的浏览器与标准浏览器在处理数组的toString方法的差异做成的。
    //-[1,]是为了实现该方法
    //对于标准游览器，如果数组里面最后一个字符为逗号，JS引擎会自动剔除它
    var ie = !-[1,]; 
    if(ie){
        alert('IE8及以下版本的浏览器');
    }else{
        alert('不是IE8及以下版本的浏览器');
    }


    //判断IE11
    if(navigator.userAgent.toLowerCase().match(/rv:([\d.]+)\) like gecko/)){
        alert('IE11')
    }else{
        alert('不是IE11')
    }


    //支持Edge
    var isEdge = navigator.userAgent.indexOf("Edge") > -1; //判断是否IE的Edge浏览器
    if(isEdge){
        alert('Edge');
    }else{
        alert('不是Edge');
    }

//作者：undefinedCheng
//链接：http://www.jianshu.com/p/26676df58e1a
//來源：简书
//著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

