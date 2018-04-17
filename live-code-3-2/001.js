/**

Drone Position
==============

Implementasikan function dronePosition untuk mencari koordinat drone yang
ada di dalam `grid`. Drone akan direpresentasikan sebagai karakter '*'.

Format koordinat: <baris>, <kolom>

# Asumsi:
- Drone ('*') selalu berjumlah 1 atau 0, tidak mungkin ada drone lain

Contoh input ada di test case.

# Aturan coding:
- WAJIB menyertakan algoritma / pseudocode

*/

/*
Algoritma:
1. Membaca array grid.
2a. Membuat perulangan untuk akses data grid, dengan index = i
 b. Membuat perulangan lagi untuk membaca string didalamnya, dengan index = j
 c. Jika string adalah '*', return nilai i dan j
3. Jika tidak bertemu, return 'No drone'

*/

function dronePosition (grid) {
  // Code here
  var x = 0;
  var y = 0;
  var string = x + ', ' + y;

  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '*') {
        x = i;
        y = j;
        return string
      }
    }
  }
  return "No drone"
}

console.log(dronePosition([ ['###'], ['###'], ['##*'] ])); // 2, 2

console.log(dronePosition([
  ['###'],
  ['#*#'],
  ['###']
])); // 1, 1

console.log(dronePosition([
  ['##*'],
  ['###'],
  ['###']
])); // 0, 2

console.log(dronePosition([
  ['###'],
  ['###'],
  ['###']
])); // No drone
