let captionsList = document.querySelectorAll('.caption-item')
let unitsList = document.querySelectorAll('.unit')

captionsList.forEach(function (item, index) {
  item.addEventListener('mouseover', function () {
     unitsList[index].classList.add('hovered')
  })
  
  item.addEventListener('mouseout', function () {
     unitsList[index].classList.remove('hovered')
  })
})

let totalSum = 0
let cafeSum = 0
let transportSum = 0
let entertaimentSum = 0
let healthSum = 0
let clotheSum = 0
let shopSum = 0

// const incomeButton = document.querySelector('#zachislenie')
// incomeButton.addEventListener('click', addIncome)

// const spendButton = document.querySelector('#rashod')
// spendButton.addEventListener('click', spendMoney)

// const accountButton = document.querySelector('#account')
// accountButton.addEventListener('click', () => {
//     console.log('loh ebuchiy')
// })
