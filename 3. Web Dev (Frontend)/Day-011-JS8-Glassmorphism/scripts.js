data = [{ "que":"Who teaches Potions class at Hogwarts?",
"1":"Professor Flitwick",
"2":"Professor Dumblebore",
"3":"Professor Snape",
"4":"Professor McGonagall",
"ans":"3"
},{"que":"In Charms class, what do the students have to try and make float?",
"1":"A feather",
"2":"A ball",
"3":"A fruit bowl",
"4":"A rock",
"ans":"1"
},{
"que":"And who teaches the flying lessons?",
"1":"Madam Hooch",
"2":"Madam Pince",
"3":"Madam Pomfrey",
"ans":"1"
},{"que":"In Defence Against the Dark Arts, Professor Quirrell’s classroom smelt like...",
"1":"Onions",
"2":"Perfume",
"3":"Smelly cheese",
"4":"Garlic",
"ans":"4"
},{"que":"In Harry’s first Transfiguration class, what does Professor McGonagall turn her desk into?",
"1":"A dragon",
"2":"A cow",
"3":"A pig",
"4":"A horse",
"ans":"3"
},{"que":"In Harry’s first Potions class, the students had to make a potion that...",
"1":"Cured boils",
"2":"Helped your hair grow longer",
"3":"Cured the common cold",
"4":"Cured headaches",
"ans":"1"
},{"que":"In flying lessons, what do you have to say to your broom to summon it?",
"1":"Up!",
"2":"Fly!",
"3":"Come here!",
"4":"Help!",
"ans":"1"
},{"que":"Where did the students study Herbology with Professor Sprout?",
"1":"In the Forbidden Forest",
"2":"In the greenhouses",
"3":"In the dungeons",
"4":"At Hagrid’s Hut",
"ans":"2"
},{"que":"What is strange about Professor Binns, the History of Magic professor?",
"1":"He's a werewolf",
"2":"He doesn't know anything about history!",
"3":"He's a vampire",
"4":"He's a ghost",
"ans":"4"
},{"que":"In their flying lesson, which other house are the Gryffindors taking the class with?",
"1":"The Hufflepuffs",
"2":"The Gryffindors",
"3":"The Ravenclaws",
"4":"The Slytherins",
"ans":"4"
}]
var count = 0
var score = 0
const options = document.getElementById("options")
function start(){
    document.getElementsByClassName("landing")[0].style.display= "none";
    document.getElementsByClassName("quizCard")[0].style.display= "inline";
    options.addEventListener("click", check);
}
function check(e){
    if (e.target.classList.value === ""){
        return
    }
    let ans = data[count]["ans"];
    if (data[count][ans] === e.target.innerHTML){
        score += 1;
    }else{
        e.target.style.backgroundColor = "#fd3e29";
    }
    document.getElementsByClassName("op")[ans-1].style.backgroundColor = "#4bfb4b";
    options.removeEventListener("click", check);
    setTimeout (() =>{
        count += 1;
        e.target.style.backgroundColor = "white";
        document.getElementsByClassName("op")[ans-1].style.backgroundColor = "white";
        document.getElementById("score").innerHTML = score
        if (count < data.length){
            getQuestion();
            options.addEventListener("click", check);
        }else{
            getResult();
        }
    }, 300);
}
function getQuestion(){
    document.getElementById("que").innerHTML = data[count]['que'];
    let opContainer = document.getElementById("options");
    opContainer.innerHTML = null
    for (let i=1; i<= 5; i++){
        if (i in data[count]){
        let opt = `<div class="op">${data[count][i]}</div>`;
        opContainer.innerHTML += opt;
        }
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