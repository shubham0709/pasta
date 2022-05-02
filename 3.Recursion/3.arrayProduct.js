function main(){
    let arr = [1,2,3,4,5,6];
    let ans = prod(0,arr.length,1,arr)
    console.log(ans); 
}
main();
function prod(i,n,mul,arr){
    if(n==i){
        return 1;
    }
    mul = mul * arr[i]*prod(i+1,n,mul,arr);
    return mul;
}