let button = document.createElement('button')
button.innerHTML = "Click Me";
button.addEventListener('click', foo);
document.body.append(button);


function foo() {
    var div = document.createElement('div');
    div.innerHTML = "this is div";
    div.style.color = "green";
    div.style.fontSize = "32px";
    document.body.append(div);
}