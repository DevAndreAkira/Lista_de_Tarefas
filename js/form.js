var botao = document.querySelector('#botao');
botao.addEventListener('click', function (event) {
    // Por causa do comportamento padrão do <form>
    // é necessário usar esse comando para não atualizar a página
    event.preventDefault();

    // Puxa o formulário
    var form = document.querySelector('#formTarefa');

    // Puxa os dados específicos do formulário
    var tarefa = puxaForm(form);

    // Monta a Tr
    var tarefaTr = montarTr(tarefa);

    // Puxa o local aonde vou colocar os novos elementos
    var tabela = document.querySelector('#tabela-tarefas');

    // Coloco as Tr's na tabela
    tabela.appendChild(tarefaTr);

    form.reset();
})

riscaTarefa();

function puxaForm(form) {
    var tarefa = {
        texto: form.tarefa.value
    }
    return tarefa;
}

function montarTr(tarefa) {
    var tarefaTr = document.createElement('tr');
    tarefaTr.classList.add('tarefa');

    var data = new Date();
    var dia = data.getDate();           // 1-31
    var mes = data.getMonth();          // 0-11 (zero=janeiro)
    var ano4 = data.getFullYear();       // 4 dígitos
    var hora = data.getHours();          // 0-23
    var min = data.getMinutes();        // 0-59
    var dataCompleta = dia + '/' + mes + '/' + ano4 + ' - ' + hora + ':' + min;

    // Cria os elementos
    var check = document.createElement('input');
    check.setAttribute('type', 'checkbox');
    check.onchange = riscaTarefa;
    var tdinput = document.createElement('td');
    check.classList.add('checkbox');
    var textoTd = document.createElement('td');
    textoTd.classList.add('descricao');
    var data = document.createElement('td');
    var apagar = document.createElement('button');
    apagar.classList.add('apagar');
    apagar.addEventListener('click', function () { //Evento de clique
        var trTarefa = apagar.closest('.tarefa'); //Percorre os elementos passando pelo pai e pega a classe desejada.
        trTarefa.remove(); //Função de remover
    });

    // Coloca o valor do text para o textoTd
    textoTd.textContent = tarefa.texto;
    data.textContent = dataCompleta;
    apagar.textContent = "X";

    // Insere tdinput no tarefaTr
    tarefaTr.appendChild(tdinput);
    tdinput.appendChild(check);
    tarefaTr.appendChild(textoTd);
    tarefaTr.appendChild(data);
    tarefaTr.appendChild(apagar);

    return tarefaTr;
}


function riscaTarefa() {
    var checkboxes = document.getElementsByClassName("checkbox");
    var descricao = document.getElementsByClassName("descricao");

    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].onchange = function () {
            if (checkboxes[i].checked) {
                descricao[i].classList.add('riscado');
            }
            else {
                descricao[i].classList.remove('riscado');
            }
        }
    }
}
