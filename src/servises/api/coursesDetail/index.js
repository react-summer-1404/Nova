import instance from "../../../core/interceptor";
const getCourseDetail = async (courseId) => {
    const response = await instance.get("/Home/GetCourseDetails?",{
        params:{
            courseId: courseId,
        },
    });
    return response.data;
}
export default getCourseDetail