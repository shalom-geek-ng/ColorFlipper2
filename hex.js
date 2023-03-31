let hexColor = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
let colorBtn = document.querySelector('.color-btn')
let colorText = document.querySelector('.colorText')

colorBtn.addEventListener('click',()=>{
    let Hex = '#'
    for(let i = 0; i<6; i++){
         Hex += hexColor[getRandomNumber()]
    }
    document.body.style.backgroundColor = Hex
    colorText.textContent = Hex
})
function getRandomNumber(){
    return Math.floor(Math.random()*hexColor.length)
}