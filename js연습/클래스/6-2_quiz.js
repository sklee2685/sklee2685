/** 
 * 정직원과 파트타임직원을 나타낼 수 있는 클래스 만들기
 * 직원들의 정보: 이름, 부서이름, 한달 근무 시간
 * 매달 직원들의 정보를 이용해서 한달 월급을 계산 가능
 * 정직원은 시간당 10000원
 * 파트타임 직원은 시간당 8000원
*/
// class Employee{
//     constructor(EmployeeName,department,WorkTime){
//         if (isNaN(WorkTime) || WorkTime <0){
//             this.WorkTime= 'error';
//         } else{
//             this.WorkTime= WorkTime;
//         }
//         this.department= department;
//         this.EmployeeName= EmployeeName;
//     }
// }

// class fullTimeEmployee extends Employee{
//     salary(){
//         console.log(this.department+'부서의 정직원',this.EmployeeName+'의 월급:',this.WorkTime*10000,'원')
//     }
// }


// class partTimeEmployee extends Employee{
//     salary(){
//         console.log(this.department+'부서의 파트타임 직원',this.EmployeeName+'의 월급:',this.WorkTime*8000,'원')
//     }
// }

// const employee1 = new fullTimeEmployee('lee','s/w',2);
// employee1.salary();

// const employee2 = new partTimeEmployee('kim','s/w',4);
// employee2.salary();

class Employee{
    constructor(name, department, hoursPerMonth, payRate){
        this.name = name;
        this.department = department;
        this.hoursPerMonth = hoursPerMonth;
        this.payRate = payRate;
    }
    salary(){
        return this.hoursPerMonth * this.payRate;
    }
}

class FullTimeEmployee extends Employee{
    static PAY_RATE = 10000;
    constructor(name, department, hoursPerMonth){
        super(name, department, hoursPerMonth, FullTimeEmployee.PAY_RATE)
    }
}

class partTimeEmployee extends Employee{
    static PAY_RATE = 8000;
    constructor(name, department, hoursPerMonth){
        super(name, department, hoursPerMonth, partTimeEmployee.PAY_RATE)
    }
}

const lee = new FullTimeEmployee('lee','s/w',30);
const kim = new partTimeEmployee('kim','s/w',20);
console.log(lee.salary());
console.log(kim.salary());