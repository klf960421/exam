function formatNumber(n) {  
    n = n.toString()  
    return n[1] ? n : '0' + n  
}
export default function formatTime(number,format){ 
    console.log(number)
    var formateArr  = ['Y','M','D','h','m','s'];  
    var returnArr   = [];  
    var date = new Date(number * 1);  
    returnArr.push(date.getFullYear());  
    returnArr.push(formatNumber(date.getMonth() + 1));  
    returnArr.push(formatNumber(date.getDate()));  
    returnArr.push(formatNumber(date.getHours()));  
    returnArr.push(formatNumber(date.getMinutes()));  
    returnArr.push(formatNumber(date.getSeconds())); 
    // console.log(returnArr) 
    for (var i in returnArr)  
    {  
      format = format.replace(formateArr[i], returnArr[i]);  
    }  
    return format;  
}