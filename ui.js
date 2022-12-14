function UI() {
  (this.btn_start = document.querySelector(".btn_start")),
    (this.btn_next = document.querySelector(".next_btn")),
    (this.quiz_box = document.querySelector(".quiz_box")),
    (this.btn_quit = document.querySelector(".btn_quit")),
    (this.btn_replay = document.querySelector(".btn_replay")),
    (this.score_box = document.querySelector(".score_box")),
    (this.option_list = document.querySelector(".option_list")),
    (this.languages = document.querySelector(".languages")),
    (this.time_text = document.querySelector(".time_text")),
    (this.time_second = document.querySelector(".time_second")),
    (this.time_line = document.querySelector(".time_line")),
    (this.correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>'),
    (this.incorrectIcon =
      '<div class="icon"><i class="fas fa-times"></i></div>'),
    (this.turkish = document.querySelector("#turkish")),
    (this.english = document.querySelector("#english")),
    (this.math = document.querySelector(".math")),
    (this.history = document.querySelector(".history")),
    (this.geography = document.querySelector(".geography")),
    (this.classes = document.querySelector(".classes")),
    (this.mixed = document.querySelector(".mixed"));
}

// UI.prototype.languageSelect = function language() {
//   const quiz_language = this.languages.querySelectorAll(".language");
//   for (let lng of quiz_language) {
//     lng.setAttribute("onclick", "optionSelected(this)");
//   }
// };

UI.prototype.soruGoster = function (soru) {
  let question = `<span>${soru.soruMetni}</span>`;
  let options = "";
  let degisken;

  for (let cevap in soru.cevapSecenekleri) {
    if (soru.cevabiKontrolEt(cevap) == true) {
      degisken = "correct_option";
    }
    options += `
                <div id ="${degisken}" class="option"> 
                    <span><b>${cevap}</b>: ${soru.cevapSecenekleri[cevap]}</span>
                </div>
            `;
  }

  document.querySelector(".question_text").innerHTML = question;
  this.option_list.innerHTML = options;

  const option = this.option_list.querySelectorAll(".option");
  for (let opt of option) {
    opt.setAttribute("onclick", "optionSelected(this)");
  }
};
UI.prototype.soruSayisiniGoster = function (soruSirasi, toplamSoru) {
  let tag = `<span class="badge bg-warning">${soruSirasi} / ${toplamSoru}</span>`;
  document.querySelector(".quiz_box .question_index").innerHTML = tag;
};
UI.prototype.skoruGoster = function (toplamSoru, dogruCevap) {
  let tag = `Toplam ${toplamSoru} sorudan ${dogruCevap} do??ru cevap verdiniz.`;
  document.querySelector(".score_box .score_text").innerHTML = tag;
};
