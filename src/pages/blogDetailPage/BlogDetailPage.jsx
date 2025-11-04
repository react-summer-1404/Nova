import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getBlogsDetail } from '../../servises/api/newsDetail'
import Tag from '../../components/ui/Tag/Tag';
import "../../assets/styles/"

const BlogDetailPage = () => {
 const id=1;
  const {data}= useQuery({
    queryKey:["newsDetail",id],
    queryFn: ()=> getBlogsDetail(id)
  })
  console.log(data)
  const detailItems = data?.detailsNewsDto;
  return (
<div className='flex w-screen justify-center'>
<div className='flex w-[80%]'>
     <div className='flex flex-col w-4/5 border '>
      <img src={detailItems?.currentImageAddress} className='w-full h-[500px] '/>
      <div>
        <div><Tag bgColor={"var()"}/></div>
        <div></div>
      </div>
      <div>details</div>
      <div>comment</div>
     </div>
     <div className='w-[300px] border'>related news</div>
    </div>
</div>
  )
}

export default BlogDetailPage
