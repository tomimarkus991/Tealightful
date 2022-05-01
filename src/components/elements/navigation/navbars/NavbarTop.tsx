import { useNavigate } from "react-router-dom";

import { animations, AnimationWrapper } from "components";

export const NavbarTop = () => {
  const navigate = useNavigate();

  return (
    <div className="flex sticky top-0 z-40 items-center py-10 mb-3 w-full h-16 bg-slate-50">
      <div className="flex flex-1 justify-between items-center px-4">
        <div
          className="text-2xl font-semibold text-gray-800 cursor-pointer"
          role="button"
          tabIndex={0}
          onClick={() => navigate("/")}
        >
          Tealightful
        </div>
        <AnimationWrapper variants={animations.smallScale} keyIndex="nt-user-icon">
          <div
            role="button"
            tabIndex={0}
            className="flex flex-row items-center cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img className="w-14 h-14" alt="user" src={`/icons/android-chrome-512x512.png`} />
          </div>
        </AnimationWrapper>
      </div>
    </div>
  );
};
