// apend va appendchild
let parent = document.createElement('div')
parent.innerHTML = "this is div";

var child = document.createElement('div')
child.innerHTML = "this is child1";

var child1 = document.createElement('div')
child1.innerHTML = "this is child2";

let res = parent.appendChild(child, child1);
console.log(res);

// using append we can add multiple elements
// the return type of applied is always undefined

// using appendchild we can add only one element
// the return type of appendChild is an added element