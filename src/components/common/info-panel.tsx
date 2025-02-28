import React from "react";
import Icon from "./icon";
import clsx from "clsx";

const InfoPanel = ({
  title = "",
  description = "",
  iconSrc = "",
  isActive = false,
  size = "small",
}) => {
  return (
    <div
      className={clsx("flex gap-8 items-start p-4", {
        "bg-primary-accent rounded-lg": isActive,
      })}
    >
      <Icon src={iconSrc} />
      <div>
        {(size ==="small" ? <h4>{title}</h4> : <h3>{title}</h3>)}
        {description ? <p>{description}</p> : null}
      </div>
    </div>
  );
};

export default InfoPanel;
