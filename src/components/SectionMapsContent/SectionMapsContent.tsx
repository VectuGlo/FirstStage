import { SectionMapsContentProps } from './SectionMapsContent.props';
import { HiDevicePhoneMobile } from 'react-icons/hi2';
import { TfiEmail } from 'react-icons/tfi';
import { TbHomeSearch } from 'react-icons/tb';
import { FaWhatsapp } from 'react-icons/fa';
import stylesBootstrap from 'bootstrap/dist/css/bootstrap.module.css';
import styles from './SectionMapsContent.module.css';
import cn from 'classnames';
import Button from '../Button/Button';

const content = [
  {
    id: 'addressOfice1',
    title: 'Офис во Владивостоке',
    imageMobil: <HiDevicePhoneMobile />,
    hrefPhone: 'tel:+79243358311',
    phone: '+7 (924) 335-83-11',
    imageMail: <TfiEmail />,
    imageAdress: <TbHomeSearch />,
    imageWA: <FaWhatsapp />,
  },
];

function SectionMapsContent({ ...props }: SectionMapsContentProps) {
  return (
    <>
      <div
        className={cn(
          stylesBootstrap['col-6'],
          stylesBootstrap['d-flex'],
          stylesBootstrap['justify-content-center']
        )}
      >
        {content.map((elem) => {
          return (
            <div key={elem.id} className={styles['ofice-content']}>
              <h4>{elem.title}</h4>
              <ul className={styles['ofice-content-ul']}>
                <li className={styles['ofice-content-li']}>
                  {elem.imageMobil}
                  <a
                    data-design-type="text"
                    data-draggable="true"
                    data-title="Телефон"
                    href={elem.hrefPhone}
                  >
                    {elem.phone}
                  </a>

                  <a
                    className={cn(styles['whathsApp'])}
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
                      {elem.imageWA} Написать нам
                    </Button>
                  </a>
                </li>
                <li className={styles['ofice-content-li']}>
                  {elem.imageMail}
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
                  {elem.imageAdress}
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
          );
        })}
      </div>
    </>
  );
}

export default SectionMapsContent;
