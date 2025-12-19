// src/App.jsx
import { useState } from 'react';
import { portfolioData } from './data';
import avatarImg from './assets/me.jpg';

function App() {
  // State mode bây giờ có thể là: 'ai', 'dotnet', hoặc 'fullstack'
  const [mode, setMode] = useState('ai');
  
  // Lấy data tương ứng với mode hiện tại
  const currentData = portfolioData[mode];

  // Cấu hình Theme cho 3 chế độ
  const themes = {
    ai: {
      bg: 'bg-slate-900',
      text: 'text-slate-100',
      textMuted: 'text-slate-400',
      cardBg: 'bg-slate-800 border-slate-700',
      primary: 'bg-blue-600 hover:bg-blue-700',
      accentText: 'text-blue-400',
      skillTag: 'bg-slate-700 text-blue-300',
      border: 'border-blue-500',
      label: 'AI MODE'
    },
    dotnet: {
      bg: 'bg-gray-50',
      text: 'text-gray-800',
      textMuted: 'text-gray-500',
      cardBg: 'bg-white border-gray-200',
      primary: 'bg-emerald-600 hover:bg-emerald-700',
      accentText: 'text-emerald-600',
      skillTag: 'bg-gray-200 text-emerald-800',
      border: 'border-emerald-500',
      label: '.NET MODE'
    },
    fullstack: {
      bg: 'bg-orange-50',
      text: 'text-gray-900',
      textMuted: 'text-gray-600',
      cardBg: 'bg-white border-orange-200',
      primary: 'bg-orange-600 hover:bg-orange-700',
      accentText: 'text-orange-600',
      skillTag: 'bg-orange-100 text-orange-800',
      border: 'border-orange-500',
      label: 'FULLSTACK'
    }
  };

  const theme = themes[mode];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${theme.bg} ${theme.text} font-sans selection:bg-opacity-30`}>
      
      {/* HEADER */}
      <header className="pt-16 pb-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="relative inline-block mb-6">
            <div className={`w-32 h-32 rounded-full overflow-hidden border-4 shadow-2xl ${theme.border}`}>
              <img 
                src={avatarImg} 
                alt="Lam The Vinh" 
                className="w-full h-full object-cover bg-gray-300" 
              />
            </div>
            {/* Status Badge */}
            <div className={`absolute bottom-0 right-0 px-3 py-1 text-xs font-bold text-white rounded-full shadow-lg ${theme.primary}`}>
              {theme.label}
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">{portfolioData.common.name}</h1>
          <p className="text-lg md:text-xl font-medium mb-2 opacity-90">{currentData.role}</p>
          <p className={`${theme.textMuted} text-sm`}>{portfolioData.common.education}</p>

          {/* TOGGLE SWITCH - 3 BUTTONS */}
          <div className="flex flex-wrap justify-center gap-2 mt-8 bg-gray-200/20 backdrop-blur-sm p-2 rounded-full inline-flex w-fit mx-auto border border-white/10">
            
            <button 
              onClick={() => setMode('ai')}
              className={`px-5 py-2 rounded-full font-bold text-sm transition-all duration-300 ${mode === 'ai' ? 'bg-blue-600 text-white shadow-lg scale-105' : 'text-gray-500 hover:text-gray-700'}`}
            >
              AI / Data
            </button>
            
            <button 
              onClick={() => setMode('dotnet')}
              className={`px-5 py-2 rounded-full font-bold text-sm transition-all duration-300 ${mode === 'dotnet' ? 'bg-emerald-600 text-white shadow-lg scale-105' : 'text-gray-500 hover:text-gray-700'}`}
            >
              .NET Dev
            </button>

            <button 
              onClick={() => setMode('fullstack')}
              className={`px-5 py-2 rounded-full font-bold text-sm transition-all duration-300 ${mode === 'fullstack' ? 'bg-orange-600 text-white shadow-lg scale-105' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Fullstack
            </button>

          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 pb-20">
        {/* OBJECTIVE */}
        <section className="mb-12 text-center max-w-2xl mx-auto">
          <p className={`text-lg leading-relaxed ${theme.textMuted}`}>
            "{currentData.objective}"
          </p>
        </section>

        {/* SKILLS */}
        <section className="mb-16">
          <h2 className={`text-2xl font-bold mb-6 flex items-center gap-2 ${theme.accentText}`}>
            <span className="text-3xl">⚡</span> Technical Arsenal
          </h2>
          <div className="flex flex-wrap gap-3">
            {currentData.skills.map((skill, idx) => (
              <span key={idx} className={`px-4 py-2 rounded-lg font-medium text-sm transition hover:-translate-y-1 ${theme.skillTag}`}>
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section>
          <h2 className={`text-2xl font-bold mb-8 flex items-center gap-2 ${theme.accentText}`}>
            <span className="text-3xl">🚀</span> Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {currentData.projects.map((proj, idx) => (
              <div key={idx} className={`group rounded-2xl p-6 border transition-all duration-300 hover:shadow-2xl flex flex-col h-full ${theme.cardBg}`}>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-gray-400 to-gray-600 transition-all">
                    <span className={theme.accentText}>{proj.name}</span>
                  </h3>
                </div>
                <p className={`text-sm font-mono mb-4 opacity-75`}>
                  🛠 {proj.tech}
                </p>
                <p className={`text-sm leading-relaxed mb-6 flex-grow ${theme.textMuted}`}>
                  {proj.desc}
                </p>
                <a 
                  href={proj.link}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex justify-center items-center py-2.5 px-4 rounded-xl font-bold text-sm text-white transition-transform active:scale-95 ${theme.primary}`}
                >
                  View Source Code
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className={`py-8 text-center border-t ${mode === 'ai' ? 'border-slate-800' : 'border-gray-200'}`}>
        <p className={theme.textMuted}>© 2025 {portfolioData.common.name}. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-3 text-sm font-medium">
          <a href={`mailto:${portfolioData.common.email}`} className="hover:underline">Email</a>
          <span>•</span>
          <a href={portfolioData.common.github} target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
        </div>
      </footer>
    </div>
  );
}

export default App;