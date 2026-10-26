import type { Level } from '../types';

export function LevelBadge({ level }: { level: Level }) {
  return <span className={`badge badge-${level}`}>{level}</span>;
}

export function TopicBadge({ topic }: { topic: string }) {
  return <span className="badge badge-topic">{topic}</span>;
}

export function ProgressBar({ value, ok = false }: { value: number; ok?: boolean }) {
  return (
    <div className={`pbar${ok ? ' ok' : ''}`}>
      <span style={{ width: `${Math.max(0, Math.min(100, value))}%` }} />
    </div>
  );
}

export function StatTile({
  num,
  label,
  sub,
  small = false,
}: {
  num: React.ReactNode;
  label: string;
  sub?: string;
  small?: boolean;
}) {
  return (
    <div className="card stat">
      <div className={`num${small ? ' small' : ''}`}>{num}</div>
      <div className="lbl">{label}</div>
      {sub && <div className="sub">{sub}</div>}
    </div>
  );
}
