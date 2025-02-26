function ConcatStr (){
    
    let str = ['hi', 'shivam here','how are you?','looking good'];

    let resultStr = "";
    
    for (let i=0; i<str.length; i++){
        resultStr += str[i];
    }
    console.log(resultStr);

} 

ConcatStr();

