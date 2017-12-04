var arr = new Array(1,2,3);
console.log("数组的创建："+arr);
console.log("数组的访问："+arr[2]);
console.log("数组元素的尾部添加，返回新数组的长度："+arr.push(4,5));
console.log("添加后的数组："+arr);
console.log("数组元素的头部添加，返回新数组的长度："+arr.unshift(6,7,8));
console.log("添加后的数组："+arr);
console.log("数组元素指定位置添加，返回：'无' "+arr.splice(3,0,[9,10]));
console.log("添加后的数组："+arr);
// -----------------------------------------------------------
console.log("数组元素的尾部删除：返回该元素"+arr.pop());
console.log("删除后的数组："+arr);
console.log("数组元素的头部删除：返回该元素"+arr.shift());
console.log("删除后的数组："+arr);
console.log("数组元素指定位置删除，返回删除的元素："+arr.splice(3,4));
console.log("删除后的数组："+arr);
// -----------------------------------------------------------
console.log("数组的截取："+arr.slice(1));
console.log("数组的截取："+arr.slice(1,2));
// -----------------------------------------------------------
console.log("数组的合并："+arr.concat([1,2,3,4,5]));
// -----------------------------------------------------------
console.log("数组的拷贝："+arr.slice(0));
console.log("数组的拷贝："+arr.concat());
// -----------------------------------------------------------
var arr = [1,2,7,6,44,3,10];
console.log("数组的排序："+arr.sort(function(a,b){return a-b}));
// -----------------------------------------------------------







