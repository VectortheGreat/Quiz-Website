function Quiz(sorular) {
  //Yukarıdaki soruları bir fonksiyona alırız.
  this.sorular = sorular; //Dışarıdan gelen soruları içeriye this ile aktarırız
  this.soruIndex = 0; //sorular için index oluştururuz
  this.dogruCevapSayisi = 0;
}

Quiz.prototype.soruGetir = function () {
  //Her soruya index'ini atama
  return this.sorular[this.soruIndex];
};
