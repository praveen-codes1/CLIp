import React, { useState, useRef, useEffect } from 'react';
import CommandInput from './CommandInput';
import OutputHistory from './OutputHistory';

const MENU_COMMANDS = [
  'If you can''t type, CLICK' ->','help', 'about', 'projects', 'skills', 'experience', 'contact', 'education', 'certifications', 'leadership', 'sudo', 'clear'
];

const Terminal = () => {
  const [commandHistory, setCommandHistory] = useState([
    { type: 'prompt', content: "welcome", prompt: true },
    { type: 'output', content: "Hi, I'm Praveen Patil, a Data Science Junior.\n\nWelcome to my interactive portfolio terminal!\nType 'help' to see available commands." }
  ]);
  const [isProcessing] = useState(false);
  const terminalRef = useRef(null);

  const commands = {
    about: () => ({ type: 'output', content: `About Me:\n\nJunior-year CS + Data Science undergrad at NHCE (CGPA: 9.41), wired for real-world impact.\n\nI speak Python, C, and SQL natively — and when data talks, I listen, visualize, and act using tools like Tableau.\n\nI don't just write code. I architect systems. I mine signal from noise. I chase tech that solves real problems — not vanity builds.\n\nCurrently obsessed with: scalable automation, model explainability, and shipping fast without breaking trust.` }),
    
    projects: () => ({ type: 'output', content: `PROJECTS\n\nMLOps Pipeline\nRAG using Wikipedia\nCarpooling Web\nClassInSight\nRide ETA Predictor\nData Cleaning and Analytics\nTableau Dashboard\n GitHub: https://github.com/praveen-codes1` }),
    
    skills: () => ({ type: 'output', content: `Technical Skills:\n\n PROGRAMMING LANGUAGES:\n• Python (Advanced)\n• C\n• Java\n• SQL\n• R\n\n\n DATA SCIENCE & ML:\n• Machine Learning (Scikit-learn, TensorFlow)\n• Deep Learning (PyTorch)\n• Data Analysis (Pandas, NumPy)\n• Data Visualization (Matplotlib, Seaborn, Plotly, Tableau, PowerBI)\n• Statistical Analysis\n• Natural Language Processing\n\n TOOLS & TECHNOLOGIES:\n• Git & GitHub\n• Docker & Kubernetes\n• Jupyter Notebooks\n• VS Code, PyCharm\n• Linux/Unix Systems\n\n DATABASES:\n• MySQL` }),
    
    experience: () => ({ type: 'output', content: `Professional Experience:\n\n RESEARCH INTERN - DRDO\nDuration: Current\n• Conducting research in data science and machine learning` }),
    
    contact: () => ({ type: 'output', content: `Contact Information:\n\n EMAIL:\npraveenpatiladithya@gmail.com\n1nh23cd118@newhorizonindia.edu\n\n SOCIAL PROFILES:\nLinkedIn: linkedin.com/in/praveen-patil-b99956317/ \nGitHub: github.com/praveen-codes1\nLOCATION:\nBengaluru, Karnataka, India\n\n AVAILABILITY:\nOpen to: Internships, Research Opportunities\nFreelance Projects, Collaborations\n\n PREFERRED CONTACT:\nEmail for professional inquiries\nLinkedIn for networking\nGitHub for technical discussions` }),
    
    education: () => ({ type: 'output', content: `EDUCATION\n\n+---------+--------------------------------+------------+\n| Degree  | School                         | Score      |\n+---------+--------------------------------+------------+\n| BE 2027 | New Horizon College of         | 9.41 CGPA  |\n|         | Engineering, Bengaluru         |            |\n|         | Computer Science and           |            |\n|         | Engineering (Data Science)     |            |\n|         | Club Member- Innovation Club   |            |\n|         | Organizing coordinator-        |            |\n|         | MovieCon Fest, Coordinator     |            |\n|         | and Board member- Drama Club   |            |\n+---------+--------------------------------+------------+\n| II PU   | Kumadvathi Science and         | 97% PCMB   |\n| 2023    | Commerce Pre-University,       |            |\n|         | Shikaripura                    |            |\n|         | 100% in Mathematics, 97        |            |\n|         | percentile in JEE Main         |            |\n+---------+--------------------------------+------------+\n| CBSE X  | Kumadvathi Residential         | 93.4%      |\n| 2021    | Central School, Shikaripura    |            |\n|         | 4-time NIF India Inspire       |            |\n|         | Award shortlisted innovator;   |            |\n|         | State Level Inspire Award      |            |\n|         | Finalist, presented at CBSE    |            |\n|         | Regional Level Science and     |            |\n|         | Tech Expo, actively involved   |            |\n|         | in Anchoring and Public        |            |\n|         | Speaking                       |            |\n+---------+--------------------------------+------------+` }),
    
    certifications: () => ({ type: 'output', content: `Certifications:\n\n1. NPTEL IoT Programming\n2. IBM Professional Skills` }),
    
    leadership: () => ({ type: 'output', content: `Beyond Code: Leadership That Scales\n\nStarted early : appointed youngest Sports Captain and House Vice-Captain before 15. Didn’t just lead; set precedents.\n\nAt NHCE, I move where momentum matters:\n\nInnovation Club: Spearheading initiatives across a 100+ member crew, from idea sprints to intercollege competitions.\n\nDrama Club (Board & Coordinator): Orchestrated live performances and creative campaigns, leading teams end-to-end from rehearsal rooms to standing ovations.\n\nMovieCon (Core Org Team): Ran the engine room — logistics, on-ground execution, team coordination — for one of the largest student-run events.\n\nI thrive in ambiguity. I energize teams. I scale vision into outcome. Not just a fast learner — I'm fast at making others better.` }),
    
    help: () => ({ type: 'output', content: `Available Commands:\n\n${MENU_COMMANDS.join(' | ')}\n\n TIP: Click any command in the menu bar above to execute it instantly.\n\n COMMAND DESCRIPTIONS:\n• about - Learn more about me and my background\n• projects - View my technical projects and research work\n• skills - Explore my technical skills and expertise\n• experience - See my professional experience and internships\n• contact - Get my contact information and social profiles\n• education - View my academic background and achievements\n• certifications - Check my professional certifications\n• leadership - Learn about my leadership roles and activities\n• sudo - Access advanced features (coming soon)\n• clear - Clear the terminal output\n• help - Show this help message` }),
    
    sudo: () => ({ type: 'output', content: ` SUDO ACCESS DENIED\n\nThis feature is currently under development.\nAdvanced terminal features coming soon!\n\n Try these commands instead:\n• help - Show available commands\n• about - Learn about me\n• projects - View my work\n• skills - See my expertise` }),
    
    clear: () => { setCommandHistory([]); return null; }
  };

  const executeCommand = (command) => {
    const trimmedCommand = command.trim().toLowerCase();
    if (!trimmedCommand) return;
    setCommandHistory(prev => [
      ...prev,
      { type: 'prompt', content: command, prompt: true }
    ]);
    if (commands[trimmedCommand]) {
      const result = commands[trimmedCommand]();
      if (result) {
        setCommandHistory(prev => [...prev, result]);
      }
    } else {
      setCommandHistory(prev => [...prev, { type: 'error', content: `Command not found: ${command}` }]);
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commandHistory]);

  return (
    <div className="w-full h-full flex flex-col font-mono bg-black shadow-lg overflow-hidden">
      {/* Menu Bar */}
      <div className="w-full px-4 py-2 border-b border-gray-400 bg-black text-gray-300 text-sm flex flex-wrap gap-x-2 gap-y-1">
        {MENU_COMMANDS.map(cmd => (
          <button 
            key={cmd} 
            onClick={() => executeCommand(cmd)}
            className="hover:underline cursor-pointer hover:text-gray-100 transition-colors duration-200"
            style={{ textShadow: '0 0 4px #FF9100, 0 0 8px #FF9100', color: '#FF9100' }}
          >
            {cmd}
          </button>
        ))}
      </div>
      {/* Terminal Output */}
      <div ref={terminalRef} className="flex-1 px-4 py-4 overflow-y-auto text-base">
        <OutputHistory history={commandHistory} />
        <CommandInput onSubmit={executeCommand} isProcessing={isProcessing} />
      </div>
    </div>
  );
};

export default Terminal; 
