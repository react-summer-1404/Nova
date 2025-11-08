import instance from "../../../../core/interceptor/interceptor"

export const CourseComment= async() =>{
    const response = await instance.get("/SharePanel/GetMyCoursesComments");
    return response.data;
}
