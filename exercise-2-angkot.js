function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  if (arrPenumpang.length === 0) {
    return [];
  }

  var arr = [];
  for (var i = 0; i < arrPenumpang.length; i++) {
    var obj = {};
    var dari = 0;
    var tujuan = 0;

    obj['penumpang'] = arrPenumpang[i][0];
    obj['naikDari'] = arrPenumpang[i][1];
    obj['tujuan'] = arrPenumpang[i][2];

    for (var j = 0; j < rute.length; j++) {
      if (rute[j] === arrPenumpang[i][1]) {
        dari = j;
      }
      if (rute[j] === arrPenumpang[i][2]) {
        tujuan = j;
      }
    }

    obj['bayar'] = (tujuan - dari) * 2000;
    arr.push(obj);
  }

  return arr;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
