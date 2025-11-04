import {Textarea} from "@heroui/react";

export default function TextArea() {
  return (
    <Textarea
      isClearable
      className=" bg-[#F4F3F8]  rounded-xl"
      label="توضیحات"
      placeholder="پیام خود را وارد کنید"
    />
  );
}
