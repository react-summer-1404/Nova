import React from "react";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { CheckboxGroup, Checkbox } from "@heroui/react";

const CategoryFiltering = () => {
  return (
    <div
      style={{ background: "var(--color-light-gray)", direction:"rtl"}}
      className="w-full rounded-[10px] p-8"
    >
      <Accordion>
        <AccordionItem key="1" aria-label="دسته بندی ها" title="دسته بندی ها">
          <CheckboxGroup defaultValue={[""]}>
            <Checkbox className="text-right" value="artAndDesign">هنر و طراحی <span>(18)</span></Checkbox>
            <Checkbox value="bussiness">تجارت<span>(12)</span></Checkbox>
            <Checkbox value="dataScient">علم داده<span>(7)</span></Checkbox>
            <Checkbox value="develop">توسعه<span>(10)</span></Checkbox>
            <Checkbox value="economy">امور مالی<span>(18)</span></Checkbox>
            <Checkbox value="fittness">سلامت و تناسب اندام<span>(5)</span></Checkbox>
            <Checkbox value="healthyLifestyle"> سبک زندگی سالم <span>(7)</span></Checkbox>
          </CheckboxGroup>
          <span className="mt-5">نمایش بیشتر +</span>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default CategoryFiltering;
