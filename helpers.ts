// Small general-purpose helpers.

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Take up to n random items. */
export function sample<T>(arr: T[], n: number): T[] {
  return shuffle(arr).slice(0, n);
}

/** Deterministic PRNG (mulberry32) so a seeded exam form is always the same. */
function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function seedFromString(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/** Take up to n items chosen deterministically from a string seed (repeatable). */
export function seededSample<T>(arr: T[], n: number, seed: string): T[] {
  const rnd = mulberry32(seedFromString(seed));
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a.slice(0, n);
}

export function formatTime(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export function countWords(text: string): number {
  const t = text.trim();
  return t === '' ? 0 : t.split(/\s+/).length;
}

export function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' });
}

/**
 * Reduce a multiple-choice question to n options (official Aptis grammar and
 * listening use 3). Deterministic per question id, answer index remapped.
 */
export function trimOptions<Q extends { id: string; options: string[]; answer: number }>(q: Q, n = 3): Q {
  if (q.options.length <= n) return q;
  const correct = q.options[q.answer];
  const distractors = seededSample(
    q.options.filter((_, k) => k !== q.answer),
    n - 1,
    q.id + '-d',
  );
  const all = seededSample([correct, ...distractors], n, q.id + '-o');
  return { ...q, options: all, answer: all.indexOf(correct) };
}
