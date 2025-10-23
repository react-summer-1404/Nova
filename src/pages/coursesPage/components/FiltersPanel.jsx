import React from "react";
import InfoCard from "./InfoCard";
import CheckList from "./CheckList";
import { getTechs } from "../../../servises/api/landing/topCategories";
import { getTeachers } from "../../../servises/api/teachers";
import { courseLevel, courseState } from "./categoriesData";
import { useQuery } from "@tanstack/react-query";

const FiltersPanel = () => {
  const { data: topTech } = useQuery({
    queryKey: ["techs"],
    queryFn: getTechs,
  });

  const { data: teachersData } = useQuery({
    queryKey: ["teachers"],
    queryFn: getTeachers,
  });

  return (
    <div className="flex flex-col gap-5 w-[310px]">
      <InfoCard title="دسته بندی ها" showMoreButton={topTech?.length > 7}>
        <CheckList data={topTech} labelKey="techName" />
      </InfoCard>

      <InfoCard title="نحوه برگزاری">
        <CheckList data={courseState} />
      </InfoCard>

      <InfoCard title="سطح دوره">
        <CheckList data={courseLevel} />
      </InfoCard>

      <InfoCard title="مربیان" showMoreButton={teachersData?.length > 7}>
        <CheckList data={teachersData} labelKey="teacherName" />
      </InfoCard>
    </div>
  );
};

export default FiltersPanel;
