function forEach(arr, func) {
    for (let index = 0; index < arr.length; index++) {
        func(arr[index], index, arr);
    }
}