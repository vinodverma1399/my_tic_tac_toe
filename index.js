let box=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let newGameBtn=document.querySelector("#new_btn");
let Winner_container=document.querySelector(".container_new");
let msg=document.querySelector("#msg");

let turnO=true;

const winPattern=[
    [0,1,2],
    [0,3,6], 
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

box.forEach((boxV)=>{
    boxV.addEventListener("click",()=>{
        if (turnO===true) {
           let a= boxV.innerText="X";
             console.log(a);
             turnO=false;
             
         }else{
           let b=boxV.innerText="O"; 
             console.log(b);
             turnO=true;
             
    
         }
         boxV.disabled=true;
        console.log("box was clicked ")
         checkwinner();
    })

})



const checkwinner=()=>{
    for(let indx of winPattern){

        let pat1val=box[indx[0]].innerText;
        let pat2val=box[indx[1]].innerText;
        let pat3val=box[indx[2]].innerText;

        if(pat1val!="" && pat2val!="" && pat3val!=""){
            if(pat1val===pat2val && pat1val===pat3val){
                console.log("winner",pat1val);
                showWinner(pat1val);
                
            }
            
        }
    }
}

const showWinner=(winner)=>{

    msg.innerText=` Congratulations Winner is ${winner} `;
    Winner_container.classList.remove("hide");
    boxDisable();
}

const boxDisable=()=>{

    for (const Dbox of box) {
        Dbox.disabled=true;

    }
}

const enablebox=()=>{
    for (const Dbox of box) {
        Dbox.disabled=false;
        Dbox.innerText="";
    }
}

const resetGame=()=>{
    turnO=true;
    enablebox();
    Winner_container.classList.add("hide"); 

}


resetBtn.addEventListener("click",resetGame);
newGameBtn.addEventListener("click",resetGame);






 