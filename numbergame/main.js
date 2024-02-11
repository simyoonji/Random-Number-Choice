//랜덤번호 지정
//유저가 번호를 입력하고 go라는 버튼을 누름 
//만약에 유저가 랜덤번호를 맞추면, 맞췄습니다!
//랜덤번호가 < 유저번호 DOWN!
//랜덤번호가 > 유저번호 up ! 
//버튼을 누르면 게임이 리셋된다.
//5번의 기회를 다 쓰면 게임이 끝난다.  (더이상 추측불가, disable 됨)
//유저가 1~100 범위 밖에 숫자를 입력하면 알려준다. 기회를 깎지 않는다.
//유저가 이미 입력한 숫자를 또 입력하면 알려준다. 기회를 깎지 않는다. 

let computerNum = 0;
let userArea = document.getElementById("user-area") //userArea 변수에 input 넣음 
let playBtn = document.getElementById("play-btn") //playBtn 변수에 button 넣음. 
let resultArea = document.getElementById("result-area") //resultArea 변수에 button 넣음. 
let countArea = document.getElementById("count-area")
let gameOver = false;
let resetArea = document.getElementById("reset-btn")
let count = 10;
let history = [];

playBtn.addEventListener("click",play)
resetArea.addEventListener("click",resetGame)
userArea.addEventListener("focus",function(){
 userArea.value="";
})

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
 //히스토리에 userArea에 입력한 값들이 들어와야함.
 history.push(userValue)
 console.log(history)
 count--; //누를 때 마다 카운트 차감
 countArea.innerText = `남은기회: ${count}번`

 if(userValue < computerNum){
     resultArea.textContent="UP!!"
 }else if(userValue > computerNum){
     resultArea.textContent="DOWN!!"
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
     //다시하기 누르면 할것 -> 카운트 초기화, 유저입력창 초기화, 버튼활성화 ,새로운 번호 뽑기 
     userArea.value = "";    
     randomNum();
     history = [];
     resultArea.textContent="결과를 확인해봐요"
     count = 10;
     countArea.innerText = `남은기회: ${count}번` 
     playBtn.disabled = false;
     gameOver = false;
}


