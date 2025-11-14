import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { FavNews } from '../../../../../servises/api/userPanel/getMyFavoriteNews';
import FavNewsList1 from './FavNewsList1';

const FavoritesNews = () => {
    const {data} = useQuery({
        queryKey : ["FavNews"],
        queryFn : FavNews,
    })
    // console.log("اخبار",data?.myFavoriteNews);
    const favN = data?.myFavoriteNews;

    return (
        <div className ='w-full h-[300px] items-center mt-[12px] gap-1.5 lg:gap-3 flex flex-col'>
            {favN?.length > 0 ? (
          favN.map((item) => (<FavNewsList1
            key={item.id}
            auther={item.auther}
            insertDate={item.news.insertDate.slice(0,10)}
            title={item.title}
            currentImageAddress={item.news.currentImageAddress}
            id={item.id}
        />))
      ) : (<div className='text-text-gray'>خبری یافت  نشد</div>
        )}
        
        </div>
        
    )
}

export default FavoritesNews