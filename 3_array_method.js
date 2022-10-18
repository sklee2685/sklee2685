// 배열의 함수들
// 배열 자체를 변경하는지, 새로운 배열을 반환하는지 확인해보기
const fruits = ['🍌', '🍎', '🍇'];

// 특정한 오브젝트가 배열인지 체크
// 해당 오브젝트가 배열이면 true를 아니면 false를 출력함
console.log(Array.isArray(fruits));
console.log(Array.isArray({}));

// 특정한 아이템의 위치를 찾을때
// 찾고싶은 아이템를 입력해서 배열안에 존재하면 해당 아이템이 있는 인덱스 번호를 출력함
console.log(fruits.indexOf('🍎'));

// 배열안에 특정한 아이템이 있는지 체크
// 배열안에 찾고싶은 아이템이 있으면 true를 아니면 false를 출력
console.log(fruits.includes('🍇'));

// 배열안에 아이템 추가

// 맨 뒤에 추가
// 배열 자체를 수정(업데이트)
console.log(fruits.length);

let len= fruits.push('🍑');
console.log(fruits);
console.log(len);

// 맨 앞에 추가
// 배열 자체를 수정(업데이트)
len = fruits.unshift('🍓');
console.log(fruits);
console.log(len);

// 배열안에 아이템 제거

// 맨 뒤에 제거
let lastItem = fruits.pop();
console.log(fruits);
console.log(lastItem);

// 맨 앞에 제거
lastItem = fruits.shift();
console.log(fruits);
console.log(lastItem);

// 중간에 아이템 추가 또는 제거
let delted = fruits.splice(1, 2);
// 인덱스 번호 1에서 부터 2개의 아이템을 제거
console.log(fruits);

// 인덱스 번호 1에서부터 0개의 아이템을 제거하고 다음의 아이템을 추가
delted = fruits.splice(1,0,'🍎', '🍇');
console.log(fruits);