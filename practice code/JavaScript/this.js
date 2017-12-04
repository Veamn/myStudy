// ages = 20;
// var mike = {
//   name:"mike",
//   ages:12,
//   age: function(){
//     var that = this;
//      function aa(){
//       return that.ages;
//     };
//     return aa();
//   }
// }
// console.log(mike.age());

//在函数里面的函数里面，this指向的是全局变量
/////////////////////////////////////////
// ages = 20;
// var mike = {
//   name:"mike",
//   ages:12,
//   age: function(){
//     return this.ages;    
//   }
// }
// console.log(mike.age());
//在函数里面，this指向它的对象

//读书笔记
// 你怎样看待this？
// this简单一点来说，就是谁调用了它，它就指向谁。比如我们定义了一个对象，然后在这个对象里面添加属性和方法，方法里面返回一个this的属性。
// 然后我们在外部调用这个对象的方法，那么这个方法返回的this就是指向我们这个对象的属性，所以说哪个对象调用了它，那么它就指向哪个对象的属性。
// 但是如果我们在这个方法里面又声明了一个方法，这里称为内方法，在内方法里面返回this的属性，然后在外方法里return这个内方法的话，那么
// 内方法里面的this指向的就不是调用它的对象，而是指向了全局，这里是因为产生了一个闭包，所以改变了this的指向。
// 如果我们想这样定义我们的方法，但是又想让this指向我们引用的对象的话，那么可以在外方法的开头定义that变量来存放this，这时返回的this
// 就会被外方法捕获，然后让内方法返回that，就不会让this指向全局了。

//总结：
// 1.this在对象方法内部始终指向当前对象；
// 2.单独调用函数的时候，this指向全局对象，即window；
// 3.在函数内部定义的函数，this指向全局对象，即window；严格模式下是undefined1
// 4.构造函数this指向新对象。
/////////////////////////////////////////////////////////////////////////////

// ages = 20;
// var mike = {
//   name:"mike",
//   ages:12,
//   age: function(){
//     return this.ages;
//   }
// }
// var john = {
//   name: "john",
//   ages: 40,
//   age: function(){
//     return this.ages;
//   }
// }
// console.log(mike.age());
// console.log(john.age.apply(mike,[]));
//这里把john对象的this指向了mike

// console.log(Math.max.apply(null,[1,2,3]));
// console.log(Math.max.call(null,[1],[2]));
// console.log(Math.max.call(null,1,2));

// 高阶函数：函数接收函数作为参数
var arr = [1,2,3,4,5];
// console.log(arr.map(function(x){
//    return x * x;
//  }))
// function add(x,y){
//   return x + y;
// }
// console.log(arr.reduce(add));
function bb(arr){
  return arr.reduce(function(x,y){
    return x +y;
  })
}
console.log(bb([1,2,3,4,5]))
