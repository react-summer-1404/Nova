import React from "react";
import "../../assets/styles/global.css";
import NavigationSection from "./components/NavigationSection";
import SearchSection from "./components/Search";
import Result from "./components/Result";
import SortingSection from "./components/SortingSection";
import ViewMode from "../../components/section/shared/ViewMode";
import InfoCard from "./components/InfoCard";
import CheckList from "./components/CheckList";
import { categories, courseLevel, teachers } from "./components/categoriesData";

const CoursesPage = () => {
  return (
    <div className="flex flex-col gap-8">
      <NavigationSection />
      <div className="w-screen flex flex-col items-center gap-8">
        <div className="flex sm:flex-row justify-between  w-4/5 gap-2 flex-col-reverse items-center">
          <div className="flex gap-6 items-center">
            <ViewMode />
            <SortingSection />
          </div>

          <div className="flex-center gap-8 ">
            <SearchSection />
            <Result />
          </div>
        </div>

        <div>
          <div className="flex flex-col gap-5 ">
          <InfoCard title="دسته بندی ها"><CheckList data={categories}/></InfoCard>
          <InfoCard title=" سطح دوره"><CheckList data={courseLevel}/></InfoCard>
          <InfoCard title="مربیان"><CheckList data={teachers} /></InfoCard>
          </div>
         

          <div>products</div>
        </div>
        <div>numbers</div>
      </div>
    </div>
  );
};

export default CoursesPage;
