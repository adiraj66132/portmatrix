import TypewriterText from './TypewriterText';

interface TerminalPromptProps {
  command: string;
  delay?: number;
  showPrompt?: boolean;
}

const TerminalPrompt = ({ command, delay = 0, showPrompt = true }: TerminalPromptProps) => {
  return (
    <div className="flex items-center space-x-2 mb-2">
      {showPrompt && (
        <span className="text-terminal-cyan">
          <span className="text-terminal-green">adiraj@portfolio</span>
          <span className="text-terminal-white">:</span>
          <span className="text-terminal-cyan">~</span>
          <span className="text-terminal-white">$ </span>
        </span>
      )}
      <TypewriterText 
        text={command} 
        delay={delay}
        className="text-terminal-white"
        speed={30}
      />
    </div>
  );
};

export default TerminalPrompt;