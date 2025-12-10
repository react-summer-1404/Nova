import React from 'react'
import {CircularProgress, Card, CardBody, CardFooter, Chip, Button} from "@heroui/react";
import { CiEdit } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';
import { YellowButton } from '../../../ui';

const ProfileProgrgressBar = ({profileCompletionPercentage}) => {
  const navigate = useNavigate()
  return (
    <div className='justy-between gap-8 py-4 px-10  h-full '>
      <div className='flex-col-center  gap-4'>
        <p className='md:w-[250px] text-center text-base-gray'>برای شرکت در دوره ها باید حداقل ٪ ۸۰ از پروفایل خود را تکمیل کنید.</p>
          <YellowButton onClick={() => {navigate("/dashboard/userinformation/edituserprofile")}} icon={<CiEdit />} text={"تکمیل پروفایل"} height={"30px"}/>
      </div>
      <div>
        <CircularProgress
          classNames={{
            svg: "w-[150px] h-[150px]",
            indicator: "text-golden-yellow",
            track: "text-navy",
            value: "text-[34px] font-semibold text-dark-purple",
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
