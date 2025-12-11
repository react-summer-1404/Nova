import React from "react";
import YellowButton from "../../../ui/button/YellowButton";
import { GoChevronLeft } from "react-icons/go";
const renderEditorJS = (data) => {
  return data.blocks.map((block, index) => {
    const blockId = block.id || `block-${index}`;

    switch (block.type) {
      case "paragraph":
        return (
          <p
            key={blockId}
            className="text-[14px] md:text-[16px] leading-7 text-[#6D6C80] text-right mb-4"
            dangerouslySetInnerHTML={{ __html: block.data.text }}
          />
        );

      case "header":
        const HeaderTag = `h${block.data.level}`;
        return (
          <HeaderTag
            key={blockId}
            className="font-bold text-right mb-5 text-2xl md:text-3xl text-[#1a1a1a]"
            dangerouslySetInnerHTML={{ __html: block.data.text }}
          />
        );

      case "list":
        if (block.data.style === "checklist") {
          return (
            <div key={blockId} className="my-6 space-y-3" dir="rtl">
            {block.data.items.map((item, i) => (
              <label
                key={i}
                className="flex items-center gap-3 cursor-pointer select-none text-[#6D6C80] text-[14px] md:text-[16px]"
              >
               
                    <YellowButton icon={<GoChevronLeft strokeWidth={1} size={20} color="black"/>} width={"40px"} height={"40px"}/>
                  
                
          
                <span
                  className={`transition-all ${
                    item.checked ? "line-through opacity-60" : ""
                  }`}
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
              </label>
            ))}
          </div>
          
          );
        } else {
          const ListTag = block.data.style === "ordered" ? "ol" : "ul";
          const listStyle =
            block.data.style === "ordered" ? "list-decimal" : "list-disc";

          return (
            <ListTag
              key={blockId}
              className={`${listStyle} pr-6 text-[#6D6C80] text-right mb-4 space-y-2`}
              dir="rtl"
            >
              {block.data.items.map((item, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ListTag>
          );
        }

      default:
        return null;
    }
  });
};

const CourseExplanation = ({ describe }) => {
  if (
    !describe ||
    describe === "" ||
    describe === null ||
    describe === "null"
  ) {
    return (
      <div className="flex justify-center py-8">
        <div className="w-[95%] text-center">
          <p className="text-gray-500">توضیحات ثبت نشده است</p>
        </div>
      </div>
    );
  }

  let isEditorJS = false;
  let parsedData = null;

  if (typeof describe === "string" && describe.trim().startsWith("{")) {
    try {
      const parsed = JSON.parse(describe);
      if (parsed && parsed.blocks && Array.isArray(parsed.blocks)) {
        isEditorJS = true;
        parsedData = parsed;
      }
    } catch (e) {
      isEditorJS = false;
    }
  } else if (
    typeof describe === "object" &&
    describe.blocks &&
    Array.isArray(describe.blocks)
  ) {
    isEditorJS = true;
    parsedData = describe;
  }

  return (
    <div className="flex justify-center py-8">
      <div className="w-[95%] max-w-4xl mx-auto">
        {/* <h2 className="font-bold text-[20px] md:text-[24px] mb-8 text-right">
          توضیحات 
        </h2> */}

        <div className="text-right leading-7" dir="rtl">
          {isEditorJS ? (
            renderEditorJS(parsedData)
          ) : (
            <div
              className="text-[14px] md:text-[16px] text-[#6D6C80]"
              dangerouslySetInnerHTML={{ __html: describe }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseExplanation;
