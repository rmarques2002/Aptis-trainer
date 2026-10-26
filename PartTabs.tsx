import { useState, type ReactNode } from 'react';

/** Section page with one tab per official part. */
export function PartTabs({
  title,
  intro,
  tabs,
}: {
  title: string;
  intro: string;
  tabs: { label: string; content: ReactNode }[];
}) {
  const [i, setI] = useState(0);
  return (
    <div>
      <h1>{title}</h1>
      <p className="lead">{intro}</p>
      <div className="tabs" style={{ flexWrap: 'wrap' }}>
        {tabs.map((t, k) => (
          <button key={t.label} className={`tab${i === k ? ' active' : ''}`} onClick={() => setI(k)}>
            {t.label}
          </button>
        ))}
      </div>
      {/* key forces a fresh state when switching tab */}
      <div key={i}>{tabs[i].content}</div>
    </div>
  );
}
