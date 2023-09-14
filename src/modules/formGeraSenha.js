import {geraCaracter, geraSenha} from "./geradores";

const senhaGerada = document.querySelector('.pwd-gerada')
const qtdCaracteres = document.querySelector('.qtd-caractres')
const ckbMinusculas = document.querySelector('.ckb-minusculas')
const ckbMaiusculas = document.querySelector('.ckb-maiusculas')
const ckbNumeros = document.querySelector('.ckb-numeros')
const ckbSimbolos = document.querySelector('.ckb-simbolos')
const botao = document.querySelector('.botao-gerar')

export default () => {
  botao.addEventListener('click', () => {
    senhaGerada.innerHTML = gerar()
  });
}

function gerar() { 

  const senha = geraSenha(qtdCaracteres.value, 
    ckbMaiusculas.checked, 
    ckbMinusculas.checked, 
    ckbNumeros.checked, 
    ckbSimbolos.checked
  );
  if(senha.slice(0, 9) == 'undefined') return 'Nada selecionado'
  if(qtdCaracteres.value < 1) return 'Digite um número válido'
  
  return senha
}


