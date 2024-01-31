//! this game is all about we have 9 boxes and a mole will come in random box we have to click into the mole before it wanish if we able to click on the mole our count will increase if not our count will not increase

const squareBox = document.querySelectorAll('.square');

const timeLeft = document.querySelector('#time-left');

const score = document.querySelector('#Score');

const mole = document.querySelector('.mole');


let result = 0;
let hitPosition;

let currentTime = 60;

let timeId=null;

// !this function work is to put the mole in random box
function randomSquare(){
    squareBox.forEach(element => {
        //! if any box have the class mole then first we have to reomve that class so that we can start with frash
        element.classList.remove('mole');
    });

    let randomposition = squareBox[Math.floor(Math.random()*9)];

    //~ after getting the random position we will place the mole class there 
    randomposition.classList.add('mole');

    // this variable will store my id of the random box in which my mole is there
    hitPosition = randomposition.id;
}


squareBox.forEach(square=>{
    square.addEventListener('mousedown', ()=>{

        //& we are checking if the square.id is equall to the hitposition if true then we will increase the result by one
        if(square.id == hitPosition){
            result++;
            score.textContent = result;
        }
    })
})
//^ this function will call the randomSquare function again and again so for that we have to use the setinterval
function moveMole(){
    timeId = setInterval(randomSquare , 700);
}
moveMole();

//^ this function work is to decrease the time every second and if the current time becomes 0 then we have to display the message that our time is over and display the result
function countDown(){
    currentTime--;
    timeLeft.textContent = currentTime;

    if(currentTime ===0){
        clearInterval(countDownTimerId);
        clearInterval(timeId)
        alert("Game Over! Your final score is "+result);
    }
}

let countDownTimerId = setInterval(countDown,1000);
