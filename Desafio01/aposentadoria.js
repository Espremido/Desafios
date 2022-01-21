const nome = 'Murilo'
const sexo = 'F'
const idade = 100
const contribuição = 35

switch (sexo) {
  case 'M':
    if (contribuição >= 35 && idade + contribuição >= 95) {
      console.log(`${nome}, você pode se aposentar`)
    } else {
      console.log(`${nome}, você ainda não pode se aposentar`)
    }
    break
  case 'F':
    if (contribuição >= 30 && idade + contribuição >= 85) {
      console.log(`${nome}, você pode se aposentar`)
    } else {
      console.log(`${nome}, você ainda não pode se aposentar`)
    }
    break
}
