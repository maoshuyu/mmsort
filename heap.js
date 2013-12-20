
function swap(list, i, j) {
    var temp = list[i];

    list[i] = list[j];
    list[j] = temp;
}

function maxHeapify(list, index, len) {
    var right = 2 * (1 + index),
    left = right - 1,
    largest = index;

    if (left < len && list[left] > list[largest]) {
        largest = left; 
    }

    if (right < len && list[right] > list[largest]) {
        largest = right; 
    }

    if (largest != index) {
        swap(list, largest, index);    
        maxHeapify(list, largest, len);
    }
}


function buildMaxHeap(list) {
    // 堆中最后一个元素的父元素
    var len = list.length, 
    start = Math.floor(len / 2);

    while (--start >= 0) {
        maxHeapify(list, start, len);  
    }
}


module.exports = function(list) {
    var start = len = list.length;

    buildMaxHeap(list);

    while (--start > 0) {
        swap(list, start, 0);         
        maxHeapify(list, 0, --len);
    }

    return list;

};
