//三种状态
var p1 = new Promise(function(resolve,reject){
	setTimeout(function(){
		resolve(1);
	},500);
});
var p2 = new Promise(function(resolve,reject){
	setTimeout(function(){
		reject(2);
	},500);
});
console.log(p1);
console.log(p2);

setTimeout(function(){
  console.log(p1);
}, 2000);
setTimeout(function(){
  console.log(p2);
}, 2000);
p1.then(function(value){
	console.log(value);
});
p2.catch(function(err){
	console.log(err);
});
//----------------------------------------------
//立即执行
var p = new Promise(function(resolve, reject){
  setTimeout(function(){
  	console.log("异步代码");
  },2000);
  console.log("create a promise");
  resolve("success");
});

console.log("after new Promise");

p.then(function(value){
  console.log(value);
});
//.then()是Promise实例状态发生改变时的回调函数
//在创建new Promise对象时，作为参数传入的函数是
//会被立即执行的，只是可以是异步代码
