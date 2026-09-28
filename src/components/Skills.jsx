import './Skills.css'

const groups = [
  {
    title: 'Frontend',
    items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Next.js'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express', 'PostgreSQL', 'REST APIs', 'GraphQL'],
  },
  {
    title: 'Tools & Others',
    items: ['Git', 'Docker', 'Linux', 'CI/CD', 'Figma'],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="reveal">
        <p className="section-label">// skills</p>
        <h2 className="section-title">
          My <span className="gradient-text">toolbox</span>
        </h2>
      </div>
      <div className="skills__grid">
        {groups.map((group, i) => (
          <div className="skills__card reveal" key={group.title} style={{ transitionDelay: `${i * 0.12}s` }}>
            <h3 className="skills__card-title">{group.title}</h3>
            <ul className="skills__list">
              {group.items.map((item) => (
                <li key={item} className="skills__chip">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
