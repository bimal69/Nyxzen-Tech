const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("listContainer");
function addtask(){
    if(inputBox.value===''){
        alert("You must write something!");
    }
    else if(inputBoxdate.value===''){
        alert("You must also enter the date");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span= document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        

    }
    inputBox.value="";
}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toogle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
    
},false);

