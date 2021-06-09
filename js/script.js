// Palidroma
// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

var userWord = prompt('scrivi una parola')

function palindromeWord (words){

    var lunghezzaWord = words.length;
    var orderWord = '';

    for(var i = (lunghezzaWord - 1); i >= 0; i--){

        orderWord += words[i];
    }
    return orderWord;
}