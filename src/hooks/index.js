import { useEffect } from 'react';
/* eslint-disable import/prefer-default-export */

export function useSound(audioPath, ...deps) {
  useEffect(() => {
    if (deps[0].length > 0) {
      const sound = new Audio(audioPath);
      sound.play();
    }
  }, deps);
}
