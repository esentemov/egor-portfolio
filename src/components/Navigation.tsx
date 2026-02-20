import { Mail, Linkedin, Github } from 'lucide-react';

export default function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-[#B7F34D] rounded-full animate-pulse" />
          <span className="text-sm text-gray-400">Available for Product & Analytics roles</span>
        </div>

        <div className="flex items-center gap-8">
          <button onClick={() => scrollToSection('hero')} className="text-gray-300 hover:text-[#B7F34D] transition-colors text-sm">
            Home
          </button>
          <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-[#B7F34D] transition-colors text-sm">
            About
          </button>
          <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-[#B7F34D] transition-colors text-sm">
            Projects
          </button>
          <button onClick={() => scrollToSection('contact')} className="bg-[#B7F34D] text-black px-6 py-2 rounded-full font-medium hover:bg-[#a5e03b] transition-all text-sm">
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
