import React, { useEffect, useState } from "react";
import InfoCard from "../../ui/infoCard/InfoCard";
import CheckList from "../../ui/checkList/CheckList";
import { useDebounce } from "use-debounce";
import { useQuery } from "@tanstack/react-query";
import { getNewsCategory } from "../../../servises/api/news/newsCategory";

const CategoryFiltering = ({ paramItems, handleChange }) => {
  const [selectNewsTech, setSelectNewsTech] = useState(
    paramItems.NewsCategoryId?.split(",") || []
  );
const {data}=useQuery({
  queryKey:["newsTech"],
  queryFn:getNewsCategory
})
  const [selectNewsTechDebounce] = useDebounce(selectNewsTech, 500);
  useEffect(() => {
    handleChange("NewsCategoryId", selectNewsTechDebounce);
  }, [selectNewsTechDebounce]);
  return (
    <div>
      <InfoCard title={"دسته بندی ها"}>
        <CheckList
          data={data}
          labelKey="categoryName"
          selected={selectNewsTech}
          setSelected={setSelectNewsTech}
        />
      </InfoCard>
    </div>
  );
};

export default CategoryFiltering;
