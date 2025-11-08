import React from 'react'
import { CategoryFiltering, Search } from "../../../pages/blogsPage/components/index"
import useToggle from '../../../hooks/useToggle';
import ModalSection from '../../ui/Modal/ModalSection';

const SideContent = ({ Query, setQuery, paramItems, handleChange}) => {
  const [isOpen, toggleOpen] = useToggle(false);

  return (
    <div className='w-full flex flex-col justify-start gap-8'>
      <Search Query={Query} setQuery={setQuery} />
      <div className="hidden md:block">
      <CategoryFiltering paramItems={paramItems} handleChange={handleChange} />
          </div>
          

          <div className="fixed z-50  right-2  bottom-8 block md:hidden">
            <ModalSection
            
              content={
              <div className="flex-center flex-col  gap-5">
      <CategoryFiltering paramItems={paramItems} handleChange={handleChange} />
                 
                <button onClick={()=>toggleOpen()} className="rounded-xl bg-dark-purple text-white w-1/2 h-[35px] cursor-pointer">اعمال فیلتر</button>
              </div>
              }
              StyleModal={" rounded-3xl w-[70px] h-[70px] bg-[#5751E1]"}
              isOpen={isOpen}
              onClose={toggleOpen}
              onOpen={toggleOpen}
            />
          </div>
    </div>
  )
}

export default SideContent
