const message = document.getElementById('title')
message.style.color = 'red'
message.style.backgroundColor = 'black'

const redDiv = document.getElementById('red')
const greenDiv = document.getElementById('green')
const yellowDiv = document.getElementById('yellow')

// redDiv.onclick = () => console.log("red")
// yellowDiv.onclick = () => console.log("yellow")
// greenDiv.onclick = () => console.log("green")

const squares = document.querySelectorAll('.colorSquare')

let counter = { 'red': 0, 'yellow': 0, 'green': 0 }

squares.forEach(square => {
    square.onclick = () => {
        counter[square.value] += 1
        square.innerText = counter[square.value]
    }
})

function clearScore() {
    counter.red = 0
    counter.yellow = 0
    counter.green = 0
    squares.forEach(square => square.innerText = '')
}
const counterbtn = document.getElementById('counter')

counterbtn.onclick = () => clearScore()


