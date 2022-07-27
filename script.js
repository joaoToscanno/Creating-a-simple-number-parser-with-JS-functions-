let res = document.querySelector('div#res')
let num = document.querySelector('input#num')
let list = document.querySelector('select#selnum')
let values = []

function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function isInList(n, l) {
    if (l.indexOf(Number(n)) == -1) {
        return true
    } else {
        return false
    }
}

function add() {
    if (isNumber(num.value) && isInList(num.value, values)) {
        values.push(Number(num.value))
        let item = document.createElement(`option`)
        list.appendChild(item)
        item.text = `Value ${num.value} added.`
        res.innerHTML = ``
    } else {
        alert('Invalid value or already added.')
    }
    num.value = ``
    num.focus()
}

function finish() {
    if (values.length == 0) {
        alert('Add values before you finish!')
    } else {
        let total = values.length
        
        let larger = values[0]
        let smaller = values[0]
        let sum = 0
        let average = 0

        for (let pos in values) {
            sum += values[pos]
            if (values[pos] > larger) {
                larger = values[pos]
            }
            if (values[pos] < smaller)
            smaller =values[pos]
        }
        
        average = sum / total
        
        res.innerHTML += `In total we have ${total} registered numbers. <br></br>`
        res.innerHTML += `The greatest added value was ${larger}. <br></br>`
        res.innerHTML += `The lowest added value was ${smaller}. <br></br>`
        res.innerHTML += `The sum of the added values is ${sum}. <br></br>`
        res.innerHTML += `The average of the added values is ${average}. <br></br>`
    }
    num.focus()
}