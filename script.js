let colors = ["Red","Purple","Yellow","Black","Brown","Pink","Purple","Orange","Green","Blue"]
let colorBtn = document.querySelector('.color-btn')
let colorText = document.querySelector('.colorText')
let bgColor = document.querySelector('.bg-color')

colorBtn.addEventListener('click',()=>{
  let randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber]
  colorText.textContent = colors[randomNumber]


  if(colors[randomNumber]=="Purple"){
   bgColor.style.backgroundColor = 'Red'
  }
  else{
    bgColor.style.backgroundColor = 'Purple'
  }
})

function getRandomNumber(){
  return Math.floor(Math.random()*colors.length)
}