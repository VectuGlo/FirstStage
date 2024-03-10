import { HiDevicePhoneMobile } from 'react-icons/hi2';
import { TfiEmail } from 'react-icons/tfi';
import { TbHomeSearch } from 'react-icons/tb';
import { FaWhatsapp } from 'react-icons/fa';
import stylesBootstrap from 'bootstrap/dist/css/bootstrap.module.css';
import styles from './SectionMaps.module.css';
import cn from 'classnames';
import Separator from '../Separator/Separator';
import YandexMaps from '../YandexMaps/YandexMaps';
import Button from '../Button/Button';

const icons = [
  <HiDevicePhoneMobile />,
  <TfiEmail />,
  <TbHomeSearch />,
  <FaWhatsapp />,
];

function SectionMaps() {
  return (
    <>
      <section
        className={cn(stylesBootstrap['col-12'], styles['section-maps'])}
      >
        <div className={cn(stylesBootstrap['container-fluid'])}>
          <h2 className={cn(styles['map-h2'], stylesBootstrap['text-center'])}>
            Наши Офисы
          </h2>
          <div className={cn(styles['advantages'])}>
            <div className={stylesBootstrap['col-6']}>
              <YandexMaps />
            </div>
            <div
              className={cn(
                stylesBootstrap['col-6'],
                stylesBootstrap['d-flex'],
                stylesBootstrap['justify-content-center']
              )}
            >
              <div className={styles['ofice-content']}>
                <h4>Офис во Владивостоке</h4>
                <ul className={styles['ofice-content-ul']}>
                  <li className={styles['ofice-content-li']}>
                    {icons[0]}
                    <a
                      data-design-type="text"
                      data-draggable="true"
                      data-title="Телефон"
                      href="tel:+79243358311"
                    >
                      +7 (924) 335-83-11
                    </a>

                    <a
                      href="https://wa.me/+79243358311?text=Здравствуйте,%20пишу%20с%20asiasalesauto.ru"
                      data-design-type="button"
                      data-draggable="true"
                      data-title="WhatsApp"
                      target="_blank"
                    >
                      <Button
                        className={cn(
                          stylesBootstrap['d-flex'],
                          stylesBootstrap['gap-3']
                        )}
                      >
                        {icons[3]} Написать нам
                      </Button>
                    </a>
                  </li>
                  <li className={styles['ofice-content-li']}>
                    {icons[1]}
                    <a
                      data-design-type="text"
                      data-draggable="true"
                      data-title="Email"
                      href="mailto:office@asiasalesauto.ru"
                      target="_blank"
                    >
                      office@asiasalesauto.ru
                    </a>
                  </li>
                  <li className={styles['ofice-content-li']}>
                    {icons[2]}
                    <div
                      className={styles['addressDiv']}
                      data-design-type="text"
                      data-draggable="true"
                      data-title="Адрес"
                    >
                      <span>г. Владивосток, ул. Камская, д. 5Б,</span>
                      <span>1 этаж, 1 офис</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Separator apperance="dark" />
    </>
  );
}

export default SectionMaps;
