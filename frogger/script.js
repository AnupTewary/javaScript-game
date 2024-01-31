const timeLeftDisplay = document.querySelector('#time-left');

const resultDisplay = document.querySelector('#result')

const StartPauseButton = document.querySelector('#start-pause-button')

const squares = document.querySelectorAll('.grid div');

const logLeft = document.querySelectorAll('.log-left');

const logRight = document.querySelectorAll('.log-right');

const carLeft = document.querySelectorAll('.car-left');

const carRight = document.querySelectorAll('.car-right');


console.log(squares);
//! now we want to create a square which is my frog and we want that in starting it should be in place of red box
let currentIndex = 76;

const  width = 9;

let timerId = null;

let currentTime = 20;


function moveFrog(e){

    //~ before moving the frog to new block we have to remove the class first show that it look like it is moving 
    squares[currentIndex].classList.remove('frog');


    //^ we want that in certain key our frog should be moved and how we will know that which key we have pressed so for that we are going to take help of e.key here e is event and inside the e there so many different thing are there so from there we can acess the which key we have pressed and if we are clicking left then our frog should be moved to left so for that we have to subtract 1 from currentindex when left key pressed
    switch(e.key){
        case 'ArrowLeft':

            if(currentIndex % width !== 0){
              currentIndex-= 1;
            }
            break;

        case 'ArrowRight':

            if(currentIndex % width < 8){
                currentIndex += 1;
            }
            break;

        case 'ArrowUp':

            //! if we want to move our frog to up so for that we have to find the index of just upper box how we can find the index of just upper block so for that we know we are standing at 76 index and at upper there is 9 blok so if we subtract 76 from 9 we get the index of just upper box and vice versa for moving down we have to subtract it
            if(currentIndex- width >= 0){
                currentIndex -= width;
            }
            break;
            
        case 'ArrowDown':
            if(currentIndex + width < width * width){
                currentIndex += width;
            }
            break;
    }
    squares[currentIndex].classList.add('frog');
}

function autoMoveElement(){

    if(currentTime >0){
        currentTime -=1;
    }
    timeLeftDisplay.textContent = currentTime
    logLeft.forEach(logLeft =>moveLogLeft(logLeft));

    logRight.forEach(logRight =>moveLogRight(logRight));

    carLeft.forEach(carLeft =>moveCarLeft(carLeft));

    carRight.forEach(carRight =>moveCarRight(carRight));

    lose()
    win();
}

function moveLogLeft(logLeft){
    switch(true){
        case logLeft.classList.contains('l1'):
            logLeft.classList.remove('l1');
            logLeft.classList.add('l2');
            break;

        case logLeft.classList.contains('l2'):
            logLeft.classList.remove('l2');
            logLeft.classList.add('l3');
            break;

        case logLeft.classList.contains('l3'):
            logLeft.classList.remove('l3');
            logLeft.classList.add('l4');
            break;

        case logLeft.classList.contains('l4'):
            logLeft.classList.remove('l4');
            logLeft.classList.add('l5');
            break;

        case logLeft.classList.contains('l5'):
            logLeft.classList.remove('l5');
            logLeft.classList.add('l1');
            break;
    }
}

function moveLogRight(logRight){
    switch(true){

        case logRight.classList.contains('l1'):
            logRight.classList.remove('l1');
            logRight.classList.add('l5');
            break;

        case logRight.classList.contains('l2'):
            logRight.classList.remove('l2');
            logRight.classList.add('l1');
            break;

        case logRight.classList.contains('l3'):
            logRight.classList.remove('l3');
            logRight.classList.add('l2');
            break;

        case logRight.classList.contains('l4'):
            logRight.classList.remove('l4');
            logRight.classList.add('l3');
            break;

        case logRight.classList.contains('l5'):
            logRight.classList.remove('l5');
            logRight.classList.add('l4');
            break;
    }
}


function moveCarLeft(carLeft){
    switch(true){
        case carLeft.classList.contains('c1'):
            carLeft.classList.remove('c1');
            carLeft.classList.add('c2');
            break;

        case carLeft.classList.contains('c2'):
            carLeft.classList.remove('c2');
            carLeft.classList.add('c3');
            break;

        case carLeft.classList.contains('c3'):
            carLeft.classList.remove('c3');
            carLeft.classList.add('c1');
            break;
    }
}

function moveCarRight(carRight){
    switch(true){
        case carRight.classList.contains('c1'):
            carRight.classList.remove('c1');
            carRight.classList.add('c3');
            break;

        case carRight.classList.contains('c2'):
            carRight.classList.remove('c2');
            carRight.classList.add('c1');
            break;

        case carRight.classList.contains('c3'):
            carRight.classList.remove('c3');
            carRight.classList.add('c2');
            break;
    }
}


function lose(){

    if(
        squares[currentIndex].classList.contains('c1') || squares[currentIndex].classList.contains('l4') || squares[currentIndex].classList.contains('l5') ||
        currentTime <=0){
        resultDisplay.textContent = 'You Lose!';
        clearInterval(timerId);
        squares[currentIndex].classList.remove('frog');
        document.removeEventListener('keyup', moveFrog);
    }
}


function win(){
    if(squares[currentIndex].classList.contains('ending-block')){
        resultDisplay.textContent = 'You Win!';
        clearInterval(timerId);
        document.removeEventListener('keyup', moveFrog);
    }
}


StartPauseButton.addEventListener('click',()=>{
    console.log('clicking')
    if(timerId){
        clearInterval(timerId);
        timerId = null
        document.removeEventListener('keyup', moveFrog);
    }
    
    else{
        timerId = setInterval(autoMoveElement,500);
        document.addEventListener('keyup', moveFrog);
    }
})


