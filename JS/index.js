
let person = {
    name : 'veera',
    age : 22
  };
  let man = {
    subject : 'Maths'
  };
  let rabbit = {
    jump : true
  };
  rabbit.__proto__ = man;
  man.__proto__ = person;
  console.log(man.name);
  console.log(man.subject);
  console.log(rabbit.name);
  
  
  let f1 = {
    veera(){
      console.log("f1 veera");
    }
  };
  let f2 = {
    __proto__:f1
  };
  f2.veera = function(){
    console.log("f2 vardhan");
  };
  f2.veera();
  f1.veera();
  
  
  let v1 = {
  
  };
  let v2 = {
  
  };
  function greet(v1, v2) {
    return `Hello, ${names}!`;
  
  }
  console.log
  
  