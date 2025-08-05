
const TechnicalSkills = () => {
  const skills = [
    {
      category: "Frontend Excellence",
      tools: "React, Next.js, TypeScript, Tailwind CSS, Shadcn/UI",
      description: "Building modern, performant UIs using cutting-edge frontend technologies"
    },
    {
      category: "Backend & System Insight", 
      tools: "C/C++, Python, Node.js, System Programming",
      description: "Backend and low-level programming strength with terminal UIs"
    },
    {
      category: "Design-Oriented Thinking",
      tools: "Figma, Adobe Creative Suite, UI/UX Design",
      description: "Creative, user-first approach to design and development"
    },
    {
      category: "Performance & Optimization",
      tools: "SEO, Performance Metrics, Cost Optimization",
      description: "95% faster load times, 60% cost reduction achievements"
    },
    {
      category: "Mobile-First Development",
      tools: "Responsive Design, Cross-device Compatibility",
      description: "Mindful of responsiveness and cross-device user experience"
    }
  ];

  return (
    <div className="space-y-4">
      <div className="text-terminal-green text-lg font-bold">💻 Technical Skills Demonstrated:</div>
      
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index} className="border-l-2 border-terminal-green-dim pl-4 py-2">
            <div className="text-terminal-cyan text-base font-semibold">{skill.category}</div>
            <div className="mt-1 space-y-1">
              <div className="text-terminal-yellow text-sm">Tools: {skill.tools}</div>
              <div className="text-terminal-white text-sm">→ {skill.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnicalSkills;
