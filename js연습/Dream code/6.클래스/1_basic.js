// 객체를 손쉽게 만들수 있는 템플릿

// 1. 객체 함수 (오래된 고전적인 방법)

// function Fruit(name,image){
//     this.name = name;
//     this.image = image;
//     this.display =()=>{
//         console.log(`${this.name}: ${this.image}`);
//     }
//     return this; //생력 가능
// }

// const apple = new Fruit('apple','🍎');
// const orange = new Fruit('orange','🍊');

// 2. 클래스
class Fruit{
    // 생성자: new 키워드로 객체를 생성할때 호출되는 함수
    constructor(name,image){
        this.name = name;
        this.image = image;
    }
    // function을 사용하면 문법 오류가남
    display = () =>{
        console.log(`${this.name}: ${this.image}`);
    };
}

// apple은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit('apple','🍎');
// orange은 Fruit 클래스의 인스턴스이다.0
const orange = new Fruit('orange','🍊');

// const obj = {name:'lee'} => obj는 객체이고, 그 어떤 클래스의 인스턴스도 아니다.

console.log(apple);
console.log(apple.name,apple.image);

console.log(orange);
console.log(orange.name,orange.image);