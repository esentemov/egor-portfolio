import { Mail, Linkedin, Github } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl lg:text-6xl font-bold mb-4 text-[#B7F34D]">
          GET IN TOUCH
        </h2>
        <p className="text-sm text-gray-400 mb-12 max-w-xl">
          Available for product analytics roles, consulting, and product building collaborations.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs text-gray-500 mb-2 tracking-wide">NAME</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded focus:border-[#B7F34D] focus:outline-none transition-colors text-sm"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label className="block text-xs text-gray-500 mb-2 tracking-wide">EMAIL</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded focus:border-[#B7F34D] focus:outline-none transition-colors text-sm"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label className="block text-xs text-gray-500 mb-2 tracking-wide">MESSAGE</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded focus:border-[#B7F34D] focus:outline-none transition-colors resize-none text-sm"
                placeholder="Tell me about your project or role..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#B7F34D] text-black px-6 py-2 rounded font-semibold hover:bg-[#a5e03b] transition-colors text-sm mt-6"
            >
              SEND
            </button>
          </form>

          <div className="space-y-6">
            <div>
              <h3 className="text-sm text-gray-500 mb-3 tracking-wide">DIRECT</h3>
              <div className="space-y-2">
                <a
                  href="mailto:egor@example.com"
                  className="flex items-center gap-3 p-2 hover:text-[#B7F34D] transition-colors group text-sm"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span>egor@example.com</span>
                </a>

                <a
                  href="https://linkedin.com/in/egorsentemov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-2 hover:text-[#B7F34D] transition-colors group text-sm"
                >
                  <Linkedin className="w-4 h-4 flex-shrink-0" />
                  <span>linkedin.com/in/egorsentemov</span>
                </a>

                <a
                  href="https://github.com/egorsentemov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-2 hover:text-[#B7F34D] transition-colors group text-sm"
                >
                  <Github className="w-4 h-4 flex-shrink-0" />
                  <span>github.com/egorsentemov</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm text-gray-500 mb-3 tracking-wide">INTERESTS</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-[#B7F34D] rounded-full mt-1.5 flex-shrink-0" />
                  <span>Senior Product Analyst roles</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-[#B7F34D] rounded-full mt-1.5 flex-shrink-0" />
                  <span>Analytics consulting</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-[#B7F34D] rounded-full mt-1.5 flex-shrink-0" />
                  <span>Product collaborations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-6 border-t border-white/10 text-center text-gray-600 text-xs">
        <p>© 2026 Egor Sentemov. Built with React, Supabase.</p>
      </div>
    </section>
  );
}
