function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const currency = document.getElementById('currency').value;
    const targetCurrency = document.getElementById('targetCurrency').value;
    const exchangeRates = {
        'BRL': 1,
        'USD': 0.20,
        'EUR': 0.18,
        'GBP': 0.16
    };
    if (isNaN(amount)) {
        document.getElementById('result').innerText = 'Por favor, insira um valor válido.';
        return;
    }
    const amountInBRL = amount / exchangeRates[currency];
    const result = amountInBRL * exchangeRates[targetCurrency];
    document.getElementById('result').innerText = `Resultado: ${result.toFixed(2)} ${targetCurrency}`;
}