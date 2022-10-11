// var age =prompt("enter your age")
// if (age !== 15) {
//     alert("your age is equal")
// }
// if (age >= 15) {
//     alert("your age is more")
// }
// if (age <= 15) {
//     alert("your age is less")
// }


//  var age =prompt("enter your age")
//  gender = "male"
//  city = "lahore"
//  if ((age == 15 || gender =="female") && city =="karachi"){
//      alert("your allowed")

//  } else {
//      alert('not allowed')

//  }

// var a=5
// var b=5
// var c=5
// if (a==b) {
//     if (c==b) {
//         alert('allowed')
//     }
//     else{
//         alert("allowed but not allowed")
//     }
// }
//  else {
//      alert("not allowed")
//  }

// var cities = ["karachi","lahore","islamabad",5,6,7,true,false]
// var city =cities[0]
// alert(city)
// alert (cities[1])
// alert (cities[7])

// var cities = [] 
// cities[0]= "karachi";
// cities[1]= "lahore"
// cities[2]= "islamabad";
// cities[3]= "peshawar"
// cities[4]= "karachi";
// cities[5]= "lahore"
// alert(cities)

// cities.pop()
// alert(cities)
// cities.push("lahore","islamabad")
// alert(cities)

// alert(cities)
// cities.shift()
// alert(cities)
// cities.unshift("islamabad")
// alert(cities)
// cities.splice(2,2,'islamabad')
// alert(cities)
// var clean_city = cities.slice(0,4)
// alert(clean_city)

// for (let index = 0; index < array.length;index++){
//     const element =array[index];

// }

// var clean_city ="karachi"
//  for(i=0; i<cities.length; i++){
//      if(clean_city==cities[i]){
//          alert("city is found")
//      }
// else{
//     alert("city not found!")
// }

//  }


// for (i=1; i<=10 ;i++){
//     Cansole.log("3" + "x" + i + "=" + i*4);
// }


//  var  firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];

//  var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];

//  for (var i = 0; i < firstNames.length; i++) {
//  for (var j = 0; j < lastNames.length; j++) {
//  fullNames.push(firstNames[i] +"" lastNames[j]);

// var color = ["red","yellow"]
// for (i=0; i<color.length; i++){
//     document.write(color[i]+"")
// }
// var user_color = prompt("Enter color to add in front")
// color.unshift(user_color)
// document.write ("<br>" + color)

// var temp=0
// temp =prompt("enter index")
// del=0
// del=prompt("how many color to delete")
// color.splice(temp,del)
// document.write()



// var arr = ["keyboard","mouse","printer","monitor"]
// document.write(arr + "<br>")
// var reverse_arr = arr.reverse()
// document.write (reverse_arr)
// for (i=arr.length-1; i>=0;i--){
//     document.write(arr[i] + "<br>" )
// }



// for (var i =5;i<=1;i++){
//     for(var j=1;j<=i;j++){
//         document.write("*")
//     }
//     document.write("<br>")
// } 


// for (var i =5;i>=1;i--){
//     for(var j=1;j<=i;j++){
//         document.write("*")
//     }
//     document.write("<br>")
// } 

// var n=5;
// var string=""
// for(var i=1;i<=n;i++){
// // upside
//     for(var j =n-i;j>0;j--){
//         string+=" "
//     }
//     // star
//     for(var k=1;k<=i;k++){
//         string+="*"
//     }
//     string+="/n"
// }
// cansole.log(string)

// var city=prompt('enter city name')
// var firstchar = city.slice(0,1)
// firstchar=firstchar.toUpperCase()
// var otherchar =city.slice(1)
// otherchar=otherchar.toLowerCase()
// city=firstchar + otherchar
// foundcity="karachi"
// if(city===foundcity){
//     alert("city is found")
// }
// else{
//     alert("not found")
// }




// var text = "the new yoker magazine doesnt allow the phrase world"
// document.write(text)

// var replaceable =text.replace("world war II",the second world war)
// document.write(replaceable)

// var a = 8.4

// var c = math.ceil(a)
// document.write(c + "<br>")

// var f=math.floor(a)
// document.write(f + "<br>")

// var b = math.round(a)
// document.write(b)



// var text = "to be or not to be";
// var replacetext = text.replace(/be/g,"B")
// document.write(replacetext)
// var inderofbe = text.lastIndexOf('be')



// var firstuser =prompt("enter first user name ")
// var seconduser =prompt("enter second user name")
// var randomNum = Math.random()*2
// var toss = math.floor (randomNum)
// if (toss==0){
//     alert("Head"+firstuser+"win the toss")
// }
// else{
//     alert("Tail"+seconduser+"win the toss")
// }

// var a= 10
// document.write(typeof(a) + "<br>")
// a =parseInt(a)
// a =a.toString

// var DATE =new Date()
// document.write(DATE)

