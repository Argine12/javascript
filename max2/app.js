const arr = [10, 4, 29, 900, 25, 3999, -1, 338];

    var index;
    var max = arr[0];
    var max2;
        for (var i = 0; i < array.length; i++) {
            if (arr[i] > max) {
                max2 = max;
                max = arr[i];
            } else if (arr[i] > max2 && arr[i] != max) {
                max2 = arr[i];
                index = i;
            }
            
        }
        console.log(index);