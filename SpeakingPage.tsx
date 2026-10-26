import { useRef, useState } from 'react';
import { speakingPrompts } from '../data';
import type { SpeakingPrompt } from '../types';
import { LevelBadge, TopicBadge } from '../components/Bits';
import { Timer } from '../components/Timer';
import { SceneView, QuestionSteps } from '../components/SceneView';
import { addResponse, uid } from '../utils/storage';
import { useProgress } from '../state';

const CHECK = [
  { key: 'fluency', label: 'Fluidez: hablé sin pausas largas ni titubeos constantes' },
  { key: 'grammar', label: 'Gramática: usé variedad de estructuras con precisión' },
  { key: 'vocabulary', label: 'Vocabulario: usé léxico variado y colocaciones naturales' },
  { key: 'pronunciation', label: 'Pronunciación: se me entiende con claridad' },
  { key: 'coherence', label: 'Coherencia: organicé las ideas con conectores' },
];

const PARTS = [1, 2, 3, 4] as const;

export function SpeakingPage() {
  const { refresh } = useProgress();
  const [part, setPart] = useState<1 | 2 | 3 | 4>(1);
  const [idx, setIdx] = useState(0);

  const pool = speakingPrompts.filter((p) => p.part === part);
  const prompt = pool[idx % pool.length] as SpeakingPrompt;

  return (
    <div>
      <h1>Speaking</h1>
      <p className="lead">
        Prompts al estilo Aptis con temporizador y grabación por micrófono. La autoevaluación B2 y la
        respuesta de ejemplo te ayudan a calibrar tu nivel (no hay corrección automática avanzada).
      </p>

      <div className="tabs">
        {PARTS.map((p) => (
          <button
            key={p}
            className={`tab${part === p ? ' active' : ''}`}
            onClick={() => {
              setPart(p);
              setIdx(0);
            }}
          >
            Part {p}
          </button>
        ))}
      </div>

      <SpeakingCard
        key={prompt.id}
        prompt={prompt}
        onSaved={refresh}
        onNext={() => setIdx((i) => (i + 1) % pool.length)}
      />
    </div>
  );
}

