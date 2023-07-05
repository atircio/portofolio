const typingText = document.querySelector('.developer');
const text = "Desenvolvedor Web";
let index = 0;

function type() {
  typingText.textContent += text[index];
  index++;

  if (index === text.length) {
    setTimeout(erase, 2000);
  } else {
    setTimeout(type, 200);
  }
}

function erase() {
  typingText.textContent = typingText.textContent.slice(0, -1);
  index--;

  if (index === 0) {
    setTimeout(type, 500);
  } else {
    setTimeout(erase, 100);
  }
}

type();
