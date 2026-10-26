import type { Progress, Attempt, SavedResponse } from '../types';

const KEY = 'aptis-trainer-progress-v1';

const empty: Progress = { attempts: [], responses: [] };

export function loadProgress(): Progress {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return { ...empty };
    const parsed = JSON.parse(raw) as Progress;
    return {
      attempts: Array.isArray(parsed.attempts) ? parsed.attempts : [],
      responses: Array.isArray(parsed.responses) ? parsed.responses : [],
    };
  } catch {
    return { ...empty };
  }
}

export function saveProgress(p: Progress): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(p));
  } catch {
    // storage full or unavailable — fail quietly
  }
}

export function addAttempt(a: Attempt): Progress {
  const p = loadProgress();
  p.attempts.push(a);
  saveProgress(p);
  return p;
}

export function addResponse(r: SavedResponse): Progress {
  const p = loadProgress();
  // replace an existing response for the same prompt if present
  p.responses = p.responses.filter((x) => x.promptId !== r.promptId);
  p.responses.push(r);
  saveProgress(p);
  return p;
}

export function getResponse(promptId: string): SavedResponse | undefined {
  return loadProgress().responses.find((r) => r.promptId === promptId);
}

export function resetProgress(): void {
  saveProgress({ ...empty });
}

export function uid(prefix = 'a'): string {
  return `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`;
}
