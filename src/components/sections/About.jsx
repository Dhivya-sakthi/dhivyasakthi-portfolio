import { RevealScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "Git",
    "GitHub",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealScroll >
      <div className="max-w-5xl mx-auto px-4 space-y-12">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          About Me
        </h2>

        {/* About Description */}
        <div className="glass rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6 leading-relaxed">
          I'm a passionate and detail-oriented Front-End Developer with a strong focus on building responsive, user-friendly, and visually appealing web applications. I enjoy turning ideas into functional digital experiences using React.js, Next.js, and Tailwind CSS.
          </p>

          {/* Skills */}
          <div>
            <h3 className="text-xl font-bold mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {frontendSkills.map((tech) => (
                <span
                  key={tech}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Education & Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Education */}
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Education</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong>B.Sc Computer Science</strong> — Government Arts College,
                Paramakudi (2022–2025)
              </li>
              <li>
                Higher Secondary — SNV Government Model School
              </li>
              <li>
                Secondary — SNV Government Model School
              </li>
            </ul>
          </div>

          {/* Experience */}
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Experience</h3>
            <div className="space-y-6 text-gray-300">
              {/* Job 1 */}
              <div>
                <h4 className="font-semibold">
                  Junior Front-End Developer — Zinavo Private Limited (May 2025 – Aug 2025)
                </h4>
                <p className="mt-1 text-sm leading-relaxed">
                  Built responsive web applications using React.js, Next.js, and Tailwind CSS with mobile-first design.
                  Integrated REST APIs with CRUD operations, server-side pagination, and Zod-based form validation.
                  Developed an Admin Panel with role-based access and optimized performance via code splitting,
                  lazy loading, and reusable components.
                </p>
              </div>

              {/* Job 2 */}
              <div>
                <h4 className="font-semibold">
                  Web Development Intern — Astro Web Solutions (Dec 2024 – Mar 2025)
                </h4>
                <p className="mt-1 text-sm leading-relaxed">
                  Developed the Himalaya Ayurvedic website and a Hospital Management System using HTML, CSS, Bootstrap,
                  JavaScript, and React, focusing on responsive design and user-friendly interfaces during a 3-month
                  internship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </RevealScroll>
    </section>
  );
};
