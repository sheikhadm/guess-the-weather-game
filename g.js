let city;
let bin;
let player1;
let computer;
let newGame = true
let player = document.querySelector('.player')
let comp = document.querySelector('.computer')
let button = document.querySelector('button')
let town = document.querySelector('.town')
//computer's choice
function randomK() {
    const times = 15

    const interval = setInterval(() => {
        const randomTag = newRandom()
        highlight(randomTag)
        setTimeout(() => {
            unhigh(randomTag)
        }, 100)
    }, 100)
    setTimeout(() => {
        clearInterval(interval)
        setTimeout(() => {
            const randomTag = newRandom()
            highlight(randomTag)
             computer = randomTag.id
             printAddress(player1,computer)

        }, 100)
    }, times * 100)
}
function highlight(tag) {
    tag.classList.add("active")
}
function unhigh(b) {
    b.classList.remove("active")
}
function newRandom() {
    const gl = document.querySelectorAll(".l")
    return gl[Math.floor(Math.random() * gl.length)]
}



//player choice
const pins = document.querySelectorAll('.m')
const cloud = document.querySelector('.clouds')
const fog = document.querySelector('.fog')
const moon = document.querySelector('.moon')
const rain = document.querySelector('.rain')
const thunder = document.querySelector('.thunder')
const snow = document.querySelector('.snow')
const box = document.querySelectorAll('.box')


cloud.addEventListener("click", () => {
    pick(cloud)
    disable()
    setTimeout(()=>{
        randomK()
    },500)
   
    player1="Clouds"
})
fog.addEventListener("click", () => { 
    pick(fog)
    disable()
    setTimeout(()=>{
        randomK()
    },500)
    
    player1="Fog"
})
moon.addEventListener("click", () => { 
    pick(moon)
    disable()
    setTimeout(()=>{
        randomK()
    },500)
    
    player1="Clear"
})
rain.addEventListener("click", () => { 
    pick(rain)
    disable()
    setTimeout(()=>{
        randomK()
    },500)
    
    player1="Rain" 
})
thunder.addEventListener("click", () => { 
    pick(thunder)
    disable()
    setTimeout(()=>{
        randomK()
    },500)
    
    player1="Thunderstorm"
})
snow.addEventListener("click", () => { 
    pick(snow)
    disable()
    setTimeout(()=>{
        randomK()
    },500)
    
    player1="Snow"
})



function hideActive() {
    for (let i = 0; i < pins.length; i++) {
        unhigh(pins[i])
    }
}
function hideActives() {
    for (let i = 0; i < box.length; i++) {
        unhigh(box[i])
    }
}
function disable() {
    for (let i = 0; i < pins.length; i++) {
        pins[i].classList.add("disabled")
    }
}
disable()
function enable() {
    for (let i = 0; i < pins.length; i++) {
        pins[i].classList.remove("disabled")
    }
}
function pick(b) {
    hideActive()
    if (b) {
        console.log(b)
        b.classList.add("active")
    }
    console.log(b)
}
button.addEventListener("click",play)
function play(){
    if(newGame){
        hideActive()
        enable()
        pickCity()
        newGame= false
        button.textContent = "Draw"
        player1score =  0
        player.textContent = player1score

        computerscore = 0
        comp.textContent = computerscore
    }
    else{
        hideActives()
        enable()
        pickCity()
    }
    

}


// pick a city



function pickCity(){
    const cities = ["lagos","texas","nairobi","rio","moscow","tripoli","mumbai","melbourne","berlin","tunis","ogun","niger","abuja","london","paris","lisbon","tokyo","rabat","casablanca","madrid","manchester","doha",]
    const randomNum = Math.floor(Math.random()*cities.length)
    locate = cities[randomNum]
      town.textContent = locate.toUpperCase()
    
    bin= fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locate}&appid=ebf90f76000fb0c3e7e0c1b173bbc73c`)
      .then(res => res.json())
      .then (data => {
                 city = data.weather
                  return city[0].main
                 
      })
      
     
}

let player1score = 0
let computerscore=0
const printAddress = async (b,c) => {
    const a = await bin;
    display(a)
    if(a===b && a ===c){
        player1score+= 10
        computerscore+=10
        player.textContent = `player : ${player1score}`
        comp.textContent = `computer : ${computerscore}`
 }
   else if(a === b){
        player1score += 10
       player.textContent = `player : ${player1score}`
       checkScore()
    }
    else if (a ===c){
        computerscore += 10
        comp.textContent = `computer : ${computerscore}`
        checkScore()
    }
    else{
        alert("No Winner")
    }
  };

function checkScore(){
    if(player1score === 50 && computerscore===50){
        alert("No Winner")
        newGame = true
       player1score = 0
       computerscore= 0
       button.textContent = "New Game"
    }
     else if(player1score === 50){
        newGame = true
        player1score = 0
       computerscore= 0
       button.textContent = "New Game"
       alert("Player 1 wins")
       }
       else if(computerscore === 50){
       newGame = true
       player1score = 0
       computerscore= 0
       button.textContent = "New Game"
       alert("Computer wins")
       }
}
let mid = document.querySelector(".mid")
function display(bon){
   if(bon === 'Clouds'){
      mid.src="clouds.png"
   }
   else if(bon === "Fog"){
    mid.src="fog.png"
   }
   else if(bon === "Rain"){
    mid.src="rain.png"
   }
   else if(bon === "Clear"){
    mid.src="full-moon.png"
   }
   else if(bon === "Thunderstorm"){
    mid.src="thunderstorm.png"
   }
   else if(bon === "Snow"){
    mid.src="snow.png"
   }
   else{
    mid.src ="haze.png"
   }
}
  





