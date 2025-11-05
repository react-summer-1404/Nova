import React from 'react'
import {CircularProgress, Card, CardBody, CardFooter, Chip} from "@heroui/react";

const ProfileProgrgressBar = () => {
  return (
    <div className='justy-between gap-8'>
      <p className='w-[198px] text-right text-base-gray'>برای شرکت در دوره ها باید حداقل ٪ ۸۰ از پروفایل خود را تکمیل کنید.</p>
      <CircularProgress
          classNames={{
            svg: "w-[112px] h-[112px]",
            indicator: "text-golden-yellow",
            track: "text-navy",
            value: "text-3xl font-semibold text-dark-purple",
          }}
          showValueLabel={true}
          strokeWidth={4}
          value={70}
        />
    </div>
  )
}

export default ProfileProgrgressBar
