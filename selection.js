// 选择排序
var selection = module.exports = function(list) {
    var i, j, tmp, len = list.length;

    for (i = 0; i < len - 1; i++) {
        for (j = i + 1; j < len; j++) {
            if (list[i] > list[j]) {
                tmp = list[i];    
                list[i] = list[j];
                list[j] = tmp
            } 
        } 
    }

    return list;

};


module.exports = selection; 
