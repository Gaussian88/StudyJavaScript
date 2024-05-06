console.log('Hello');
console.log('wooriCom');
console.log('Hello@@@', 'world', 'javascript');
// alert('Hello Javascript!');

/*console.log('Hello');
console.log('wooriCom');
console.log('Hello@@@', 'world', 'javascript');*/
let str = 'Hello Javascripts';
let number = 30;
console.log('문자열', str);
console.log('number:', number);
function sayHello() {
  console.log('Hello1');
  console.log('Hello2');
  console.log('Helllo3');
}
sayHello();
console.log('----------------------------');
sayHello();
let obj = {
  number: 30,
  sayHello: function () {
    console.log('obj->Hello1');
    console.log('obj->Hello2');
    console.log('obj->Hello3');
  },
};
console.log(obj.number);
obj.sayHello();
