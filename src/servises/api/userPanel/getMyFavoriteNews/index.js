import instance from "../../../../core/interceptor/interceptor"

export const FavNews= async() =>{
    const response = await instance.get("/SharePanel/GetMyFavoriteNews");
    return response.data;
}