import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getBlogsDetail } from '../../servises/api/newsDetail'
import GeneralInfo from '../../components/section/BlogDetail/GeneralInfo';


const BlogDetailPage = () => {
 const id=1;
  const {data}= useQuery({
    queryKey:["newsDetail",id],
    queryFn: ()=> getBlogsDetail(id)
  })
  const detailItems = data?.detailsNewsDto;
  return (
<div className='flex w-screen justify-center'>
<div className='flex w-[80%]'>
     <div className='flex flex-col w-4/5 '>
      <img src={detailItems?.currentImageAddress} className='w-full h-[500px]'/>
     <GeneralInfo detailItems={detailItems}/>
      <div>details</div>
      <div>comment</div>
     </div>
     <div className='w-[300px]'>related news</div>
    </div>
</div>
  )
}

export default BlogDetailPage