// var Day = DATE.get
// document.write(Day) 

// var Month = DATE.getMonth()
// document.write(Month) 

// var userInput =prompt("Enter your dob in this formate : Feb 27,1997")
// var dob = new Date("Dec 10, 2003");
// var Today = new Date ();
// var dobTime =dob.getTime();
// var TodayTime=Today.getTime()
// console.log(dob)
// console.log(Today)
// AccuAge = TodayTime - dobTime

// Age =((AccuAge)/(1000*60*60*24*30*12))
// Age=Math.floor(Age)
// console.log(Age)

// var date =new Date()
// console.log(date)
// date = new Date (date.setFullYear("2001"))
// console.log(date)


//..........................Function...............................//

// var Name = "javaria"
// function greeting(Name){
//     Name = "qasim"
//     return Name
// }
// console.log(greeting());
// console.log(Name)


// function Add(b,a=3){
//     sum = a + b
//     return sum
// }
// console.log(Add(1));

// function calc(opr1 ,sign ,opr2){
//     if (sign==="+"){
//     sum=opr1 + opr2
//     return sum
// }else if(sign==="-"){
//     sub =opr1 - opr2
//     return sub
// }else if (sign==="*"){
//     multi = opr1 * opr2
//     return multi
// }else{
//     return "Wrong"
// }
// }

// var result = calc (8, "+" , 6)
// var result1 = calc (8, "-" , 6)
// var result2 = calc (8, "*" , 6)
// var result3 = calc (8, "%" , 6)

// console.log (result)
// console.log (result1)
// console.log (result2)
// console.log (result3)

// function greeting(){
// var firstName =prompt ("enter first name")
// var lastName =prompt ("enter last name")
// alert("Salam" + firstName+lastName)
// }
// console.log(greeting());

// var a = 10
// var b = 5
// function Add(a,b){
//     var a = 7
//     var b = 3
//     return c = a+b
// }
// Add()
// console.log(Add(2,6))

// var name = "javaria";
// switch (name){
//     case "javaria":
//     alert("hello"+ name)
//     break;
//     case "qasim":
//     alert("hello qasim")
//     default:
//     alert("hello")

// }

// var operator = prompt("enter operator +,-,*,or/" )
// var number1 = prompt("enter 1st num" )
// var number2 = prompt("enter 2nd num" )
// var number3 = prompt("enter 3rd num" )
// var number4= prompt("enter 4th num" )
// switch(operator) {
//     case '+':
//         var sum = number1 + number2;
//         console.log(number1 + " " + operator + number2 + "=" + sum);
//         break;
//     case '-':
//         var sub  = number1 + number2;
//         console.log(number1 + " " + operator + number2 +"=" + sub);
//         break;
//     case '*':
//         var multi = number1 + number2;
//         console.log(number1 + " " + operator + number2 +"=" + multi);
//         break;


//     case '/': 
//         var div = number1 + number2;
//         console.log(number1 + " " + operator + number2 +"=" + div);
//         break;

//     default:
//         console.log('Invalid operator');
//         break;
// }

// for (i = 0;i<10;i++){
//     console.log(a)

// }

// var a = 0
// while(a<10){
//     console.log(a)
//     a++;
// }

// var i=0;
// do{
//     console.log(i)
// }
// while(i<10)


// function greeting (greet){
//     alert('greet')
// }
// function getName(){
//     var name = document.getElementById('name')
//     console.log(name.value)
//     name.value = ""
// }
// function setName(){
//     var name=document.getElementById("abc")
//     name.value="Name"
// }


// function readMore (){
//     var text= "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, consequatur!"
//     var paragraph = document.getElementById('para')
//     paragraph.innerHTML=text
// }

// function placelist(){
//     var list= "<ol><li>helo</li><li>hello world</li></ol>"
//     var getlist=document.getElementById('list')
//     getlist.innerHTML=list

// }

// function visiblity(){
//     var image=document.getElementById('car')
//     console.log(image)
// }


// function changepic(){
//     var image =document.getElementById('car')
//     image.src="./images/image2.jfif"
// }

// function changetoprevious(){
//     var image =document.getElementById('car')
//     image.src="./images/image1.jfif"
// }


// function changeImg(id,address){
//     var image =document.getElementById('id').style.width='150px'
//     image.src=address
// }

// function para(){
// paragraph = document.getElementById('para')
// paragraph.style.backgroundColor="red"
// }

// function paragraph(){
//     var para=document.getElementsByTagName('p')
//     console.log(para)
//     para[2].style.color='red'
//     para[3].style.color='blue'
//     para[0].style.fontSize='2rem'
//     for(var i =0;i<para.length;i++){
//         para[i].style.fontWeight='bold'
//     }
// }

// var interval=function hello(){
//     console.log('hello.......')
// }
// // var inter = setInterval(interval,1000)

// setTimeout(interval,3000)