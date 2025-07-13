import React from 'react';
import Terminal from './components/Terminal';
import IDCard from './components/IDCard';
import './App.css';
import nhidImage from './assets/nhid.png';
import imageImage from './assets/image.png';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-black via-gray-900 to-black relative">
      {/* Header */}
      <header className="w-full px-4 pt-8 pb-4 border-b-2 border-gray-400">
        <div className="flex flex-col items-start">
          <div className="relative w-screen overflow-hidden" style={{ maxWidth: '100vw', height: '2.5em' }}>
            <h1
              className="text-4xl font-italic tracking-tight whitespace-nowrap animate-marquee-absolute"
              style={{
                color: '#FF9100',
                textShadow: '0 0 4px #FF9100, 0 0 8px #FF9100',
                position: 'absolute',
                left: 0,
                top: 0,
                willChange: 'transform',
              }}
            >
              Praveen Patil Praveen Patil Praveen Patil Praveen Patil Praveen Patil Praveen Patil Praveen Patil Praveen Patil
            </h1>
          </div>
          <span className="text-lg text-gray-200 font-mono">BE Computer Science and Engineering (Data Science) Junior
          </span>
        </div>
      </header>
      {/* Main Content */}
      <main className="flex-1 flex flex-row w-full">
        {/* Left: Terminal */}
        <div className="flex-1 flex items-stretch justify-center bg-transparent">
          <Terminal />
        </div>
        {/* Right: ID Cards (vertical stack) */}
        <div className="w-1/2 md:w-1/3 flex flex-col items-center justify-center gap-12 bg-transparent py-8">
          <IDCard
            name="Praveen Patil"
            role="BE CSEDS Dept, NHCE"
            description="Junior Year"
            avatar={nhidImage}
            tagColor="brown"
            lanyardText="nhce"
          />
          <IDCard
            name="Praveen Patil"
            role="Student Intern, DRDO"
            description=""
            avatar={imageImage}
            tagColor="blue"
            lanyardText="drdo"
          />
        </div>
      </main>
      {/* Footer */}
      <footer className="w-full px-8 py-2 border-t border-gray-400 text-gray-300 text-right font-mono text-xs">
        {new Date().toLocaleString()}
      </footer>
    </div>
  );
}

export default App;
