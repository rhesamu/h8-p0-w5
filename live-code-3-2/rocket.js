/**

Virus Percentage
================

Implementasikan function virusPercentage untuk menghitung
persentase virus yang ada. Hanya akan ada 4 tipe virus, yaitu:
- *
- #
- @
- $

# Contoh:
- `input` -> **##@
  output -> 40% *, 40% #, 20% @
- `input` -> **#*##
  output -> 50% *, 50% #

Contoh lain ada di test case

# Asumsi:
- `input` tidak akan pernah kosong
- `input` pasti berisi virus

# Aturan coding:
- DILARANG menggunakan regex

*/

function virusPercentage (input) {
  // Code here
  var stars = 0;
  var hashes = 0;
  var atSymbol = 0;
  var dollar = 0;

  var output = [];
  var starString = String(stars / input.length * 100) + '% *';
  var hashString = String(hashes / input.length * 100) + '% #';
  var atSymbolString = String(atSymbol / input.length * 100) + '% @';
  var dollarString = String(dollar / input.length * 100) + '% $';

  for (var i = 0; i < input.length; i++) {
    if(input[i] === '*') {
      stars++;
    } else if (input[i] === '#') {
      hashes++;
    } else if (input[i] === '@') {
      atSymbol++;
    } else if (input[i] === '$') {
      dollar++;
    }
  }



  if (stars !== 0 && hashes !== 0 && atSymbol !== 0 && dollar !== 0) {
    output = [starString, hashString, atSymbolString, dollarString];
    var str = output.join(', ')

  }

  return str
}

console.log(virusPercentage('**#*##')); // 50% *, 50% #
console.log(virusPercentage('**######')); // 75% #, 25% *
console.log(virusPercentage('**##@')); // 40% *, 40% #, 20% @
console.log(virusPercentage('@')); // 100% @
console.log(virusPercentage('#$*@')); // 25% #, 25% $, 25% *, 25% @
