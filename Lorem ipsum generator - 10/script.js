// const characters = 'kABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

// function contentGenerator(length) {
//     let result = '';
//     const charlength = characters.length;

//     for(let i = 0; i < length; i++) {
//         result = result + characters.charAt(Math.floor(Math.random() * charlength));
//     }
//     return result;
// }

// console.log(contentGenerator(16));

const words = ["Suit", "Color", "Wait", "India", "Jail", "Subhramanyam", "Tiffin", "Computer", "Never", "Dones", "Times", "Tajmahal", "Electronics-Electricals", "Artificial", "Intelligence", "Covetus", "Angular", "Javascript" ];

function contentGenerator() {
    let result = '';
    const wordsLength = words.length;
    const length = document.getElementById('demo').value;

    const bool = isNaN(length);

    if(bool) {
        document.getElementById("content").innerHTML = "Please Enter a Numeric Value.......";
    } else {
        for(let i = 0; i < length; i ++) {
            result += words[Math.floor(Math.random() * wordsLength)];
            result += " ";
        }
    
        document.getElementById("content").innerHTML = result;
    } 
    
}



