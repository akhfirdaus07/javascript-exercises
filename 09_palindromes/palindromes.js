const palindromes = function (string) {
    string = string.toLowerCase().replace(/[^a-z]/gi, '');
    return string == string.toLowerCase().replace(/[^a-z]/gi, '').split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
