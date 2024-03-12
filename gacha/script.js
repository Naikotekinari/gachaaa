let fourStarPity = 0
let fiveStarPity = 0
let eventBanner = false

window.onload = init
function init() {
let fourStarPity = 0
let fiveStarPity = 0
let eventBanner = false
let fifFifPity = false
  
const gachaButton = document.getElementById("amongUsButton")

const gachaItem = document.getElementById('gachaItem')

const currentFourPity = document.getElementById('currentFourPity')

const currentFivePity = document.getElementById('currentFivePity')

const currentFifFifPity = document.getElementById('currentFifFifPity')

const gachaButtonTen = document.getElementById("amongUsButtonTen")

const gachaItemTen = document.getElementById("gachaItemTen")

const eventBannerCheck = document.getElementById("eventBannerButton")

const eventBannerCheckShow = document.getElementById("eventBannerCheck")

const gachaImageSingle = document.getElementById("gachaImageSingle")
  
let gachaImages = []
  
for (let i = 0; i < 10; i++) {
  gachaImages[i] = document.getElementById("gachaImageMulti" + (i + 1))
}

gachaImages[0].src = "dummy3.png"

eventBannerCheckShow.disabled = true

let possibleThreeStars = [
  [" garbage", "gacha/img/Trash.png"]
]

let possibleFourStars = [
  [" Liz", "gacha/img/Liz.jpg"], 
  [" Talia", "gacha/img/Talia.jpg"],
  [" Eliea", "gacha/img/Eliea.jpg"],
  [" Yumiwynst", "gacha/img/Yumiwynst.jpg"],
  [" Atende", "gacha/img/Atende.jpg"],
  [" Hei", "gacha/img/Hei.jpg"],
  [" Diot", "gacha/img/Diot.jpg"],
  [" Namo", "gacha/img/Namo.jpg"]
]

let possibleLimitedFourStars = [
  [" Liz", "gacha/img/Liz.jpg"],
  [" Diot", "gacha/img/Diot.jpg"],
  [" Namo", "gacha/img/Namo.jpg"]
]
  
let possibleFiveStars = [
  [" John", "gacha/img/John.jpg"],
  [" Orianna", "gacha/img/Orianna.jpg"],
  [" Sassley", "gacha/img/Sassley.jpg"],
  [" Erza", "gacha/img/Erza.jpg"]
]

let possibleLimitedFiveStars = [
  [" Verna", "gacha/img/Verna.jpeg"]
]
  
let chara = ["Sus"]

// gachaImages[1].src = possibleFiveStars[2][1]
  
eventBannerCheck.addEventListener('click', function() {
  if (eventBanner === true) {
    eventBanner = false
    eventBannerCheckShow.checked = false
    console.log('so false... ' + eventBanner )
  } else {
    eventBanner = true
    eventBannerCheckShow.checked = true
    console.log('so true... ' + eventBanner )
  }
}) 
  
gachaButton.addEventListener('click', function() {
  chara = [""]
  gachaRoll(0)
  gachaItem.textContent = chara[0][0]
  gachaImageSingle.src = chara[0][1]
  currentFourPity.textContent = fourStarPity.toString()
  currentFivePity.textContent = fiveStarPity.toString()
}) 

gachaButtonTen.addEventListener('click', function() {
  chara = [""]
  for (let i = 0; i < 10; i++) {
    gachaRoll(i)
  }
  let charaNames = []
  for (let i = 0; i < 10; i++) {
    charaNames[i] = chara[i][0]
    gachaImages[i].src = chara[i][1] 
  }
  gachaItemTen.textContent = charaNames
  currentFourPity.textContent = fourStarPity.toString()
  currentFivePity.textContent = fiveStarPity.toString()
})

function gachaRoll(i) {
  let fiveStarChance = 9950
  if (fiveStarPity > 70) {
    fiveStarChance = 9400
  }
  if (fiveStarPity > 89) {
    fiveStarRoll()
    console.log('5 pity hit heheh')
    return chara[i] = charac
  } else if (fourStarPity >= 9) {
    let rareRng = RNG(10000)
    if (rareRng > fiveStarChance) {
      fiveStarRoll()
      return chara[i] = charac
    } else {
      fourStarRoll()
      return chara[i] = charac
    }
  } else {
    let rareRng = RNG(10000)
    if (rareRng > fiveStarChance) {
      fiveStarRoll()
      return chara[i] = charac
    } else if (rareRng > 9300) {
      fourStarRoll()
      return chara[i] = charac
    } else {
      threeStarRoll()
      return chara[i] = charac
    }
  }
}

  
function fiveStarRoll() {
  if (eventBanner === true) {
    let fifFif = RNG(3)
    console.log(fifFif)
    if (fifFif === 2 || fifFifPity === true) {
      let arrRng = RNG(possibleLimitedFiveStars.length)
      fiveStarPity = 0
      fourStarPity = fourStarPity + 1
      fifFifPity = false
      currentFifFifPity.textContent = "No 50/50 pity yet..."
      return charac = possibleLimitedFiveStars[arrRng -1]
    } else {
      fifFifPity = true
      currentFifFifPity.textContent = "next 50/50 guaranteed!"
    }
  }
  let arrRng = RNG(possibleFiveStars.length)
  fiveStarPity = 0
  fourStarPity = fourStarPity + 1
  console.log('rolled 5st')
  console.log(fiveStarPity)
  return charac = possibleFiveStars[arrRng - 1]
}

function fourStarRoll() {
  if (eventBanner === true) {
    let fifFif = RNG(3)
    console.log(fifFif)
    if (fifFif === 2) {
      let arrRng = RNG(possibleLimitedFourStars.length)
      fourStarPity = 0
      fiveStarPity = fiveStarPity + 1
      return charac = possibleLimitedFourStars[arrRng -1]
    }
  }
  let arrRng = RNG(possibleFourStars.length)
  fourStarPity = 0
  console.log(arrRng + "5st")
  fiveStarPity = fiveStarPity + 1
  console.log('rolled4st')
  console.log(fiveStarPity)
  return charac = possibleFourStars[arrRng - 1]
}

function threeStarRoll() {
  let arrRng = RNG(possibleThreeStars.length)
  console.log(arrRng + "4st")
  fiveStarPity = fiveStarPity + 1
  fourStarPity = fourStarPity + 1
  console.log(fiveStarPity)
  console.log('rolled 3st')
  return charac = possibleThreeStars[arrRng - 1]
}

function RNG(maxNum) {
  let number = Math.floor((Math.random() * maxNum + 1))
  console.log('the rng was' + number)
  return number
} }
