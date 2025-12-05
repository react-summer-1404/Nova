import { useQuery } from "@tanstack/react-query";
import { getCourseLevel } from "../../../servises/api/courses/courseLevel";
import { getTeachers } from "../../../servises/api/teachers";
import InfoCard from "../../ui/infoCard/InfoCard";
import CheckList from "../../ui/checkList/CheckList";
import PriceRangeSlider from "./PriceRangeSlider";
import { courseState } from "./categoriesData";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import useTechs from "../../../hooks/useTech";

const FiltersPanel = ({ paramsObject, onChangeParams }) => {
  //  Price Range 
  const [priceRange, setPriceRange] = useState([
    paramsObject.CostDown || 0,
    paramsObject.CostUp || 2000,
  ]);

  const [debouncePrice] = useDebounce(priceRange, 500);

  useEffect(() => {
    onChangeParams("CostDown", debouncePrice[0]);
    onChangeParams("CostUp", debouncePrice[1]);
  }, [debouncePrice]);

  // Techs 
  const [selectedTech, setSelectedTech] = useState(
    paramsObject.ListTech?.split(",") 
  );
  const [debounceTech] = useDebounce(selectedTech, 500);

  useEffect(() => {
    onChangeParams("ListTech", debounceTech);
  }, [debounceTech]);

  //Course Levels 
  const [selectedLevel, setSelectedLevel] = useState(
    paramsObject.courseLevelId?.split(",") 
  );
  const [debounceLevel] = useDebounce(selectedLevel, 500);

  useEffect(() => {
    onChangeParams("courseLevelId", debounceLevel);
  }, [debounceLevel]);

  //  Course State 
  const [selectedState, setSelectedState] = useState(
    paramsObject.courseState?.split(",") 
  );
  const [debounceState] = useDebounce(selectedState, 500);

  useEffect(() => {
    onChangeParams("courseState", debounceState);
  }, [debounceState]);

  // Teachers 
  const [selectedTeacher, setSelectedTeacher] = useState(
    paramsObject.teacherId?.split(",") 
  );
  const [debounceTeacher] = useDebounce(selectedTeacher, 500);

  useEffect(() => {
    onChangeParams("TeacherId", debounceTeacher);
  }, [debounceTeacher]);

  //  Queries 
  const { data: topTech } = useTechs()

  const { data: courseLevel } = useQuery({
    queryKey: ["courseLevels"],
    queryFn: getCourseLevel,
    staleTime: 1000 * 60 * 10,    
  });

  const { data: teachersData } = useQuery({
    queryKey: ["teachers"],
    queryFn: getTeachers,
    staleTime: 1000 * 60 * 10,    
  });

   
  return (
    <div className="flex  gap-5  flex-wrap md:flex-col lg:flex-nowrap ">
      <InfoCard title="دسته بندی ها">
        <CheckList
          data={topTech}
          labelKey="techName"
          selected={selectedTech}
          setSelected={setSelectedTech}
        />
      </InfoCard>

      <InfoCard title="سطح دوره">
        <CheckList
          data={courseLevel}
          labelKey="levelName"
          selected={selectedLevel}
          setSelected={setSelectedLevel}
        />
      </InfoCard>

      <InfoCard title="نحوه برگزاری">
        <CheckList
          data={courseState}
          labelKey="label"
          selected={selectedState}
          setSelected={setSelectedState}
        />
      </InfoCard>

      <InfoCard title="مربیان">
        <CheckList
          data={teachersData}
          labelKey="fullName"
          idKey="teacherId"
          selected={selectedTeacher}
          setSelected={setSelectedTeacher}
        />
      </InfoCard>

      <InfoCard title="قیمت">
        <div className="overflow-visible relative">
          <PriceRangeSlider value={priceRange} setValue={setPriceRange} />
        </div>
      </InfoCard>
    </div>
  );
};

export default FiltersPanel;
