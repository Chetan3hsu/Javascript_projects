document.getElementById('formm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page
    convert();
});

function convert() {
    const input = document.getElementById('textbox').value;
    const toFahrenheit = document.getElementById('toFahrenheit').checked;
    const toCelsius = document.getElementById('toCelsius').checked;
    let result;

    if (toFahrenheit) {
        result = (input * 9/5) + 32;
    } else if (toCelsius) {
        result = (input - 32) * 5/9;
    }

    document.getElementById('result').innerText = result;
}
