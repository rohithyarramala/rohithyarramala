export function startTypingEffect({
  id,
  words,
  typingSpeed = 100,
  pauseDelay = 1000,
}: {
  id: string;
  words: string[];
  typingSpeed?: number;
  pauseDelay?: number;
}) {
  const element = document.getElementById(id);
  
  if (!element) return;

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const type = () => {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;
    }

    const currentText = currentWord.substring(0, charIndex);
    element.textContent = currentText;

    if (!isDeleting && charIndex === currentWord.length) {
      setTimeout(() => {
        isDeleting = true;
        type();
      }, pauseDelay);
      return;
    }

    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(type, isDeleting ? typingSpeed / 2 : typingSpeed);
  };

  type();
}
