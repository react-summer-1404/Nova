import instance from "../../../../core/interceptor/interceptor";
export const postNewsReply = async (apiParams) => {
    const response = await instance.post("/News/CreateNewsReplyComment",apiParams);
    return response.data;
}

export const getNewsCommentReply = async (id) => {
    const response = await instance.get(`/News/GetRepliesComments?Id=${id}`);
    return response.data
}