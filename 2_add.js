const fruits = ['🍌', '🍎', '🍇', '🍑'];

// 배열 아이템을 참조하는 법
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

// for (var i = 0; i <fruit.length; i++){
//     console.log(fruits[i]);
// }

// 배열안에 몇개의 아이템이 들어있는지 확인
console.log(fruits.length);

// 추가, 삭제 - 좋지 않은 방식
fruits[5]='🍓';
delete fruits[2];
console.log(fruits);
// 다음과 같이 배열에 아이템을 추가할때 추가,삭제는 정상적으로
//되지만, 만약 인덱스 번호가 비어있는데 다음 인덱스에 값을 추가해
// 비어있는 인덱스가 생길경우가 발생하게 된다.