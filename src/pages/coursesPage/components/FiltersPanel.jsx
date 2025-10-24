import { useQuery } from "@tanstack/react-query";
import { getTechs } from "../../../servises/api/landing/topCategories";
import { getCourseLevel } from "../../../servises/api/courses/courseLevel";
import { getTeachers } from "../../../servises/api/teachers";
import InfoCard from "../components/InfoCard";
import CheckList from "./CheckList";
import PriceRangeComponent from "./PriceRangeComponent";
import { courseState } from "./categoriesData";
import { useState } from "react";

const FiltersPanel = ({
  selectedTechs,
  setSelectedTechs,
  selectedLevels,
  setSelectedLevels,
  selectedTeachers,
  setSelectedTeachers,
  value,
  setValue,
}) => {
  const [selectedStates, setSelectedStates] = useState([]);

  const { data: topTech } = useQuery({
    queryKey: ["techs"],
    queryFn: getTechs,
  });
  const { data: courseLevel } = useQuery({
    queryKey: ["courseLevels"],
    queryFn: getCourseLevel,
  });
  const { data: teachersData } = useQuery({
    queryKey: ["teachers"],
    queryFn: getTeachers,
  });

  return (
    <div className="md:flex flex-col gap-5 w-[310px] hidden">
      <InfoCard title="دسته بندی ها" showMoreButton={topTech?.length > 7}>
        <CheckList
          data={topTech}
          labelKey="techName"
          selected={selectedTechs}
          setSelected={setSelectedTechs}
        />
      </InfoCard>

      <InfoCard title="سطح دوره" showMoreButton={courseLevel?.length > 4}>
        <CheckList
          data={courseLevel}
          labelKey="levelName"
          selected={selectedLevels}
          setSelected={setSelectedLevels}
        />
      </InfoCard>

      <InfoCard title="نحوه برگزاری" showMoreButton={courseState?.length > 4}>
        <CheckList
          data={courseState}
          labelKey="label"
          selected={selectedStates}
          setSelected={setSelectedStates}
        />
      </InfoCard>

      <InfoCard title="مربیان" showMoreButton={teachersData?.length > 7}>
        <CheckList
          data={teachersData}
          labelKey="teacherName"
          selected={selectedTeachers}
          setSelected={setSelectedTeachers}
        />
      </InfoCard>

      <InfoCard title="قیمت">
        <div className="overflow-visible relative">
          <PriceRangeComponent value={value} setValue={setValue} />
        </div>
      </InfoCard>
    </div>
  );
};
export default FiltersPanel;
