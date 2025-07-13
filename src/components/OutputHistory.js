import React from 'react';

const OutputHistory = ({ history }) => {
  const formatContent = (content) => {
    return content.split('\n').map((line, index) => (
      <div key={index} className="whitespace-pre-wrap">
        {line}
      </div>
    ));
  };

  return (
    <div className="space-y-2">
      {history.map((entry, index) => {
        if (entry.type === 'prompt') {
          return (
            <div key={index} className="flex items-center">
              <span className="font" style={{ color: '#00e0ff' }}>praveen@portfolio:~$</span>
              <span className="ml-2 text-gray-300">{entry.content}</span>
            </div>
          );
        }
        if (entry.type === 'error') {
          return (
            <div key={index} className="text-red-400">
              {formatContent(entry.content)}
            </div>
          );
        }
        // Output
        return (
          <div key={index} className="text-white">
            {formatContent(entry.content)}
          </div>
        );
      })}
    </div>
  );
};

export default OutputHistory; 