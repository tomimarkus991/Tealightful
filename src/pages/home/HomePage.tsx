import clsx from "clsx";

import { teas } from "app-constants";
import { DefaultWrapper, TeaCard } from "components";

export const HomePage = () => {
  return (
    <DefaultWrapper>
      <div
        className={clsx(
          "flex overflow-hidden flex-col justify-center items-center last:pb-20 h-full md:grid md:grid-cols-2 md:gap-6 md:px-12 md:pt-12"
        )}
      >
        {teas.map(tea => (
          <TeaCard key={tea.id} tea={tea} />
        ))}
      </div>
    </DefaultWrapper>
  );
};
