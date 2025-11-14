import React from 'react'
// import { useParams } from 'react-router-dom';
import { useQuery} from '@tanstack/react-query';
import UserComment from './UserComment/UserComment';
import NewsForm from './newsForm/NewsForm';
import { getNewsComment } from '../../../../servises/api/blogComments/comment';
const NewsComment = ({newsId}) => {
    const { data } = useQuery({
        queryKey: ['newsComment', newsId],
        queryFn: () => getNewsComment(newsId),
      });
      
    console.log("داده", newsId)
    
    return (
        <div className=' border-[#DFDFDF] flex justify-center items-center w-full'>
            <div className=' flex flex-col items-end gap-5 w-full'>
                <p className='font-[600] text-[18px] md:text-[22px]'>نظر </p>
                {data?.map(item =>
                    <UserComment
                        key={item.id}
                        insertDate={item.insertDate}
                        dissLikeCount={item.dissLikeCount}
                        likeCount={item.likeCount}
                        describe={item.describe}
                        title={item.title}
                        id={item.id}
                    />
                )}
                

                <div className=' w-full h-[270px] md:h-[390px] bg-[#F7F7FA] rounded-[10px] flex justify-center items-center '>
                    <NewsForm newsId={newsId}/>
                </div>
            </div>
        </div>
    );
};

export default NewsComment