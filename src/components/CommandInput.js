import React, { useState, useRef, useEffect } from 'react';

const CommandInput = ({ onSubmit, isProcessing }) => {
  const [input, setInput] = useState('');
  const inputRef = useRef(null);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    const blink = setInterval(() => setShowCursor(c => !c), 500);
    return () => clearInterval(blink);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() && !isProcessing) {
      onSubmit(input);
      setInput('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  // Always reserve space for the placeholder if input is empty
  const inputWidth = input.length > 0 ? `${input.length}ch` : '16ch';

  return (
    <form className="flex items-center mt-2 font-mono" onSubmit={handleSubmit} autoComplete="off">
      <span className="font" style={{ color: '#00e0ff' }}>praveen@portfolio:~$</span>
      <span className="ml-2 flex items-center">
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="bg-transparent outline-none text-gray-300 font-mono flex-1 border-none p-0 m-0 focus:outline-none"
          placeholder="Type a command..."
          disabled={isProcessing}
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          style={{ width: inputWidth, caretColor: 'transparent' }}
        />
        {/* Custom blinking block cursor at the end of the input */}
        <span
          className="inline-block align-middle"
          style={{
            width: '12px',
            height: '22px',
            background: showCursor ? '#9ca3af' : 'transparent',
            marginLeft: '-2px',
            borderRadius: '2px',
            transition: 'background 0.1s',
          }}
        />
      </span>
    </form>
  );
};

export default CommandInput; 