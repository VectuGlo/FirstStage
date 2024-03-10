import { HiDevicePhoneMobile } from 'react-icons/hi2';
import { TfiEmail } from 'react-icons/tfi';
import { TbHomeSearch } from 'react-icons/tb';
import stylesBootstrap from 'bootstrap/dist/css/bootstrap.module.css';
import styles from './SectionMaps.module.css';
import cn from 'classnames';
import Separator from '../Separator/Separator';
import YandexMaps from '../YandexMaps/YandexMaps';

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
              className={cn(stylesBootstrap['col-6'], styles['ofice-content'])}
            >
              <h4>Офис во Владивостоке</h4>
              <div className={stylesBootstrap['']}>
                <a
                  data-design-type="text"
                  data-draggable="true"
                  data-title="Телефон"
                  href="tel:+79243358311"
                >
                  <HiDevicePhoneMobile />
                  +7 (924) 335-83-11
                </a>

                <a
                  data-design-type="text"
                  data-draggable="true"
                  data-title="Email"
                  href="mailto:office@asiasalesauto.ru"
                  target="_blank"
                >
                  <TfiEmail />
                  office@asiasalesauto.ru
                </a>
              </div>
              <div
                className={styles['addressDiv']}
                data-design-type="text"
                data-draggable="true"
                data-title="Адрес"
              >
                <TbHomeSearch />
                <div className={cn(styles['addressDivContent'])}>
                  <span>г. Владивосток, ул. Камская, д. 5Б</span>
                  <span>1 этаж, 1 офис</span>
                </div>
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
