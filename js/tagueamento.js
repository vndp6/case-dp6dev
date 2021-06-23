// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

/*
//load assync ga
window.onload = "https://www.googletagmanager.com/gtag/js?id=G-RFZ5Y45RPJ";

//ga default
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-RFZ5Y45RPJ');

console.log('foi');
*/

//----------------------

function loadNew() {
	console.log('loadNew');

	let el = document.querySelector(".menu-lista-download");
  //el.addEventListener("click", modifyTextNew, false);
  el.addEventListener("click", function(e) {

  	console.log(this);
  	console.log('chama ga download_pdf');
  	ga('send','event','menu','download_pdf','download_pdf');
  	console.log('isso download_pdf. conferir no ga ua');
  }, false);
}

function loadContato() {
	console.log('loadContato');

	let el = document.querySelector(".menu-lista-contato");
  //el.addEventListener("click", modifyContato, false);
  el.addEventListener("click", function(e) {
  	console.log('chama ga contato');
  	ga('send','event','menu','entre_em_contato','link_externo');
  	console.log('isso ga contato. conferir no ga ua');

  }, false);

}

function loadSobre() {
	console.log('loadSobre');

	//essa parte aqui tem que reescrever melhor ... pois só funciona quando esta navegando
	//na pagina sobre.html

	//let el = document.getElementById("nome");
	//let el = document.querySelector('form > ul').querySelector("#nome");
	let el = document.querySelector('form > ul');
	if( el != null){
		el = document.querySelector('form > ul').querySelector("#nome");
	
  //id = el.getAttribute('id');
  //el.addEventListener("change", modifySobreNome, false);

  el.addEventListener("change", function(){
  	let id;
	//console.log(this);

	//id = document.getElementById("nome").getAttribute('id');
	id = document.querySelector('form > ul').querySelector("#nome").getAttribute("id");
	console.log(id);

	console.log('chama ga nome');
	ga('send','event','contato',id,'preencheu');
	console.log('isso ga nome. conferir no ga ua');

  }, false);
	}


  //let ek = document.getElementById("email");
  //let ek = document.querySelector('form > ul').querySelector("#email");
  let ek = document.querySelector('form > ul');

  if(ek != null){
	ek = document.querySelector('form > ul').querySelector("#email");
  //ek.addEventListener("change", modifySobreEmail, false);
  ek.addEventListener("change", function(){
  	  let id;
	//console.log(this);

	//id = document.getElementById("email").getAttribute('id');
	id = document.querySelector('form > ul').querySelector("#email").getAttribute("id");
	console.log(id);

	console.log('chama ga email');
	ga('send','event','contato',id,'preencheu');
	console.log('isso ga email. conferir no ga ua');
  }, false);
}


  //let ej = document.getElementById("telefone");
  //let ej = document.querySelector('form > ul').querySelector("#telefone");
  let ej = document.querySelector('form > ul #email');

  //ej.addEventListener("change", modifySobreTelefone, false);
  //ej.addEventListener("change", function(e){
  	ej.addEventListener("change", function(){

  	let id;
	//console.log(this);

	//id = document.getElementById("telefone").getAttribute('id');
	id = document.querySelector('form > ul').querySelector("#telefone").getAttribute("id");
	console.log(id);

	console.log('chama ga telefone');
	ga('send','event','contato',id,'preencheu');
	console.log('isso ga telefone. conferir no ga ua');
  }, false);

  
  let em = document.getElementById("aceito");
  //em.addEventListener("click", modifySobreAceito, false);
  em.addEventListener("click", function(e){
  	  let id;
	console.log(this);

	id = this.getAttribute('id');
	console.log(id);

	console.log('chama ga aceito');
	ga('send','event','contato',id,'preencheu');
	console.log('isso ga aceito. conferir no ga ua');

  }, false);


}

function loadAceitoSubmit(){
	console.log('loadAceitoSubmit');

	let vg = document.querySelector(".contato");
	//vg.addEventListener("submit", modifySobreSubmit ,false);

	//vg.addEventListener("submit", function(e){
	vg.addEventListener("submit", function(){	

		//console.log(this);
		console.log('chama ga submit');

		ga('send','event','contato','enviado','enviado');

		console.log('isso ga submit. conferir no ga ua');	
	} ,false);

}

function loadMontadoras() {
	console.log('loadMontadoras');

	let data = document.querySelectorAll('.card-montadoras');
	let nome;

	for (let i = 0; i < data.length; i++) {
		//data[i].addEventListener("click", modifyMontadoras, false);
		data[i].addEventListener("click", function(e){

		console.log(this);
		nome = this.getAttribute('data-name');
		console.log(this.getAttribute('data-name'));
		console.log(nome);

		console.log('chama ga montadoras');
		ga('send','event','analise','ver_mais',nome);
		console.log('isso ga montadoras. conferir no ga ua');

		}, false);
	}
}

//document.addEventListener("DOMContentLoaded", load, false);
document.addEventListener("DOMContentLoaded", loadNew, false);
document.addEventListener("DOMContentLoaded", loadContato, false);
document.addEventListener("DOMContentLoaded", loadMontadoras, false);
document.addEventListener("DOMContentLoaded", loadSobre, false);
document.addEventListener("DOMContentLoaded", loadAceitoSubmit, false);