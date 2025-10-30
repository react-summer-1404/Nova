import { useQuery } from "@tanstack/react-query";
import { getTechs } from "../../../servises/api/landing/topCategories";
import { getCourseLevel } from "../../../servises/api/courses/courseLevel";
import { getTeachers } from "../../../servises/api/teachers";
import InfoCard from "../../../components/ui/infoCard/InfoCard";
import CheckList from "../../../components/ui/checkList/CheckList";
import PriceRangeComponent from "./PriceRangeComponent";
import { courseState } from "../../blogsPage/components/categoriesData";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

const FiltersPanel = ({ paramsObject, onChangeParams }) => {
  const [priceRange, setPriceRange] = useState([
    Number(paramsObject.CostDown) || 0,
    Number(paramsObject.CostUp) || 2000,
  ]);

  const [debouncePrice] = useDebounce(priceRange, 500);
  useEffect(() => {
    onChangeParams("CostDown", debouncePrice[0]);
    onChangeParams("CostUp", debouncePrice[1]);
  }, [debouncePrice]);
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
    idKey="id"
    selected={paramsObject.ListTech || ""}
    onChangeParams={(techVal) => onChangeParams("ListTech", techVal)}
  />
</InfoCard>

<InfoCard title="سطح دوره" showMoreButton={courseLevel?.length > 4}>
  <CheckList
    data={courseLevel}
    labelKey="levelName"
    idKey="id"
    selected={paramsObject.courseLvlId || ""}
    onChangeParams={(levelVal) =>
      onChangeParams("courseLvlId", levelVal)
    }
  />
</InfoCard>

<InfoCard title="نحوه برگزاری" showMoreButton={courseState?.length > 4}>
  <CheckList
    data={courseState}
    labelKey="label"
    idKey="id"
    selected={paramsObject.courseState || ""}
    onChangeParams={(val) => onChangeParams("courseState", val)}
  />
</InfoCard>

<InfoCard title="مربیان" showMoreButton={teachersData?.length > 7}>
  <CheckList
    data={teachersData}
    labelKey="fullName"
    idKey="teacherId"
    selected={paramsObject.teacherId || ""}
    onChangeParams={(teacherVal) =>
      onChangeParams("teacherId", teacherVal)
    }
  />
</InfoCard>

      <InfoCard title="قیمت">
        <div className="overflow-visible relative">
          <PriceRangeComponent value={priceRange} setValue={setPriceRange} />
        </div>
      </InfoCard>
    </div>
  );
};
export default FiltersPanel;
