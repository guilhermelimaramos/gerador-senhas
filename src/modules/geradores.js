const rand = (min, max) => Math.floor(Math.random() * (max - min) + (min));

const geraMaiusc = () => String.fromCharCode(rand(65, 91));
const geraManusc = () => String.fromCharCode(rand(97, 123));
const geraNum = () => String.fromCharCode(rand(48, 58))
const simbolos = '!@#$%&*(){}[]^~/+=-:;|/°'
const geraSimbolo = () => simbolos[rand(0, simbolos.length)]

export function geraCaracter (maiusc, minusc, num, simb ) {
  const geradores = []
  maiusc && geradores.push(geraMaiusc())
  minusc && geradores.push(geraManusc())
  num && geradores.push(geraNum())
  simb && geradores.push(geraSimbolo())
  const newCaracter = geradores[rand(0, geradores.length)]
  return newCaracter
}


export function geraSenha(numCarac, maiusc, minusc, num, simb) {
  let senha = ''
  for (let i = 0; i < numCarac; i++) {
    senha += geraCaracter(maiusc, minusc, num, simb)
  }
  return senha;
}



