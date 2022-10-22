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