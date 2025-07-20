

function watch(){
     const d=new Date();
     const parent=document.getElementById("box");
     parent.innerHTML="";
     //
     const ele1=document.createElement("h2");
     ele1.innerHTML=`${d.toLocaleTimeString()}`;
     const ele2=document.createElement("p");
     ele2.innerHTML=`${d.toDateString()}`;
     parent.appendChild(ele1);
     parent.appendChild(ele2);  
}

setInterval(watch,1000);