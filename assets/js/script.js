//Ejercicio 2
document.getElementById("inputSuma").addEventListener("click", function () {
  let numSuma1 = document.getElementById("sumaUno").value;
  let numSuma2 = document.getElementById("sumaDos").value;

  let resultado = parseInt(numSuma1) + parseInt(numSuma2);

  document.getElementById("resultadoSuma").value = resultado;
});

document.getElementById("inputResta").addEventListener("click", function () {
  let numResta1 = document.getElementById("restaUno").value;
  let numResta2 = document.getElementById("restaDos").value;

  let resultado = parseInt(numResta1) - parseInt(numResta2);
  document.getElementById("resultadoResta").value = resultado;
});

document.getElementById("inputDivision").addEventListener("click", function () {
  let numDivision1 = document.getElementById("divisionUno").value;
  let numDivision2 = document.getElementById("divisionDos").value;

  let resultado = parseInt(numDivision1) / parseInt(numDivision2);
  document.getElementById("resultadoDivision").value = resultado;
});

document.getElementById("inputMulti").addEventListener("click", function () {
  let numMulti1 = document.getElementById("multiUno").value;
  let numMulti2 = document.getElementById("multiDos").value;

  let resultado = parseInt(numMulti1) * parseInt(numMulti2);
  document.getElementById("resultadoMulti").value = resultado;
});

document.getElementById("inputModulo").addEventListener("click", function () {
  let numModulo1 = document.getElementById("moduloUno").value;
  let numModulo2 = document.getElementById("moduloDos").value;

  let resultado = parseInt(numModulo1) % parseInt(numModulo2);

  document.getElementById("resultadoModulo").value = resultado;
});

//Ejercicio 3
document
  .getElementById("inputConvertir")
  .addEventListener("click", function () {
    let valCelsius = document.getElementById("celsius").value;

    let kelvin = valCelsius + 273.15;
    let fahrenheit = valCelsius * (9 / 5) + 32;

    document.getElementById("kelvin").value = kelvin;
    document.getElementById("fahrenheit").value = fahrenheit;
  });

//Ejercicio 4
document.getElementById("inputDias").addEventListener("click", function () {
  let dias = document.getElementById("numDias").value;

  const diasEnAnio = 365;
  const diasEnSemana = 7;

  const anios = Math.floor(dias / diasEnAnio);
  const diasRestantes = dias % diasEnAnio;
  const semanas = Math.floor(diasRestantes / diasEnSemana);
  const diasFinales = diasRestantes % diasEnSemana;

  document.getElementById("anos").innerText = anios;
  document.getElementById("semanas").innerText = semanas;
  document.getElementById("dias").innerText = diasRestantes;
});

document
  .getElementById("inputOperacion")
  .addEventListener("click", function () {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let num3 = parseInt(document.getElementById("num3").value);
    let num4 = parseInt(document.getElementById("num4").value);
    let num5 = parseInt(document.getElementById("num5").value);

    document.getElementById("suma").value = num1 + num2 + num3 + num4 + num5;
    document.getElementById("promedio").value =
      (num1 + num2 + num3 + num4 + num5) / 5;
  });
