import { HiArrowLeft } from "react-icons/all";
import { useNavigate, useParams } from "react-router-dom";

import { teas } from "app-constants";
import { animations, AnimationWrapper, DefaultWrapper } from "components";

export const TeaPage = () => {
  const { id } = useParams() as { id: string };
  const tea = teas.find(tea => tea.id === id);
  const navigate = useNavigate();
  return (
    <DefaultWrapper>
      <div className="flex flex-row justify-between items-center p-4 w-full">
        <AnimationWrapper keyIndex="modal-header-left-arrow-icon" variants={animations.rotate360}>
          <HiArrowLeft
            className="w-8 h-8 fill-slate-700 hover:fill-slate-800"
            onClick={() => navigate(-1)}
          />
        </AnimationWrapper>
        <div className="text-2xl font-medium leading-6 text-center text-gray-700">{tea?.title}</div>
        <HiArrowLeft className="w-8 h-8 opacity-0" />
      </div>
    </DefaultWrapper>
  );
};
