import { Accordion, AccordionItem } from "@heroui/react";
import { useState } from "react";

export default function AccardionComponent() {
  const defaultContent =
    "صندوق ورودی مشترک بصری Groove سازماندهی اعضای تیم را آسان می کند ...";
    
  const [selectedKeys, setSelectedKeys] = useState(new Set(["1"]));

  return (
    <Accordion
      selectedKeys={selectedKeys}
      onSelectionChange={setSelectedKeys}
      isCompact
      className="md:w-[57%]"
    >
      {[
        {
          key: "1",
          title: "نامبر وان می خواهد به شما چه چیزی دهد؟",
        },
        {
          key: "2",
          title: "چرا ما را برای تحصیل خود انتخاب کنید؟",
        },
        {
          key: "3",
          title: "چگونه خدماتی را برای شما ارائه می کنیم؟",
        },
        {
          key: "4",
          title: "آیا برای دوره خود مقرون به صرفه هستید؟",
        },
      ].map((item) => (
        <AccordionItem
          key={item.key}
          aria-label={`Accordion ${item.key}`}
          title={
            <span
              style={{
                color: selectedKeys.has(item.key) ? "var(--color-dark-purple)" : "var(--color-text-gray)",
                transition: "color 0.3s",
              }}
            >
              {item.title}
            </span>
          }
          className="p-4 text-base-gray text-[10px] md:text-medium"
          style={{ direction: "rtl" }}
        >
          {defaultContent}
        </AccordionItem>
      ))}
    </Accordion>
  );
}
