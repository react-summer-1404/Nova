import {Avatar} from "@heroui/react";

export default function AvatarComponent({onclick,size="md",src}) {
  return (
    <div className="md:flex gap-4 items-center cursor-pointer hidden">
      <Avatar size={size} isBordered radius="full" src={src} onClick={onclick}/>

    </div>
  );
}