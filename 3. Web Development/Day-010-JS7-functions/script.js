myList = ['dog', 'cat', 'cow', 'rat', 'sheep', 'elephant', 'squerrel', 'parrot', 'dog', 'cat', 'cow', 'rat', 'sheep', 'elephant', 'squerrel', 'parrot']
//, 'cat','cow','rat','sheep','elephant','squerrel','parrot','dog','cat','cow','rat','sheep','elephant','squerrel','parrot'
//, 'dog', 'dog', 'dog', 'dog', 'dog', 'dog', 'dog', 'dog', 'dog', 'dog', 'dog', 'dog', 'dog', 'dog', 'dog'
var container = document.getElementById("container");
myList.sort(() => .5 - Math.random());
for (let i = 0; i < 16; i++) {
    var newDiv = document.createElement("section");
    newDiv.className = myList[i];
    newDiv.id = i;
    container.append(newDiv);
}
var clicked = {};
var count = 0;
var remainingClick = 30;
document.getElementById("remainingClick").innerHTML = remainingClick;
container.addEventListener('click', myClick);
function myClick(e) {
    myClass = e.target.classList.value;
    myId = e.target.id;
    if (count >= 2) {
        count = 0;
        clicked = {};
    }
    if (myClass === '') {
        return;
    }
    count += 1;
    remainingClick -= 1;
    document.getElementById(myId).innerHTML = myClass;
    if (count == 1) {
        clicked[myClass] = [myId];
    } else if (myClass in clicked) {
        clicked[myClass].push(myId);
        for (var i of clicked[myClass]) {
            if (clicked[myClass][0] == clicked[myClass][1]) {
                clicked[myClass].pop();
                count -= 1;
                remainingClick += 1;
            } else {
                document.getElementById(i).style.visibility = "hidden";
            }
        };
    } else {
        setTimeout(() => {
            clicked[myClass] = [myId];
            for (var key in clicked) {
                let i = clicked[key];
                document.getElementById(i).innerHTML = null;
            };
            container.addEventListener('click', myClick);
        }, 1000);
        container.removeEventListener('click', myClick);
    }
    document.getElementById("remainingClick").innerHTML = remainingClick;
    setTimeout(()=>{
        if (remainingClick == 0) {
            if (confirm("Game Over!! Want to Try again???")) {
                location.reload();
            } else {
                location.reload();
                window.alert("Thanks For playing!!")
            }
        }
    },500);
};


//for alert pop-up: https://www.tutorialspoint.com/online_html_editor.php