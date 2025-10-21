import { useState, useEffect } from "react";

export const useSlider = ({ itemsLength, itemsPerPage , sm , md  }) => {
  const [slidesPerView, setSlidesPerView] = useState(itemsPerPage);
  const [slide, setSlide] = useState(0);

  const maxSlides = Math.max(itemsLength - slidesPerView, 0);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) setSlidesPerView(sm);
      else if (width < 1024) setSlidesPerView(md);
      else setSlidesPerView(itemsPerPage);
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [sm, md, itemsPerPage]);

  const nextSlide = () => {
    if (slide < maxSlides) setSlide(slide + 1);
    else setSlide(0);
  };

  const prevSlide = () => {
    if (slide > 0) setSlide(slide - 1);
    else setSlide(maxSlides);
  };


  return { slide, nextSlide, prevSlide, slidesPerView };
};
