
function shuffle(array) {
  var currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function spin() {
  // Play the sound
  wheel.play();
  // Inisialisasi variabel
  const box = document.getElementById("box");
  const element = document.getElementById("mainbox");
  let SelectedItem = "";

  // Shuffle 450 karena class box1 sudah ditambah 90 derajat diawal. minus 40 per item agar posisi panah pas ditengah.
  // Setiap item memiliki 12.5% kemenangan kecuali item sepeda yang hanya memiliki sekitar 4% peluang untuk menang.

  // let Sepeda = shuffle([2210]); //Kemungkinan : 33% atau 1/3
  let item1 = shuffle([1890, 2250, 2610]);
  let item2 = shuffle([1850, 2210, 2570]); //Kemungkinan : 100%
  let item3 = shuffle([1810, 2170, 2530]);
  let item4 = shuffle([1770, 2130, 2490]);
  let item5 = shuffle([1750, 2110, 2470]);
  let item6 = shuffle([1630, 1990, 2350]);
  let item7 = shuffle([1570, 1930, 2290]);

  // Bentuk acak
  let Hasil = shuffle([
    item1[0],
    item2[0],
    item3[0],
    item4[0],
    item5[0],
    item6[0],
    item7[0],
    
  ]);
  // console.log(Hasil[0]);

  // Ambil value item yang terpilih
  if (item1.includes(Hasil[0])) SelectedItem = "2%";
  if (item2.includes(Hasil[0])) SelectedItem = "5%";
  if (item3.includes(Hasil[0])) SelectedItem = "8%";
  if (item4.includes(Hasil[0])) SelectedItem = "10%";
  if (item5.includes(Hasil[0])) SelectedItem = "15%";
  if (item6.includes(Hasil[0])) SelectedItem = "20%";
  if (item7.includes(Hasil[0])) SelectedItem = "25%";
  if (item7.includes(Hasil[0])) SelectedItem = "50%";

  // Proses
  box.style.setProperty("transition", "all ease 5s");
  box.style.transform = "rotate(" + Hasil[0] + "deg)";
  element.classList.remove("animate");
  setTimeout(function() {
    element.classList.add("animate");
  }, 5000);

  // Munculkan Alert
  setTimeout(function() {
    swal(
      "おめでと～",
      SelectedItem + "の割引をゲットしたよ",
      "＼(^o^)／"
    );
  }, 5500);

  // Delay and set to normal state
  setTimeout(function() {
    box.style.setProperty("transition", "initial");
    box.style.transform = "rotate(0deg)";
  }, 6000);
}