let boxBtn = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");

let msgContainer = document.querySelector(".msg-container")
let newGameBtn = document.querySelector("#new-game");
let winMsg = document.querySelector("#win-msg");


let player0 = true; //1st player

const winCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxBtn.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("successfully clicked");

        if(player0){
            box.innerText = "0";
            player0 = false;
        }else{
            box.innerText = "X";
            player0 = true;
        }

        box.disabled = true;

        winner();
    });
});

const winner = () => {
    for(combination of winCombinations){
        let position0 = boxBtn[combination[0]].innerText;
        let position1 = boxBtn[combination[1]].innerText;
        let position2 = boxBtn[combination[2]].innerText;

        if(position0 != "" && position1 != "" && position2 != ""){
            if(position0 == position1 && position1 == position2){
                console.log("Win",position0);
                winnerShow(position0);
            }
        }

    }
}

const winnerShow = (winnerPos) => {
    winMsg.innerText = "Winner is "+winnerPos;
    //msgContainer.style.display = "inline";
    msgContainer.classList.remove("hide");
    disableBox();
}

const disableBox = () => {
    for(box of boxBtn){
        box.disabled = true;
    }
}

const newGame = () => {
    player0 = true;
    enableBox();
    msgContainer.classList.add("hide");
}

const enableBox = () => {
    for(box of boxBtn){
        box.disabled = false;
        box.innerText = "";
    }
}

resetBtn.addEventListener("click",newGame)

newGameBtn.addEventListener("click",newGame);
