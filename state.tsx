import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import type { Progress } from './types';
import { loadProgress, resetProgress as clearStorage } from './utils/storage';

interface Ctx {
  progress: Progress;
  refresh: () => void;
  reset: () => void;
}

const ProgressContext = createContext<Ctx | null>(null);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState<Progress>(() => loadProgress());

  const refresh = useCallback(() => setProgress(loadProgress()), []);
  const reset = useCallback(() => {
    clearStorage();
    setProgress(loadProgress());
  }, []);

  // Re-read when the tab regains focus (e.g. after finishing a session elsewhere).
  useEffect(() => {
    const onFocus = () => refresh();
    window.addEventListener('focus', onFocus);
    return () => window.removeEventListener('focus', onFocus);
  }, [refresh]);

  return (
    <ProgressContext.Provider value={{ progress, refresh, reset }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress(): Ctx {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used within ProgressProvider');
  return ctx;
}
