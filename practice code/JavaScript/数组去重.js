function repeat_1(arr){
  var result = [];
  var json = {};
  for(var i=0,len=arr.length; i<len; i++){
    json[arr[i]] = 0;
  }
  for(var key in json){
    result.push(key);
  }
  console.log(result);
}
function repeat_2(arr){
  var result = [];
  for(var i=0,len=arr.length; i<len; i++){
    if(result.indexOf(arr[i]) < 0){
      result.push(arr[i]);
    }
  }
  console.log(result);
}
console.log([...new Set([1,2,1,"1",3,4,5,6])]);
repeat_1([1,2,3,1,2,"1","1",4]);
repeat_2([1,2,3,1,2,"1","1",4]);