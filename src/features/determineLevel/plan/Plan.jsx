import React from 'react'
import {Breadcrumbs, BreadcrumbItem} from "@heroui/react";

const Plan = () => {
  const colors = ["primary"];

  return (
    <div className="flex flex-col flex-wrap gap-4  " >
      {colors.map((color) => (
        <Breadcrumbs key={color} color={color}   classNames={{
            list: "bg-linear-to-br from-violet-500 to-fuchsia-500 shadow-small  ",

          }}
          itemClasses={{
            item: "text-white text-lg",
            separator: "text-white/60 ",
            base:"w-fit  p-5"
           
          }}
          underline="hover"
          variant="solid"
        >
          <BreadcrumbItem >HTML & CSS</BreadcrumbItem>
          <BreadcrumbItem>JavaScript</BreadcrumbItem>
          <BreadcrumbItem>Git & GitHub</BreadcrumbItem>
          <BreadcrumbItem>FrameWorks(React / Next)</BreadcrumbItem>
          <BreadcrumbItem>Ui/Ux</BreadcrumbItem>
        </Breadcrumbs>
      ))}
    </div>
  )
}

export default Plan


