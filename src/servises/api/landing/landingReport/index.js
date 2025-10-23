import instance from "../../../../core/interceptor/interceptor";
export const getLandingReport = async () => {
    const response = await instance.get("/Home/LandingReport");
    return response.data;
}
