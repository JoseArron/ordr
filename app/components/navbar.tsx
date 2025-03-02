import React, { ReactNode } from "react";

interface NavBarProps {
  left?: ReactNode;
  middle?: ReactNode;
  right?: ReactNode;
}

const NavBar = ({
  left = <div />,
  middle = <div />,
  right = <div />,
}: NavBarProps) => {
  return (
    <div className="flex fixed w-full top-4 justify-between px-4">
      {left}
      {middle}
      {right}
    </div>
  );
};

export default NavBar;
