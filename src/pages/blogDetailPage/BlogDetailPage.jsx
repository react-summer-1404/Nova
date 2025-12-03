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
import { variantPages } from "../../configs/frameMorion/PagesVariants";
import { motion } from "framer-motion";

const BlogDetailPage = () => {
  const { newsId } = useParams();
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
        <motion.div
          className="flex flex-col w-4/5 gap-5 "
          variants={variantPages}
          initial="hidden"
          animate="visible"
        >
          <img
            src={detailItems?.currentImageAddress}
            className="w-full lg:h-[450px] md:h-[300px] rounded-[10px]"
          />
          <GeneralInfo detailItems={detailItems} />
          <MainInfo detailItems={detailItems} />
          <LikeAndDislike
            newsId={detailItems?.id}
            isLiked={detailItems?.currentUserIsLike}
            isDisliked={detailItems?.currentUserIsDissLike}
            newsRate ={detailItems?.newsRate?.avg}
          />

          <div>
            <NewsComment newsId={newsId} />
          </div>
        </motion.div>
        <motion.div
          className="lg:flex flex-col gap-4 hidden"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.3 }}
        >
          <div
            style={{ backgroundColor: "var(--color-light-gray)" }}
            className="lg:w-[310px]  rounded-[10px] p-[30px]"
          >
            <div className="w-full flex flex-col items-end gap-4 ">
              <h2 className="font-semibold text-xl">اخبار مرتبط</h2>

              <div className="transition-all duration-500 overflow-hidden w-[90%] max-h-[500px]">
                {currentNews?.length > 0 ? (
                  currentNews?.map((related) => (
                    <RelatesNews
                      key={`${related.id} - ${related.title}`}
                      detailItems={related}
                      id={related.id}
                    />
                  ))
                ) : (
                  <p>خبر مرتبطی وجود ندارد</p>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
