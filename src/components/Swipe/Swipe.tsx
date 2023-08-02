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
        {serData.map((data: any, index: number) => (
          <SwiperSlide key={index}>
            <Chart serData={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
