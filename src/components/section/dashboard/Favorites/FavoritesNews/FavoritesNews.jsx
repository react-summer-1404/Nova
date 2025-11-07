import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { FavNews } from '../../../../../servises/api/userPanel/getMyFavoriteNews';
import NewsStatusList from './NewsStatusList/NewsStatusList';




const FavoritesNews = () => {
    const {data} = useQuery({
        queryKey : ["FavNews"],
        queryFn : FavNews,
    })


    return (
        <div className ='w-full h-[300px] items-center mt-[12px] gap-1.5 lg:gap-3 flex flex-col'>
            {data?.myFavoriteNews?.map((item) =>(
                <NewsStatusList
                    key={item.id}
                    teacheName={item.teacheName}
                    lastUpdate={item.lastUpdate.slice(0,10)}
                    courseTitle={item.courseTitle}
                />
                
        ))}
        
        </div>
        
    )
}

export default FavoritesNews