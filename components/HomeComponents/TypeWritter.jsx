import React, { useState, useEffect } from "react";

const Typewriter = ({ textArray, className = "" }) => {
  const [currentText, setCurrentText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = textArray[wordIndex];
      const isWordComplete = charIndex === currentWord.length;

      if (!isDeleting && charIndex < currentWord.length) {
        // Typing the current word
        setCurrentText(currentWord.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        // Deleting the word
        setCurrentText(currentWord.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else if (isWordComplete && !isDeleting) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        // Move to the next word
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % textArray.length);
      }
    };

    const typingSpeed = isDeleting ? 100 : 150; // Deleting speed is faster
    const timeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textArray, wordIndex]);

  return (
    <div className="min-h-8">
      <span className={`typewriter ${className}`}>{currentText} </span>
    </div>
  );
};

export default Typewriter;
