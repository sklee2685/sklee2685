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

// 잘라진 새로운 배열을 만듬
// slice를 통해 0번째 인덱스를 포함해 2번째 인덱스 전까지 배열을 잘라내고
// 새로운 배열을 만듬
let newArr = fruits.slice(0,2);
console.log(newArr);
console.log(fruits);

newArr = fruits.slice(); // 아무것도 입력하지 않는다면 처음부터 끝까지 배열을 잘라냄
console.log(newArr);
newArr = fruits.slice(-1); // 음수로 입력하면 문자열때 처럼 뒤에서 부터 잘라냄
console.log(newArr);

// 여러개의 배열을 붙여줌
const arr1 = [1,2,3];
const arr2 = [4,5,6];
// arr1배열에 arr2를 붙여 arr3이라는 배열에 값을 저장
const arr3 = arr1.concat(arr2);
console.log(arr1);
console.log(arr2);
console.log(arr3);

// 배열의 순서를 거꾸로
const arr4 = arr3.reverse();
console.log(arr4);

// 배열안에 있는 배열 풀기
let arr = [
    [1,2,3],
    [4,[5,6,[3,4]]],
];
console.log(arr);
// 단 기본적으론 1단계 까지만 풀어줌
console.log(arr.flat());
// 1단계이후에 있는 배열도 풀려면 flat()안에 숫자를 넣으면됨
console.log(arr.flat(3));

arr = arr.flat(3);
// 특정한 값으로 배열 채우기 (배열 자체를 수정함)
// arr이라는 배열을 0으로 모두 채움
arr.fill(0);
console.log(arr);
// 채울때 인덱스 번호로 위치를 지정해주면 원하는 부분만 수정가능
arr.fill('s',1,3);// arr배열에서 인덱스 1번부터 3번 전까지 s로 채움
console.log(arr);

// 배열을 문자열로 합치기
// 배열에 있던 값들을 문자열로 바꾸고 ,으로 구분해줌
let text = arr.join();
console.log(text);
// join()을 통해 어떻게 구분할지 변경이 가능
text =arr.join(' | ');
console.log(text);