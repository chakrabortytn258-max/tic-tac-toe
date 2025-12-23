let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let msg = document.querySelector(".msg");
let msgContainer = document.querySelector(".msgContainer"); 
let newGame = document.querySelector("#newGame");
let whoseTurn = document.querySelector("#whoseTurn");

let turnX=0;
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const newgameHandler = () => {
    
    enabledBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box)=> {
    box.addEventListener("click",() => {
        if(turnX){
            box.innerText="X";
            turnX=false;
        }
        else {
            box.innerText="O";
            turnX=true;
        }
        box.disabled=true;
        checkwinnner()
    });

});
    const disabledBoxes = () => {
        for(let box of boxes){
            box.disabled=true;
        }
    }
    const enabledBoxes = () => {
        for(let box of boxes){
            box.disabled=false;
            box.innerText="";
        }
    }

const shoWinner=(winner) => {
        msg.innerText=`congratulations ${winner},you won!`;
        msgContainer.classList.remove("hide");
        disabledBoxes();
        if (winner === "X") {
        turnX = false; 
        whoseTurn.innerText="Its O's turn";
    } else {
        turnX = true; 
        whoseTurn.innerText="Its X's turn"; 
    }
    }

const checkwinnner = () => {
    for(let pattern of winPatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != "" ){
            if(pos1 === pos2 && pos2 === pos3){
                shoWinner(pos1);
            }
        }
    }
}

newGame.addEventListener("click",newgameHandler);
resetBtn.addEventListener("click",newgameHandler);