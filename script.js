const quiz = new Quiz(sorular);
const ui = new UI();

//Quiz Start Butonu
ui.btn_start.addEventListener("click", function () {
  ui.quiz_box.classList.add("active");
  ui.soruGoster(quiz.soruGetir());
  startTimerLine();
  startTimer(10);
  ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
  ui.btn_next.classList.remove("show");
});

//Sonraki soru
ui.btn_next.addEventListener("click", function () {
  if (quiz.sorular.length != quiz.soruIndex + 1) {
    document.querySelector(".quiz_box").classList.add("active");
    quiz.soruIndex += 1;
    clearInterval(counter);
    clearInterval(counterline);
    startTimer(10);
    startTimerLine();
    ui.soruGoster(quiz.soruGetir());
    ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
    ui.btn_next.classList.remove("show");
    ui.time_text.textContent = "Kalan Süre";
  } else {
    clearInterval(counterline);
    clearInterval(counter);
    ui.score_box.classList.add("active");
    ui.quiz_box.classList.remove("active");
    ui.skoruGoster(quiz.sorular.length, quiz.dogruCevapSayisi);
  }
});

//Language
let languageControl;
function languageSelect(event) {
  let selected_language = event.target;
  selected_language.classList.add("language_selected");

  if (
    ui.turkish.classList.contains("language_selected") &&
    ui.english.classList.contains("language_selected")
  ) {
    ui.english.classList.remove("language_selected");
    languageControl = 0;
    ui.turkish.classList.remove("language_selected");
  }
  if (ui.turkish.classList.contains("language_selected")) {
    languageControl = 1;
  } else if (ui.english.classList.contains("language_selected")) {
    languageControl = 2;
  }
  languageSelected(languageControl);
}

//Çeviri
function languageSelected(language) {
  if (language == 1) {
    document.querySelector("#math").innerText = "Matematik";
    document.querySelector("#history").innerText = "Tarih";
    document.querySelector("#geo").innerText = "Coğrafya";
    document.querySelector("#mix").innerText = "Karışık";
    document.querySelector(".btn_quiz_start").innerText = "Quiz'e Başla";
  } else if (language == 2) {
    document.querySelector("#math").innerText = "Math";
    document.querySelector("#history").innerText = "History";
    document.querySelector("#geo").innerText = "Geography";
    document.querySelector("#mix").innerText = "Mixed";
    document.querySelector(".btn_quiz_start").innerText = "Start Quiz";
  }
}

//Dersler
let classControl = false;
function classSelect(event) {
  let selected_class = event.target;
  selected_class.classList.add("class_selected");
  for (let i = 0; i < ui.classes.children.length; i++) {
    if (ui.classes.children[i].classList.contains("class_selected")) {
    } else {
      ui.classes.children[i].classList.add("disabled");
      classControl = true;
    }
  }
  if ((languageControl == 1 || languageControl == 2) && classControl == true) {
    ui.btn_start.classList.remove("btn_quiz_disabled");
  }
}

//Şıklar
function optionSelected(option) {
  clearInterval(counterline);
  clearInterval(counter);
  let cevap = option.querySelector("span b").textContent;
  let soru = quiz.soruGetir();
  let degiskengetir = document.getElementById("correct_option");
  if (soru.cevabiKontrolEt(cevap)) {
    quiz.dogruCevapSayisi += 1;
    option.classList.add("correct");
    option.insertAdjacentHTML("beforeend", ui.correctIcon);
  } else {
    option.classList.add("incorrect");
    option.insertAdjacentHTML("beforeend", ui.incorrectIcon);
    degiskengetir.classList.add("correct");
    degiskengetir.insertAdjacentHTML("beforeend", ui.correctIcon);
  }

  for (let i = 0; i < ui.option_list.children.length; i++) {
    ui.option_list.children[i].classList.add("disabled");
  }
  ui.btn_next.classList.add("show");
}

//Bitiş Butonları
ui.btn_quit.addEventListener("click", function () {
  window.location.reload();
});
ui.btn_replay.addEventListener("click", function () {
  quiz.soruIndex = 0;
  quiz.dogruCevapSayisi = 0;
  ui.btn_start.click();
  ui.score_box.classList.remove("active");
});

//Süre Sayacı
let counter;
function startTimer(time) {
  counter = setInterval(timer, 1000);

  function timer() {
    ui.time_second.textContent = time;
    time--;
    if (time < 0) {
      clearInterval(counter);
      ui.time_text.textContent = "Süre Bitti";
      let cevap = quiz.soruGetir().dogruCevap;
      for (let option of ui.option_list.children) {
        if (option.querySelector("span b").textContent == cevap) {
          option.classList.add("correct");
          option.insertAdjacentHTML("beforeend", ui.correctIcon);
        }
        option.classList.add("disabled");
      }
      ui.btn_next.classList.add("show");
    }
  }
}
//Çubuk
let counterline;
function startTimerLine() {
  let line_width = 0;
  counterline = setInterval(timer, 20);
  function timer() {
    line_width += 1;
    ui.time_line.style.width = line_width + "px";
    if (line_width > 549) {
      clearInterval(counterline);
    }
  }
}
