import './Skills.css'

const groups = [
  {
    title: 'Systems & Backend',
    items: ['Rust', 'Zig', 'Python', 'eBPF / XDP', 'Tor / P2P'],
  },
  {
    title: 'Frontend & Apps',
    items: ['GTK4 / Libadwaita', 'Jetpack Compose', 'QML', 'React', 'JavaScript'],
  },
  {
    title: 'Platforms & Tools',
    items: ['Linux (Fedora / Atomic)', 'Android', 'Flatpak / OSTree', 'Git', 'Docker'],
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
