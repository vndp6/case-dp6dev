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
	console.log(this.getAttribute('data-name'));
		console.log(nome);

	console.log('chama ga montadoras');
  ga('send','event','analise','ver_mais',nome);
  console.log('isso ga montadoras. conferir no ga ua');
	
}

function modifySobreNome() {
	console.log('modifySobreNome');
	//alert('onchange');
	var id;
	console.log(this);

	id = document.getElementById("nome").getAttribute('id');
	console.log(id);
  
  console.log('chama ga nome');
  ga('send','event','contato',id,'preencheu');
  console.log('isso ga nome. conferir no ga ua');
}

function modifySobreEmail() {
	console.log('modifySobreEmail');
	//alert('onchange');
	var id;
	console.log(this);

	id = document.getElementById("email").getAttribute('id');
	console.log(id);
  
  console.log('chama ga email');
  ga('send','event','contato',id,'preencheu');
  console.log('isso ga email. conferir no ga ua');
}

function modifySobreTelefone() {
	console.log('modifySobreTelefone');
	//alert('onchange');
	var id;
	console.log(this);

	id = document.getElementById("telefone").getAttribute('id');
	console.log(id);
  
  console.log('chama ga telefone');
  ga('send','event','contato',id,'preencheu');
  console.log('isso ga telefone. conferir no ga ua');
}

function modifySobreAceito() {
	console.log('modifySobreAceito');
	//alert('onclick');
	var id;
	console.log(this);

	id = this.getAttribute('id');
	console.log(id);

  console.log('chama ga aceito');
  ga('send','event','contato',id,'preencheu');
  console.log('isso ga aceito. conferir no ga ua');
}

function modifySobreSubmit() {
	console.log('modifySobreSubmit');
	
	//var id;
	console.log(this); 
	//id = this.getAttribute('id');
	//console.log(id);

  console.log('chama ga submit');
  ga('send','event','contato','enviado','enviado');
  console.log('isso ga submit. conferir no ga ua');
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

function loadSobre() {
	console.log('loadSobre');
  //var el = document.getElementById("menu-lista-download");
  //var el = document.getElementsByClassName("menu-lista-download");
  //var id;

  var el = document.getElementById("nome");
  //id = el.getAttribute('id');
  el.addEventListener("change", modifySobreNome, false);

  var ek = document.getElementById("email");
  ek.addEventListener("change", modifySobreEmail, false);

  var ej = document.getElementById("telefone");
  ej.addEventListener("change", modifySobreTelefone, false);

  var em = document.getElementById("aceito");
  em.addEventListener("click", modifySobreAceito, false);

  //let sobreData = document.querySelectorAll('.card-montadoras');
}

function loadAceitoSubmit(){
	console.log('loadAceitoSubmit');

	var vg = document.querySelector(".contato");
	/*vg.addEventListener("onsubmit", function(){
		alert('foi submit');
	},false);*/
	vg.addEventListener("submit", modifySobreSubmit ,false);

	/*if(ele.addEventListener){
    ele.addEventListener("submit", callback, false);  //Modern browsers
}else if(ele.attachEvent){
    ele.attachEvent('onsubmit', callback);            //Old IE
}*/
}

/*function loadSobre() {
	console.log('loadSobre');
  //var el = document.getElementById("menu-lista-download");
  //var el = document.getElementsByClassName("menu-lista-download");
  var el = document.getElementById("nome");
  el.addEventListener("onchange", modifySobre, false);

  var ek = document.getElementById("email");
  ek.addEventListener("onchange", modifySobre, false);

  var ej = document.getElementById("telefone");
  ej.addEventListener("onchange", modifySobre, false);

  var em = document.getElementById("aceito");
  em.addEventListener("click", modifySobre, false);

  //let sobreData = document.querySelectorAll('.card-montadoras');
}*/


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
document.addEventListener("DOMContentLoaded", loadSobre, false);
document.addEventListener("DOMContentLoaded", loadAceitoSubmit, false);
