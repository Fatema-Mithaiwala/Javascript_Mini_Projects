const billTotalInputDiv = document.getElementById('billTotalInput')
const tipInputDiv = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')

let numberOfPeople = Number(numberOfPeopleDiv.innerText)

const calculateBill = () => {
    let percentage = Number(billTotalInputDiv.value) * Number(tipInputDiv.value) / 100
    // console.log(percentage)
    let total = percentage + Number(billTotalInputDiv.value) / numberOfPeople

    perPersonTotalDiv.innerText = total
    perPersonTotalDiv.innerHTML = total
    // console.log(total)
}

const increasePeople = () => {
    numberOfPeople += 1
    numberOfPeopleDiv.innerText = numberOfPeople

    calculateBill()
}

const decreasePeople = () => {
    if (numberOfPeople == 1) {
        numberOfPeople = 1
    }
    else {
        numberOfPeople -= 1
    }

    numberOfPeopleDiv.innerText = numberOfPeople

    calculateBill()
}

