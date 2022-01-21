const nome = 'Murilo'
const peso = 74
const altura = 1.85

const imc = peso / (altura * altura)

if (imc >= 30) {
  console.log(`${nome} você está acima do peso`)
} else if (imc < 30) {
  console.log(`${nome} você não está acima do peso`)
}
