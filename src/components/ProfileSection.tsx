
import TypewriterText from './TypewriterText';

const ProfileSection = () => {
  return (
    <div className="space-y-4">
      {/* ASCII Art Name - Mobile Optimized */}
      <div className="text-terminal-green font-mono leading-tight overflow-x-auto">
        <pre className="whitespace-pre text-[6px] xs:text-[8px] sm:text-xs md:text-sm lg:text-base">
{`
 █████╗ ██████╗ ██╗██████╗  █████╗      ██╗
██╔══██╗██╔══██╗██║██╔══██╗██╔══██╗     ██║
███████║██║  ██║██║██████╔╝███████║     ██║
██╔══██║██║  ██║██║██╔══██╗██╔══██║██   ██║
██║  ██║██████╔╝██║██║  ██║██║  ██║╚█████╔╝
╚═╝  ╚═╝╚═════╝ ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚════╝ 
                                             
██╗  ██╗ █████╗ ███████╗██╗  ██╗██╗   ██╗ █████╗ ██████╗ 
██║ ██╔╝██╔══██╗██╔════╝██║  ██║╚██╗ ██╔╝██╔══██╗██╔══██╗
█████╔╝ ███████║███████╗███████║ ╚████╔╝ ███████║██████╔╝
██╔═██╗ ██╔══██║╚════██║██╔══██║  ╚██╔╝  ██╔══██║██╔═══╝ 
██║  ██╗██║  ██║███████║██║  ██║   ██║   ██║  ██║██║     
╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝     
`}
        </pre>
      </div>

      {/* Profile Picture and Basic Info - Mobile Optimized */}
      <div className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-4 mt-4">
        <div className="flex-shrink-0 mx-auto sm:mx-0">
          <img 
            src="/lovable-uploads/51fc6f73-fe29-422e-a6fe-8ff2aafe6abb.png"
            alt="Adiraj Kashyap Profile"
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full profile-image"
          />
        </div>
        
        <div className="flex-1 space-y-2 text-center sm:text-left">
          <div className="space-y-1 text-xs md:text-sm">
            <div className="text-terminal-white font-medium">Adiraj Kashyap - Full Stack Developer & UI/UX Designer</div>
            <div className="text-terminal-gray">Location: India 🇮🇳</div>
            <div className="text-terminal-green">Status: Available for new opportunities</div>
            <div className="text-terminal-yellow">Specialization: Modern web technologies, system programming, UI/UX design</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
