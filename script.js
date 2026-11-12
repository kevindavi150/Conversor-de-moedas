function converte() {
  const valor = Number(document.getElementById("valor").value);
  const moedaSelecionada = document.querySelector('input[name="moeda"]:checked');
  const resultado = document.getElementById("resultado");

  if (!Number.isFinite(valor) || valor <= 0) {
    resultado.textContent = "Digite um valor positivo.";
    return;
  }

  if (!moedaSelecionada) {
    resultado.textContent = "Escolha uma moeda.";
    return;
  }

  const cotacoes = {
    dolar: 5.25,
    euro: 5.50,
    real: 1,
    libras: 6.20
  };

  const nomes = {
    dolar: "Dólar",
    euro: "Euro",
    real: "Real",
    libras: "Libras"
  };

  const convertido = valor / cotacoes[moedaSelecionada.value];

  resultado.textContent =
    `O valor convertido em ${nomes[moedaSelecionada.value]} é: ${convertido.toFixed(2)}`;
}
document.getElementById("converter").addEventListener("click", converte);