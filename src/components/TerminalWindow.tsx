
import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';

interface TerminalWindowProps {
  children: React.ReactNode;
  title?: string;
}

const TerminalWindow = ({ children, title = "adiraj@portfolio:~$" }: TerminalWindowProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Card className="terminal-window bg-terminal-black border-terminal-green border-2 rounded-xl overflow-hidden shadow-2xl backdrop-blur-sm">
      {/* Terminal Header */}
      <div className="bg-gradient-to-r from-terminal-dark to-terminal-black border-b border-terminal-green-dim p-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-terminal-red hover:bg-red-400 transition-colors cursor-pointer shadow-lg"></div>
          <div className="w-3 h-3 rounded-full bg-terminal-yellow hover:bg-yellow-400 transition-colors cursor-pointer shadow-lg"></div>
          <div className="w-3 h-3 rounded-full bg-terminal-green hover:bg-green-400 transition-colors cursor-pointer shadow-lg"></div>
        </div>
        <div className="text-terminal-white text-sm font-mono flex items-center space-x-2">
          <span className="hidden sm:inline">📟</span>
          <span>{title}</span>
        </div>
        <div className="w-20 flex justify-end">
          <div className="text-terminal-gray text-xs">●●●</div>
        </div>
      </div>
      
      {/* Terminal Content */}
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 transform translate-y-4'}`}>
        {children}
      </div>
    </Card>
  );
};

export default TerminalWindow;
