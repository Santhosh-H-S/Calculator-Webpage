var dis=document.getElementById("display");
function call(obj){
    var pushed=obj.innerHTML
    if(pushed=="="){
        dis.innerHTML=eval(dis.innerHTML);
    }
    else if(pushed=="AC"){
        dis.innerHTML="0";
    }
    else{
        if(dis.innerHTML=="0"){
            dis.innerHTML=pushed;
        }
        else{
            dis.innerHTML+=pushed;
        }
    }


    
}