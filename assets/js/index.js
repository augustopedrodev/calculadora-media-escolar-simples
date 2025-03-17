(function () {
    const form = document.getElementById('form'); // seleção do form

    function submitEvent(event) {
        event.preventDefault(); // captura o evento e faz uma prevenção do evento padrão, de carregar ao apertar o botao

        const inputFirstNote = document.getElementById('nota1');
        const inputSecondNote = document.getElementById('nota2');

        const firstNote = parseFloat(inputFirstNote.value.trim()); // primeira nota com valor do input
        const secondNote = parseFloat(inputSecondNote.value.trim()); // segunda nota com o valor do input

        const average = getAverage(firstNote, secondNote);
        const status = getStatus(average);
        const msg = `Sua media é ${average.toFixed(2)}, com o status de ${status}`; // seta a mensagem de resultado

        if (isNaN(firstNote) || isNaN(secondNote) || firstNote > 10 || secondNote > 10 || firstNote < 0 || secondNote < 0) {
            showResult('Atenção: Por favor, digite numeros validos entre 0 a 10', 'error');
            return;
        } // verifica se é um numero, se é maior ou menor que 10 e lança a mensagem de erro

        showResult(msg, status);
    }

    function getAverage(firstNote, secondNote) {
        return (firstNote + secondNote) / 2;
    } // função que calcula a média

    function getStatus(average) {
        return average >= 7 ? 'Aprovado' : 'Reprovado';
    } // função que retorna o status

    function showResult(msg, status) {
        const result = document.querySelector('.resultado');
        result.textContent = '';

        const p = document.createElement('p');
        result.appendChild(p);
        p.textContent = msg;
        if (status === 'Aprovado') {
            p.classList.add('p-result-approved');
        } else if (status === 'Reprovado') {
            p.classList.add('p-result-disapproved');
        } else {
            p.classList.add('p-result-error');
        }

    } // função que recebe o resultado, mostra ele e trata ele com base nos status

    form.addEventListener('submit', submitEvent); // captura o evento de submit e envia a uma função
})();