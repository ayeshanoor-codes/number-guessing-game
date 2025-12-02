//computer stores a number to guess
let randomNum =Math.floor(Math.random() * 100) +1;

//variable to target HTML elements
let userguess = document.getElementById("guess");
let check = document.getElementById("check");
let result = document.getElementById("result");
let restart = document.getElementById("restart");

check.onclick = () =>{
    let userguess = Number(guess.value) ;
    if(userguess < 1 ||userguess > 100 ){
        result.textContent = "Enter a number between 1 to 100";
        result.style.color = "red";
    }
    else if (userguess === randomNum){
        result.innerHTML = "🎉 <b>Congratulations! You Win </b>";
        result.style.color = "green";
        check.disabled = true;
        restart.style.display = "block";
    }
    else{
        result.textContent = userguess < randomNum ? "Too low! Try again" : "Too high! Try again";
        result.style.color = "orange"
    }
    guess.value = "";
    guess.focus();
}

restart.onclick = () => {
    randomNum = Math.floor(Math.random() * 100) + 1 ;
    result.textContent = "";
    check.disbaled = false;
    restart.style.display = "none";
    guess.focus();

}
