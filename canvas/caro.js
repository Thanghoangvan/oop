
    let clickcount=0;
    let turn=true;
    function play(playtic){
        if(clickcount%2==0){
     playtic.innerText="O"
     playtic.classList.add("obtn")
        }
        else{
            playtic.innerText="X"
            playtic.classList.add("xbtn")
        }
     playtic.setAttribute("disabled","disabled")//vohieuhoanutdo class.setAttribute(name,value),
        clickcount++
        
    if(clickcount==20){
        alert("Game is finish")
    }
    }
    function resetGame(){
        
        if(!confirm("Do you want to reset game")){
         return;
        }
        else{
            let btns=document.getElementsByClassName("playtic");
            for(const element of btns){
                element.innerText=" ";
                element.classList.remove("obtn")
                element.classList.remove("xbtn")
                element.removeAttribute("disabled")
            }
            clickcount=0;
        }
    }
    function pic(){
        
    }
