import instance from "../../../../core/interceptor/interceptor"

export const NewsComment= async() =>{
    const response = await instance.get("/SharePanel/GetMyNewsComments");
    return response.data;
}


