var main = document.getElementById("main");
var bookedSeats = document.getElementById("bookedSeats");
var remainingSeats = document.getElementById("remainingSeats");

let book = 0;
main.addEventListener("click", (e)=>{
    let myclassList = e.target.className;
    if (myclassList === "grid free"){
        e.target.classList="grid booked";
        book += 1;
    }else if(myclassList === "grid booked"){
        e.target.classList="grid free";
        book -= 1;
    }
    bookedSeats.innerHTML = book
    remainingSeats.innerHTML = 36 - book
})
bookedSeats.innerHTML = book
remainingSeats.innerHTML = 36 - book
