import useToggle from "../../../hooks/useToggle";
import {Accordion, AccordionItem} from "@heroui/accordion";
const InfoCard = ({ title, children }) => {

  return (
    // <div
    //   style={{ backgroundColor: "var(--color-light-gray)" }}
    //   className="lg:w-[310px]  rounded-[10px] p-[30px]"
    // >
    //   <div className="w-full flex flex-col items-end gap-4 ">
    //     <h2 className="font-semibold text-xl">{title}</h2>

    //     <div
    //       className={`transition-all duration-500 overflow-hidden w-[90%] ${
    //         isExpanded ? "max-h-[1000px]" : "max-h-[500px] "
    //       }`}
    //     >
    //       {children}
    //     </div>

    //     {showMoreButton && (
    //       <button
    //         onClick={() => setIsExpanded(!isExpanded)}
    //         className="text-sm font-medium self-center mt-2"
    //         style={{color:"var(--color-dark-purple)"}}
    //       >
    //         {isExpanded ? "نمایش کمتر" : "+ نمایش بیشتر  "}
    //       </button>
    //     )}
    //   </div>
    // </div>
    <Accordion className="lg:w-[310px]  rounded-[10px] p-[20px] bg-light-gray">
    <AccordionItem style={{direction:"rtl"}} key="1"  title={title}>
      {children}
    </AccordionItem>
   
  </Accordion>
  );
};

export default InfoCard;
