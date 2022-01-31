//Programa que calcula a soma de receitas e despesas de usuários e no fim retorna o saldo (receitas - despesas).

const usuarios = [
  {
    nome: 'Salvio',
    receitas: [115.3, 48.7, 98.3, 14.5],
    despesas: [85.3, 13.5, 19.9]
  },
  {
    nome: 'Marcio',
    receitas: [24.6, 214.3, 45.3],
    despesas: [185.3, 12.1, 120.0]
  },
  {
    nome: 'Lucia',
    receitas: [9.8, 120.3, 340.2, 45.3],
    despesas: [450.2, 29.9]
  }
]

for (let i = 0; i < usuarios.length; i++) {
  const usuario = usuarios[i]
  let saldo = calculaSaldo(usuario.receitas, usuario.despesas)
  if (saldo > 0) {
    console.log(`${usuario.nome} possui saldo positivo de ${saldo}`)
  } else {
    console.log(`${usuario.nome} possui saldo negativo de ${saldo}`)
  }
}

function calculaSaldo(receitas, despesas) {
  let somaReceitas = somaNumeros(receitas)
  let somaDespesas = somaNumeros(despesas)
  let saldo = somaReceitas - somaDespesas
  return saldo
}

function somaNumeros(numeros) {
  let soma = 0

  for (i = 0; i < numeros.length; i++) {
    soma = soma + numeros[i]
  }

  return soma
}
