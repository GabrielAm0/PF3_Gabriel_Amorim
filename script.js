let calcular = document.getElementById('calcular');


function pace () {
    let nome = document.getElementById('nome').value;
    let ValorAplicado = document.getElementById('ValorAplicado').value;
    let ValorParcelas = document.getElementById('ValorParcelas').value;
    let ValorJuros = document.getElementById('ValorJuros').value;
    let resultadoCalculo = document.getElementById('resultadoCalculo');

    if (nome !== '' && ValorAplicado !== '' && ValorParcelas !== '') {
        var jurosporcem = (ValorJuros / 100);
        let PMT = (ValorAplicado*((((1+ jurosporcem)**ValorParcelas) - 1) / jurosporcem)).toFixed(2);

        resultadoCalculo.style.color = "white";
        resultadoCalculo.textContent = `Olá ${nome}! Poupando R$
         ${ValorAplicado} por ${ValorParcelas} meses, com o juros de ${ValorJuros}%, você irá ter um valor futuro poupado de R$ ${PMT} por mês. `;
    }
    else
    {
        resultadoCalculo.textContent = `Digite corretamente`;
    }

}

calcular.addEventListener('click', pace);
       
        
        

        
        