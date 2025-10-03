const default_sum = create_default();

// Soma uma lista de numeros
function sum(s){
    r = 0;
    s.forEach(element => {
        r+=element;
    });
    return r;
}

// Usada no desenvolvimento para validar o gabarito
function verifi(){
    s = create_default()
    for(i=0; i<=31; i++){
        // console.log(`${i} - ${sum(s[i])}`);
        if(i != sum(s[i])){
            console.log("ih");
        }else{
            console.log("certo");
        }
    }
}

// Retorna os itens de uma somatória
function alternativas(soma){
    // console.log(default_sum[soma]);
    return default_sum[soma];
}

// Cria o gabarito padrão
function create_default(){
    d = {0:[0]}
    alt = [1,2,4,8,16]
    for(i=1; i<=31; i++){
        t_alt = []
        for (j=4; j>=0; j--){
            if (i>sum(t_alt)){
                if(i>= sum(t_alt) + alt[j]){
                    t_alt.push(alt[j])
                }
            }else{
                break;
            }
        }
        d[i] = t_alt;
    }
    return d;
}

// Carrega as questões no main
function load(){
    let t = document.getElementById("question_table");
    b = t.getElementsByTagName("tbody");
    l = q_get()

    b[0].innerHTML = '';
    l.forEach(e => {
        row = document.createElement("tr");
        row.innerHTML = `<td>${e['num']}</td>
                        <td><input type="number" id="resp_${e['id']}"></td>
                        <td>${e['result']}</td>
                        <td>${alternativas(e['result'])}</td>
                        <td style="cursor: pointer;"><p onclick="update(${e['id']})">✏️</p></td>
                        <td style="cursor: pointer;"><p onclick="delete_question(${e['id']})">❌</p></td>`;
        b[0].appendChild(row);
    });
}

// Inicia o main
document.addEventListener("DOMContentLoaded", load);

// Criar atalhos de teclado
document.addEventListener("keydown", (k)=>{
    if(k.altKey && k.key=='n'){
        create_question();
    }
    if(k.altKey && k.key=='c'){
        corrige()
    }
})