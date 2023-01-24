// document.querySelector(".btn").addEventListener('click', function (){
//     console.log('you click tne button')
// })
// document.querySelector(".btn1").addEventListener('click', function (){
//     console.log('you click tne third button')
// })
// document.querySelector(".btn2").addEventListener('click', function (){
//     console.log('you click tne second button')
// })

document.querySelectorAll(".btn")
document.addEventListener('click', function (){
    console.log('you click tne button')
})

let btnPlus = document.querySelector(".counter-plus");
let btnMinus = document.querySelector(".counter-minus");
let counterText = document.querySelector(".counter");
btnPlus.addEventListener("click", () => {
    counterText.textContent++;
});
btnMinus.addEventListener("click", () => {
    counterText.textContent != 0 ? counterText.textContent-- : false;
});

