// <==151==>
function reverseWords(s) {
    const words = s.trim().split(/\s+/);
    
    const reversedWords = words.reverse();
    
    return reversedWords.join(' ');
}

const s = "the sky is blue";
console.log(reverseWords(s));
