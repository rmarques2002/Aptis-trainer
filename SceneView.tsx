import { SCENES } from '../data/scenes';

/** Shows the illustration(s) of a Speaking Part 2/3 prompt. */
export function SceneView({ scenes }: { scenes?: string[] }) {
  if (!scenes?.length) return null;
  return (
    <div className="grid grid-2" style={{ gap: 10, margin: '10px 0 6px', gridTemplateColumns: scenes.length === 1 ? '1fr' : undefined }}>
      {scenes.map((k) => {
        const sc = SCENES[k];
        if (!sc) return null;
        return (
          <figure key={k} style={{ margin: 0, maxWidth: scenes.length === 1 ? 480 : undefined }}>
            <div
              style={{ borderRadius: 10, overflow: 'hidden', border: '1px solid var(--line)', lineHeight: 0 }}
              dangerouslySetInnerHTML={{ __html: sc.svg }}
            />
            <figcaption className="small muted" style={{ marginTop: 4 }}>Ilustración: {sc.label.toLowerCase()}</figcaption>
          </figure>
        );
      })}
    </div>
  );
}

/** Question list with the current one highlighted. */
export function QuestionSteps({ questions, current }: { questions: string[]; current: number }) {
  return (
    <ol style={{ paddingLeft: 20, margin: '8px 0', lineHeight: 1.6 }}>
      {questions.map((q, k) => (
        <li
          key={k}
          style={{
            fontWeight: k === current ? 700 : 400,
            color: k < current ? 'var(--text-soft)' : 'var(--text)',
            textDecoration: k < current ? 'line-through' : undefined,
          }}
        >
          {q}
        </li>
      ))}
    </ol>
  );
}
