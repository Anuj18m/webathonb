import { useState, useCallback } from 'react';
import { RipplePosition } from '../types';

export const useRipple = () => {
  const [ripples, setRipples] = useState<RipplePosition[]>([]);

  const addRipple = useCallback((event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const timestamp = Date.now();

    setRipples(prev => [...prev, { x, y, timestamp }]);

    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.timestamp !== timestamp));
    }, 600);
  }, []);

  return { ripples, addRipple };
};