import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import './SCSwiper.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import Separator from '../Separator/Separator';
import styles from './SectionClientSwiper.module.css';
import stylesBootstrap from 'bootstrap/dist/css/bootstrap.module.css';

function SectionClientSwiper() {
  const swiperElements = [
    '/Images/swiperTitle/swiper-1.jpeg',
    '/Images/swiperTitle/swiper-2.jpeg',
    '/Images/swiperTitle/swiper-3.jpeg',
    '/Images/swiperTitle/swiper-4.jpeg',
    '/Images/swiperTitle/swiper-5.jpeg',
    '/Images/swiperTitle/swiper-6.jpeg',
    '/Images/swiperTitle/swiper-7.jpeg',
    '/Images/swiperTitle/swiper-8.jpeg'
  ];

  const breakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10
    }
  };

  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1
  });

  function openLightboxOnSlide(number = Number()) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number
    });
  }

  return (
    <>
      <section
        id="SectionClientSwiper"
        className={stylesBootstrap['container-fluid']}
      >
        <div className={styles['content']}>
          <h2 className={styles['content-h2']}>Наши клиенты</h2>
          <Swiper
            spaceBetween={10}
            slidesPerView={3}
            breakpoints={breakpoints}
            loop={true}
            pagination={{
              el: '.my-custom-pagination-div',
              clickable: true
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
          >
            {swiperElements.map((element, i) => {
              return (
                <SwiperSlide key={i} onClick={() => openLightboxOnSlide(i + 1)}>
                  <img src={element} />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <FsLightbox
            toggler={lightboxController.toggler}
            sources={swiperElements}
            slide={lightboxController.slide}
          />
          <div className="my-custom-pagination-div"></div>
        </div>
      </section>
      <Separator />
    </>
  );
}
export default SectionClientSwiper;
