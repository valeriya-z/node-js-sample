
function primeNumbers(max) {
    var sieve = [];
    prime_numbers = [];
    for (i = 2; prime_numbers.length < 100; i++) {
        if (!sieve[i]) {
            prime_numbers.push(i);
            for (j = i << 1; j <= max; j += i) {
                sieve[j] = true;
            }
        }
    }
    return prime_numbers;
}

function write(){
var fs = require('fs');
var outfile = "primes.txt";
var out = "some text";
fs.writeFileSync(outfile, out);  
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);
}
write();