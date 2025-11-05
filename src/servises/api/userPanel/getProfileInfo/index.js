import instance from "../../../../core/interceptor/interceptor";

export const getCurrentUserProfile = async () => {
    const response = await instance.get("/SharePanel/GetProfileInfo")
    return response.data;
}