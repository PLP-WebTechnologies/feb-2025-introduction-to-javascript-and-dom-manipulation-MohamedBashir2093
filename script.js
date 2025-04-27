// Change text content dynamically
function changeContent(){
    document.getElementById("demo").innerText = "World is beautiful!";
}

// Modify CSS styles
function changeColor(){
    document.getElementById("styleMe").style.color = "red";
}

// Remove an element
function removelement(){
    const element = document.getElementById("remove");
    element.remove();
}

// Add a new element
function addElement(){
    const newp = document.createElement("p");
    newp.innerText = "Why am I doing this?";
    document.getElementById("container").appendChild(newp);
}