import useToggle from "../../../hooks/useToggle";
import {Accordion, AccordionItem} from "@heroui/accordion";
const InfoCard = ({ title, children, showMoreButton = false }) => {
  const [isExpanded, setIsExpanded] = useToggle(false);

  return (
    <Accordion className="lg:w-[310px]  rounded-[10px] p-[20px] bg-light-gray">
    <AccordionItem style={{direction:"rtl"}} key="1"  title={title}>
      {children}
    </AccordionItem>
   
  </Accordion>
  );
};

export default InfoCard;
