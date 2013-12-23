

module.exports = function(list) {
    var i = 1, j, tmp; 
    len = list.length;
    for (; i < len; i++) {
        j = i - 1;
        temp = list[i];

        while (j >= 0 && temp < list[j]) {
            list[j + 1] = list[j]; 
            j--; 
        }
        list[j + 1] = temp;
    }

    return list;

};
