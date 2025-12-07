
import instance from "../../../../core/interceptor/interceptor";

export const getHomeWorkList = async () => {
    const response = await instance.get("/Session/StudentHomeworkList")
    return response.data;
}