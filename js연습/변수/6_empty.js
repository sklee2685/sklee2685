//  null, undefiend (텅텅 비어 있다는 의미)
let variable;
console.log(variable); //undefiend 변수의 값이 있는지 없는지 확인 되지 않은 상태

variable = null;
console.log(variable); // null 변수의 값이 비어있다.

let activeItem; //아직 활성화된 아이템이 있는지 없는지 모르는 상태!
activeItem = null; // 활성화된 아이템이 없는상태

console.log(typeof null);
console.log(typeof undefined);