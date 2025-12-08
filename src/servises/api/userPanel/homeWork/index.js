
import instance from "../../../../core/interceptor/interceptor";

export const getHomeWorkList = async () => {
    const response = await instance.get("/Session/StudentHomeworkList")
    return response.data;
}
export const addHomeWork = async (apiData) => {
    const response = await instance.post("/Session/AddCourseUserHomeWork",apiData)
    return response.data;
}
export const addHomeWorkStep2 = async (formData) => {
    const response = await instance.post("/Session/AddExerciseFile",formData)
    return response.data;
}
export const deleteHomeWork = async (apiData) => {
    const response = await instance.delete("/Session/DeleteExserciseFile",{data:apiData})
    return response.data;
}