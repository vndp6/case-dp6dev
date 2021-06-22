// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.
console.log('abc de');

/*
//load assync ga
window.onload = "https://www.googletagmanager.com/gtag/js?id=G-RFZ5Y45RPJ";

//ga default
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-RFZ5Y45RPJ');

console.log('foi');
/*

/*function mostra(){
	alert('chamou função mostra');
}

//console.log(document.getElementsByClassName("menu-lista-download"));
var teste = document.getElementsByClassName("menu-lista-download");

console.log(teste);
teste.addEventListener("click", mostra, false);
*/

var ee = document.querySelector(".card-montadoras");
var ev = ee.getAttribute("data-id");

//console.log(document.querySelector("ev"));


/*function modifyMontadoras(){
	let btnGoods = document.querySelectorAll('.card-montadoras');
	//var btnGoods = document.querySelectorAll('.card-montadoras');
	//console.log(btnGoods);

var temp;

	for (var i = 0; i < btnGoods.length; i++) {
		btnGoods[i].addEventListener('click', function() {
		    console.log(this);
		    //console.log(this.parentNode);
		    //console.log(this.parentNode.attributes);

		    //console.log(this.getAttributeNode('data-id'));
		    console.log(this.getAttribute('data-id'));
		    console.log(this.getAttribute('data-name'));
		    //console.log(btnGoods[i]);
		    //console.log(this.parentNode);

		    temp = this.getAttribute('data-name');
		    ga('send','event','analise','ver_mais',temp);
		});
	}
}*/
function modifyMontadoras(id,text){
	console.log('modifyMontadoras');
	ga('send','event','analise','ver_mais',text);
	console.log('isso modifyMontadoras. conferir no ga ua ' + text );
}

//console.log(document.querySelector(".card-montadoras ipsum"));
//console.log(document.querySelector(".card-montadoras dolor"));


function modifyTextNew() {
	console.log('modifyTextNew');
  //var vn = document.getElementById("menu-lista-download"); 
  //var vn = document.getElementsByClassName("menu-lista-download");
  var vn = document.querySelector(".menu-lista-download");

  alert(vn.firstChild.nodeValue);
  console.log('chama ga download_pdf');
  ga('send','event','menu','download_pdf','download_pdf');
  console.log('isso download_pdf. conferir no ga ua');
  //t2.firstChild.nodeValue = "three";
}

function modifyContato() {
	console.log('modifyContato');
  var vn = document.querySelector(".menu-lista-contato");

  alert(vn.firstChild.nodeValue);
  console.log('chama ga contato');
  ga('send','event','menu','entre_em_contato','link_externo');
  console.log('isso ga contato. conferir no ga ua');
}

//----------------------

function loadNew() {
	console.log('loadNew');
  //var el = document.getElementById("menu-lista-download");
  //var el = document.getElementsByClassName("menu-lista-download");
  var el = document.querySelector(".menu-lista-download");
  el.addEventListener("click", modifyTextNew, false);
}

function loadContato() {
	console.log('loadContato');
  //var el = document.getElementById("menu-lista-download");
  //var el = document.getElementsByClassName("menu-lista-download");
  var el = document.querySelector(".menu-lista-contato");
  el.addEventListener("click", modifyContato, false);
}

function loadMontadoras() {

  	let btnGoods = document.querySelectorAll('.card-montadoras');

	for (var i = 0; i < btnGoods.length; i++) {
		btnGoods[i].addEventListener('click', modifyMontadoras(this.getAttribute('data-id'),this.getAttribute('data-name')), false);
	}
}

/*function loadMontadoras() {
/*	console.log('loadMontadoras');
  //var el = document.getElementById("menu-lista-download");
  //var el = document.getElementsByClassName("menu-lista-download");
  var el = document.querySelector(".menu-lista-contato");
  el.addEventListener("click", modifyContato, false);

  	let btnGoods = document.querySelectorAll('.card-montadoras');
	//var btnGoods = document.querySelectorAll('.card-montadoras');
	//console.log(btnGoods);

	var temp;

	for (var i = 0; i < btnGoods.length; i++) {
		btnGoods[i].addEventListener('click', function() {
		    console.log(this);
		    //console.log(this.parentNode);
		    //console.log(this.parentNode.attributes);

		    //console.log(this.getAttributeNode('data-id'));
		    console.log(this.getAttribute('data-id'));
		    console.log(this.getAttribute('data-name'));
		    //console.log(btnGoods[i]);
		    //console.log(this.parentNode);

		    temp = this.getAttribute('data-name');
		    ga('send','event','analise','ver_mais',temp);
		});
	}
}*/



//document.addEventListener("DOMContentLoaded", load, false);
document.addEventListener("DOMContentLoaded", loadNew, false);
document.addEventListener("DOMContentLoaded", loadContato, false);
document.addEventListener("DOMContentLoaded", loadMontadoras, false);
