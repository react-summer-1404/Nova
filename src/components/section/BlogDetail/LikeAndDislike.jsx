import React from 'react'
import Tag from "../../../components/ui/Tag/Tag";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
const LikeAndDislike = () => {
  return (
    <div className="flex gap-7 border-b-1 border-border-gray justify-end py-[25px]">

    <div className="flex gap-3">
    <Tag
       icon={<AiOutlineLike size={"20px"} />}
       bgColor={"var(--color-soft-gray)"}
       textColor={"#5F5F66"}
       width={"37px"}
       height={"34px"}
     />
     <Tag
       icon={<AiOutlineDislike size={"20px"} />}
       bgColor={"var(--color-soft-gray)"}
       textColor={"#5F5F66"}
       width={"37px"}
       height={"34px"}
     />
    </div>
    <h2 className="font-semibold sm:text-lg">
       ایا از این مقاله راضی بودید؟
     </h2>

   </div>
  )
}

export default LikeAndDislike
