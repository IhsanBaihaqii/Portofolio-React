import { useEffect, useState } from "react";

function Typewriter({
  words = [],
  typingSpeed = 120,
  deletingSpeed = 70,
  delayBetweenWords = 1500,
}) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (!isDeleting) {
      // Typing
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length + 1));
        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), delayBetweenWords);
        }
      }, typingSpeed);
    } else {
      // Deleting
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }, deletingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [
    text,
    isDeleting,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    delayBetweenWords,
  ]);

  return (
    <span className="text-cyan-400 font-bold">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export default Typewriter;
