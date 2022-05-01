import { NavbarBottom, NavbarTop } from "components";

interface Props {
  children: React.ReactNode;
}

export const DefaultWrapper = ({ children }: Props) => {
  return (
    <>
      <div className="flex justify-center min-w-full min-h-screen bg-slate-50 dark:bg-slate-800">
        <div className="flex flex-col w-full h-full md:w-[80%] lg:w-[70%] xl:w-[50%]">
          <NavbarTop />
          <div className="mx-4">{children}</div>
          <NavbarBottom />
        </div>
      </div>
    </>
  );
};
