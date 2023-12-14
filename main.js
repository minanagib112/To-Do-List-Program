// Get the input box element by its ID
const inputBox = document.getElementById("input-box");

// Get the list container element by its ID
const listContainer = document.getElementById("list-container");

function addTask() {
    // Check if the input box is empty
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        // Create a new list item
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        // Append the list item to the list container
        listContainer.appendChild(li);
        // Create a new span element
        let span = document.createElement("span");
        // Set the inner HTML of the span element to the "x" symbol
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    // Clear the input box
    inputBox.value = "";
    // Save the data for reloding the page
    saveData();
}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
})
// Save the data for reloding the page
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
// Show the data
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();