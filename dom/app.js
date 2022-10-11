// var a =document
// console.log(a.childNodes[1].childNodes[1].childNodes[0])
// var div=document.getElementById('parent')
// if(div.childNodes[1].nodeType===1){
//     console.log('Element')
// }
//     else{
//         console.log('Error')
//     }

// var p =document.getElementById('parent')
// console.log(p.childNodes[1].nodeType)
// console.log(p.childNodes[1].nodeName)

// var p =document.getElementById("firstson")
// console.log(p.hasAttribute('class'))
// console.log(p.getAttribute('class'))
// p.setAttribute('class','abc')
// console.log(p.hasAttribute('class'))
// console.log(p.getAttribute('class'))
// var p =document.getElementById("firstson")
// console.log(p)
// var div=document.getElementsByTagName('div')
// // div.setAttribute('class','xyz')
// div[0].setAttribute('class','xyz')
// console.log(div[0])

// var p = document.createElement('h1')
// p.setAttribute('class','abc')

// var p= document.createElement('p')
// console.log(p)
// var text=document.createTextNode('hello world')
// p.appendChild(text)
// console.log(p)

// var div = document.getElementById('main')
// div.appendChild(p)

// var list =document.getElementById("list");

// function addTodo(){
//     var todo_item = document.getElementById("todo-item");

//     var li =document.createElement('li');
//     var liText=document.createTextNode(todo_item.value)
//     li.appendChild(liText)

//     var delBtn = document.createElement("button")
//     var delText = document.createTextNode("DELETE")
//     delBtn.setAttribute("class","btn")
//     delBtn.setAttribute("onClick","deleteItem(this)")
//     delBtn.appendChild(delText)

//     var editBtn = document.createElement("button")
//     var editText = document.createTextNode("EDIT")
//     editBtn.appendChild(editText)
//     editBtn.setAttribute("class","btn")
//     editBtn.setAttribute("onClick" , "editItem(this)")

//     li.appendChild(delBtn)
//     li.appendChild(editBtn)
//     list.appendChild(li)
//     todo_item.value=""
//     console.log(li)
// }
// function deleteItem(e){
//     e.parentNode.remove()
// }
// function editItem(e){
//     var val = prompt("Enter update value ",e.parentNode.firstChild.nodeValue)
//     e.parentNode.firstChild.nodeValue=val;
// }
// function deleteAll(){
//     list.innerHTML=""
// }
