
import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const FloatingMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="flex flex-col gap-2">
        {isOpen && (
          <div className="flex flex-col gap-2 mb-2">
            <button
              onClick={scrollToTop}
              className="w-12 h-12 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200"
              aria-label="Scroll to top"
            >
              <ChevronUp size={20} />
            </button>
            <button
              onClick={scrollToBottom}
              className="w-12 h-12 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200"
              aria-label="Scroll to bottom"
            >
              <ChevronDown size={20} />
            </button>
          </div>
        )}
        <button
          onClick={toggleMenu}
          className="w-12 h-12 bg-indigo-700 hover:bg-indigo-800 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
        </button>
      </div>
    </div>
  );
};

export default FloatingMenu;
