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
/*function modifyMontadoras(text){
	console.log('modifyMontadoras');
	ga('send','event','analise','ver_mais',text);
	console.log('isso modifyMontadoras. conferir no ga ua ' + text );
}*/

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

function modifyMontadoras(){
	console.log('modifyMontadoras');
	//ga('send','event','analise','ver_mais',text);
	//console.log('isso modifyMontadoras. conferir no ga ua ' + text );
	var nome;
	//let btnGoodsee = document.querySelectorAll('.card-montadoras');
	console.log(this);
	nome = this.getAttribute('data-name');
	console.log(this.getAttribute('data-name');
		console.log(nome);

	console.log('chama ga montadoras');
  ga('send','event','analise','ver_mais',nome);
  console.log('isso ga montadoras. conferir no ga ua');
	//console.log('for');
	/*for (var i = 0; i < btnGoodsee.length; i++) {
		
		if(btnGoodsee[i].getAttribute('data-name') == texto){		
			console.log(btnGoodsee[i].getAttribute('data-name'));

		}

	}*/

	/*for (var i = 0; i < btnGoods.length; i++) {
		btnGoods[i].addEventListener("click", function( event ) {
		// mostra o contador de cliques dentro da div clicada
		var temp;
		console.log(event);
		console.log(event.target);
		console.log(event.target.getAttribute('data-name'));
		temp = event.target.getAttribute('data-name');
		
		//event.target.innerHTML = "Total de cliques: " + event.detail;
		}, false);
	}*/
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
	console.log('loadMontadoras');
/*	console.log('loadMontadoras');
  //var el = document.getElementById("menu-lista-download");
  //var el = document.getElementsByClassName("menu-lista-download");
  var el = document.querySelector(".menu-lista-contato");
  el.addEventListener("click", modifyContato, false);*/

  	let btnGoods = document.querySelectorAll('.card-montadoras');
	//var btnGoods = document.querySelectorAll('.card-montadoras');
	//console.log(btnGoods);

	//var temp;

	for (var i = 0; i < btnGoods.length; i++) {
		btnGoods[i].addEventListener("click", modifyMontadoras, false);
	}

	/*for (var i = 0; i < btnGoods.length; i++) {
		temp = btnGoods[i].getAttribute('data-name');
		btnGoods[i].addEventListener('click', modifyMontadoras(temp), false);
		console.log(btnGoods[i]);
		console.log(temp);

		/*btnGoods[i].addEventListener('click', function() {
		    console.log(this);
		    //console.log(this.parentNode);
		    //console.log(this.parentNode.attributes);

		    //console.log(this.getAttributeNode('data-id'));
		    console.log(this.getAttribute('data-id'));
		    console.log(this.getAttribute('data-name'));
		    //console.log(btnGoods[i]);
		    //console.log(this.parentNode);

		    temp = this.getAttribute('data-name');
		    modifyMontadoras(temp);
		    //ga('send','event','analise','ver_mais',temp);
		}, false);
	}*/
}



//document.addEventListener("DOMContentLoaded", load, false);
document.addEventListener("DOMContentLoaded", loadNew, false);
document.addEventListener("DOMContentLoaded", loadContato, false);
document.addEventListener("DOMContentLoaded", loadMontadoras, false);
