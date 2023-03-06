// Sumbul ingin memesan sebuah sepatu. Akan tetapi dia ingin membeli sepatu ketika cuaca sedang baik. Jadi kalau hujan dia akan beli dari online. kemudian, dia ingin sepatu warnah hitam, akan tetapi di toko hanya ada warna putih. jadi dia akan membeli juga kaus kaki warna putih

let cuaca = 'cerah';
let adaSepatuHitam = false;

if (cuaca === 'cerah') {
  console.log('Sumbul datang ke toko sepatu.');
} else if (cuaca === 'hujan') {
  console.log('Sumbul membuka situs online shop');
}

if (adaSepatuHitam) {
  console.log('Sumbul membeli sepatu warna hitam');
} else {
  console.log(
    'Tidak ada sepatu warna hitam. Sehingga sumbul membeli sepatu warna putih dan kaos kaki warna putih'
  );
}
