function create_question(){
    q_num = q_getNewQuestionNumber();
    q_id = q_getNewId();
    res = prompt("Qual o valor da somatória");
    if(res == null){
        return;
    }
    res = parseInt(res);
    q_save({id:q_id, num:q_num, result:res});
    load();
}

function update(id){
    nNum = prompt("Numero da questão");
    nRes = prompt("Qual o valor da somatória");
    
    if (nNum == null || nRes == null){
        return;
    }
    nNum = parseInt(nNum);
    nRes = parseInt(nRes);
    q_update(id, {num:nNum, result:nRes});
    load();
}

function delete_question(id){
    q_delete(id);
}

function aux_validar_campos(){
    // Validar peso da questão
    valor_questao = document.getElementById("valor_questao").value;
    if (valor_questao == '' || valor_questao == '0'){
        alert("O valor da questão não pode ser 0");
        return false;
    }
    
    // Validar se todos as questões estão preenchidas
    valido = true;
    l = q_get();
    l.forEach(e =>{
        id = `resp_${e['id']}`
        valor_somatoria = document.getElementById(id).value;
        if(valor_somatoria == '' || valor_somatoria == '0'){
            alert(`Questão ${e['num']} esta com valor 0`);
            valido = false;
        }
    })
    return valido;
}

function aux_nota_questão(gabarito, resposta, peso){
    if (resposta>gabarito){
        return 0;
    }
    if (resposta==gabarito){
        return peso;
    }
    gaba = alternativas(gabarito);
    resp = alternativas(resposta);

    valido = true
    resp.forEach(e => {
        if (!gaba.includes(e)){
            valido = false
        }
    });
    if (!valido) return 0;

    total_respostas = gaba.length;
    total_respondidas = resp.length;

    nota = (peso/total_respostas) * total_respondidas;
    return nota;


}

function corrige(){
    if (!aux_validar_campos())return;

    let nota = parseFloat(0);
    valor_questao = document.getElementById("valor_questao").value;
    l = q_get();
    calc = true;

    l.forEach(e => {
        id = `resp_${e['id']}`
        resposta_aluno = parseInt(document.getElementById(id).value);
        nota += aux_nota_questão(e['result'], resposta_aluno, valor_questao);
    });
    alert(`Nota: ${nota}`);
    return nota;
}

function limpar(){
    load();
}