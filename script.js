const inputbox1 = document.getElementById("inputbox");
const list=document.getElementById("lists");
function AddTask(){
    if(inputbox1.value=='')
    {
        alert("you mush have to write something ");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox1.value;
        list.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputbox1.value="";
    sd();
}

list.addEventListener("click",function(e){
    if(e.target.tagName=="LI"){
        e.target.classList.toggle("checked");
        sd();
    }
    else if(e.target.tagName=="SPAN"){
     e.target.parentElement.remove();
     sd();
    }

}
,false);

function sd(){
    localStorage.setItem("data",list.innerHTML)
}

function showTask(){
    list.innerHTML=localStorage.getItem("data");
}
showTask()