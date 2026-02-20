import { ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  details: string;
  tags: string[];
  image: string;
}

const projects: Project[] = [
  {
    title: 'Wishflow',
    description: 'Wishlist platform built with Next.js & Supabase',
    details: 'Full analytics architecture, payments, product experimentation',
    tags: ['Product Analytics', 'Full-stack', 'Experimentation'],
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Lisa Books',
    description: 'E-commerce platform',
    details: 'Custom pricing engine, analytics tracking, monetization logic',
    tags: ['Product Analytics', 'Monetization', 'Full-stack'],
    image: 'https://images.pexels.com/photos/1290141/pexels-photo-1290141.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Metric Tree Implementation',
    description: 'Company-wide KPI framework',
    details: 'Unified dashboards and decision system',
    tags: ['Product Analytics', 'KPI Systems', 'Data Infrastructure'],
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-6xl lg:text-7xl font-bold mb-12 text-[#B7F34D]">FEATURED PROJECTS</h2>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group border border-white/10 rounded-lg overflow-hidden hover:border-white/30 transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                <div className="lg:col-span-2 h-56 lg:h-auto overflow-hidden bg-white/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:opacity-75 transition-opacity duration-300"
                  />
                </div>

                <div className="lg:col-span-3 p-6 lg:p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold mb-2 group-hover:text-[#B7F34D] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-1">{project.description}</p>
                  <p className="text-xs text-gray-500 mb-4">{project.details}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 border border-[#B7F34D]/40 text-[#B7F34D] rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="flex items-center gap-1 text-[#B7F34D] text-sm hover:text-white transition-colors w-fit">
                    <span>View</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
