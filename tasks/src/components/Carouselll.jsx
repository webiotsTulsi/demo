import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Carouselll = () => {
  return (
    <Swiper 
      slidesPerView={1} 
      modules={[Navigation, Pagination, Scrollbar,A11y]} 
      navigation 
      pagination={{ clickable: true }} 
      scrollbar={{ draggable: true }}
      >
      <SwiperSlide>
        <img className="w-[100vw] h-[100vh]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvs0_mg94UgehjQqpXgEixmG9jSr-39JpBUXA6zxri5hb0pX53cVSbyeI&s" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-[100vw] h-[100vh]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStW3NFpB9ogkH_cnS59ZNVb5iNByYLTYkeR7Ll-QcStLFZe7SilVaGlrI&s" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-[100vw] h-[100vh]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9pEDrEOfOKm1aJ9t8MorKGfPxN_m9QYkBLQ&s" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-[100vw] h-[100vh]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkJuhs3xtJ0V94n2PYF04yJ7JqFJ3Co7odWQ&s" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carouselll;
