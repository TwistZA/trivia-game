import { useState } from "react";

// custom hooks useProgressBar
export const useProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [timerID, setTimerID] = useState(0);

  return {
    progress,
    startProgressBar: () => {
      let p = 0;
      let count = 0;

      let id = setInterval(() => {
        count = count + 1;
        if (count === 100) {
          clearInterval(id);
        }
        p = count;
        setProgress(p);
      }, 100);
      setTimerID(id);
    },
    stopProgressBar: () => {
      clearInterval(timerID);
    },
  };
};

// USAGE

// const { progress, startProgressBar, stopProgressBar } = useProgressBar();

// stopProgressBar();
// startProgressBar();

// <ProgressBar progress={progress} />
