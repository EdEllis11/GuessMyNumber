document.querySelector(".message").textContent = "Let the games begin!";
document.querySelector(".score").textContent = 12;
document.querySelector(".guess").value = 0;

let secretNumber = Math.trunc(Math.random()*20)+1;
let highScore = 0;
let score = 12;

document.querySelector(".check").addEventListener("click", function(){
	let entered = Number(document.querySelector(".guess").value);

	if (entered === secretNumber){
		document.querySelector(".number").textContent = secretNumber;
		document.body.style.background = "green";
		document.querySelector(".message").textContent = "You guessed the number!";

	if (score > highScore){
		highScore = score ;
		document.querySelector(".highscore").textContent = highScore;
		}
	} else if (entered > secretNumber){
		if (score > 1){
			document.querySelector(".message").textContent = "Go lower";
			score = score -1;
			document.querySelector(".score").textContent = score;
		} else {
			document.querySelector(".number").textContent = secretNumber;
			document.body.style.background = "red";
			document.querySelector(".message").textContent = "You lose!";
			score = 0;
			document.querySelector(".score").textContent = score;

		}
	} else if (entered < secretNumber){
		if (score > 1){
			document.querySelector(".message").textContent = "Go higher";
			score = score -1;
			document.querySelector(".score").textContent = score;
		} else {
			document.querySelector(".number").textContent = secretNumber;
			document.body.style.background = "red";
			document.querySelector(".message").textContent = "You lose!";
			score =0;
			document.querySelector(".score").textContent = score;
		}
	}
})

document.querySelector(".again").addEventListener("click", function(){
	document.querySelector(".message").textContent = "Let the games begin!";
document.querySelector(".score").textContent = 12;
document.querySelector(".guess").value = 0;

secretNumber = Math.trunc(Math.random()*20)+1;
score = 12;
document.body.style.background = "black";
document.querySelector(".number").textContent = "?";

})