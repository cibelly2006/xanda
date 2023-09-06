let titulo = document.querySelector(".titulo");
console.log(titulo.textContent);
titulo.textContent = "Grande Xandão Nutrição";

// mudanças na tabela 
// armazena na varievel paciente os dados do primeiro paciente s
let paciente = document.querySelector("#primeiro-paciente");
console.log(paciente);

let tdPeso = paciente.querySelector(".info-peso");
let tdAltura = paciente.querySelector(".info-altura");

let peso = tdPeso.textContent;
let altura = tdAltura.textContent;

let imc = peso / (altura*altura);

console.log(imc);

let tdImc = paciente.querySelector(".info-imc");
tdImc.textContent = imc;