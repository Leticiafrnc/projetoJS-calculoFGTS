// pega o botão calcular
const calcular = document.getElementById('calcular');
// função com os eventos
function calculaFGTS() {
    const nome = document.getElementById('nome').value;
    const salarioBase = +document.getElementById('salario').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && salarioBase !== '') {

        const valorFGTS = (salarioBase * 0.08).toFixed(2); // deixar os valor sem vircula

        //mostra no campo os valores 
        resultado.textContent = `${nome} O FGTS que deve ser pago é $: ${valorFGTS} `
    } else {
        //trata os campos vazios 
        resultado.textContent = 'Preencha todos os campos!!!';
    }
}
// espera ser clicado np botão calcular 
calcular.addEventListener('click', calculaFGTS);
