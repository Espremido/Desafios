//Uma função que recebe os dados de um objeto de usuário e retorna SE o usuário trabalha com CSS ou não. Essa função deve retornar um boolean true/false

const usuarios = [
  { nome: 'Carlos', tecnologias: ['HTML', 'CSS'] },

  { nome: 'Jasmine', tecnologias: ['JavaScript', 'CSS'] },

  { nome: 'Tuane', tecnologias: ['HTML', 'Node.js'] }
]

function checaSeUsuarioUsaCSS(usuarios) {
  // Percorra o array de tecnologias do usuário até encontrar se ele trabalha com CSS

  const filtered = usuarios.tecnologias
  for (let i = 0; i < filtered.length; i++) {
    if (filtered[i] == 'CSS') {
      return true
    }
  }
  return false
}

for (let i = 0; i < usuarios.length; i++) {
  const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i])

  if (usuarioTrabalhaComCSS) {
    console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
  }
}
