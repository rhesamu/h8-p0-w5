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

function virusPercentage(input) {
  // Code here
  var stars = 0;
  var hashes = 0;
  var atSymbol = 0;
  var dollar = 0;

  var symbols = {};

  for (var i = 0; i < input.length; i++) {
    if(input[i] === '*') {
      stars++;
      symbols['*'] = stars;
    } else if (input[i] === '#') {
      hashes++;
      symbols['#'] = hashes;
    } else if (input[i] === '@') {
      atSymbol++;
      symbols['@'] = atSymbol;
    } else if (input[i] === '$') {
      dollar++;
      symbols['$'] = dollar;
    }
  }

  //console.log(symbols); // -> {'*': 3, '#': 3, etc}

  var sortable = [];
  for (var key in symbols) {
    //console.log(key) -> stars, hashes, etc (the key)
    //console.log(symbols[key]) -> 2, 6, etc (the value)
    symbols[key] = (symbols[key] / input.length * 100) + '% ' + key;
    sortable.push(symbols[key]);
  }
  // console.log(symbols); // -> {'*': '25% *', etc }

  sortable.sort(function(a, b) {
    return a.slice(0, a.indexOf('%')) < b.slice(0, b.indexOf('%'))
  });

  // console.log(sortable);

  var str = sortable.join(', ')
  // console.log(str)

  return str;
}

console.log(virusPercentage('**#*##')); // 50% *, 50% #
console.log(virusPercentage('**######')); // 75% #, 25% *
console.log(virusPercentage('**##@')); // 40% *, 40% #, 20% @
console.log(virusPercentage('@')); // 100% @
console.log(virusPercentage('#$*@')); // 25% #, 25% $, 25% *, 25% @
console.log(virusPercentage('@#*$'));
