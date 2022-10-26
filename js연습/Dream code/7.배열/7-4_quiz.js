/**
 * 4. 숫자 5이상(보다 큰)의 숫자들의 평균, 고차함수 사용
 * const nums = [3, 16, 5, 25, 4, 34, 21];
*/

const nums = [3, 16, 5, 25, 4, 34, 21];
result= nums.filter((numbers)=> numbers > 5).reduce((sum,num,_,array)=>{
    sum += num/array.length;
    return sum;
},0);
console.log(result);

// result1 = nums.filter((numbers)=> numbers>5);
// result2 = result1.reduce((sum,num,_,array)=>{
//     sum += num/array.length;
//     return sum;
// },0);
//console.log(result2);
