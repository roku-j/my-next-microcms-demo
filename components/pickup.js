import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import styles from '../styles/components/Pickup.module.scss';

export default function Pickup() {
  return (
    <>
      <Swiper
        spaceBetween={20}
        slidesPerView={'auto'}
        loop={true}
        centeredSlides={true}
        >
        <SwiperSlide className={styles.item}>
          item
        </SwiperSlide>
        <SwiperSlide className={styles.item}>
          item
        </SwiperSlide>
        <SwiperSlide className={styles.item}>
          item
        </SwiperSlide>
        <SwiperSlide className={styles.item}>
          item
        </SwiperSlide>
        <SwiperSlide className={styles.item}>
          item
        </SwiperSlide>
      </Swiper>
    </>
  )
}
