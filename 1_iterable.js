// Iterable 하다는건 순회가 가능하다는 것이다.
// [Symbol.iterator](): IterableIterator<T>; 이라는
// 심볼정의를 가진 객체나, 특정한 함수가 IterableIterator<T>를 리턴한다는것은
// 순회 가능한 객체다 을 의미한다
// 순회가 가능하면 무엇을 할 수 있나?
// 바로 빙글 빙글 도는 반복문, 연산자들을 사용할 수 있다.

const array = [1,2,3];
// array안에 있는 아이템을 하나씩 item에 받아옴
for(const item of array){
    console.log(item);
}
// 심볼정의가 되어있는 데이터 타입 안에 있는 함수도 Iterator를 반환하면
// 이또한 for..of나 spread 연산자에서 사용이 가능
for(const item of array.values()){
    console.log(item);
}

// 만약 Symbol.iterator라는 함수의 정의가 없는 객체에서 
// for..of를 사용하게 된다면 오류를 출력한다.
//=> iterator라는 규격을 따르지 않아서
const obj = {0:1, 1:2};
for (const item in obj){ // of 대신 in을 사용하면 key값으로 반환하긴함
    console.log(item);
}

// 수동적으로 next 사용
const iterator = array.values();
console.log(iterator.next()); //next는 결과의 객체를 반환
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().done);
 // done은 끝까지 값이 출력되었는지 유무를 출력 (끝났으면 true 아직이면 false)

// while(true){
//     const item = iterator.next();
//     if (item.done){
//         break;
//     }else{
//         console.log(item);
//     }
// }