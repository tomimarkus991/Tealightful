import React, { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

type InitialContextType = {
  seconds: number;
  setSeconds: Dispatch<SetStateAction<number>>;
  minutes: number;
  setMinutes: Dispatch<SetStateAction<number>>;
  started: boolean;
  setStarted: Dispatch<SetStateAction<boolean>>;
  isComplete: boolean;
  setIsComplete: Dispatch<SetStateAction<boolean>>;
  isDisabled: boolean;
  setIsDisabled: Dispatch<SetStateAction<boolean>>;
};

type ProviderProps = {
  children: React.ReactNode;
};

const initContextData: InitialContextType = {
  seconds: 0,
  setSeconds: () => {},
  minutes: 0,
  setMinutes: () => {},
  started: false,
  setStarted: () => {},
  isComplete: false,
  setIsComplete: () => {},
  isDisabled: false,
  setIsDisabled: () => {},
};

const TimerContext = createContext(initContextData);

export const useTimer = () => useContext(TimerContext);

export const TimerProvider = ({ children }: ProviderProps) => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [started, setStarted] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  return (
    <TimerContext.Provider
      value={{
        seconds,
        setSeconds,
        minutes,
        setMinutes,
        started,
        setStarted,
        isComplete,
        setIsComplete,
        isDisabled,
        setIsDisabled,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};
