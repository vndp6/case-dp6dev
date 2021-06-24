// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

function modifyDownload() {

	console.log('modifyDownload');
	console.log('chama ga download_pdf');
	ga('send','event','menu','download_pdf','download_pdf');
	console.log('isso download_pdf. conferir no ga ua');
}

function modifyContato() {

	console.log('modifyContato');
	console.log('chama ga contato');
	ga('send','event','menu','entre_em_contato','link_externo');
	console.log('isso ga contato. conferir no ga ua');
}

function modifyMontadoras(){

	console.log('modifyMontadoras');
	let nome;

	console.log(this);
	nome = this.getAttribute('data-name');

//console.log(this.getAttribute('data-name'));
//console.log(nome);

console.log('chama ga montadoras');
ga('send','event','analise','ver_mais',nome);
console.log('isso ga montadoras. conferir no ga ua');
}

function modifySobreNome() {
	console.log('modifySobreNome');

	let id;
//console.log(this);

/*id = document.getElementById("nome").getAttribute('id');
console.log(id);

console.log('chama ga nome');
ga('send','event','contato',id,'preencheu');
console.log('isso ga nome. conferir no ga ua');*/

id = document.querySelector('form > ul').querySelector("#nome").getAttribute("id");
console.log(id);

console.log('chama ga nome');
ga('send','event','contato',id,'preencheu');
console.log('isso ga nome. conferir no ga ua');
}		

function modifySobreEmail() {
	console.log('modifySobreEmail');

	let id;
//console.log(this);

id = document.querySelector('form > ul').querySelector("#email").getAttribute("id");

//id = document.getElementById("email").getAttribute('id');
console.log(id);

console.log('chama ga email');
ga('send','event','contato',id,'preencheu');
console.log('isso ga email. conferir no ga ua');

}

function modifySobreTelefone() {

	console.log('modifySobreTelefone');

	let id;
	//console.log(this);

	id = document.querySelector('form > ul #telefone').getAttribute('id');
	console.log(id);

	console.log('chama ga telefone');
	ga('send','event','contato',id,'preencheu');
	console.log('isso ga telefone. conferir no ga ua');
}

function modifySobreAceito() {
	
	console.log('modifySobreAceito');

	let id;
	console.log(this);

	id = this.getAttribute('id');
	console.log(id);

	console.log('chama ga aceito');
	ga('send','event','contato',id,'preencheu');
	console.log('isso ga aceito. conferir no ga ua');
}

function modifySobreSubmit() {
	
	console.log('modifySobreSubmit');
	console.log(this);
	console.log('chama ga submit');

	ga('send','event','contato','enviado','enviado');

	console.log('isso ga submit. conferir no ga ua');
}

function modifySobreEmail() {
	
	console.log('modifySobreEmail');

	let id;
	console.log(this);

	id = document.querySelector('form > ul #email').getAttribute("id");
	console.log(id);

	console.log('chama ga email');
	ga('send','event','contato',id,'preencheu');
	console.log('isso ga email. conferir no ga ua');
}

//----------------------

function loadDownload() {

	console.log('loadNew');

	let el = document.querySelector(".menu-lista-download");
	(el != null) ? el.addEventListener("click", modifyDownload, false) : null;
}

function loadContato() {

	console.log('loadContato');

	let el = document.querySelector(".menu-lista-contato");
	(el != null) ? el.addEventListener("click", modifyContato, false) : null;
}

function loadSobre() {

	console.log('loadSobre');

	let el = document.querySelector('form > ul #nome');
	(el != null) ? el.addEventListener("change", modifySobreNome, false) : null;

	let em = document.querySelector('form > ul #email');
	(em != null) ? em.addEventListener("change", modifySobreEmail, false) : null;

	let en = document.querySelector('form > ul #telefone');
	(en != null) ? en.addEventListener("change", modifySobreTelefone, false) : null;

	let eo = document.querySelector('form > ul #aceito');
	(eo != null) ? eo.addEventListener("click", modifySobreAceito, false) : null;
}

function loadAceitoSubmit(){

	console.log('loadAceitoSubmit');

	let ep = document.querySelector("form.contato");
	(ep != null) ? ep.addEventListener("submit", modifySobreSubmit ,false) : null;
}

function loadMontadoras() {

	console.log('loadMontadoras');

	let data = document.querySelectorAll('.card-montadoras');
	let nome;

	for (let i = 0; i < data.length; i++) {
		data[i].addEventListener("click", modifyMontadoras, false);
	}
}

document.addEventListener("DOMContentLoaded", loadDownload, false);
document.addEventListener("DOMContentLoaded", loadContato, false);
document.addEventListener("DOMContentLoaded", loadMontadoras, false);
document.addEventListener("DOMContentLoaded", loadSobre, false);
document.addEventListener("DOMContentLoaded", loadAceitoSubmit, false);