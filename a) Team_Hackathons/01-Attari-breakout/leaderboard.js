const list= document.getElementById('list');

let scores=[];

fetch('https://bricksbackend.azurewebsites.net/?endpoint=A&top=20')
.then(response => response.json())
.then(data => {
    //Fetch From Backend
    let numbers=data.length //Example
    for (let i=1;i<numbers;i++){
        const listItem=document.createElement("div");
        listItem.className="listitem";
        const score=document.createElement("h2");
        score.innerText=data[i].score;
        score.className="score"
        const username=document.createElement("h2");
        username.innerText=data[i].name;
        username.className="username";
        const rank=document.createElement("h2");
        rank.className="rank";
        rank.innerText=i+".";
        listItem.appendChild(rank);
        listItem.appendChild(username);
        listItem.appendChild(score);
        list.appendChild(listItem);
    } 
});


