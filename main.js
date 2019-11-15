var km = prompt('Inserire i km da percorrere');
var eta = prompt('Inserire la tua età');
var initresult = km * 0.21;
if (eta > 65) {
    var anziani = initresult -  (40 * initresult / 100);
    document.getElementById('risultato').innerHTML = anziani;
} else if(eta < 18) {
    var minorenni = initresult - (20 * initresult / 100);
    document.getElementById('risultato').innerHTML = minorenni;
} else {
    document.getElementById('risultato').innerHTML = initresult;
}

document.getElementById('sentence').setAttribute('class', 'visible');
