
import { useState, useEffect, useRef } from 'react';
import ProfileSection from './ProfileSection';
import TechnicalSkills from './TechnicalSkills';
import FeaturedProjects from './FeaturedProjects';
import ContactSection from './ContactSection';

interface TerminalLine {
  type: 'command' | 'output' | 'error';
  content: React.ReactNode;
  timestamp: number;
}

const InteractiveTerminal = () => {
  const [lines, setLines] = useState<TerminalLine[]>([
    {
      type: 'output',
      content: (
        <div className="text-terminal-green animate-fade-in">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-2 h-2 bg-terminal-green rounded-full animate-pulse"></div>
            <span>Initializing Adiraj Kashyap's Portfolio Terminal v2.0.0...</span>
          </div>
          <div className="text-terminal-cyan text-sm">
            └─ System ready. Type 'help' to explore available commands.
          </div>
        </div>
      ),
      timestamp: Date.now()
    }
  ]);
  const [currentInput, setCurrentInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [hasAutoExecuted, setHasAutoExecuted] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const commands = {
    help: {
      description: 'Show available commands',
      execute: () => (
        <div className="text-terminal-white space-y-3 animate-fade-in">
          <div className="flex items-center space-x-2">
            <span className="text-terminal-green text-lg">🚀</span>
            <span className="text-terminal-green font-bold text-base">Available Commands:</span>
          </div>
          <div className="ml-2 md:ml-6 space-y-2 text-xs md:text-sm">
            <div className="flex items-center space-x-3 hover:bg-terminal-dark/50 p-2 rounded transition-colors">
              <span className="text-terminal-cyan font-mono">whoami</span>
              <span className="text-terminal-gray">-</span>
              <span className="text-terminal-white">Display profile information</span>
            </div>
            <div className="flex items-center space-x-3 hover:bg-terminal-dark/50 p-2 rounded transition-colors">
              <span className="text-terminal-cyan font-mono">skills</span>
              <span className="text-terminal-gray">-</span>
              <span className="text-terminal-white">Show technical expertise</span>
            </div>
            <div className="flex items-center space-x-3 hover:bg-terminal-dark/50 p-2 rounded transition-colors">
              <span className="text-terminal-cyan font-mono">projects</span>
              <span className="text-terminal-gray">-</span>
              <span className="text-terminal-white">List featured projects</span>
            </div>
            <div className="flex items-center space-x-3 hover:bg-terminal-dark/50 p-2 rounded transition-colors">
              <span className="text-terminal-cyan font-mono">contact</span>
              <span className="text-terminal-gray">-</span>
              <span className="text-terminal-white">Display contact information</span>
            </div>
            <div className="flex items-center space-x-3 hover:bg-terminal-dark/50 p-2 rounded transition-colors">
              <span className="text-terminal-cyan font-mono">clear</span>
              <span className="text-terminal-gray">-</span>
              <span className="text-terminal-white">Clear terminal screen</span>
            </div>
          </div>
          <div className="mt-4 p-3 border-l-2 border-terminal-green-dim bg-terminal-dark/30 rounded-r">
            <div className="text-terminal-yellow text-xs">
              💡 <strong>Tip:</strong> Use ↑/↓ arrow keys to navigate command history
            </div>
          </div>
        </div>
      )
    },
    whoami: {
      description: 'Display profile information',
      execute: () => <ProfileSection />
    },
    skills: {
      description: 'Show technical skills',
      execute: () => <TechnicalSkills />
    },
    projects: {
      description: 'List featured projects',
      execute: () => <FeaturedProjects />
    },
    contact: {
      description: 'Display contact information',
      execute: () => <ContactSection />
    },
    clear: {
      description: 'Clear terminal screen',
      execute: () => null
    }
  };

  const executeCommand = (cmd: string, isAutomatic = false) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    // Add command to history only if not automatic
    if (trimmedCmd && !isAutomatic) {
      setCommandHistory(prev => [...prev, trimmedCmd]);
    }
    
    // Add command line to terminal
    const commandLine: TerminalLine = {
      type: 'command',
      content: (
        <div className="flex items-start space-x-1 md:space-x-2 flex-wrap animate-fade-in">
          <span className="text-terminal-cyan text-xs md:text-sm flex-shrink-0">
            <span className="text-terminal-green">adiraj@portfolio</span>
            <span className="text-terminal-white">:</span>
            <span className="text-terminal-cyan">~</span>
            <span className="text-terminal-white">$ </span>
          </span>
          <span className="text-terminal-white text-xs md:text-sm break-all">{cmd}</span>
        </div>
      ),
      timestamp: Date.now()
    };

    if (trimmedCmd === 'clear') {
      setLines([]);
      return;
    }

    setIsTyping(true);
    
    setTimeout(() => {
      const command = commands[trimmedCmd as keyof typeof commands];
      
      if (command) {
        const output = command.execute();
        setLines(prev => [
          ...prev,
          commandLine,
          ...(output ? [{
            type: 'output' as const,
            content: <div className="animate-fade-in">{output}</div>,
            timestamp: Date.now()
          }] : [])
        ]);
      } else if (trimmedCmd) {
        setLines(prev => [
          ...prev,
          commandLine,
          {
            type: 'error',
            content: (
              <div className="text-terminal-red text-xs md:text-sm animate-fade-in">
                <div className="flex items-center space-x-2">
                  <span>❌</span>
                  <span>bash: {trimmedCmd}: command not found</span>
                </div>
                <div className="mt-1 text-terminal-yellow">
                  💡 Type 'help' to see available commands.
                </div>
              </div>
            ),
            timestamp: Date.now()
          }
        ]);
      } else {
        setLines(prev => [...prev, commandLine]);
      }
      setIsTyping(false);
    }, 100);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      executeCommand(currentInput);
      setCurrentInput('');
      setHistoryIndex(-1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setCurrentInput('');
      }
    }
  };

  // Auto-execute whoami command after initial load
  useEffect(() => {
    if (!hasAutoExecuted) {
      const timer = setTimeout(() => {
        executeCommand('whoami', true);
        setHasAutoExecuted(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [hasAutoExecuted]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div 
      className="h-full flex flex-col font-mono text-xs md:text-sm"
      onClick={() => inputRef.current?.focus()}
    >
      <div 
        ref={terminalRef}
        className="flex-1 overflow-y-auto p-3 md:p-6 space-y-3 md:space-y-4"
        style={{ maxHeight: 'calc(100vh - 200px)' }}
      >
        {lines.map((line, index) => (
          <div key={index} className={`${line.type === 'error' ? 'text-terminal-red' : ''}`}>
            {line.content}
          </div>
        ))}
        {isTyping && (
          <div className="flex items-center space-x-2 text-terminal-gray">
            <div className="flex space-x-1">
              <div className="w-1 h-1 bg-terminal-green rounded-full animate-bounce"></div>
              <div className="w-1 h-1 bg-terminal-green rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-1 h-1 bg-terminal-green rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
            <span className="text-xs">Processing...</span>
          </div>
        )}
      </div>
      
      <div className="p-3 md:p-6 border-t border-terminal-green-dim bg-terminal-dark/20">
        <div className="flex items-center space-x-1 md:space-x-2">
          <span className="text-terminal-cyan text-xs md:text-sm flex-shrink-0">
            <span className="text-terminal-green">adiraj@portfolio</span>
            <span className="text-terminal-white">:</span>
            <span className="text-terminal-cyan">~</span>
            <span className="text-terminal-white">$ </span>
          </span>
          <input
            ref={inputRef}
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent text-terminal-white outline-none border-none text-xs md:text-sm placeholder-terminal-gray/50"
            placeholder=""
            autoComplete="off"
            disabled={isTyping}
          />
          <span className="terminal-cursor text-terminal-green-bright"></span>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTerminal;
