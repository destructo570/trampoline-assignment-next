import Image from "next/image";
import React from "react";

const Icon = ({ height = 32, width = 32, src = "" }) => {
  return <Image src={src} height={height} width={width} alt="" />;
};

export default Icon;
