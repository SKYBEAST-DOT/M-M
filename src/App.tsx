const socialLinks = [
  {
    label: 'Email',
    href: 'mailto:sagarkumar86926@gmail.com',
  },
  {
    label: 'Call',
    href: 'tel:+919398009372',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sagar-kumar-3ba074335/',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/SKYBEAST-DOT',
  },
]

const skills = [
  'Customer Communication',
  'Team Collaboration',
  'Problem Solving',
  'Documentation',
  'MS Office',
  'Python Basics',
  'SQL Fundamentals',
  'Time Management',
  'Quick Learning',
]

const projects = [
  {
    title: 'AI Assistant Interface Project',
    href: 'https://github.com/SKYBEAST-DOT/GAISTUDASS',
    description:
      'Developed an AI-based assistant interface to improve communication and workflow coordination. Worked on interactive response handling and task management concepts.',
    tech: ['React', 'TypeScript', 'AI'],
  },
  {
    title: 'Data Management Project',
    href: 'https://github.com/SKYBEAST-DOT/AIDAASS',
    description:
      'Organized and managed structured datasets while preparing accurate reports and maintaining documentation practices.',
    tech: ['SQL', 'Reporting', 'Data Analysis'],
  },
  {
    title: 'Team Coordination Activity',
    href: 'https://github.com/SKYBEAST-DOT/Team-Coordination-Activity',
    description:
      'Worked collaboratively in a student team environment to complete assigned tasks efficiently and improve coordination skills.',
    tech: ['Teamwork', 'Communication', 'Coordination'],
  },
]

function App() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <main className="space-y-8">
        <section className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm sm:p-10">
          <p className="text-sm font-medium uppercase tracking-wide text-gray-500">Student Portfolio</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Sagar Kumar
          </h1>
          <p className="mt-2 text-lg text-gray-700">
            B.Sc Computer Science &amp; Cognitive Systems Student
          </p>
          <p className="mt-1 text-sm text-gray-500">Hyderabad, Telangana</p>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-700">
            I am a communication-focused computer science student interested in practical technology
            solutions that improve teamwork, service quality, and day-to-day workflows.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                className="rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:-translate-y-0.5 hover:border-gray-400 hover:shadow-sm"
              >
                {link.label}
              </a>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">About</h2>
          <p className="mt-4 text-base leading-relaxed text-gray-700">
            I bring strong communication skills, dependable teamwork, and a customer-oriented mindset
            to every project. I enjoy solving practical problems, learning quickly, and adapting to
            new tools and responsibilities. With a growing foundation in technology, I aim to support
            teams through clear documentation, organized execution, and thoughtful collaboration.
          </p>
        </section>

        <section className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">Skills</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <div
                key={skill}
                className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-white hover:shadow-sm"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">Projects</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="flex h-full flex-col rounded-xl border border-gray-200 bg-gray-50 p-5 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-sm"
              >
                <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                <p className="mt-3 flex-grow text-sm leading-relaxed text-gray-700">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-gray-300 bg-white px-3 py-1 text-xs font-medium text-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex w-fit rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-800 transition hover:border-gray-400 hover:shadow-sm"
                >
                  View Project
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">Education</h2>
          <div className="mt-5 rounded-xl border border-gray-200 bg-gray-50 p-5">
            <h3 className="text-lg font-semibold text-gray-900">
              B.Sc Computer Science &amp; Cognitive Systems
            </h3>
            <p className="mt-2 text-sm text-gray-700">Expected Graduation: 2026</p>
            <p className="mt-1 text-sm text-gray-700">CGPA: 9.12 (Sem 1), 8.87 (Sem 2)</p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
