
// 冒泡排序
module.exports = function(list) {
    var i, j, len = list.length, tmp; 
    for (i = 0; i < len - 1; i++) {
        for (j = len - 1; j > i; j--) {
            if (list[j] < list[j - 1]) {
                tmp = list[j]; 
                list[j] = list[j - 1];
                list[j - 1] = tmp;
            }         
        }
    }
    return list;
};
