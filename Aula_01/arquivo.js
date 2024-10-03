function impressao(){
    const input = document.getElementById('inputImpressao');

    const texto = input.value;

    const resultado = document.getElementById('resultado');

    resultado.textContent = texto;
}