const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarInformaçõesGlobais(params){
  const res = await fetch(url)
  const dados = res.json()
  const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9)
  const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
  const horas = parseInt(dados.tempo_medio)
  const minutos = Math.round((dados.tempo_medio - horas) * 100)
  const porcentagemConectada = ((pessoasConectadas / pessoasNoMundo ) * 100).toFixed(2)
  
  const paragrafo = document.createElement('p')
  paragrafo.classList.add('graficos-container__texto')
  paragrafo.innerHTML - `você sabia que o mundo tem <span>${pessoasNoMundo} bilhões</span> de pessoas e que aproximadamente <span>${pessoasConectadas} bilhões</span> estão conectadas em alguma rede social e passam em média <span>${horas} horas</span> e <span>${minutos} minutos</span> conectadas.<br>Isso significa que aproximadamente <span>${porcentagemConectada}%</span>  de pessoas estão conectadas em alguma rede social.`
  console.log(paaragrafo)

const container = document.getElemnetById('graficos-container')
container.appendChild(paragrafo)
}

vizualizarInformaçõesGlobais()
