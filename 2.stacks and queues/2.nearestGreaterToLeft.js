function main() {
    let arr = [100, 80, 60, 70, 60, 75, 85];
    find(arr, arr.length);
}
main();

function find(arr, n) {
    let s = []
    let ans = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        while (s.length > 0 && s[s.length - 1] < arr[i]) {
            s.pop();
        }
        if (s.length == 0) {
            ans[i] = -1;
        } else {
            ans[i] = s[s.length - 1];
        }
        s.push(arr[i]);
    }
    console.log(ans);
}