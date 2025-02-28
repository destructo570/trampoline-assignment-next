"use client";
import clsx from "clsx";
import React, { useState } from "react";

const Tag = ({ title = "", onClick = (val: boolean) => {} }) => {
  const [isActive, setIsActive] = useState(false);

  const onTagClick = () => {
    setIsActive((prev) => {
      onClick(!prev);
      return !prev;
    });
  };

  return (
    <span
      className={clsx(
        "px-3 py-2 border  cursor-pointer text-[14px]",
        `${isActive ? "border-[#090302] text-black" : "border-[#979797] text-[#979797] "}`
      )}
      onClick={onTagClick}
    >
      {title}
    </span>
  );
};

export default Tag;
