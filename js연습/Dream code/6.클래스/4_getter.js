// 접근자 프로퍼티 (Accessor Property)
class Student{
    constructor(firstname,lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    get fullName1(){
        return `${this.lastname} ${this.firstname}`;
    }
    set fullName2(value){
        console.log('set이 사용되었습니다.',value);
    }
    
}

const student = new Student('jungho','lee');
student.lastname = 'kim';
console.log(student.fullName1);

student.fullName2 = 'hello';