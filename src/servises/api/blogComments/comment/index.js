import instance from "../../../../core/interceptor/interceptor";

export const postNewsComment= async (apiParams) => {
    const response = await instance.post("/News/CreateNewsComment",{
        params:apiParams
    });
    return response.data;
}

export const getNewsComment = async (NewsId) => {
    const response = await instance.get(`/News/GetNewsComments?NewsId==${NewsId}`);
    return response.data
}