// 접근제어자 => 캡슐화(다른언어에서 private,public,protected 등등)
//한번 인스턴스(Instance)값이 만들어지면 외부에서 접근하지 못하게함
class User{
    #name; // 해당 두개는 constructor을 만들었다면 생략가능
    #sex;
    #type = '사람';
    constructor(name,sex){
        this.#name = name;
        this.#sex = sex;
    }
    #sexDis = ()=>{
        console.log(`${this.#name}:${this.#sex}`)
    } 
}
const user1 = new User('lee','♂');
console.log(user1);