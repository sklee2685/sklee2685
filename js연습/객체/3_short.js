const x = 0;
const y = 0;
//const coordinates = {x:x, y:y}; 의 축약버전
const coordinates = {x, y};
console.log(coordinates);

// function obj(name,age){
//     return {
//         name:name,
//          age:age
//         };
// }
function obj(name, age){
    return {
        name,
        age,
    };
}
console.log(obj('lee',22));