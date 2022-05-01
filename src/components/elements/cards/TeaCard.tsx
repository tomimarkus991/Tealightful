import clsx from "clsx";
import { intervalToDuration } from "date-fns";
import { GoDash } from "react-icons/all";
import { useNavigate } from "react-router-dom";

import { animations, AnimationWrapper } from "components";
import { ITea } from "types";
interface Props {
  tea: ITea;
}

export const TeaCard = ({ tea }: Props) => {
  const { image } = tea;
  const navigate = useNavigate();

  const brewTimeMin = intervalToDuration({ start: 0, end: tea.brewTime.min * 1000 });
  const brewTimeMax = intervalToDuration({ start: 0, end: tea.brewTime.max * 1000 });

  return (
    <AnimationWrapper keyIndex="tea-card" variants={animations.makeBiggerAndRotateSlightly}>
      <div
        className={clsx(
          "flex flex-col mb-6 w-full bg-white rounded-xl shadow-lg shadow-lime-200",
          "border-4 border-transparent border-solid border-gradient-br-light-green-white",
          "z-10 hover:z-50 hover:border-gradient-br-light-blue-white"
        )}
        role="button"
        tabIndex={0}
        onClick={() => navigate(`teas/${tea.id}`)}
      >
        <img
          src={`/general/${image}`}
          alt="tea"
          className="aspect-video w-full h-40 rounded-t-lg"
        />
        <div className="flex flex-col p-3 rounded-b-xl">
          <p className="mb-2 text-2xl font-medium">{tea.title}</p>
          <p className="mb-2">{tea.description}</p>
          <div className="flex flex-row items-center text-sm">
            {brewTimeMin.minutes === brewTimeMax.minutes ? (
              <p>{`${brewTimeMin.minutes} minutes`}</p>
            ) : (
              <>
                <p>{`${brewTimeMin.minutes} minutes`}</p>
                <GoDash className="text-zinc-800" />
                <p>{`${brewTimeMax.minutes} minutes`}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </AnimationWrapper>
  );
};
