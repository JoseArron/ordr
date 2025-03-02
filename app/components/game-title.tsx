import Image from "next/image";
import React from "react";

interface GameTitleProps {
  withLogo?: boolean;
}

const GameTitle = ({ withLogo = true }: GameTitleProps) => {
  return (
    <div className="flex flex-row font-mono font-bold text-slate-600 dark:text-slate-100 items-center gap-2">
      {withLogo && (
        <Image src={"ordr-logo.svg"} alt="ordr logo" width={30} height={30} />
      )}
      ordr
    </div>
  );
};

export default GameTitle;
