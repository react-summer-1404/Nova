import React from 'react'
import { FaStar } from "react-icons/fa";
import { PiStudentThin } from "react-icons/pi";
import { CiCalendar } from "react-icons/ci";
import { Tabs, Tab, Card, CardBody } from "@heroui/react";
import CourseExplanation from './CourseExplanation/CourseExplanation';

import CourseComment from './CourseComment/CourseComment';
import { useState } from 'react';
const CourseDetail = ({ imageAddress, courseRate, title, startTime, teacherName, capacity,describe}) => {
    const [selected, setSelected] = useState("بررسی اجمالی");
    
    return (
        <div className ='flex flex-col gap-7'>
            <img src={imageAddress} className ='lg:h-[400px] sm:h-[300px] w-[70%] sm:w-[85%] sm:ml-[70px] ml-[100px] lg:w-[900px] lg:ml-[0px] rounded-[15px]' />
            <div className='flex flex-col items-end gap-2.5 md:gap-4'>
                <div className='flex justify-between md:gap-3.5 gap-2'>
                    <div className='text-text-gray text-[9px] lg:text-[14px] sm:text-[11px] font-[400] flex items-center gap-1'>
                        ({courseRate} امتیاز)
                        <FaStar md:size={"16px"} color='#F8BC24' />
                    </div>
                    <button className ='bg-light-purple lg:px-9 p-1 sm:px-3 px-2 rounded-[30px] flex items-center'
                        type="submit"
                    >
                        <span className ='font-[500] text-[8px] sm:text-[10px] lg:text-[13px] text-black'>{title}</span>
                    </button>
                </div>
                <p className='lg:text-[30px] sm:text-[18px] text-[16px] font-[600] text-text-gray'>{title}</p>
                <div className=' flex items-center lg:gap-12 sm:gap-3.5 gap-0.5'>
                    <div style={{ direction: "rtl" }} className='text-[#7F7E97] font-[400] text-[9px] sm:text-[12px] lg:text-[16px] flex items-center gap-0.5 md:gap-1.5'>
                        <PiStudentThin size={10} sm:size={19} />
                            {capacity} دانش آموز 
                    </div>
                    <div style={{ color: "var(--color-text-gray2)" }} className='font-[400] text-[9px] sm:text-[12px] lg:text-[16px] flex items-center gap-0.5 md:gap-1.5'>
                        {startTime}
                        <CiCalendar size={10} sm:size={19} />
                    </div>
                    <div className='flex items-center md:gap-3 gap-1'>
                        <h3 style={{ color: "var(--color-navy)" }} className='font-[400] text-[9px] sm:text-[12px] lg:text-[16px] whitespace-nowrap'>{teacherName}</h3>
                        <h2 className='text-[#7F7E97] font-[400] text-[9px] sm:text-[12px] lg:text-[16px]'>توسط</h2> 
                        <img src={imageAddress} className =' rounded-full w-[25px] h-[26px] sm:w-[45px] sm:h-[44px]'/>
                    </div>
                </div>


                <div className ='flex mt-[15px] flex-col lg:w-[870px] sm:w-[85%] w-[70%] mr-[4px] gap-0.5 sm:gap-2 lg:gap-3'>
                    <Tabs aria-label="Options" selectedKey={selected} onSelectionChange={setSelected} variant='unstyled' classNames={{
                        tabList: "flex md:ml-[230px] ml-[0px] md:w-[75%] mb-[10px] h-[65px] bg-transparent",
                        tabContent: "bg-[#E6E9EF] rounded-full py-1 lg:py-2 sm:w-[80px] lg:w-[130px] sm:text-[10px] text-[8px] lg:text-[14px] font-[600] text-[#6D6C80] transition-all duration-300 group-data-[selected=true]:bg-[#5751E1] group-data-[selected=true]:text-[#FFFFFF] group-data-[selected=true]:shadow-[4px_6px_0px_0px_rgba(5,0,113,1)]",
                        tab: "lg:w-[24%] w-[22%]"
                    }}>
                        <Tab key="نظرات کاربران" title="نظرات کاربران" className='tr'>
                            <Card>
                                <CardBody>
                                    <CourseComment
                                        teacherName={teacherName}
                                        imageAddress = {imageAddress}
                                        
                                    />
                                </CardBody>
                            </Card>
                        </Tab>
                        <Tab key="مربیان" title="مربیان">
                            <Card>
                                <CardBody>
                                </CardBody>
                            </Card>
                        </Tab>
                        <Tab key="برنامه تحصیلی" title="برنامه تحصیلی">
                            <Card>
                                <CardBody>

                                </CardBody>
                            </Card>
                        </Tab>
                        <Tab key="بررسی اجمالی" title="بررسی اجمالی">
                            <Card>
                                <CardBody className='bg-transparent'>
                                    <CourseExplanation
                                        describe ={describe}
                                    />
                                </CardBody>
                            </Card>
                        </Tab>

                    </Tabs>
                </div>
            </div>

        </div>
    )
}

export default CourseDetail