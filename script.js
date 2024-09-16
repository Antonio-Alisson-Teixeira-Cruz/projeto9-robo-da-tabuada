let result = 0
let number = parseInt(prompt('Qual o número que deseja ter a tabuada (de 1 a 20):'))
if (number >= 1 && number <= 20)
for (let i = 1; i <= 20; i++) {
    alert(`${number} * ${i} = ${number * i}`)
}
