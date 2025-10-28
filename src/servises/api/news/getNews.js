import axios from "axios";
import instance from "./../../../core/interceptor/interceptor";

export const getBlogs = async () => {
  const response = await instance.get("/News", {
    params: {
      PageNumber:1,
      RowsOfPage:10,
      SortingCol:"InsertDate",
      SortType:"DESC"
    }
  });
  return response.data;
};
