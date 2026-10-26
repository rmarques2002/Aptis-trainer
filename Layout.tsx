import { NavLink, Outlet } from 'react-router-dom';

const links = [
  { to: '/', label: 'Dashboard', ico: '◧', end: true },
  { to: '/grammar', label: 'Grammar & Vocab', ico: 'Aa' },
  { to: '/reading', label: 'Reading', ico: '¶' },
  { to: '/listening', label: 'Listening', ico: '♪' },
  { to: '/speaking', label: 'Speaking', ico: '🎙' },
  { to: '/writing', label: 'Writing', ico: '✎' },
  { to: '/exam', label: 'Simulacro completo', ico: '◈' },
  { to: '/stats', label: 'Estadísticas', ico: '▤' },
  { to: '/guide', label: 'Guía y recursos', ico: 'ⓘ' },
];

export function Layout() {
  return (
    <div className="app">
      <aside className="rail">
        <div className="brand">
          Aptis<span className="tag">B2</span>
        </div>
        <div className="brand-sub">Preparación ESOL General · objetivo B2 / B2.2</div>
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.end}
            className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
          >
            <span className="ico">{l.ico}</span>
            {l.label}
          </NavLink>
        ))}
        <div className="rail-foot">
          Ejercicios originales inspirados en el formato oficial del British Council. No contienen
          material protegido ni preguntas reales del examen.
        </div>
      </aside>
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}
