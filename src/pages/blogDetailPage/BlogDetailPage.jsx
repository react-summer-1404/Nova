import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getBlogsDetail } from "../../servises/api/newsDetail";
import { getBlogs } from "../../servises/api/news/getNews";
import GeneralInfo from "../../components/section/BlogDetail/GeneralInfo";
import MainInfo from "../../components/section/BlogDetail/MainInfo";
import LikeAndDislike from "../../components/section/BlogDetail/LikeAndDislike";
import NavigationSection from "../../components/ui/navigation/NavigationSection";
import InfoCard from "../../components/ui/infoCard/InfoCard";
import RelatesNews from "../../components/section/BlogDetail/RelatesNews";
import { useParams } from "react-router-dom";
import NewsComment from "../../components/section/BlogDetail/newsComment/NewsComment";

const BlogDetailPage = () => {
  const {newsId} = useParams();
  const { data } = useQuery({
    queryKey: ["newsDetail", newsId],
    queryFn: () => getBlogsDetail(newsId),
  });
  const apiParams = {
    PageNumber: 1,
    RowsOfPage: 4,
    NewsCategoryId: newsId,
  };
  const { data: news } = useQuery({
    queryKey: ["newsFilter"],
    queryFn: () => getBlogs(apiParams),
  });
  const detailItems = data?.detailsNewsDto;
  const currentNews = news?.news;
  return (
    <div className="flex-center w-screen  flex-col  gap-[100px] ">
      <NavigationSection title={detailItems?.title} />
      <div className="flex w-[90%] justify-center gap-8">
        <div className="flex flex-col w-4/5 gap-5 ">
          <img
            src={detailItems?.currentImageAddress}
            className="w-full lg:h-[450px] md:h-[300px] rounded-[10px]"
          />
          <GeneralInfo detailItems={detailItems} />
          <MainInfo detailItems={detailItems} />
          <LikeAndDislike newsId={detailItems?.id} isLiked={detailItems?.currentUserIsLike} isDisliked={detailItems?.currentUserIsDissLike}/>

          <div>
            <NewsComment newsId={newsId}/>
          </div>
        </div>
        <div className="lg:flex flex-col gap-4 hidden ">
        <InfoCard title={"اخبار مرتبط"}>
          {currentNews?.length>0?(currentNews?.map((related) => (
            <RelatesNews key={`${related.id} - ${related.title}`} detailItems={related} id={related.id} />
          ))):(<p>خبر مرتبطی وجود ندارد</p>)}
        </InfoCard>
        </div>
       
      </div>
    </div>
  );
};

export default BlogDetailPage;
