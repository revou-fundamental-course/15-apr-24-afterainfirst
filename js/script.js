// ini file js
function convertToCelsius() {
    var inputCelsius = document.getElementById("inputCelsius").value;
    var outputFahrenheit = (parseFloat(inputCelsius) * 9/5) + 32;
    if (isNaN(inputCelsius)) {
        alert("Harap Masukkan Angka");
    } 
    document.getElementById("outputFahrenheit").value = outputFahrenheit.toFixed(2);

    document.getElementById("calculation").value = inputCelsius + " \u00B0C * 9/5 + 32 = " + outputFahrenheit.toFixed(2) + " \u00B0F";
}

function reset() {
    document.getElementById("inputCelsius").value = "";
    document.getElementById("outputFahrenheit").value = "";
    document.getElementById("calculation").value = "";
}

function reverseConversion() {
    var inputFahrenheit = document.getElementById("outputFahrenheit").value;
    var outputCelsius = (parseFloat(inputFahrenheit) - 32) * 5/9;
    if (isNaN(inputFahrenheit)) {
        alert("Harap Masukkan Angka");
    } 
    document.getElementById("inputCelsius").value = outputCelsius.toFixed(2);

    document.getElementById("calculation").value = "(" + inputFahrenheit + " \u00B0F - 32) * 5/9 = " + outputCelsius.toFixed(2) + " \u00B0C";
}