document.querySelector(".btn").addEventListener('click', function (){
    console.log('you click tne button')
})




// let button = document.querySelectorAll('.btn');



// counter
let btnPlus = document.querySelector(".counter-plus");
let btnMinus = document.querySelector(".counter-minus");
let counterText = document.querySelector(".counter");
btnPlus.addEventListener("click", () => {
    counterText.style.color = "green";
    counterText.textContent++;
});
btnMinus.addEventListener("click", () => {
    counterText.style.color = "red";
    counterText.textContent != 0 ? counterText.textContent-- : false;
});
