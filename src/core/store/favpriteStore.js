import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useFavorite= create(persist(
    (set , get)=>({
        addedToFavorite : [],
    
       addFavorite:(courseId)=>{
        const currentLike =get().addedToFavorite;
        if (!currentLike.includes(courseId)) {
            set({addedToFavorite:[...currentLike , courseId]})
        }
       }
    }),
    {name:"favorite-storage"}
))

export default useFavorite