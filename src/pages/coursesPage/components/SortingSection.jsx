import React from 'react'
import SortDropdown from "../../../components/section/shared/SortDropdown"; 
import "../../../assets/styles/global.css"

const SortingSection = () => {
    const sortOptions1 = [
        { key: "popular", label: "محبوب‌ترین" },
        { key: "new", label: "جدیدترین" },
        { key: "cheap", label: "ارزان‌ترین" },
        { key: "expensive", label: "گران‌ترین" },
      ];
      const sortOptions2 = [
        { key: "ascending", label: "صعودی" },
        { key: "Descending", label: "نزولی" },
      ];
  return (
    <>
       <SortDropdown options={sortOptions1}/>
      <SortDropdown options={sortOptions2}/>
        <span style={{ color: "var(--color-dark-purple)" }} className='hidden md:block text-responsive whitespace-nowrap'>: مرتب سازی بر اساس</span>
    </>
  )
}

export default SortingSection
