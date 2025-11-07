import {Avatar} from "@heroui/react";

export default function AvatarComponent({data ,onclick }) {
  return (
    <div className="md:flex gap-4 items-center cursor-pointer hidden">
      <Avatar isBordered radius="full" src={data?.currentPictureAddress} onClick={onclick}/>

    </div>
  );
}