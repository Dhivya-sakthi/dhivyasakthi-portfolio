
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import himalayaImg from "../../assets/himalaya.png";
import todolistImg from "../../assets/todolist.png";
import portfolioImg from "../../assets/portfolio.png";
import bookskyImg from "../../assets/booksky.png";
import { RevealScroll } from "../RevealOnScroll";





export const Projects = () => {
  const projects = [
    {
      title: "Portfolio",
      description:
        "Designed and developed a personal portfolio using React.js, Tailwind CSS, and responsive design principles to showcase projects, skills, and experience, with integrated contact form",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      image: portfolioImg,
      liveDemo: "https://Dhivya-sakthi.github.io/dhivyasakthi-portfolio",
      github: "https://github.com/Dhivya-sakthi/dhivyasakthi-portfolio.git",
    },
     {
      title: "ToDo List",
      description:
        "Developed a dynamic and interactive To-Do List using React. Features include adding, deleting, Moving Up and Down based on the tasks with Real-time updates. Utilized React Hooks like use State for State management and use Effect for local storage integration to persists Tasks. Designed a responsive and user-friendly UI for an enhanced user experience.",
      tech: ["HTML", "CSS", "JavaScript",'React'],
      image: todolistImg,
     liveDemo: "https://dhivya-sakthi.github.io/To-Do-List/",
      github: "https://github.com/Dhivya-sakthi/To-Do-List.git",
    },
    {
      title: "BookSky",
      description:
        "BookSky is a website built with HTML, CSS, and JavaScript. It allows users to add and delete books easily in a fun way, making book management simple and enjoyable.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: bookskyImg,
      liveDemo: "https://dhivya-sakthi.github.io/booksky--project/",
      github: "https://github.com/Dhivya-sakthi/booksky--project.git",
    },
    
    
    {
      title: "Himalaya Ayurvedic Website",
      description:
        "A responsive Ayurvedic products website developed using HTML, CSS, Bootstrap, and JavaScript, focusing on clean design and user-friendly navigation.",
      tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      image: himalayaImg,
      liveDemo: "https://your-himalaya-demo-link.com",
      github: "https://github.com/Dhivya-sakthi/Himalaya-webpage.git",
    },
    
   
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealScroll>
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4 border border-white/10"
              />

              {/* Project Title & Description */}
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-500/10 text-blue-500 py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-500/20 transition"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-500/10 text-blue-500 py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-500/20 transition"
                >
                  <FaGithub /> Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      </RevealScroll>
    </section>
  );
};
