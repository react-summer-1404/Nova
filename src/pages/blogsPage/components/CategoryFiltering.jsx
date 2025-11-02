import React, { useEffect, useState } from "react";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { CheckboxGroup, Checkbox } from "@heroui/react";
import InfoCard from "../../../components/ui/infoCard/InfoCard";
import CheckList from "../../../components/ui/checkList/CheckList";
import useTechs from "../../../hooks/useTech";
import { useDebounce } from "use-debounce";

const CategoryFiltering = ({ paramItems, handleChange }) => {
  const [selectTech, setSelectTech] = useState(
    paramItems.ListTech?.split(",") || []
  );
  const { data } = useTechs();
  const [selectTechDebounce] = useDebounce(selectTech, 1000);
  useEffect(() => {
    handleChange("courseLvlId", selectTechDebounce);
  }, [selectTechDebounce]);
  return (
    <div>
      <InfoCard title={"دسته بندی ها"}>
        <CheckList
          data={data}
          labelKey="techName"
          selected={selectTech}
          setSelected={setSelectTech}
        />
      </InfoCard>
    </div>
  );
};

export default CategoryFiltering;
