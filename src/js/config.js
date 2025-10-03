const default_sum = create_default();


function sum(s){
    r = 0;
    s.forEach(element => {
        r+=element;
    });
    return r;
}

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

function alternativas(soma){
    // console.log(default_sum[soma]);
    return default_sum[soma];
}

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