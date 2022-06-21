// Your code here

const addItem = event => {
    const ulList = document.getElementById("shopping-list");
    const value = document.getElementById('name').value;
    const type = document.getElementById('type').value;

    let liItem = document.createElement("li");
    liItem.setAttribute("data-type", type);
    liItem.innerText = value;

    event.preventDefault();

    ulList.appendChild(liItem);
}

window.document.addEventListener("DOMContentLoaded", event => {
    const button = document.getElementById("add");
    
    button.addEventListener("click", addItem);
});
