// let str = "Helloworld";

// let vowels = ['a', 'e', 'i', 'o', 'u'];

// function countVowels(str) {
//     let count = 0;
//     for (let i=0; i<str.length; i++){
//         if (vowels.includes(str[i])){
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countVowels(str)); 

// let str = "Helloworld";

// function countVowels(str) {
//     count = 0;
//     for (let i=0; i<str.length; i++){
//         if (
// str[i] === 'a' || 
// str[i] === 'e' || 
// str[i] === 'i' || 
// str[i] === 'o' || 
// str[i] === 'u'){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countVowels(str));

//another way

let str = "Helloworld";

function countVowels(str) {
    count = 0;
    for (let i=0; i<str.length; i++){
        if (
        str.charAt(i) == 'a' ||
        str.charAt(i) == 'e' || 
        str.charAt(i) == 'i' || 
        str.charAt(i) == 'o' || 
        str.charAt(i) == 'u'){
            count++;
        }
    }
    return count;
}
console.log(countVowels(str));

