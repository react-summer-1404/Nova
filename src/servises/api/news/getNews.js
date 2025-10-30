import axios from "axios";
import instance from "./../../../core/interceptor/interceptor";

export const getBlogs = async ({PageNumber=1,RowsOfPage=10,SortingCol="InsertDate",SortType="DESC"}) => {
  const response = await instance.get("/News", {
    params: {
      PageNumber:PageNumber,
      RowsOfPage:RowsOfPage,
      SortingCol:SortingCol,
      SortType:SortType
    }
  });
  return response.data;
};
