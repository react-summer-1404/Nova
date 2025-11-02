import instance from "../../../../core/interceptor/interceptor";
export const getCourseDetail = async (courseId) => {
    console.log("api courseId", courseId)
    const response = await instance.get("/Home/GetCourseDetails",{
        params:{courseId},
    });
    return response.data;
}
