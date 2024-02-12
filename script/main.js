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
     resultArea.textContent="1~100 까지의 숫자만 입력 해주시겠어요?"
     return;
 }
 if(history.includes(userValue)){
     resultArea.textContent="이미 입력한 숫자네요, 다른 숫자를 입력 해봐요 ~"
     return;
 }

 history.push(userValue)
 console.log(history)
 count--; //누를 때 마다 카운트 차감
 countArea.innerText = `남은기회: ${count}번`

 if(userValue < computerNum){
     resultArea.textContent="오호우~ 그것보단 높을걸요?!"
 }else if(userValue > computerNum){
     resultArea.textContent="오호우~ 그것보단 낮을걸요?!"
 }else {
     resultArea.textContent="맞췄어요 대단해요!"
     gameOver = true;
 }
 if(count < 1){
     gameOver = true;
     resultArea.textContent="정말 아쉬워요~ 다시 한번 도전하면 맞출 수 있을지도 ~"
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
     resultArea.textContent="결과를 확인해봐요"
     countArea.innerText = `남은기회: ${count}번` 
     playBtn.disabled = false;
     gameOver = false;
}


