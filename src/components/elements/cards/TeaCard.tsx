import clsx from "clsx";
import { useNavigate } from "react-router-dom";

import { animations, AnimationWrapper } from "components";
import { ITea } from "types";
interface Props {
  tea: ITea;
}

export const TeaCard = ({ tea }: Props) => {
  const { image } = tea;
  const navigate = useNavigate();
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
        <div className="flex flex-row p-3 rounded-b-xl">
          <p className="text-2xl font-medium">{tea.title}</p>
        </div>
      </div>
    </AnimationWrapper>
  );
};
