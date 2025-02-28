import React from "react";
import Icon from "./icon";
import clsx from "clsx";

const InfoPanel = ({
  title = "",
  description = "",
  iconSrc = "",
  isActive = false,
  size = "small",
  rowReverse = false,
}) => {
  return (
    <div
      className={clsx("flex gap-4 items-start p-4 min-w-[350px]", {
        "bg-primary-accent rounded-lg": isActive,
        "flex-row-reverse text-right": rowReverse,
      })}
    >
      <Icon src={iconSrc} />
      <div>
        {size === "small" ? <h4>{title}</h4> : <h3>{title}</h3>}
        {description ? <p>{description}</p> : null}
      </div>
    </div>
  );
};

export default InfoPanel;
