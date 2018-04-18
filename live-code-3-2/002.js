/**

How Many Games?
==============

Awtian merupakan pemain Dota yang memiliki waktu terbatas.
Namun Awtian memiliki kemampuan untuk membuat strategi yang menentukan panjang waktu game yang dia mainkan.
Karena Awtian kreatif, dia tidak mau mengulangi penggunaan strategi yang sama dalam setiap permainannya!

Implementasikan function di bawah untuk menentukan jumlah maksimal game yang dapat dimainkan oleh Awtian

function howManyGame(minutes, gamesLength)
  Parameter pertama adalah jam yang dimiliki oleh Awtian, sedangkan parameter kedua adalah waktu yang di habiskan
  untuk mengeksekusi strategi-strategi yang dimiliki Awtian


# Contoh:
Minutes: 200
Daftar strategi Awtian: [200, 50, 10, 60, 40]

Maka function akan mengembalikan 4 karena Awtian bisa menggunakan 4 strategi yang berbeda: 50, 10, 60, dan 40

# Asumsi:
- `minutes` adalah batasan waktu maksimal Awtian bermain sehingga tidak mungkin minus (>= 0)

# Aturan coding:
- WAJIB menyertakan algoritma / pseudocode

*/

/*
Pseudocode

READ minutes
READ gamesLength
READ counter = 0

IF minutes === 0 THEN
  DISPLAY '0'
END IF

FOR each index in gamesLength
  SUBSTRACT minutes by gamesLength[index]

  IF minutes is not 0 THEN
    ADD counter by 1
  ENDIF

ENDFOR

DISPLAY counter
*/

function howManyGame(minutes, gamesLength){
  // Code here
  if (minutes === 0) {
    return 0;
  }

  // gamesLength.sort(function (a, b) {return a > b});
  // [150, 120, 50, 30, 100] -> [30, 50, 100, 120, 150]

  for (var i = 0; i < gamesLength.length; i++) {
    for (var j = i+1; j < gamesLength.length; j++) {
      if (gamesLength[i] > gamesLength[j]) {
        var temp = gamesLength[i];
        gamesLength[i] = gamesLength[j];
        gamesLength[j] = temp;
      }
    }
  }

  console.log(gamesLength);

  var counter = 0;

  for (var i = 0; i < gamesLength.length; i++) {
    if (minutes - gamesLength[i] >= 0) {
      counter++;
    }
    minutes -= gamesLength[i];
  }

  return counter;
}
//
console.log(howManyGame(300, [150, 120, 50, 30, 100])); // 4
console.log(howManyGame(1000, [200, 200, 300, 100, 200, 1000])); // 5
console.log(howManyGame(400, [75, 100, 20, 30])); // 4
console.log(howManyGame(500, [250, 250, 100, 150])); // 3
console.log(howManyGame(0, [10, 300])); // 0
