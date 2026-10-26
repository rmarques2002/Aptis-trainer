import { useProgress } from '../state';
import {
  skillStats,
  frequentErrors,
  missedVocab,
  evolution,
  recommendations,
  overallScore,
  skillLabel,
} from '../utils/stats';
import { StatTile } from '../components/Bits';
import { formatDate } from '../utils/helpers';

export function StatsPage() {
  const { progress, reset } = useProgress();
  const stats = skillStats(progress);
  const errors = frequentErrors(progress);
  const vocab = missedVocab(progress);
  const evo = evolution(progress);
  const recs = recommendations(progress);
  const overall = overallScore(progress);

  const hasData = progress.attempts.length > 0;

  return (
    <div>
      <h1>Estadísticas</h1>
      <p className="lead">
        Tu evolución a partir de las secciones corregibles (Grammar, Reading, Listening). Todo se guarda
        localmente en tu navegador.
      </p>

      {!hasData && (
        <div className="card center">
          <p className="muted">
            Aún no hay datos. Completa alguna sesión de práctica o un simulacro y vuelve aquí.
          </p>
        </div>
      )}

      {hasData && (
        <>
          <div className="grid grid-3" style={{ marginBottom: 22 }}>
            <StatTile num={overall === null ? '—' : `${overall}%`} label="Media global" />
            <StatTile num={progress.attempts.length} label="Sesiones" />
            <StatTile num={progress.responses.length} label="Respuestas Writing/Speaking" small />
          </div>

          <h2>Aciertos por sección</h2>
          <div className="grid grid-3" style={{ marginBottom: 22 }}>
            {stats.map((s) => (
              <div className="card" key={s.skill}>
                <strong style={{ fontFamily: 'var(--font-display)' }}>{skillLabel(s.skill)}</strong>
                <div className="small muted" style={{ marginTop: 8, lineHeight: 1.9 }}>
                  Sesiones: {s.attempts}
                  <br />
                  Última: {s.lastScore === null ? '—' : `${s.lastScore}%`}
                  <br />
                  Mejor: {s.bestScore === null ? '—' : `${s.bestScore}%`} · Media:{' '}
                  {s.avgScore === null ? '—' : `${s.avgScore}%`}
                </div>
              </div>
            ))}
          </div>

          <h2>Evolución por fecha</h2>
          <div className="card" style={{ marginBottom: 22 }}>
            {evo.length === 0 ? (
              <p className="muted small">Sin sesiones registradas.</p>
            ) : (
              <div className="chart">
                {evo.slice(-12).map((e, i) => (
                  <div className="bar" key={i} title={`${e.date}: ${e.score}%`}>
                    <span className="val">{e.score}%</span>
                    <div
                      className="fill"
                      style={{
                        height: `${Math.max(6, e.score)}%`,
                        background:
                          e.score >= 75 ? 'var(--correct)' : e.score >= 50 ? 'var(--primary)' : 'var(--wrong)',
                      }}
                    />
                    <span className="cap">{e.date.slice(5)}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="grid grid-2" style={{ marginBottom: 22 }}>
            <div className="card">
              <h3>Errores más frecuentes</h3>
              {errors.length === 0 ? (
                <p className="muted small">Sin errores registrados. ¡Bien!</p>
              ) : (
                <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.9 }}>
                  {errors.map((e) => (
                    <li key={e.topic}>
                      {e.topic} <span className="chip">×{e.count}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="card">
              <h3>Vocabulario / respuestas falladas</h3>
              {vocab.length === 0 ? (
                <p className="muted small">Nada pendiente de repasar.</p>
              ) : (
                <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.7 }} className="small">
                  {vocab.map((v, i) => (
                    <li key={i}>{v}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <h2>Recomendaciones de estudio</h2>
          <div className="card" style={{ marginBottom: 22 }}>
            <ul style={{ margin: 0, paddingLeft: 20, lineHeight: 1.9 }}>
              {recs.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </div>

          <h2>Historial reciente</h2>
          <div className="card" style={{ marginBottom: 22 }}>
            <table className="rubric">
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Sección</th>
                  <th>Modo</th>
                  <th>Resultado</th>
                </tr>
              </thead>
              <tbody>
                {[...progress.attempts]
                  .sort((a, b) => b.date.localeCompare(a.date))
                  .slice(0, 12)
                  .map((a) => (
                    <tr key={a.id}>
                      <td>{formatDate(a.date)}</td>
                      <td style={{ textTransform: 'capitalize' }}>{skillLabel(a.skill)}</td>
                      <td>{a.mode === 'exam' ? 'Examen' : 'Práctica'}</td>
                      <td>
                        {a.correct}/{a.total} ·{' '}
                        {a.total ? Math.round((a.correct / a.total) * 100) : 0}%
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      <div className="card">
        <h3>Datos</h3>
        <p className="small muted">
          Todo tu progreso se guarda en el almacenamiento local del navegador. Puedes borrarlo por
          completo aquí.
        </p>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => {
            if (confirm('¿Seguro que quieres borrar todo tu progreso? Esta acción no se puede deshacer.')) {
              reset();
            }
          }}
        >
          Borrar todo el progreso
        </button>
      </div>
    </div>
  );
}
