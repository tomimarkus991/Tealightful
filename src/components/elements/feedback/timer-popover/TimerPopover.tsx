import { Popover } from "@headlessui/react";

import clsx from "clsx";
import { useEffect, useState } from "react";
import { HiChevronDown, HiChevronUp, MdRestartAlt, RiTimerFlashFill } from "react-icons/all";

import { AnimationWrapper, animations, RealButton, RealIconButton } from "components";

export const TimerPopover = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [started, setStarted] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (seconds === 0 && minutes === 0) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }

    const interval = setInterval(() => {
      // when countdown is going on
      if (started) {
        // when timer is complete stop the interval (so 0 and 0) otherwise count down
        if (seconds === 0 && minutes === 0) {
          setIsComplete(true);
          setStarted(false);
        } else {
          // when seconds are 0 and there is atleast 1 minute left
          // count down one minute and set seconds to 59
          if (seconds === 0 && minutes > 0) {
            setMinutes(minutes => minutes - 1);
            setSeconds(59);
          }
          // count down one second
          setSeconds(seconds => seconds - 1);
        }
      }
    }, 1000);
    return () => clearInterval(interval);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started, seconds, minutes]);

  // @todo some effects here
  console.log("isComplete", isComplete);

  return (
    <Popover>
      <Popover.Button>
        <AnimationWrapper
          variants={animations.smallScale}
          animateOnAllScreens
          keyIndex="nb-chart-icon"
        >
          <RiTimerFlashFill className="w-14 h-14 cursor-pointer fill-slate-700 hover:fill-slate-800" />
        </AnimationWrapper>
      </Popover.Button>
      <Popover.Panel
        className={clsx(
          "absolute left-1/2 z-10 min-w-[10rem] max-w-[10rem] transform -translate-x-1/2 select-none sm:px-0",
          started ? "-translate-y-48" : "-translate-y-60"
        )}
      >
        <div className="overflow-hidden rounded-lg shadow-lg">
          <div className="flex relative flex-col justify-center items-center p-3 text-2xl font-bold bg-white">
            <div className="flex flex-row justify-center items-center mb-2">
              {started ? (
                <>
                  <div className="flex flex-col justify-center items-center min-w-[2.5rem] max-w-[2.5rem]">
                    <p className="">
                      {minutes < 10 && "0"}
                      {minutes}
                    </p>
                  </div>
                  <p className="mx-2">:</p>
                  <div className="flex flex-col justify-center items-center min-w-[2.5rem] max-w-[2.5rem]">
                    <p className="">
                      {seconds < 10 && "0"}
                      {seconds}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-col justify-center items-center min-w-[2.5rem] max-w-[2.5rem]">
                    <HiChevronUp
                      className="cursor-pointer"
                      onClick={() =>
                        setMinutes(state => {
                          if (state + 1 >= 21) {
                            return 0;
                          } else {
                            return state + 1;
                          }
                        })
                      }
                    />
                    <p className="">
                      {minutes < 10 && "0"}
                      {minutes}
                    </p>
                    <HiChevronDown
                      className="cursor-pointer"
                      onClick={() =>
                        setMinutes(state => {
                          if (state - 1 <= -1 || state - 1 < 0) {
                            return 20;
                          } else {
                            return state - 1;
                          }
                        })
                      }
                    />
                  </div>
                  <p className="mx-2">:</p>
                  <div className="flex flex-col justify-center items-center min-w-[2.5rem] max-w-[2.5rem]">
                    <HiChevronUp
                      className="cursor-pointer"
                      onClick={() =>
                        setSeconds(state => {
                          if (state + 5 >= 60) {
                            return 0;
                          } else {
                            return state + 5;
                          }
                        })
                      }
                    />
                    <p className="">
                      {seconds < 10 && "0"}
                      {seconds}
                    </p>
                    <HiChevronDown
                      className="cursor-pointer"
                      onClick={() =>
                        setSeconds(state => {
                          if (state - 5 <= -5 || state - 5 < 0) {
                            return 55;
                          } else {
                            return state - 5;
                          }
                        })
                      }
                    />
                  </div>
                </>
              )}
            </div>
            <div className="flex flex-row justify-between items-center">
              <RealIconButton size="xs" className="opacity-0 cursor-default">
                <MdRestartAlt />
              </RealIconButton>
              <RealButton
                onClick={() => setStarted(state => !state)}
                size="xs"
                disabled={isDisabled}
                className={clsx(isDisabled ? "cursor-not-allowed" : "cursor-pointer", "mr-2")}
              >
                {started ? "Stop" : "Start"}
              </RealButton>
              <RealIconButton
                size="xs"
                onClick={() => {
                  setMinutes(0);
                  setSeconds(0);
                  setStarted(false);
                  setIsComplete(false);
                }}
              >
                <MdRestartAlt />
              </RealIconButton>
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Popover>
  );
};
