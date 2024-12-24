import Letterize from "https://cdn.skypack.dev/letterizejs@2.0.0";

let themeToggle = document.getElementById('themeToggle')
let body = document.body
let mainHeaderImg = document.getElementById('topImg')
let chihiro = document.querySelector('.textChange')
let chihiroZero = document.querySelector('.damoText')
let chihiroOne = document.querySelector('.undLabel')
let chihiroTwo = document.querySelector('.undLabel1')
let chihiroThree = document.querySelector('.undLabel2')
let loudVol = document.querySelector('.volumeText')
let listenBtn = document.querySelector('.listenBtn')
let iconBtn = document.querySelector('.myBtn')
let dIcons = document.querySelector('.sideIcons')
let wordAround = document.querySelector(".animate-me")
let allSideBtn = document.querySelectorAll('.acod')

console.log(allSideBtn);

iconBtn.addEventListener('click', () => {
 dIcons.classList.toggle('view')
})

themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        loudVol.style.color = `rgb(255, 255, 255)`
        allSideBtn.forEach(btn => {
            btn.style.color = `rgb(255, 255, 255)`
        })
        wordAround.style.color = `rgb(255, 255, 255)`
        body.style.backgroundColor = `rgb(0, 0, 0)`
        chihiro.style.color = `rgb(255, 255, 255)`
        chihiroZero.style.color = `rgb(255, 255, 255)`
        chihiroOne.style.color = `rgb(255, 255, 255)`
        chihiroTwo.style.color = `rgb(255, 255, 255)`
        chihiroThree.style.color = `rgb(255, 255, 255)`        
        listenBtn.style.color = `rgb(255, 255, 255)`
        listenBtn.style.borderColor = `rgb(255, 255, 255)`
        mainHeaderImg.src = "./Purple Smoke Wallpaper.jpeg"
    } else { 
        loudVol.style.color = `rgb(0, 0, 0)`
        allSideBtn.forEach(btn => {
            btn.style.color = `rgb(0, 0, 0)`
        })
        wordAround.style.color = `rgb(0, 0, 0)`
        body.style.backgroundColor = `rgb(255, 255, 255)`
        chihiro.style.color = `rgb(0, 0, 0)`
        chihiroZero.style.color = `rgb(0, 0, 0)`
        chihiroOne.style.color = `rgb(0, 0, 0)`
        chihiroTwo.style.color = `rgb(0, 0, 0)`
        chihiroThree.style.color = `rgb(0, 0, 0)`
        listenBtn.style.color = `rgb(0, 0, 0)`
        listenBtn.style.borderColor = `rgb(0, 0, 0)`
        mainHeaderImg.src = "./Abstract Smoke  _ Wallpaper for iPhone and Android 🎨.jpeg"
    }
    console.log("Hello");

})

let test = new Letterize({
    targets: ".animate-me"
});

let animation = anime.timeline({
    targets: test.listAll,
    delay: anime.stagger(100, {
        grid: [test.list[0].length, test.list.length],
        from: "center"
    }),
    loop: true
});         

animation
.add({scale: 0.5})
.add({letterSpacing: "10px"})
.add({scale: 1})
.add({letterSpacing: "6px"});

