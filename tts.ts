// Thin wrapper around the browser SpeechSynthesis API used for the Listening section.

export function ttsSupported(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window;
}

function pickEnglishVoice(): SpeechSynthesisVoice | undefined {
  const voices = window.speechSynthesis.getVoices();
  return (
    voices.find((v) => /en-GB/i.test(v.lang)) ||
    voices.find((v) => /^en/i.test(v.lang)) ||
    voices[0]
  );
}

export function speak(
  text: string,
  opts: { rate?: number; onEnd?: () => void; onStart?: () => void } = {},
): void {
  if (!ttsSupported()) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  const voice = pickEnglishVoice();
  if (voice) u.voice = voice;
  u.lang = voice?.lang || 'en-GB';
  u.rate = opts.rate ?? 0.95;
  u.pitch = 1;
  if (opts.onStart) u.onstart = opts.onStart;
  if (opts.onEnd) u.onend = opts.onEnd;
  window.speechSynthesis.speak(u);
}

export function stopSpeaking(): void {
  if (ttsSupported()) window.speechSynthesis.cancel();
}

/**
 * Speak a multi-speaker script line by line. Each distinct speaker gets a
 * different English voice when available, otherwise a different pitch.
 * Returns a cancel function.
 */
export function speakScript(
  lines: { speaker: string; text: string }[],
  opts: { rate?: number; onEnd?: () => void; onStart?: () => void } = {},
): () => void {
  if (!ttsSupported() || lines.length === 0) {
    opts.onEnd?.();
    return () => {};
  }
  const synth = window.speechSynthesis;
  synth.cancel();
  const voices = synth.getVoices().filter((v) => /^en/i.test(v.lang));
  const speakers = [...new Set(lines.map((l) => l.speaker))];
  const pitches = [1, 0.8, 1.2, 0.9];
  let cancelled = false;
  let i = 0;
  const next = () => {
    if (cancelled) return;
    if (i >= lines.length) {
      opts.onEnd?.();
      return;
    }
    const line = lines[i++];
    const idx = speakers.indexOf(line.speaker);
    const u = new SpeechSynthesisUtterance(line.text);
    const v = voices.length ? voices[idx % voices.length] : undefined;
    if (v) u.voice = v;
    u.lang = v?.lang || 'en-GB';
    u.rate = opts.rate ?? 0.95;
    // If only one voice exists, separate speakers by pitch.
    u.pitch = voices.length > 1 ? 1 : pitches[idx % pitches.length];
    if (i === 1 && opts.onStart) u.onstart = opts.onStart;
    u.onend = () => setTimeout(next, 350);
    synth.speak(u);
  };
  next();
  return () => {
    cancelled = true;
    synth.cancel();
  };
}
