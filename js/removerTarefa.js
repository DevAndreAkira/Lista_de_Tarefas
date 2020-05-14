function apagarOsNegocios() {
    var botoesApaga = document.querySelectorAll('.apagar');

    botoesApaga.forEach(function (botaoApaga) { //Percorre o vetor
        botaoApaga.addEventListener('click', function () { //Evento de clique
            var trTarefa = botaoApaga.closest('.tarefa'); //Percorre os elementos passando pelo pai e pega a classe desejada.
            trTarefa.remove(); //Função de remover
        });
    });
};

apagarOsNegocios();


//APAGA TODAS AS TAREFAS, MAS A INTERAÇÃO ESTÁ NO BOTÃO 

// var botaoApaga = document.querySelectorAll('.apagar');
// var tarefas = document.querySelectorAll('.tarefa');

// botaoApaga.forEach(function (botaoApaga) {
//     botaoApaga.addEventListener('click', function () {
//         for (var i = 0; i < tarefas.length; i++) {
//             tarefas[i].remove();
//         }
//     });
// });


    // APAGA INDIVIDUALMENTE CERTINHO, MAS A INTERAÇÃO NÃO ESTÁ NO BOTÃO

    // tarefas.forEach(function (botaoApaga) {
    //     botaoApaga.addEventListener('click', function () {
    //         this.remove();

    //     })
    // })

    // JUNTEI OS DOIS CÓDIGOS E DEU CERTO, MAS AO APAGAR UMA DAS TAREFAS JÁ EXISTENTES ELE APAGAR
    // AO CLICKAR NA TAREFA AO INVÉS DO BOTÃO

    // botaoApaga.forEach(function (botaoApaga) {
    //     botaoApaga.addEventListener('click', function () {
    //         tarefas.forEach(function (botaoApaga2) {
    //             botaoApaga2.addEventListener('click', function () {
    //                 this.remove();
    //             });
    //         });
    //     });
    // });
