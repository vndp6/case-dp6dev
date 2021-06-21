// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.
console.log('abc d');

//load assync ga
window.onload = "https://www.googletagmanager.com/gtag/js?id=G-RFZ5Y45RPJ";

//ga default
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-RFZ5Y45RPJ');

console.log('foi');



// Função para mudar o conteúdo de t2
function modifyText() {
  var t2 = document.getElementById("t2");
  t2.firstChild.nodeValue = "three";
}

function modifyTextNew() {
	console.log('modifyTextNew');
  var vn = document.getElementById("menu-lista-download");
  alert(vn.firstChild.nodeValue);
  //t2.firstChild.nodeValue = "three";
}

// Função para adicionar uma espera de evento em t
function load() {
  var el = document.getElementById("t");
  el.addEventListener("click", modifyText, false);
}

function loadNew() {
	console.log('loadNew');
  var el = document.getElementById("menu-lista-download");
  el.addEventListener("click", modifyTextNew, false);
}

//document.addEventListener("DOMContentLoaded", load, false);
//document.addEventListener("DOMContentLoaded", loadNew, false);
