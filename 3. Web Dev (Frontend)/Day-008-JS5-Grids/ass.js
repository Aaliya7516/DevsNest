var main = document.getElementById("main");

main.addEventListener("click", (e)=>{
    let myclassList = e.target.className;
    if (myclassList === "grid red"){
        e.target.classList="grid white";
    }else if(myclassList === "grid white"){
        e.target.classList="grid red";
    }
})

