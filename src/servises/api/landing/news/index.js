import instance from "../../../../core/interceptor/interceptor";
export const getLandingNews = async (params) => {
    const response = await instance.get("/News", params);
    return response.data;
}