const cardArray =[
    {
        name:'fries',
        img:'images/fries.png',
    },
    {
        name:'cheeseburger',
        img:'images/cheeseburger.png',
    },
    {
        name:'hotdog',
        img:'images/hotdog.png',
    },
    {
        name:'ice-cream',
        img:'images/ice-cream.png',
    },
    {
        name:'milkshake',
        img:'images/milkshake.png',
    },
    {
        name:'pizza',
        img:'images/pizza.png',
    },
    {
        name:'fries',
        img:'images/fries.png',
    },
    {
        name:'cheeseburger',
        img:'images/cheeseburger.png',
    },
    {
        name:'hotdog',
        img:'images/hotdog.png',
    },
    {
        name:'ice-cream',
        img:'images/ice-cream.png',
    },
    {
        name:'milkshake',
        img:'images/milkshake.png',
    },
    {
        name:'pizza',
        img:'images/pizza.png',
    },
]


//!there we are going to sort or suffleing my array randomly
cardArray.sort(()=>-.5 - Math.random());

const gridHtml = document.querySelector('#grid');

const result = document.querySelector('#result');


//~ this array will contain my card name which we have being selected
let cardsChosenName = [];

//^ this array will contain my card id which we have being selected
let cardsChosenIds = [];

const cardsWon = [];


//& this function will do for each item which is present inside my cardArray will create a card 
function createBoard(){

    let id = 0;

    //~ we are looping inside the cardArray
    cardArray.forEach(index =>{

        //! here we are creating the 12 card for every item of cardArray and putting the image inside the card 
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');

        //! here we are setting the id for every card so that they are unique 
        card.setAttribute('data-id',id );
        id++
        //~ after that we are apending the card in my grid html which is create inside the html
        gridHtml.append(card);

        //~ we will also add a event listener to every card so that if we click on any card that card must be flipped it and this flipped will done using the a flipCard function
        card.addEventListener('click',flipCard);
    })

}

createBoard();


//~ this function work is to check if the 2 item which are present inside  my cardsChosenName array are they equal if they are equall then its a match we will do a alert and say this is match and we will reomve the both of the image and put a white image on it this white image indicates that we have found two image that are identical now find other identical images now we do not need to find this matched images again and we will also reomve the eventlistner of both the image

function checkMatch(){

    const cardImg = document.querySelectorAll('img');

    if(cardsChosenIds[0] == cardsChosenIds[1]){
        alert(`you Clicked on the same card`)
        cardImg[cardsChosenIds[0]].setAttribute('src', 'images/black.png');

        cardImg[cardsChosenIds[1]].setAttribute('src', 'images/black.png');
    }

    if(cardsChosenName[0] == cardsChosenName[1]){
        alert("You found a match 😎");
        //^ here we are setting the image to white when both the image are equall
        cardImg[cardsChosenIds[0]].setAttribute('src', 'images/white.png');

        cardImg[cardsChosenIds[1]].setAttribute('src', 'images/white.png');

        cardImg[cardsChosenIds[0]].removeEventListener('click', flipCard);

        cardImg[cardsChosenIds[1]].removeEventListener('click', flipCard);

        cardsWon.push(cardsChosenName);
    }
    //^ this else part means that the items are not equall
    else{
        cardImg[cardsChosenIds[0]].setAttribute('src', 'images/blank.png');

        cardImg[cardsChosenIds[1]].setAttribute('src', 'images/blank.png');

        alert(`Sorry you Clicked on Wrong card 😭`)
    }

    result.textContent = cardsWon.length;

        //! after doning everything which is required to done when cards are matched we will remove the elements which is inside the cardsChosenName so that again user click on two different cards that value should be added inside the cardsChosenName and same for cardsChosenId
        cardsChosenName = [];
        cardsChosenIds = [];

        if(cardsWon.length == cardArray.length/2){
            result.innerHTML = `Congratulations you found them all 🎉🎊`;
        }
}
//^ now we are going to create a function which will flip my card when we click on it

function flipCard(){
    //! when we click on the card we want to get the id of that card so for that we have to use the this keyword this will return my current context and we want the id and we set the id of a card with the help of setAttribute so there is a method getAttribute to get the attribute 
    //^ Why we are doing this why we are accessing the id of a card because when we clicked on a card corresponding to that card there is a image and name which is store inside the cardarray we want to display that imag or name that why we are accessing the id of a card which we have clicked
    let cardId = this.getAttribute('data-id');

    //~We are going to push the selected card name and id to two different array which is cardsChosenName and cardsChosenId

    cardsChosenName.push(cardArray[cardId].name);

    cardsChosenIds.push(cardId);

    console.log(cardsChosenName, cardsChosenIds);

    //& now when we clicked on the card crrossponding to that card we want that image should be display
    this.setAttribute('src', cardArray[cardId].img);

    // ^ whenever there is two card inside my cardsChosen array we are going to check if both the card are equall
    if(cardsChosenName.length === 2){
        setTimeout(checkMatch,500)
    }
}