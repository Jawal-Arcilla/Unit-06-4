let answer = 0
let baseA = 0
let baseB = 0
let height = 0

document.getElementById('button').addEventListener('click', calculate)

function calculate () { baseA = document.getElementById('base-a').value

  baseB = document.getElementById('base-b').value

  height = document.getElementById('height').value

  answer = ((baseA + baseB) / 2) * height

  document.getElementById('answer-id').innerHTML = answer
}
