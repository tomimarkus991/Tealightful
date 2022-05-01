import { animations, AnimationWrapper } from "components";
import { useSidebar } from "context";

export const NavbarTop = () => {
  const { setisSidebarOpen } = useSidebar();

  return (
    <div className="flex sticky top-0 z-50 items-center py-12 mb-3 w-full h-16 bg-slate-50">
      <div className="flex flex-1 justify-between items-center px-4">
        <p className="text-2xl font-semibold text-gray-800">Tealightful</p>
        <AnimationWrapper variants={animations.smallScale} keyIndex="nt-user-icon">
          <div
            role="button"
            tabIndex={0}
            className="flex flex-row items-center cursor-pointer"
            onClick={() => setisSidebarOpen(true)}
          >
            <img className="w-14 h-14" alt="user" src={`/icons/android-chrome-512x512.png`} />
          </div>
        </AnimationWrapper>
      </div>
    </div>
  );
};
