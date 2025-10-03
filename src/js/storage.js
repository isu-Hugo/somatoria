const storage_path = "qst_list";

let exemplo_questao_json = {
    id: 0,
    num: 1,
    result: 19
}

//Operações de repositorio
function q_get(){
    return JSON.parse(localStorage.getItem(storage_path)) || [];
}

function q_save(q){
    l = q_get();
    l.push(q);
    localStorage.setItem(storage_path, JSON.stringify(l));
}

function q_update(id, q){
    l = q_get()
    l.forEach((item, i) => {
        if(item['id'] == id){
            l[i]['num'] = q['num'];
            l[i]['result'] = q['result'];
            localStorage.setItem(storage_path, JSON.stringify(l));
            return
        }
    });
}

function q_delete(id){
    l = q_get()
    l.forEach((item, i) => {
        
        if(item['id'] == id){
            l.splice(i,1);
            localStorage.setItem(storage_path, JSON.stringify(l));
            load()
            // return 
        }
    });
}

function q_getNewId(){
    l = q_get()
    if (l.length == 0){
        return 1;
    }
    t = l.pop()
    return t['id']+1
}

function q_getNewQuestionNumber(){
    l = q_get()
    if (l.length == 0){
        return 1;
    }
    t = l.pop()
    return parseInt(t['num'])+1;
}