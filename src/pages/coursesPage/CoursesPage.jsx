import React from "react";
import "../../assets/styles/global.css";
import NavigationSection from "./components/NavigationSection";
import SearchSection from "./components/Search";
import Result from "./components/Result";
import SortingSection from "./components/SortingSection";
import ViewMode from "../../components/section/shared/ViewMode";
import InfoCard from "./components/InfoCard";
import CheckList from "./components/CheckList";
import productData from "../../components/ui/card/productData";
import CourseProductCard from "../../components/ui/card/CourseProductCard";
import {
  categories,
  courseLevel,
  teachers,
} from "../../components/section/shared/categoriesData";

const CoursesPage = () => {
  return (
    <div className="flex flex-col gap-8">
      <NavigationSection />
      <div className="w-screen flex flex-col items-center gap-8">
        <div className="flex sm:flex-row justify-between pl-5 w-4/5  flex-col-reverse items-center gap-4 ">
          <div className="flex gap-6 items-center ">
            <ViewMode />
            <SortingSection />
          </div>

          <div className="flex-center gap-8 ">
            <SearchSection />
            <Result />
          </div>
        </div>

        <div className="flex  w-4/5   justify-between">
        <div className="  flex  flex-wrap justify-evenly gap-y-[20px] ">
        {productData.map((product, index) => (
        <div key={index} className="flex  ">  
          <CourseProductCard product={product} />
        </div>
      ))}
        </div>

          <div className="flex flex-col gap-5  w-[310px] ">
            <InfoCard title="دسته بندی ها">
              <CheckList data={categories} />
            </InfoCard>
            <InfoCard title=" سطح دوره">
              <CheckList data={courseLevel} />
            </InfoCard>
            <InfoCard title="مربیان">
              <CheckList data={teachers} />
            </InfoCard>
          </div>
        </div>
        <div>numbers</div>
      </div>
    </div>
  );
};

export default CoursesPage;
