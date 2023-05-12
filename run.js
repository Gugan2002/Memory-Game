const Allcard=[
    {
        name:"naruto",
        img:'img/naruto.png'
    },
    {
        name:"sasuke",
        img:'img/sasuke.png'
    },
    {
        name:"jiraiya",
        img:'img/jiraiya.png'
    },
    {
        name:"tsunade",
        img:'img/tsunade.png'
    },
    {
        name:"itachi",
        img:'img/itachi.png'
    },
    {
        name:"eren",
        img:'img/eren.png'
    },
    {
        name:"naruto",
        img:'img/naruto.png'
    },
    {
        name:"sasuke",
        img:'img/sasuke.png'
    },
    {
        name:"jiraiya",
        img:'img/jiraiya.png'
    },
    {
        name:"tsunade",
        img:'img/tsunade.png'
    },
    {
        name:"itachi",
        img:'img/itachi.png'
    },
    {
        name:"eren",
        img:'img/eren.png'
    },
]

Allcard.sort(()=>0.5-Math.random())

var board=document.querySelector('#board')
var result=document.getElementById('result')
var time=document.getElementById('time')
let chosen=[]
let chosenId=[]
const cardsWon=[]

function check(){
   const cards=document.querySelectorAll('#board img')
    if(chosenId[0]==chosenId[1]){
        cards[chosenId[0]].setAttribute('src','./img/blank.png')
        cards[chosenId[1]].setAttribute('src','./img/blank.png')
        
    }

    if(chosen[0]==chosen[1]){
        
        cards[chosenId[0]].setAttribute('src','./img/black.png')
        cards[chosenId[1]].setAttribute('src','./img/black.png')
        cards[chosenId[0]].removeEventListener('click',flipcard)
        cards[chosenId[1]].removeEventListener('click',flipcard)
        cardsWon.push(chosen)

    }else{
        cards[chosenId[0]].setAttribute('src','./img/blank.png')
        cards[chosenId[1]].setAttribute('src','./img/blank.png')
    }
    result.textContent=cardsWon.length
    chosen=[]
    chosenId=[]

    if(cardsWon.length==Allcard.length/2){
        result.innerHTML="Congrats!! You Won!"
        alert('congrats !!!')
        clearInterval(sec)
    }
}

function createboard(){
    for(let i=0;i<Allcard.length;i++){
        const cardimg=document.createElement('img');
        cardimg.setAttribute('src','img/blank.png');
        cardimg.setAttribute('data-id',i);
        cardimg.style="width:100px;height:100px;"
        cardimg.addEventListener('click',flipcard)
        // console.log(cardimg,i);
        board.appendChild(cardimg)
    }
}

function flipcard(){
    const cardId=this.getAttribute('data-id')
    chosen.push(Allcard[cardId].name);
    chosenId.push(cardId)
    console.log(chosen);
    this.setAttribute('src',Allcard[cardId].img)
    if(chosen.length==2){
        setTimeout(check,300);
    }
}

function timer() {
    var t=60;
    sec=setInterval(()=>{
        time.innerHTML=t-=1;
        if(t==0){
            clearInterval(sec);
            board.style="display:none;"
            alert('time out')
        }
    },1000)
}

function start() {
timer();
createboard();
document.getElementById('start').style='display:none;'
}