import instance from "../../../../core/interceptor/interceptor";

export const postCourseRate = async (CourseId,RateNumber) => {
    const response = await instance.post(
      `/Course/SetCourseRating?CourseId=${CourseId}&RateNumber=${RateNumber}`
    );
    return response.data;
  };