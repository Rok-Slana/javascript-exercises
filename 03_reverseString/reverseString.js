
const reverseString = function(word) {
    let reversedWord = '';
    for (let x = word.length-1; x>=0; x--)
    {
        reversedWord+=word.charAt(x);
    }
    return reversedWord;
};

// Do not edit below this line

module.exports = reverseString;
