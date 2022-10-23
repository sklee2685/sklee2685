const fruits = ['🍌', '🍓', '🍇', '🍓'];
// 기존에 배열에 있던 아이템을 하나씩 출력하려면 다음과 같이
// 반복문을 사용해야 했음
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// 이를 간편하게 하기 위해서 사용할 수 있는 고차함수가 있음
fruits.forEach(function(value,index,array){
    console.log('-------------------------------');
    console.log('아이템: ',value);
    console.log('인덱스 번호: ',index);
    console.log('전체 배열: ',array);
});

// 조건에 맞는(콜백함수) 아이템을 찾을때
// find: 제일 먼저 조건에 맞는 아이템을 반환
const item1 = {name:'🥛', price:2};
const item2 = {name:'🍪', price:3};
const item3 = {name:'🍙', price:1};
const products = [item1,item2,item3,item2];

let found = products.find((value)=> {
    return value.name === '🍪';
    // 입력받은 배열중'🍪'이 있다면 해당 객체를 found라는 변수에 저장
});
console.log(found);

// findIndex: 제일 먼저 조건에 맞는 아이템의 인덱스를 반환
found = products.findIndex((value)=> {
    return value.name === '🍪';
});
console.log(found);

// 배열의 아이템들이 부분적으로 조건(콜백함수)에 맞는지 확인
// 조건에 만족하면 true, 그렇지 못하면 false 출력
result = products.some((item)=>{
    return item.name ==='🍪';
});
console.log(result);

// 배열의 아이템들이 전부 조건(콜백함수)에 맞는지 확인
result = products.every((item)=>{
    return item.name ==='🍪';
});
console.log(result);

// 조건에 맞는 모든 아이템을 새로운 배열로!
result = products.filter((item)=>{
    return item.name ==='🍪';
});
console.log(result);

// Map 배열의 아이템들을 각각 다른 아이템으로 매핑할 수 있는, 변환해서 새로운 배열 생성
const nums = [1,2,3,4,5];
result = nums.map((item) => { 
    return item*2
});
console.log(result);

result = nums.map((item) => { 
    if(item % 2 === 0){
        return item*2;
    }else{
        return item;
    }
});
console.log(result);

// Flatmap: 중첩되는 배열들을 풀어서 배열안에 있던 값을 나열한다.
// ex) A[1,2], B[3,4]라는 배열을 가지고 있을때, 
//Flatmap을 사용하면 [1,2,3,4]라는 배열값을 얻을수 있다.
result = nums.map((item) => [1,2]);
console.log(result);

result = nums.flatMap((item) => [1,2]);
console.log(result);

// sort 배열의 아이템을 정렬
// 문자열 형태의 오른차순으로 요소를 정렬함(기존의 배열을 수정)
const text = ['hi','abc'];
text.sort();
console.log(text);

// 하지만 숫자형태의 데이터에서 사용하면 다음과 같이 이상하게 나온다
const numbers = [0,4,2,5,1,3,6,10,20];
numbers.sort();
console.log(numbers);

// 이를 해결하기 위해서 원하는 비교대상을 콜백에 전달해주면 된다.
// 여기서 a-b가 음수이면 a가 앞으로 정렬(오름차순) 양수이면 b가 앞으로 정렬(내림차순)된다.
numbers.sort((a,b) => a-b);
console.log(numbers);

// reduce 배열의 요소들을 하나씩 접어서 값을 하나로 만듬
result = [1,2,3,4,5].reduce((sum,value) => {
    sum += value;
    console.log(sum);
    return sum;
},0);
// 처음에 시작할 값인 0을 {}다음에 입력해주면 맨 처음에 sum값에는 0이들어가고,
// [1,2,3,4,5]에서 하나씩 값을 value에 받아와서 {}안에 코드를 수행하게 된다.