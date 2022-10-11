// .......object properties......

// var person = {
//     firstname: "javaria",
//     roll: "9090",
//   };
//   console.log(person.firstname + " is " + person.roll + " roll.")
  

// .......object method......

//   var person = {
//     firstName: "javaria",
//     roll: "9090",
//     fullName : function() {
//       return this.firstName + " " + this.roll;
//     }
//   };
  
//   console.log(person.fullName())

// .......object display......

// var person = {
//     name: "Javaria",
//     age: 18,
//     city: "karachi"
//   };
  
//  console.log(person.name + ", " + person.age + ", " + person.city)

// var person = {
//     name: "Javaria",
//     age: 18,
//     city: "karachi"
//   };
  
//   let txt = "";
//   for (let x in person) {
//     txt += person[x] + " ";
//   };
  
//  console.log(txt)

// .......constructors......

// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//   }
  

//   var firstName = new Person("Javaria", "qasim", 18);
//   var secondName = new Person("qasim", "javaria", 48);
  

//  console.log(firstName.age + secondName.age)

// .......prototype......

// function Person(first, last, age) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//   }0
  
//   Person.prototype.name = function() {
//     return this.firstName + " " + this.lastName
//   };
  
//   var name1 = new Person("Javaria", "qasim", 18);
//  console.log(name1.name())


var saveData=document.getElementById("saveData")
saveData.addEventListener('click',(e){
    var name =document.getElementById('name')
    var roll =document.getElementById('roll')
    var studentInfo={
        name:name.value,
        roll:roll.value,
    }
    console.log(studentInfo)

    const db =getDatabase();
    set(ref(db,'students/'),
    studentInfo)
})



















