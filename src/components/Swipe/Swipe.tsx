import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import Chart from '../Chart/Chart';
import { TestStore } from '../../stores/testStore';

export default function Swipe() {
  const { serData } = TestStore();
  console.log('swipeeeeeeeeeee');
  console.log(serData);
  console.log(serData?.[0]?.title);

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <Chart serData={serData[0]} />
        </SwiperSlide>
        <SwiperSlide>
          <Chart serData={serData[1]} />
        </SwiperSlide>
        <SwiperSlide>
          <Chart serData={serData[2]} />
        </SwiperSlide>
        <SwiperSlide>
          <Chart serData={serData[3]} />
        </SwiperSlide>
        <SwiperSlide>
          <Chart serData={serData[4]} />
        </SwiperSlide>
        {/* <SwiperSlide>
          <Chart serData={serData[5]} />
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
