// document.getElementByTagName
// queryselector vs queryselctorall
// table using DOM

// let a = document.getElementsByTagName('div');
// // return an array
// for (var i in a) {
//     console.log(a[i]);
// }


// let a = document.querySelector('.main');
// //based upon the selector
// // first occurence of the selctor
// console.log(a);


// let a =decument.querySelectorAll('.main');
// // query selector all will retrive all the elements whose selector must be there 
// // output will be in array
// console.log(a)


// table using dom

var table = document.createElement('table');
table.setAttribute('class', 'table');
// <table class="table"></table>
var thead = document.createElement('thead');
thead.setAttribute('class', 'thead-dark');
// <thead class="thead-dark"></thead>  
var tr = document.createElement('tr');
var th1 = createElement('th', 'first');
var th2 = createElement('th', 'last');
tr.append(th1, th2);
thead.append(tr);


var tbody = document.createElement('tbody');
var tr = document.createElement('tr');
var td1 = createElement('td', 'john');
var td2 = createElement('td', 'doe');
tr.append(td1, td2);
tbody.append(tr);

var tr = document.createElement('tr');
var td3 = createElement('td', 'pandi');
var td4 = createElement('td', 'durai');
tr.append(td3, td4);
tbody.append(tr);

var tr = document.createElement('tr');
var td5 = createElement('td', 'Larry');
var td6 = createElement('td', 'the Bird');
tr.append(td5, td6);
tbody.append(tr);


table.append(thead, tbody);
document.body.append(table);

// <th>First</th>
function createElement(elename, value) {
    // ele:<th>
    // value:content
    var element = document.createElement(elename);
    element.innerHTML = value;
    console.log(element);
    return element;
}