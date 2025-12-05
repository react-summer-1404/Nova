import instance from "../../../../core/interceptor/interceptor";

export const postNewsRate = async (newsId,rateNumber) => {
    const response = await instance.post(
      `News/NewsRate?NewsId=${newsId}&RateNumber=${rateNumber}`
    );
    return response.data;
  };