import { useState, useEffect } from 'react';

export default function Typewriter({ texts, speed = 150, delay = 2000 }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[currentTextIndex];
      
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), delay);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts, speed, delay]);

  return (
    <span className="border-r-2 border-cyan-400 pr-1 animate-pulse">
      {currentText}
    </span>
  );
}
