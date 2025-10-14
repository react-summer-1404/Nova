import { useState } from "react";

export const useSlider = ({ itemsLength, itemsPerPage }) => {
  const [slide, setSlide] = useState(0);
  const maxSlides = Math.ceil(itemsLength / itemsPerPage) - 1;

  const nextSlide = () => {
    if (slide < maxSlides) setSlide(slide + 1);
    else setSlide(0); 
  };

  const prevSlide = () => {
    if (slide > 0) setSlide(slide - 1);
    else setSlide(maxSlides); 
  };

  return { slide, nextSlide, prevSlide, maxSlides };
};
export default useSlider