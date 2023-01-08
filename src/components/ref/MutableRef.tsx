import React, { useEffect, useRef, useState } from "react";

export const MutableRef = () => {
  const [timer, setTime] = useState(0);
  const interValRef = useRef<number | null>(null);
  const stopTiemr = () => {
    if (interValRef.current) window.clearInterval(interValRef.current);
  };

  useEffect(() => {
    interValRef.current = window.setInterval(() => {
      setTime((timer) => timer + 1);
    }, 1000);
    return () => {
      stopTiemr();
    };
  }, []);

  return (
    <div>
      HookTimer - {timer} -
      <button
        onClick={() => {
          stopTiemr();
        }}
      >
        Stop Timer
      </button>
    </div>
  );
};
