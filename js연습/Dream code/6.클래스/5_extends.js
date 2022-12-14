// class Tiger{
//     constructor(color){
//         this.color = color;
//     }
//     eat(){
//         console.log('eat');
//     }
//     sleep(){
//         console.log('sleep');
//     }
// }
// class Dog{
//     constructor(color){
//         this.color = color;
//     }
//     eat(){
//         console.log('eat');
//     }
//     sleep(){
//         console.log('sleep');
//     }
//     play(){
//         console.log('play');
//     }
// }

class Animal{
    constructor(color){
        this.color = color;
    }
    eat(){
        console.log('eat');
    }
    sleep(){
        console.log('sleep');
    }
}

class Tiger extends Animal{}

class Dog extends Animal{
    constructor(color,ownerName){
        super(color) // 상속하고 있는 부모클래스를 가르킴
        this.ownerName = ownerName;
    }
    play(){
        console.log('play');
    }

    // 오버라이딩(overriding)
    // 자식클래스에서 부모클래스의 내용을 덮어쓰기
    eat(){
        super.eat();
        console.log('강아지가 무언가를 먹는다.');
    }
}

const tiger = new Tiger('노랑');
console.log(tiger);
tiger.sleep();
tiger.eat();

const dog = new Dog('갈색','홍길동');
console.log(dog);
dog.sleep();
dog.eat();