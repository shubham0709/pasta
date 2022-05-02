function main(){
    let arr = [1,2,4,5,7,10];
    let sum = 0;
    let ans = printSum(0,arr.length,arr,sum);
    console.log(ans);
}
main();
function printSum(i,n,arr,sum){
    if(i==n)  return 0;
    sum = sum + arr[i]+printSum(i+1,n,arr,sum);
    return sum;
}