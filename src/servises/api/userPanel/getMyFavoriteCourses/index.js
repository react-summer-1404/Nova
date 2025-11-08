import instance from "../../../../core/interceptor/interceptor"

export const favCourse= async() =>{
    const response = await instance.get("/SharePanel/GetMyFavoriteCourses");
    return response.data;
}