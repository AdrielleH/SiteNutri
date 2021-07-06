var paciente = document.querySelectorAll (".paciente");

for (var i = 0; i < paciente.length; i++) {
	

	var tdPeso = paciente[i].querySelector(".info-peso");
	var peso = tdPeso.textContent;

	var tdAltura = paciente[i].querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var tdImc = paciente[i].querySelector(".info-imc");

	var pesoEhValido = validaPeso(peso);
	var alturaEhValida = validaAltura(altura);

	if (!pesoEhValido) {

		console.log ("Peso inválido!");
		pesoEhValido = false;
		tdImc.textContent = "Peso inválido";
		
	}

	if (!alturaEhValida) {

		console.log ("Altura inválida!");
		alturaEhValida = false;
		tdImc.textContent = "Altura inválida!";

	}

	if (alturaEhValida && pesoEhValido) {

		var imc = calculaImc(peso,altura);
		tdImc.textContent = imc;
	}
}

function calculaImc(peso,altura) {
   
   var imc = 0;

   imc = peso / (altura*altura);
   
   return imc.toFixed(2);
}

function validaPeso(peso) {

	if (peso <= 0 || peso >= 1000) {

		return false;
    } 

	else {

		return true;
    }
}

function validaAltura(altura) {
	
	if (altura <= 0 || altura >= 1000){
		 return false;
	}

	else {
		return true;
	}
}
