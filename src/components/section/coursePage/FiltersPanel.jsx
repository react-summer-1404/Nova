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
    Number(paramsObject.CostDown) || 0,
    Number(paramsObject.CostUp) || 2000,
  ]);

  const [debouncePrice] = useDebounce(priceRange, 500);

  useEffect(() => {
    console.log("debouncePrice:", debouncePrice);
    onChangeParams("CostDown", debouncePrice[0]);
    onChangeParams("CostUp", debouncePrice[1]);
  }, [debouncePrice]);

  // Techs 
  const [selectedTech, setSelectedTech] = useState(
    paramsObject.ListTech?.split(",") || []
  );
  const [debounceTech] = useDebounce(selectedTech, 500);

  useEffect(() => {
    onChangeParams("ListTech", debounceTech);
  }, [debounceTech]);

  //Course Levels 
  const [selectedLevel, setSelectedLevel] = useState(
    paramsObject.courseLvlId?.split(",") || []
  );
  const [debounceLevel] = useDebounce(selectedLevel, 500);

  useEffect(() => {
    onChangeParams("courseLvlId", debounceLevel);
  }, [debounceLevel]);

  //  Course State 
  const [selectedState, setSelectedState] = useState(
    paramsObject.courseState?.split(",") || []
  );
  const [debounceState] = useDebounce(selectedState, 500);

  useEffect(() => {
    onChangeParams("courseState", debounceState);
  }, [debounceState]);

  // Teachers 
  const [selectedTeacher, setSelectedTeacher] = useState(
    paramsObject.teacherId ? [String(paramsObject.teacherId)] : []
  );
  const [debounceTeacher] = useDebounce(selectedTeacher, 500);

  useEffect(() => {
    onChangeParams("teacherId", debounceTeacher);
  }, [debounceTeacher]);

  //  Queries 
  const { data: topTech } = useTechs()

  const { data: courseLevel } = useQuery({
    queryKey: ["courseLevels"],
    queryFn: getCourseLevel,
    staleTime: 1000 * 60 * 10,    
  refetchOnMount: false,
  });

  const { data: teachersData } = useQuery({
    queryKey: ["teachers"],
    queryFn: getTeachers,
    staleTime: 1000 * 60 * 10,    
  refetchOnMount: false,
  });

  //  Render 
  return (
    <div className="md:flex flex-col gap-5 w-[310px] hidden">
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
