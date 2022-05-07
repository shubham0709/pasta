let arr = [3, 5, 0, 2, 4];
let c = 0;
//1 3 2
for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1] && arr[i - 1] < arr[i + 1]) {
        c++;
    }
}
console.log(c);