import Image from "next/image";
import React from "react";
import Icon from "./icon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "../ui/card";

const TestimonialCard = ({
  testimonial = "",
  name = "",
  place = "",
  stars = 5,
  image = "https://picsum.photos/200/200",
}) => {
  const getStars = () => {
    let elements = [];
    for (let index = 0; index < stars; index++) {
      const element = <Icon src="/icons/star.svg" key={`star_${index}`} width={16} height={32}/>;
      elements.push(element);
    }
    return elements;
  };
  return (
    <Card className="p-8">
      <h3>{testimonial}</h3>
      <div className="flex gap-4 justify-between">
        <div className="flex gap-3">
          <Avatar className="w-[42px] h-[42px]">
            <AvatarImage src={image} alt={name} width={42} height={42}/>
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
          <div className="text-left">
            <p>{name}</p>
            <p className="font-medium">{place}</p>
          </div>
        </div>
        <div className="flex gap-1">{getStars()}</div>
      </div>
    </Card>
  );
};

export default TestimonialCard;
