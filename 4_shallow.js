// 얕은 복사 Shallow Copy - 객체는 메모리 주소 전달
// 자바스크립트에서 복살할때는 항상 얕은 복사가 이루어짐!
const pizza = { name: '🍕',price:2};
const ramen = { name: '🍜',price:3};
const sushi = { name: '🍣',price:1};
const store1 = [pizza,ramen];
const store2 = Array.from(store1);

console.log('sotre1',store1);
console.log('sotre2',store2);

store2.push(sushi);
console.log('sotre1',store1);
console.log('sotre2',store2);

// 배열을 수정하지 않았지만 pizza의 price가 변경된것을 확인해 볼 수 있다.
// (=객체의 값과 배열가 참조하고 있는 주소가 동일하다)(=shallow copy)
pizza.price = 4;
console.log('sotre1',store1);
console.log('sotre2',store2);