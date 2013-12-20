// 快速排序
var quick = function(list) {
    var len = list.length, 
    i = 0,
    pivot, pivotIndex, left, right;

    if (len <= 1) {
        return list;
    }

    pivotIndex = Math.floor(len / 2);
    len = len - 1;
    left = [];
    right = [];

    pivot = list.splice(pivotIndex, 1)[0];

    for (; i < len; i++) {
        if (list[i] > pivot) {
            right.push(list[i]); 
        } else {
            left.push(list[i]); 
        }
    } 

    return quick(left).concat([pivot], quick(right));
};

module.exports = quick;
