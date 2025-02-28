import React from "react";

const IconCard = ({ children, title }) => {
  return (
    <div className="rounded-md border border-primary-accent flex flex-col justify-start gap-2 p-2">
      {children}
      <p className="inline-block text-sm">{title}</p>
    </div>
  );
};

export default IconCard;
