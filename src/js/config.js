const default_sum = create_default();
// {
//     0:[0],
//     1:[1],
//     2:[2],
//     3:[1,2],
//     4:[4],
//     5:[1,4],
//     6:[4,2],
//     7:[1,2,4],
//     8:[8],
//     9:[1,8],
//     10:[2,8],
//     11:[1,2,8],
//     12:[4,8],
//     13:[1,4,8],
//     14:[2,4,8],
//     15:[1,2,4,8],
//     16:[16],
//     17:[1,16],
//     18:[2,16],
//     19:[1,2,16],
//     20:[4,16],
//     21:[1,4,16],
//     22:[2,4,16],
//     23:[1,2,4,16],
//     24:[8,16],
//     25:[1,8,16],
//     26:[2,8,16],
//     27:[1,2,8,16],
//     28:[4,8,16],
//     29:[1,4,8,16],
//     30:[2,4,8,16],
//     31:[1,2,4,8,16]
// }

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

function alternativa(soma){
    console.log(default_sum[soma]);
    
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