/**

Product Categories
==================

Implementasikan function productCategories untuk menghitung
jumlah barang yang dimiliki oleh kategori yang tersedia

Output yang diharapkan adalah Object Literal seperti contoh berikut:
{
  <Category>: [<Items>]
}

# Contoh:
  - `products`: [
    ['Mouse Logitech', 150000, 'Mouse'],
    ['ATI Radeon', 800000, 'Graphic Card'],
    ['NVIDIA Card', 760000, 'Graphic Card'],
    ['Samsung Harddisk 1TB', 1300000, 'Harddisk'],
  ]
  - output: { Mouse: [ 'Mouse Logitech' ],
  'Graphic Card': [ 'ATI Radeon', 'NVIDIA Card' ],
  Harddisk: [ 'Samsung Harddisk 1TB' ] }

  - `products`: []
  - output: 'Empty data'

# Aturan coding
- WAJIB menggunakan WHILE / FOR loop

*/

function productCategories(products) {
  // Code here

  var objects = {}

  for (var i = 0; i < products.length; i++) {
    objects[i] = {}

    // for (var j = 0; j < products[i].length; j++) {
    //   objects[i].product = products[i][0];
    //   objects[i].price = products[i][1];
    //   objects[i].category = products[i][2];
    // }

    for(var j = 0; j < products[i].length; j++) {
      objects[i][products[i][2]] = products[i][0]
    }
  }

  return objects
}


console.log(productCategories([
  ['Mouse Logitech', 150000, 'Mouse'],
  ['ATI Radeon', 800000, 'Graphic Card'],
  ['NVIDIA Card', 760000, 'Graphic Card'],
  ['Samsung Harddisk 1TB', 1300000, 'Harddisk'],
]));
/*
 { Mouse: [ 'Mouse Logitech' ],
  'Graphic Card': [ 'ATI Radeon', 'NVIDIA Card' ],
  Harddisk: [ 'Samsung Harddisk 1TB' ] }
*/

console.log(productCategories([
  ['Cooler Master MasterNotepal Maker', 720000, 'Cooler'],
  ['Cooler Master MasterNotepal Pro', 685000, 'Cooler'],
  ['Cooler Master Notepal Ergostand III', 540000, 'Cooler'],
  ['Cooler Master Notepal X3', 430000, 'Cooler']
]));
/*
 { Cooler:
   [ 'Cooler Master MasterNotepal Maker',
     'Cooler Master MasterNotepal Pro',
     'Cooler Master Notepal Ergostand III',
     'Cooler Master Notepal X3' ] }
*/

console.log(productCategories([]));
// Empty data
