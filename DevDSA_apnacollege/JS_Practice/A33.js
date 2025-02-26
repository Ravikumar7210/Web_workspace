// let country = ['Australia', 'Germany', 'United States', 'Brazil', 'Vietnam', 'China', 'France', 'Japan', 'India', 'Russia'];


// function LongestCountry (country){
//     let longest = 0;
// for (let i=0; i<country.length; i++){
//     let longLength = country[longest].length;
//     let currLength = country[i].length;
//     if (currLength > longLength){
//         longest = i;
//     }

// } return country[longest];
// }

// console.log (LongestCountry(country));

// another method

let country = ['Australia', 'Germany', 'United States', 'Brazil', 'Vietnam', 'China', 'France', 'Japan', 'India', 'Russia'];

function LongestCountry (country){
    let longest = '';
for (let i=0; i<country.length; i++){
    let currentlength = country[i].length;
    if (currentlength > longest.length){
        longest = country[i];
    }
}
return longest;
}

console.log(LongestCountry(country));