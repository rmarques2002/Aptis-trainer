import { Link, useNavigate } from 'react-router-dom';
import { useProgress } from '../state';
import { overallScore, skillStats, recommendations, skillLabel } from '../utils/stats';
import { bankCounts } from '../data';
import { StatTile, ProgressBar } from '../components/Bits';

const sections = [
  { to: '/grammar', ico: 'Aa', name: 'Grammar & Vocab', key: 'grammar' as const },
  { to: '/reading', ico: '¶', name: 'Reading', key: 'reading' as const },
  { to: '/listening', ico: '♪', name: 'Listening', key: 'listening' as const },
  { to: '/speaking', ico: '🎙', name: 'Speaking', key: 'speaking' as const },
  { to: '/writing', ico: '✎', name: 'Writing', key: 'writing' as const },
];

export function Dashboard() {
  const { progress } = useProgress();
  const nav = useNavigate();
  const overall = overallScore(progress);
  const stats = skillStats(progress);
  const recs = recommendations(progress);
  const totalAttempts = progress.attempts.length;

  return (
    <div>
      <h1>Panel de estudio</h1>
      <p className="lead">
        Tu progreso hacia el nivel B2 / B2.2 del Aptis ESOL General. Practica por secciones o haz un
        simulacro completo cuando quieras medir tu nivel.
      </p>

      <div className="grid grid-3" style={{ marginBottom: 16 }}>
        <StatTile
          num={overall === null ? '—' : `${overall}%`}
          label="Media global (secciones corregibles)"
          sub={overall === null ? 'Sin datos todavía' : 'Objetivo B2 ≈ 70-80%'}
        />
        <StatTile num={totalAttempts} label="Sesiones completadas" />
        <StatTile
          num={progress.responses.length}
          label="Respuestas guardadas"
          sub="Writing y Speaking"
          small
        />
      </div>

      <div className="row" style={{ marginBottom: 26 }}>
        <button className="btn btn-primary" onClick={() => nav('/exam')}>
          ◈ Nuevo simulacro Aptis
        </button>
        <button className="btn btn-ghost" onClick={() => nav('/grammar')}>
          Practicar por sección
        </button>
      </div>

      <h2>Última puntuación por sección</h2>
      <div className="grid grid-3" style={{ marginBottom: 26 }}>
        {stats.map((s) => (
          <div className="card" key={s.skill}>
            <div className="row between" style={{ marginBottom: 10 }}>
              <strong style={{ fontFamily: 'var(--font-display)' }}>{skillLabel(s.skill)}</strong>
              <span className="chip">{s.attempts} sesiones</span>
            </div>
            {s.lastScore === null ? (
              <p className="small muted" style={{ margin: 0 }}>
                Sin intentos. <Link to={`/${s.skill}`}>Empezar →</Link>
              </p>
            ) : (
              <>
                <div className="row between" style={{ marginBottom: 6 }}>
                  <span className="small muted">Última</span>
                  <strong>{s.lastScore}%</strong>
                </div>
                <ProgressBar value={s.lastScore} ok={s.lastScore >= 70} />
                <div className="small muted" style={{ marginTop: 8 }}>
                  Mejor {s.bestScore}% · Media {s.avgScore}%
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      <h2>Recomendaciones automáticas</h2>
      <div className="card" style={{ marginBottom: 26 }}>
        <ul style={{ margin: 0, paddingLeft: 20, lineHeight: 1.9 }}>
          {recs.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </div>

      <h2>Secciones</h2>
      <div className="grid grid-auto">
        {sections.map((s) => (
          <Link key={s.to} to={s.to} className="card section-card">
            <span className="ico">{s.ico}</span>
            <span className="name">{s.name}</span>
            <span className="cnt">{bankCounts[s.key]} ejercicios</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
