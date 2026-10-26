import type { Progress, Attempt, Skill } from '../types';

export interface SkillStat {
  skill: Skill;
  attempts: number;
  lastScore: number | null; // percentage 0-100
  bestScore: number | null;
  avgScore: number | null;
}

const AUTO_SKILLS: Skill[] = ['grammar', 'reading', 'listening'];

function pct(a: Attempt): number {
  return a.total === 0 ? 0 : Math.round((a.correct / a.total) * 100);
}

export function skillStats(p: Progress): SkillStat[] {
  return AUTO_SKILLS.map((skill) => {
    const list = p.attempts.filter((a) => a.skill === skill);
    if (list.length === 0) {
      return { skill, attempts: 0, lastScore: null, bestScore: null, avgScore: null };
    }
    const scores = list.map(pct);
    const last = pct([...list].sort((a, b) => a.date.localeCompare(b.date)).at(-1)!);
    return {
      skill,
      attempts: list.length,
      lastScore: last,
      bestScore: Math.max(...scores),
      avgScore: Math.round(scores.reduce((s, v) => s + v, 0) / scores.length),
    };
  });
}

/** Overall percentage across all auto-corrected attempts. */
export function overallScore(p: Progress): number | null {
  const auto = p.attempts.filter((a) => AUTO_SKILLS.includes(a.skill));
  if (auto.length === 0) return null;
  const totC = auto.reduce((s, a) => s + a.correct, 0);
  const totT = auto.reduce((s, a) => s + a.total, 0);
  return totT === 0 ? null : Math.round((totC / totT) * 100);
}

/** Most frequently missed topics across all attempts. */
export function frequentErrors(p: Progress, limit = 6): { topic: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const a of p.attempts) {
    for (const t of a.wrongTopics) counts.set(t, (counts.get(t) ?? 0) + 1);
  }
  return [...counts.entries()]
    .map(([topic, count]) => ({ topic, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, limit);
}

/** Vocabulary / items the learner has missed. */
export function missedVocab(p: Progress, limit = 12): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const a of [...p.attempts].reverse()) {
    for (const item of a.wrongItems) {
      if (!seen.has(item)) {
        seen.add(item);
        out.push(item);
      }
      if (out.length >= limit) return out;
    }
  }
  return out;
}

/** Score evolution over time (by date) for the chart. */
export function evolution(p: Progress): { date: string; score: number }[] {
  return [...p.attempts]
    .sort((a, b) => a.date.localeCompare(b.date))
    .map((a) => ({ date: a.date.slice(0, 10), score: pct(a) }));
}

/** Auto study recommendations in Spanish, based on the data. */
export function recommendations(p: Progress): string[] {
  const recs: string[] = [];
  const stats = skillStats(p);

  const untried = stats.filter((s) => s.attempts === 0);
  if (untried.length > 0) {
    recs.push(
      `Aún no has practicado: ${untried.map((s) => skillLabel(s.skill)).join(', ')}. Empieza por una sección para tener una línea base.`,
    );
  }

  const weak = stats
    .filter((s) => s.avgScore !== null && s.avgScore < 60)
    .sort((a, b) => (a.avgScore ?? 0) - (b.avgScore ?? 0));
  if (weak.length > 0) {
    recs.push(
      `Tu punto más débil es ${skillLabel(weak[0].skill)} (media ${weak[0].avgScore}%). Dedícale sesiones cortas y diarias.`,
    );
  }

  const errs = frequentErrors(p, 3);
  if (errs.length > 0) {
    recs.push(`Repasa estos temas que fallas a menudo: ${errs.map((e) => e.topic).join(', ')}.`);
  }

  const overall = overallScore(p);
  if (overall !== null) {
    if (overall >= 75) {
      recs.push(`Vas por buen camino hacia B2 (media ${overall}%). Añade ejercicios C1 para consolidar.`);
    } else if (overall >= 55) {
      recs.push(`Estás en zona B1-B2 (media ${overall}%). Prioriza precisión gramatical y vocabulario de colocaciones.`);
    } else {
      recs.push(`Refuerza la base B1 antes de forzar B2 (media ${overall}%). Practica lectura y gramática con calma.`);
    }
  }

  if (recs.length === 0) {
    recs.push('Completa algunos ejercicios y aquí verás recomendaciones personalizadas.');
  }
  return recs;
}

export function skillLabel(s: Skill): string {
  return {
    grammar: 'Grammar & Vocabulary',
    reading: 'Reading',
    listening: 'Listening',
    speaking: 'Speaking',
    writing: 'Writing',
  }[s];
}
