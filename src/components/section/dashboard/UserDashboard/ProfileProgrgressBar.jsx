import React from 'react'
import {CircularProgress, Card, CardBody, CardFooter, Chip, Button} from "@heroui/react";
import { CiEdit } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';

const ProfileProgrgressBar = ({profileCompletionPercentage}) => {
  const navigate = useNavigate()
  return (
    <div className='justy-between gap-8 py-4 px-10'>
      <div className='flex-col-center'>
        <p className='w-[198px] text-center text-base-gray'>برای شرکت در دوره ها باید حداقل ٪ ۸۰ از پروفایل خود را تکمیل کنید.</p>
         <Button className="w-[128px] h-[32px] rounded-full px-1 py-0.5 text-navy bg-golden-yellow" onPress={() => {navigate("/dashboard/userinformation/edituserprofile")}}>
            <span className="text-[16px]">
              <CiEdit />
            </span>
            <span className="text-[15px] ">تکمیل پروفایل</span>
          </Button>
      </div>
      <div>
        <CircularProgress
          classNames={{
            svg: "w-[112px] h-[112px]",
            indicator: "text-golden-yellow",
            track: "text-navy",
            value: "text-3xl font-semibold text-dark-purple",
          }}
          showValueLabel={true}
          strokeWidth={4}
          value={profileCompletionPercentage}
        />
      </div>
    </div>
  )
}

export default ProfileProgrgressBar
