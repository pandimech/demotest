//DOM Inbuilt methods
// DOM:Document object model
// how to create any HTML Element dynamically?
// Syntax:Document.createElement('element name')
// result:<elename></elename>

// let division = document.createElement('div');
//<div></div>
// division.innerHTML = "this is  dynamic div";
//<div>this is dynamic div</div>



// <span>this is span</span>

// let span = document.createElement('span');

// span.innerHTML = "this is span";
// span.style.color = "red";
// span.style.backgroundColor = "blue";
// span.className = "main";
// document.body.append(division, span);


//innerhtml:property
//to add content inside the html element
//if it have any html element also it will parses

//innertext:propertry
// to add content inside the html element
// if it have any html elements also it will not parses

//styling:(inline css)
//using elementname.style.attributename="value";

//classname idname:attribute
//setAttribute('attributename','value')

//alternate approach to class attribute
// className



// let div1 = document.createElement('div');
// div1.className = "container";
// let div2 = document.createElement('div');
// div2.className = "row";
// let div3 = document.createElement('div');
// div3.className = "col-1"

// div2.append(div3);
// div1.append(div2);
// document.body.append(div1);


// already html elements are there we are supposed to print those elements in console...

//Note:element must be there in your html file if not will not work

//document.getElementById(),document.getElementByClassName(),document.getElementByTagname()



//document.getElementById()


//let res = document.getElementById("main").value;
//     console.log(res);


// function foo() {
//     let res = document.getElementById("main").value;
//     console.log(res);
// }


//document.getElementByClassName()

let res = document.getElementsByClassName("main");
// output of this method is an array
console.log(res);