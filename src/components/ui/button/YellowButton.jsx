import React from "react";
import {Button} from "@heroui/react";

const YellowButton = ({  text, icon ,onClick ,type}) => {

  return (
   <Button className="yellow-button">{text}</Button>
  );
};

export default YellowButton;
