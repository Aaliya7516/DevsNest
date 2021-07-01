fetch('https://api.jsonbin.io/b/5e3f0514f47af813bad11ac5')
.then(res => res.json())
.then(res=> { data = res["questions"]}) //gives array of 20 questions


movies = [
    "Harry Potter and the Philosopher's Stone",
    "Harry Potter and the Chamber of Secrets",
    "Harry Potter and the Prisoner of Azkaban",
    "Harry Potter and the Goblet of Fire",
    "Harry Potter and the Order of the Phoenix",
    "Harry Potter and the Half-Blood Prince",
    "Harry Potter and the Deathly Hallows - Part 1",
    "Harry Potter and the Deathly Hallows - Part 2"
  ]

var count = 0
var visited = []
var score = 0
const options = document.getElementById("options")
function start(){
    document.getElementsByClassName("landing")[0].style.display= "none";
    document.getElementsByClassName("quizCard")[0].style.display= "inline";
    getQuestion();
    options.addEventListener("click", check);
}
function check(e){
    if (e.target.classList.value === ""){
        return
    }
    let ans = movies[data[count]["correct"]-1];
    if (ans === e.target.innerHTML){
        score += 1;
    }else{
        e.target.style.backgroundColor = "#fd3e29";
    }
    let ansIndex = data[count]["answers"].indexOf(data[count]["correct"]);
    document.getElementsByClassName("op")[ansIndex].style.backgroundColor = "#4bfb4b";
    options.removeEventListener("click", check);
    setTimeout (() =>{
        count += 1;
        e.target.style.backgroundColor = "white";
        document.getElementsByClassName("op")[ansIndex].style.backgroundColor = "white";
        document.getElementById("score").innerHTML = score
        if (count < data.length){
            getQuestion();
            options.addEventListener("click", check);
        }else{
            getResult();
        }
    }, 500);
}
function getQuestion(){
    document.getElementById("gif").src = data[count]["img"];
    let opContainer = document.getElementsByClassName("op");
    for (let i=0; i<4; i++){
        let opt = movies[data[count]["answers"][i]-1];
        opContainer[i].innerHTML = opt;
    }
}
function getResult(){
    document.getElementsByClassName("quizCard")[0].style.display= "none";
    document.getElementsByClassName("result")[0].style.display= "inline";

    if (score < 2){
        document.getElementsByClassName("result")[0].innerHTML = `<div id="result">Your Final score is: ${score}<br>Better Luck next time!!</div>`;
    }else{
        document.getElementById("result").innerHTML = `Congratulations!!!<br>Your Final score is: ${score}`;
    }

}