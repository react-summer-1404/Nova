import instance from "../../../../core/interceptor/interceptor"

export const getMasterTeacher = async() =>{
    const response = await instance.get("/Home/GetTeachers");
    return response.data;
} 