import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// import styles from './Slider.module.css';
import './Slider.css';
import stylesBootstrap from 'bootstrap/dist/css/bootstrap.module.css';
import cn from 'classnames';
import FsLightbox from 'fslightbox-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

function Slider() {
  const swiperElements = [
    '/Images/swiperLot/1.jpg',
    '/Images/swiperLot/2.jpg',
    '/Images/swiperLot/3.jpg',
    '/Images/swiperLot/4.jpg',
    '/Images/swiperLot/5.jpg',
    '/Images/swiperLot/6.jpg',
    '/Images/swiperLot/7.jpg'
  ];

  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1
  });
  function openLightboxOnSlide(number: number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number
    });
  }

  return (
    <div
      className={cn(
        'custom-swiper',
        stylesBootstrap['h-100'],
        stylesBootstrap['p-3']
      )}
    >
      <Swiper
        spaceBetween={10}
        loop={true}
        pagination={{
          el: '.my-custom-pagination-div',
          clickable: true
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        onSwiper={(swiper) => {
          for (let i = 0; i < swiper.pagination.bullets.length; i++) {
            swiper.pagination.bullets[
              i
            ].style.backgroundImage = `url('./Images/swiperLot/${i + 1}.jpg')`;
          }
        }}
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
      <div
        className={cn('my-custom-pagination-div', stylesBootstrap['gap-1'])}
      ></div>
    </div>
  );
}
export default Slider;
