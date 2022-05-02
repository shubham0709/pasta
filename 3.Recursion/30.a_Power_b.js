let a = 5;
let b = 12;
// finding a^b
let ans = expo(a, b);
console.log(ans);

function expo(a, b) {
    if (b == 1) {
        return a;
    }
    let half = expo(a, Math.floor(b / 2))
    if (b % 2 == 0) {
        return half * half;
    } else {
        return a * half * half
    }
}