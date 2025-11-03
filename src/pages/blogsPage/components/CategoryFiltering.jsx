import React, { useEffect, useState } from "react";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { CheckboxGroup, Checkbox } from "@heroui/react";
import InfoCard from "../../../components/ui/infoCard/InfoCard";
import CheckList from "../../../components/ui/checkList/CheckList";
import { useDebounce } from "use-debounce";
import { useQuery } from "@tanstack/react-query";
import { getNewsCategory } from "../../../servises/api/newsCategory/categoryList";

const CategoryFiltering = ({ paramItems, handleChange }) => {
  const [selectNewsTech, setSelectNewsTech] = useState(
    paramItems.NewsCategoryId?.split(",") || []
  );
const {data}=useQuery({
  queryKey:["newsTech"],
  queryFn:()=>getNewsCategory()
})
  const [selectNewsTechDebounce] = useDebounce(selectNewsTech, 500);
  useEffect(() => {
    handleChange("id", selectNewsTechDebounce);
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
