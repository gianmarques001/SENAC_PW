const qtdPags = document.querySelector("#qtdpags");
const anoLivro = document.querySelector("#anolivro");

const tipoBasico = document.querySelector("#basica");
const tipoMedio = document.querySelector("#media");
const tipoCompleto = document.querySelector("#completa");

const orcamento = document.querySelector("#outTipo");

anoLivro.addEventListener("input", () => {
  const ano = document.querySelector("label[for='anolivro']");
  ano.innerHTML = `Ano do Livro: ${anoLivro.value} `;
  calculo();
});

tipoBasico.addEventListener("change", calculo)
tipoMedio.addEventListener("change", calculo)
tipoCompleto.addEventListener("change", calculo)

qtdPags.addEventListener("change", calculo);

function calculo() {
  let qtd = qtdPags.value;
  let valor = qtd * 0.4;
  let tipo = 0;

if (tipoBasico.checked){
    tipo = 100;
} 
if (tipoMedio.checked){
    tipo = 250;
} 
if (tipoCompleto.checked){
    tipo = 500;
} 


  let taxa = anoLivro.value / 100;
  if (anolivro.value > 1990 && anolivro.value < 2000) {
    taxa = anolivro.value % 12;
  } else if (anolivro.value >= 2000) {
    taxa = anolivro.value % 8;
  }
valor += tipo;
  valor *= taxa;


  orcamento.innerHTML = `Orçamento: R$ ${valor.toFixed(0)},00`;
}