var bubble = require('./bubble'),
selection = require('./selection'),
quick = require('./quick'),
heap = require('./heap'),
count = 20000,
ret, t, t2;


// 生成n个随机数
function random(n) {
    var i=0, ret = [];
    while(++i < n) {
        ret.push(Math.floor(Math.random() * 10000)); 
    }
    return ret;
}

// clone 数组
function clone(list) {
    return list.concat();
}

// 获得测试数据
ret = random(count);


console.log('冒泡法排序');
t = new Date();
bubble(clone(ret));
t2 = new Date();
console.log('时间:' + (t2.getTime() - t.getTime()));

console.log('选择法排序:');
t = new Date();
selection(clone(ret));
t2 = new Date();
console.log('时间:' + (t2.getTime() - t.getTime()));

console.log('快速排序:');
t = new Date();
quick(clone(ret));
t2 = new Date();
console.log('时间:' + (t2.getTime() - t.getTime()));

console.log('堆排序');
t = new Date();
heap(clone(ret));
t2 = new Date();
console.log('时间:' + (t2.getTime() - t.getTime()));
