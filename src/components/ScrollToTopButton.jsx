import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 200) setIsVisible(true);
    else setIsVisible(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`
        ${isVisible ? "opacity-100" : "opacity-0"}
        fixed bottom-6 right-6 z-50 p-3
        bg-theme-primary text-white rounded-full shadow-lg
        transition-all duration-300 hover:bg-theme-secondary hover:scale-110
      `}
      aria-label="Voltar ao topo"
    >
      <ArrowUp size={24} />
    </button>
  );
}

export default ScrollToTopButton;
