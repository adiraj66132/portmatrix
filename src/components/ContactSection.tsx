
const ContactSection = () => {
  const contacts = [
    { label: "GitHub", value: "github.com/adirajkashyap", icon: "🐙" },
    { label: "LinkedIn", value: "linkedin.com/in/adirajkashyap", icon: "💼" },
    { label: "Email", value: "adiraj.kashyap@email.com", icon: "📧" },
    { label: "Portfolio", value: "adirajkashyap.dev", icon: "🌐" }
  ];

  return (
    <div className="space-y-4">
      <div className="text-terminal-green text-lg font-bold">📞 Contact Information:</div>
      
      <div className="space-y-2">
        {contacts.map((contact, index) => (
          <div key={index} className="flex items-center space-x-3">
            <span className="text-terminal-cyan text-lg">{contact.icon}</span>
            <span className="text-terminal-yellow text-sm font-medium w-20">{contact.label}:</span>
            <span className="text-terminal-white text-sm hover:text-terminal-green cursor-pointer transition-colors">
              {contact.value}
            </span>
          </div>
        ))}
        
        <div className="mt-6 pt-4 border-t border-terminal-green-dim">
          <div className="text-terminal-gray text-xs italic">
            💡 Fun Fact: This entire portfolio was built like a real terminal!
          </div>
          <div className="text-terminal-gray text-xs italic mt-1">
            Type 'help' for available commands... this time it's real! 😄
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
