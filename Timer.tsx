import { useEffect, useRef, useState } from 'react';
import { formatTime } from '../utils/helpers';

interface Props {
  seconds: number;
  running: boolean;
  onExpire?: () => void;
  /** key change resets the timer */
  resetKey?: string | number;
}

export function Timer({ seconds, running, onExpire, resetKey }: Props) {
  const [left, setLeft] = useState(seconds);
  const expiredRef = useRef(false);

  useEffect(() => {
    setLeft(seconds);
    expiredRef.current = false;
  }, [seconds, resetKey]);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => {
      setLeft((v) => {
        if (v <= 1) {
          clearInterval(id);
          if (!expiredRef.current) {
            expiredRef.current = true;
            onExpire?.();
          }
          return 0;
        }
        return v - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [running, onExpire]);

  const low = left <= 30;
  return <span className={`timer${low ? ' low' : ''}`}>⏱ {formatTime(left)}</span>;
}
