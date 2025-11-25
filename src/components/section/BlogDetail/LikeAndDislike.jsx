import React from 'react'
import Tag from "../../../components/ui/Tag/Tag";
import {  AiOutlineLike,
  AiFillLike,
  AiOutlineDislike,
  AiFillDislike} from "react-icons/ai";
import { useMutation, useQueryClient } from '@tanstack/react-query';
// import toast from 'react-hot-toast';
import { postNewsDisLike, postNewsLike } from '../../../servises/api/news/newsLikeAndDislike';
const LikeAndDislike = ({newsId,isLiked,isDisliked}) => {
  const queryClient = useQueryClient();
  const newsLikeMutation=useMutation({
    mutationFn:postNewsLike,
    onError:(error)=>{console.log("error",error)},
    onSuccess:()=>{
      queryClient.invalidateQueries(["newsDetail"])
    }
  })
  const newsDislikeMutation=useMutation({
    mutationFn:postNewsDisLike,
    onError:(error)=>{console.log("error",error)},
    onSuccess:()=>{
      queryClient.invalidateQueries(["newsDetail"])
    }
  })
  return (
    <div className="flex gap-7 border-b-1 border-border-gray justify-end py-[25px]">

    <div className="flex gap-3">
    <Tag
       icon={isLiked?<AiFillLike size={20} className='text-base-gray'/>:<AiOutlineLike size={"20px"} />}
       bgColor={"var(--color-soft-gray)"}
       textColor={"#5F5F66"}
       width={"37px"}
       height={"34px"}
       onClick={()=>{newsLikeMutation.mutate(newsId)}}
     />
     <Tag
     icon={isDisliked?<AiFillDislike size={20} className='text-base-gray'/>:<AiOutlineDislike size={"20px"} />}
       bgColor={"var(--color-soft-gray)"}
       textColor={"#5F5F66"}
       width={"37px"}
       height={"34px"}
       onClick={()=>{newsDislikeMutation.mutate(newsId)}}
       
     />
    </div>
    <h2 className="font-semibold sm:text-lg">
       ایا از این مقاله راضی بودید؟
     </h2>

   </div>
  )
}

export default LikeAndDislike
