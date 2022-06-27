import { useState, useEffect } from 'react';

const useMouseCoordinates = () => {
  const [coords, setCoords] = useState({x: 0, y: 0});
  const [globalCoords, setGlobalCoords] = useState({x: 0, y: 0});

  useEffect(() => {
    // 👇️ get global mouse coordinates
    const handleWindowMouseMove = event => {
      setGlobalCoords({
        x: event.screenX,
        y: event.screenY,
      });
    };

    window.addEventListener('mousemove', handleWindowMouseMove);
    return () => { window.removeEventListener('mousemove', handleWindowMouseMove); };
  }, []);

  return globalCoords;
}

export default useMouseCoordinates;