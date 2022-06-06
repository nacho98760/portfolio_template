let l = 0;
let l1 = 0;
let txt = "Hey! I'm nacho98760 and";
let txt2 = "I'm a Front-end Developer";
let speed = 65;
let texto = document.querySelector(".texto");
let texto1 = document.querySelector(".texto-1");

function typing() {
  if (l < txt.length) {
    texto.innerHTML += txt.charAt(l);
    l++;
    setTimeout(typing, speed);
  }
}

setTimeout(function typing2() {
  if (l1 < txt2.length) {
    texto1.innerHTML += txt2.charAt(l1);
    l1++;
    setTimeout(typing2, speed);
  }
}, 2000)

typing()
typing2()