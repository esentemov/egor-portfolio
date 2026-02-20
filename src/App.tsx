import Hero from './components/Hero';
import WhatIDo from './components/WhatIDo';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative overflow-x-hidden">
      <Navigation />
      <Hero />
      <WhatIDo />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
