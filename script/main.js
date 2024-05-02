let userArea = document.getElementById("user-area") // inptu
let playBtn = document.getElementById("play-btn")  // 버튼
let resultArea = document.getElementById("result-area") //결과창
let countArea = document.getElementById("count-area") //카운트
let resetArea = document.getElementById("reset-btn") //리셋
let gameOver = false;
let computerNum = 0; //랜덤번호 
let count = 5;
let history = [];

playBtn.addEventListener("click",play)
resetArea.addEventListener("click",resetGame)
userArea.addEventListener("focus",()=>{
 userArea.value="";
});
userArea.addEventListener("keydown",(event) => {
    if (event.keyCode == 13) {
        play();
    }
});

//랜덤번호 추출 함수
function randomNum(){ 
 computerNum = Math.floor(Math.random()*100+1)
 console.log("랜덤번호 :", computerNum)
}
randomNum()

//playBtn 을 누르면 실행될 함수, 연결해줘야함. 
function play(){ 
 let userValue = userArea.value
 
 if(userValue < 1 || userValue > 100){
     resultArea.textContent="1 ~ 100 까지 숫자를 입력해주세요."
     return;
 }
 if(history.includes(userValue)){
     resultArea.textContent="이미 입력한 숫자입니다."
     return;
 }

 history.push(userValue)
 console.log(history)
 count--; //누를 때 마다 카운트 차감
 countArea.innerText = `COUNT: ${count}`

 if(userValue < computerNum){
     resultArea.textContent="HINT : UP! 👆"
 }else if(userValue > computerNum){
     resultArea.textContent="HINT : DOWN 👇"
 }else {
     resultArea.textContent="💎 CLEAR! 💎"
     gameOver = true;
 }
 if(count < 1){
     gameOver = true;
     resultArea.textContent="GAME OVER 🎮"
 }
 if(gameOver == true){
     playBtn.disabled = true;
 }
}


function resetGame(){
     randomNum();
     userArea.value = "";    
     history = [];
     count = 5;
     resultArea.textContent="START!"
     countArea.innerText = `COUNT: ${count}` 
     playBtn.disabled = false;
     gameOver = false;
}


