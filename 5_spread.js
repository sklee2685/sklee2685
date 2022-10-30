function add(a,b,c){
    return a+b+c;
}

const nums = [1,2,3];
console.log(add(nums[0],nums[1],nums[2]));

//spread 연산자, 전개구문
console.log(add(...nums));

// 함수편에서 Rest paramters
function sum(first,second,...nums){
    console.log(nums);
}
sum(1,2,0,1,2,4);

// 배열편에서 Concat
const fruits1 = ['🍏', '🥝'];
const fruits2 = ['🍓', '🍌'];
let arr = fruits1.concat(fruits2);
console.log(arr);
arr = [...fruits1, '🍓', ...fruits2];
console.log(arr);

// Object
const ellie = { name: 'Ellie', age: 20, home: { address: 'home' } };
const updated = {
  ...ellie,
  job: 's/w engineer',
};
console.log(ellie);
console.log(updated);