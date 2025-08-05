
import TerminalWindow from '@/components/TerminalWindow';
import InteractiveTerminal from '@/components/InteractiveTerminal';
import MatrixBackground from '@/components/MatrixBackground';

const Index = () => {
  return (
    <div className="min-h-screen bg-terminal-black p-1 sm:p-2 md:p-4 lg:p-8 relative overflow-hidden">
      <MatrixBackground />
      
      {/* Ambient glow effect */}
      <div className="fixed inset-0 bg-gradient-radial from-terminal-green/5 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto space-y-3 sm:space-y-6 md:space-y-8 relative z-10">
        {/* Interactive Terminal Window */}
        <div className="transform transition-all duration-1000 hover:scale-[1.01]">
          <TerminalWindow title="portfolio@adiraj-kashyap:~$">
            <InteractiveTerminal />
          </TerminalWindow>
        </div>
        
        {/* Status bar */}
        <div className="flex justify-between items-center text-terminal-gray text-xs px-2 sm:px-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-terminal-green rounded-full animate-pulse"></div>
              <span>Online</span>
            </div>
            <div className="hidden sm:block">Last updated: {new Date().toLocaleDateString()}</div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="hidden md:block">Built with React + TypeScript</span>
            <span>⚡</span>
          </div>
        </div>
        
        {/* Footer */}
        <div className="text-center text-terminal-gray text-xs py-4">
          <div className="space-y-1">
            <p className="flex items-center justify-center space-x-2">
              <span>© 2024 Adiraj Kashyap</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Built with Terminal Aesthetics</span>
            </p>
            <p className="text-terminal-green-dim">
              <span className="animate-pulse">▲</span> Powered by Modern Web Technologies
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