function SpeakingCard({
  prompt,
  onSaved,
  onNext,
}: {
  prompt: SpeakingPrompt;
  onSaved: () => void;
  onNext: () => void;
}) {
  const [running, setRunning] = useState(false);
  const [prepRunning, setPrepRunning] = useState(false);
  const [qIdx, setQIdx] = useState(0);
  const qs = prompt.questions;
  const [recording, setRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [showSample, setShowSample] = useState(false);
  const [checks, setChecks] = useState<Record<string, boolean>>({});
  const [error, setError] = useState<string | null>(null);

  const recRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  async function startRecording() {
    setError(null);
    setQIdx(0);
    setPrepRunning(false);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const rec = new MediaRecorder(stream);
      chunksRef.current = [];
      rec.ondataavailable = (e) => e.data.size > 0 && chunksRef.current.push(e.data);
      rec.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
        setAudioUrl(URL.createObjectURL(blob));
        stream.getTracks().forEach((t) => t.stop());
      };
      recRef.current = rec;
      rec.start();
      setRecording(true);
      setRunning(true);
    } catch {
      setError(
        'No se pudo acceder al micrófono. Puedes practicar igualmente en voz alta usando el temporizador.',
      );
      setRunning(true);
    }
  }

  function stopRecording() {
    recRef.current?.state === 'recording' && recRef.current.stop();
    setRecording(false);
    setRunning(false);
    setShowSample(true);
  }

  function toggle(key: string) {
    setChecks((c) => ({ ...c, [key]: !c[key] }));
  }

  function save() {
    addResponse({
      id: uid('sp'),
      promptId: prompt.id,
      skill: 'speaking',
      date: new Date().toISOString(),
      checklist: checks,
    });
    onSaved();
  }

  return (
    <div className="card">
      <div className="qhead">
        <span className="qcount">
          Part {prompt.part} ·{' '}
          {qs && !prompt.prepSeconds
            ? `${qs.length} preguntas · ${prompt.seconds}s cada una`
            : prompt.prepSeconds
            ? `${prompt.prepSeconds}s de preparación + ${prompt.seconds / 60} min hablando`
            : `${prompt.seconds}s por respuesta`}
        </span>
        <div className="row">
          <LevelBadge level={prompt.level} />
          <TopicBadge topic={prompt.topic} />
        </div>
      </div>

      <p style={{ fontSize: 17, fontWeight: 600, whiteSpace: 'pre-wrap' }}>{prompt.prompt}</p>
      <SceneView scenes={prompt.scenes} />
      {qs && <QuestionSteps questions={qs} current={recording || audioUrl ? qIdx : -1} />}

      {prompt.prepSeconds && !recording && !audioUrl && (
        <div className="notice" style={{ marginTop: 12 }}>
          <div className="row between">
            <span>
              <strong>Preparación:</strong> toma notas breves y organiza tus ideas. Al acabar, empieza a
              grabar.
            </span>
            <div className="row">
              <Timer
                seconds={prompt.prepSeconds}
                running={prepRunning}
                resetKey={prompt.id + '-prep'}
                onExpire={() => {
                  setPrepRunning(false);
                  startRecording();
                }}
              />
              {!prepRunning && (
                <button className="btn btn-ghost btn-sm" onClick={() => setPrepRunning(true)}>
                  ▶ Preparar
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="row between" style={{ marginTop: 12 }}>
        <Timer
          seconds={prompt.seconds}
          running={running}
          resetKey={`${prompt.id}-${qIdx}`}
          onExpire={() => (qs && qIdx < qs.length - 1 ? setQIdx(qIdx + 1) : stopRecording())}
        />
        <div className="row">
          {qs && recording && qIdx < qs.length - 1 && (
            <button className="btn btn-ghost" onClick={() => setQIdx(qIdx + 1)}>
              Siguiente pregunta →
            </button>
          )}
          {!recording ? (
            <button className="btn btn-primary" onClick={startRecording}>
              ● Grabar respuesta
            </button>
          ) : (
            <button className="btn btn-danger" onClick={stopRecording}>
              ■ Detener
            </button>
          )}
          <button className="btn btn-ghost" onClick={() => setShowSample((s) => !s)}>
            {showSample ? 'Ocultar ejemplo' : 'Ver ejemplo B2'}
          </button>
        </div>
      </div>

      {error && <div className="notice" style={{ marginTop: 14 }}>{error}</div>}

      {audioUrl && (
        <div style={{ marginTop: 16 }}>
          <div className="small muted" style={{ marginBottom: 6 }}>
            Tu grabación (guardada solo en esta sesión del navegador):
          </div>
          <audio controls src={audioUrl} style={{ width: '100%' }} />
        </div>
      )}

      <div style={{ marginTop: 20 }}>
        <h3>Autoevaluación B2</h3>
        {CHECK.map((c) => (
          <label key={c.key} className="check">
            <input type="checkbox" checked={!!checks[c.key]} onChange={() => toggle(c.key)} />
            {c.label}
          </label>
        ))}
      </div>

      {showSample && (
        <div className="explain ok" style={{ marginTop: 16, whiteSpace: 'pre-wrap' }}>
          <strong>Ejemplo de respuesta B2{qs ? ' (primera pregunta)' : ''}</strong>
          <br />
          {prompt.sampleAnswer}
        </div>
      )}

      <div className="row between" style={{ marginTop: 20 }}>
        <button className="btn btn-ghost" onClick={save}>
          💾 Guardar autoevaluación
        </button>
        <button className="btn btn-quiet" onClick={onNext}>
          Otro prompt →
        </button>
      </div>
    </div>
  );
}
