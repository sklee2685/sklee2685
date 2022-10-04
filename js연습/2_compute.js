const obj = {
    name: 'lee',
    age: 22,
};
//정적으로 접근이 확정될때 다음과 같이 사용이 가능
obj.name;
obj.age;

// 동적으로 속성에 접근하고 싶을때 대괄호 표기법 사용!
function getValue(obj, key) {
    //return obj.key; 은 동작하지 X
    //obj라는 객체 안에 key라는 값을 가지고 있는것이 아니면 사용못함
    return obj[key];
}
console.log(getValue(obj, 'name'));
console.log(getValue(obj, 'age'));

function addData(obj, key, value) {
    obj[key] = value;
}
addData(obj,'job','student');
console.log(obj);

function deleteData(obj, key){
    delete obj[key];
}
deleteData(obj,'name');
console.log(obj);