const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");
const listDiv=document.querySelector(".list"); // .list div container

function addTask(){
    if(inputbox.value==="")
    {
        alert("you must write something!")
    }
    else
    {
        let li=document.createElement("li");
         li.innerHTML=inputbox.value;
        listcontainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);

        listDiv.style.display="block";  // show .list div if there a new task

    }
    inputbox.value="";
    saveData();
}

listcontainer.addEventListener("click", function(e){
    if(e.target.tagName==="LI")
    {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN")
    {
        e.target.parentElement.remove();
        saveData();

        if(listcontainer.children.length===0)
        {
            listDiv.style.display="none";
        }
       
    }
},false);

function saveData(){
    localStorage.setItem("data", listcontainer.innerHTML);
}
function showTask(){
    listcontainer.innerHTML=localStorage.getItem("data") ;
    if(listcontainer.children.length>0)
    {
        listDiv.style.display="block";
    }
    else
    {
        listDiv.style.display="none";
    }
}
showTask();