import React from "react";
import TypewriterComponent from "typewriter-effect";

export function AutoTypeWriter(params) {
  return (
    <div style={{direction:"rtl"}} className="text-2xl text-black">
      <TypewriterComponent
        options={{
          strings: ["تلاش", "استقامت", "ایستادگی", "پشتکار"],
          autoStart: true,
          loop: true,
          delay: 150,
          deleteSpeed: 60,
        }}
      />
    </div>
  );
}
