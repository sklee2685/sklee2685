// // static 정적 프로퍼티, 메소드
// class Fruit{
//     // 생성자: new 키워드로 객체를 생성할때 호출되는 함수
//     constructor(name,image){
//         this.name = name;
//         this.image = image;
//     }
//     // 인스턴스 레벨의 메서드
//     display = () =>{
//         console.log(`${this.name}: ${this.image}`);
//     };
    
//     // 클래스 레벨의 메서드
//     static makeRandomFruit(){
//         // 클래스 레벨의 메소드에서는 this를 참조할 수 없음
//         return new Fruit('banana','🍌');
//     }

// }

// const banana = Fruit.makeRandomFruit();
// console.log(banana);
// // apple은 Fruit 클래스의 인스턴스이다.
// const apple = new Fruit('apple','🍎');
// // orange은 Fruit 클래스의 인스턴스이다.0
// const orange = new Fruit('orange','🍊');

// // const obj = {name:'lee'} => obj는 객체이고, 그 어떤 클래스의 인스턴스도 아니다.

// console.log(apple);
// console.log(apple.name,apple.image);

// console.log(orange);
// console.log(orange.name,orange.image);

class User{
    constructor(name,sex){
        this.name = name;
        this.sex = sex;
    }
    sexDis = ()=>{
        console.log(`${this.name}:${this.sex}`)
    }
    static ts(){
        return new User('han','♀');
    }
    static COUNT_PERSON= 2;
}
const user1 = new User('lee','♂');
console.log(user1);

const hi = User.ts();
console.log(hi);
console.log(User.COUNT_PERSON);