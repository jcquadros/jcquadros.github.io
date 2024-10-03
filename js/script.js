const typingText = document.getElementById("typingText");
const phrases = ["Desenvolvedor Web"];
let currentPhraseIndex = 0;
let currentCharIndex = 0;

function type() {
  if (currentCharIndex < phrases[currentPhraseIndex].length) {
    typingText.textContent +=
      phrases[currentPhraseIndex].charAt(currentCharIndex);
    currentCharIndex++;
    setTimeout(type, 100); 
  } else {
    setTimeout(erase, 1500); 
  }
}

function erase() {
  if (currentCharIndex > 0) {
    typingText.textContent = phrases[currentPhraseIndex].substring(
      0,
      currentCharIndex - 1
    );
    currentCharIndex--;
    setTimeout(erase, 50);
  } else {
    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
    setTimeout(type, 500); 
  }
}

// Iniciar a animação
window.onload = function () {
  type();
};
