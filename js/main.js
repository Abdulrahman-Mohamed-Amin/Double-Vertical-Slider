// start slider 

let leftIndex = 3 ;
let rightIndex = 0 ;


let textSlider = document.querySelector(".slider .left")
let sliderBg = document.querySelector(".slider .right")
let up = document.querySelector(".up")
let down = document.querySelector(".down")

up.addEventListener("click" , clickUp)


down.addEventListener("click" , (e) =>{
    if(leftIndex == 3){
        leftIndex = -1
    }
    if(rightIndex == 0){
        rightIndex = 4
    }
    leftIndex++
    rightIndex--

    textSlider.style.top = `-${leftIndex * 100}vh`
    sliderBg.style.top = `-${rightIndex * 100}vh`


})

function clickUp() {

    if(leftIndex == 0){
        leftIndex = 4 
    }
    if(rightIndex == 3){
        rightIndex = -1
    }
    leftIndex--
    rightIndex++
    textSlider.style.top = `-${leftIndex * 100}vh`
    sliderBg.style.top = `-${rightIndex* 100}vh`
}