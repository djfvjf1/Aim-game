// VARIABLES
const startBtn = document.querySelector('#start')

const exitBtn = document.querySelector('#exit')

const screens = document.querySelectorAll('.screen')

const timeList = document.querySelector('#time-list')

const timeEl = document.querySelector('#time')

const board = document.querySelector('#board') // Создаем доску



let time = 0
let score = 0


// EVENTS
startBtn.addEventListener('click', (event) => 
{
    event.preventDefault()
    screens[0].classList.add('up')
})

timeList.addEventListener('click', (event) =>
{
    if(event.target.classList.contains('time-btn'))
    {
       time = parseInt(event.target.getAttribute('data-time'))
       screens[1].classList.add('up')

       startGame()
        
    }
})

board.addEventListener('click', (event) => {
    if(event.target.classList.contains('ball')){
        score++
        event.target.remove()
        createBall()
    }
})

exitBtn.addEventListener('click', (event) => {
    event.preventDefault(screen[0])
    
    
})


// FUNCTIONS
function startGame(){
    setInterval(decreaseTime, 1000)
    //screens[1].classList.add('up')
    
    setTime(time)

    createBall()
}

function decreaseTime() {

    if(time === 0) {
        finishGame() // Закончить игру
    } 
    else {
        let current = --time

        if(current < 10){
            current = `0${current}`
        }
    
        setTime(current)
    }

}

function setTime(value) // Установить время
{
    timeEl.innerHTML = `00:${value}`
}

function createBall()
{
    const ball = document.createElement('div') // Создаем новый элемент ball

    const size = getRandomValue(9, 55)

    const {width, height} = board.getBoundingClientRect()

    const x = getRandomValue(0, width - size)
    const y = getRandomValue(0, height - size)


    ball.classList.add('ball') // Добавляем класс к элементу ball
    ball.style.width = `${size}px`
    ball.style.height = `${size}px`
    ball.style.top = `${y}px`
    ball.style.left = `${x}px`

    board.append(ball)
}

function getRandomValue(min, max){
    return Math.round(Math.random() * (max - min) + min)
}

function finishGame(){
    timeEl.parentNode.remove() // Удаляем заголовок h3, содержащий элемент с классом time
    board.innerHTML = `<h1>Score: <span class = "primary">${score}</span></h1>`
}