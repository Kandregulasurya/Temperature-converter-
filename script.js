function convertTemperature() {
    const inputValue = document.getElementById('inputValue').value;
    const inputUnit = document.getElementById('inputUnit').value;
    const resultElement = document.getElementById('result');

    if (inputValue === '') {
        resultElement.textContent = 'Please enter a value.';
        return;
    }

    const temperature = parseFloat(inputValue);
    let result;

    if (inputUnit === 'Celsius') {
        result = (temperature * 9/5) + 32;
        resultElement.textContent = `${temperature} °C = ${result.toFixed(2)} °F`;
    } else {
        result = (temperature - 32) * 5/9;
        resultElement.textContent = `${temperature} °F = ${result.toFixed(2)} °C`;
    }
}