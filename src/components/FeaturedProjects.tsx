
const FeaturedProjects = () => {
  const projects = [
    {
      name: "Data Analysis Tool",
      stack: "Python, Pandas, Matplotlib",
      insight: "Data-savvy, backend-capable",
      metrics: "Advanced data processing & visualization"
    },
    {
      name: "Inventory Management System", 
      stack: "C/C++ with ncurses",
      insight: "Systems-level understanding, CLI skills",
      metrics: "Real-time inventory tracking"
    },
    {
      name: "Algorithm Visualizer",
      stack: "C++, SFML",
      insight: "Strong grasp of algorithms + visualization",
      metrics: "Interactive algorithm demonstrations"
    },
    {
      name: "GTA 6 Demo / BTD Union / Porsche GT3",
      stack: "Vite, React, TypeScript, Tailwind, shadcn",
      insight: "Creative, UI-heavy, high-performance frontend skills",
      metrics: "95% faster load times, responsive design"
    }
  ];

  return (
    <div className="space-y-4">
      <div className="text-terminal-green text-lg font-bold">🧰 Featured Projects Reveal:</div>
      
      {/* Table Header */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-terminal-cyan text-sm font-semibold border-b border-terminal-green-dim pb-2 mt-6">
        <div>Project</div>
        <div>Stack</div>
        <div>What it Says About You</div>
        <div className="hidden md:block">Metrics</div>
      </div>
      
      {/* Project Entries */}
      <div className="space-y-3">
        {projects.map((project, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 py-3 border-l-2 border-terminal-green-dim pl-4 hover:border-terminal-green transition-colors">
            <div className="text-terminal-white font-medium text-sm">{project.name}</div>
            <div className="text-terminal-yellow text-xs">{project.stack}</div>
            <div className="text-terminal-green text-xs">{project.insight}</div>
            <div className="text-terminal-gray text-xs md:block hidden">{project.metrics}</div>
          </div>
        ))}
      </div>
      
      {/* Performance Stats */}
      <div className="mt-8 p-4 border border-terminal-green-dim rounded bg-terminal-dark/30">
        <div className="text-terminal-cyan text-base font-semibold mb-3">📊 Performance Highlights:</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-terminal-green text-sm">⚡ 95% Faster Load Times</div>
          <div className="text-terminal-yellow text-sm">💰 60% Cost Reduction</div>
          <div className="text-terminal-white text-sm">📱 Mobile-First Design</div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
