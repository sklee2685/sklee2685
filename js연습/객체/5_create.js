// const apple ={
//     name: 'apple',
//     display: function(){
//         console.log(`${this.name}:🍎`);
//     },
// };

// const orange ={
//     name: 'orange',
//     display: function(){
//         console.log(`${this.name}:🍊`);
//     },
// };

// console.log(apple);
// console.log(orange);

// 생성자 함수
function Fruit(name,image){
    this.name = name;
    this.image = image;
    this.display =()=>{
        console.log(`${this.name}: ${this.image}`);
    }
    return this; //생력 가능
}

const apple = new Fruit('apple','🍎');
const orange = new Fruit('orange','🍊');

console.log(apple);
console.log(apple.name,apple.image);
console.log(orange);
console.log(orange.name,orange.image);
