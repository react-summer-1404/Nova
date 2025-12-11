import React from "react";
import TypewriterComponent from "typewriter-effect";
import { useTranslation } from "react-i18next";

export function AutoTypeWriter(params) {
  const { t } = useTranslation();
  return (
    <div style={{ direction: "rtl" }} className="text-2xl text-black">
      <TypewriterComponent
        options={{
          strings: [t("herosection.heroText1"),t("herosection.heroText2"), t("herosection.heroText3"), t("herosection.heroText4")],
          autoStart: true,
          loop: true,
          delay: 150,
          deleteSpeed: 60,
        }}
      />
    </div>
  );
}
