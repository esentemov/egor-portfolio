export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6 relative">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 z-10">
          <div>
            <h1 className="text-6xl lg:text-8xl font-bold leading-none mb-4">
              EGOR<br />SENTEMOV
            </h1>
            <h2 className="text-5xl lg:text-7xl font-bold text-[#B7F34D] leading-none">
              PRODUCT<br />ANALYTICS
            </h2>
          </div>

          <p className="text-xl text-gray-400 max-w-md">
            I design metric systems, run experiments, and build data-driven products.
          </p>

          <div className="flex gap-4">
            <button
              onClick={scrollToProjects}
              className="bg-[#B7F34D] text-black px-8 py-4 rounded-full font-medium hover:bg-[#a5e03b] transition-all"
            >
              View Projects
            </button>
            <button
              onClick={scrollToContact}
              className="border-2 border-white/20 px-8 py-4 rounded-full font-medium hover:border-[#B7F34D] hover:text-[#B7F34D] transition-all"
            >
              Contact
            </button>
          </div>
        </div>

        <div className="relative lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 flex justify-center lg:justify-end">
          <div className="relative w-[400px] h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Egor Sentemov"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
