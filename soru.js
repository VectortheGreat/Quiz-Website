function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
  this.soruMetni = soruMetni;
  this.cevapSecenekleri = cevapSecenekleri;
  this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function (cevap) {
  return cevap === this.dogruCevap;
};

let sorular = [
  new Soru(
    "1-Hangisi javascript paket yönetim uygulasıdır?",
    { a: "Node.js", b: "Typescript", c: "Npm" },
    "a"
  ),
  new Soru(
    "2-Hangisi javascript paket yönetim uygulasıdır?",
    { a: "Node.js", b: "Typescript", c: "Npm" },
    "b"
  ),
  new Soru(
    "3-Hangisi javascript paket yönetim uygulasıdır?",
    { a: "Node.js", b: "Typescript", c: "Npm" },
    "c"
  ),
  new Soru(
    "4-Hangisi javascript paket yönetim uygulasıdır?",
    { a: "Node.js", b: "Typescript", c: "Npm" },
    "c"
  ),
];

let matSorular = [
  new Soru("1-Mat Sorusu", { a: "Node.js", b: "Typescript", c: "Npm" }, "a"),
  new Soru("1-Mat Sorusu", { a: "Node.js", b: "Typescript", c: "Npm" }, "a"),
  new Soru("1-Mat Sorusu", { a: "Node.js", b: "Typescript", c: "Npm" }, "a"),
  new Soru("1-Mat Sorusu", { a: "Node.js", b: "Typescript", c: "Npm" }, "a"),
];
let tarihSorulaar = [
  new Soru("1-Tarih Sorusu", { a: "Node.js", b: "Typescript", c: "Npm" }, "a"),
  new Soru("2-Tarih Sorusu", { a: "Node.js", b: "Typescript", c: "Npm" }, "a"),
  new Soru("3-Tarih Sorusu", { a: "Node.js", b: "Typescript", c: "Npm" }, "a"),
  new Soru("4-Tarih Sorusu", { a: "Node.js", b: "Typescript", c: "Npm" }, "a"),
];
let cogSorulaar = [
  new Soru(
    "1-Cografya Sorusu",
    { a: "Node.js", b: "Typescript", c: "Npm" },
    "a"
  ),
  new Soru(
    "2-Cografya Sorusu",
    { a: "Node.js", b: "Typescript", c: "Npm" },
    "a"
  ),
  new Soru(
    "3-Cografya Sorusu",
    { a: "Node.js", b: "Typescript", c: "Npm" },
    "a"
  ),
  new Soru(
    "4-Cografya Sorusu",
    { a: "Node.js", b: "Typescript", c: "Npm" },
    "a"
  ),
];
let mixSorulaar = [
  new Soru(
    "1-Karışık Sorusu",
    { a: "Node.js", b: "Typescript", c: "Npm" },
    "a"
  ),
  new Soru(
    "2-Karışık Sorusu",
    { a: "Node.js", b: "Typescript", c: "Npm" },
    "a"
  ),
  new Soru(
    "3-Karışık Sorusu",
    { a: "Node.js", b: "Typescript", c: "Npm" },
    "a"
  ),
  new Soru(
    "4-Karışık Sorusu",
    { a: "Node.js", b: "Typescript", c: "Npm" },
    "a"
  ),
];
