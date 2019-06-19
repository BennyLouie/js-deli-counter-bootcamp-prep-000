let peopleServedForTheDay = []
let count = 0

function takeANumber(line) {
  for (let i = 0; i < line.length; i+=1){
    peopleServedForTheDay.push(line[i])
    count+=1
  }
  return `Welcome, you are ticket number ${count}.`
}

let line = ['Trevor', 'Benny']
console.log(takeANumber(line))
line = ['Benny', 'Trevor']
console.log(takeANumber(line))
line= ['Trevor', 'Benny']
console.log(takeANumber(line))
console.log(takeANumber(line))









function nowServing(line) {
  if (line.length === 0){
    return `There is nobody waiting to be served!`
  } else {
    return `Currently serving ${line.shift()}.`
    
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return `The line is currently empty.`
  } else{
    let numbers = []
    for (let i = 0; i < line.length; i +=1 ) {
    numbers.push(` ${i + 1}. ${line[i]}`)
    }
    return `The line is currently:${numbers}`
  }
}