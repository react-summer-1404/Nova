import { Accordion, AccordionItem } from "@heroui/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function AccardionComponent() {
  const { t } = useTranslation();
  const defaultContent = t("fAQSection.fAQSectionA1");

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
          title: t("fAQSection.fAQSectionQ1"),
        },
        {
          key: "2",
          title: t("fAQSection.fAQSectionQ2"),
        },
        {
          key: "3",
          title: t("fAQSection.fAQSectionQ3"),
        },
        {
          key: "4",
          title: t("fAQSection.fAQSectionQ4"),
        },
      ].map((item) => (
        <AccordionItem
          key={item.key}
          aria-label={`Accordion ${item.key}`}
          title={
            <span
              style={{
                color: selectedKeys.has(item.key)
                  ? "var(--color-dark-purple)"
                  : "var(--color-text-gray)",
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
