import { HiDevicePhoneMobile } from 'react-icons/hi2';
import { TfiEmail } from 'react-icons/tfi';
import { TbHomeSearch } from 'react-icons/tb';
import { FaWhatsapp } from 'react-icons/fa';
import stylesBootstrap from 'bootstrap/dist/css/bootstrap.module.css';
import styles from './SectionMapsContent.module.css';
import cn from 'classnames';
import Button from '../../Button/Button';
import YandexMaps from '../YandexMaps/YandexMaps';

const elementsContents = [
  {
    id: 'addressOffice1',
    title: 'Офис во Владивостоке',
    imageMobil: <HiDevicePhoneMobile />,
    hrefPhone: 'tel:+79243358311',
    phone: '+7 (924) 335-83-11',
    imageMail: <TfiEmail />,
    hrefMail: 'mailto:office@asiasalesauto.ru',
    email: 'office@asiasalesauto.ru',
    imageAdress: <TbHomeSearch />,
    textAddress1: 'г. Владивосток, ул. Камская, д. 5Б,',
    textAddress2: '1 этаж, 1 офис',
    imageWA: <FaWhatsapp />,
    hrefWA:
      'https://wa.me/+79243358311?text=Здравствуйте,%20пишу%20с%20asiasalesauto.ru',
    placeMarkPos: [43.14026428035671, 131.91669773854233]
  },
  {
    id: 'addressOffice2',
    title: 'Офис в Красноярске',
    imageMobil: <HiDevicePhoneMobile />,
    hrefPhone: 'tel:+79330233966',
    phone: '+7 (933) 023-39-66',
    imageMail: <TfiEmail />,
    hrefMail: 'mailto:office@asiasalesauto.ru',
    email: 'office@asiasalesauto.ru',
    imageAdress: <TbHomeSearch />,
    textAddress1: 'г. Красноярск, ул. Деповская, д. 15,',
    textAddress2: '1 этаж, 4 офис',
    imageWA: <FaWhatsapp />,
    hrefWA:
      'https://wa.me/+79330233966?text=Здравствуйте,%20пишу%20с%20asiasalesauto.ru',
    placeMarkPos: [56.004365073511224, 92.83152775051715]
  }
];

function SectionMapsContent() {
  return elementsContents.map((elem) => {
    return (
      <div
        key={elem.id}
        className={cn(styles['offices'], stylesBootstrap['col-5'])}
      >
        <YandexMaps
          placeMarkPos={elem.placeMarkPos}
          textAddress1={elem.textAddress1}
          textAddress2={elem.textAddress2}
        />
        <div className={styles['office-content']}>
          <h4>{elem.title}</h4>
          <ul className={styles['office-content-ul']}>
            <li className={styles['office-content-li']}>
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
                href={elem.hrefWA}
                data-design-type="button"
                data-draggable="true"
                data-title="WhatsApp"
                target="_blank"
              >
                <Button
                  className={cn(
                    stylesBootstrap['d-flex'],
                    stylesBootstrap['gap-3'],
                    styles['button-wa']
                  )}
                >
                  {elem.imageWA} Связаться с нами
                </Button>
              </a>
            </li>
            <li className={styles['office-content-li']}>
              {elem.imageMail}
              <a
                data-design-type="text"
                data-draggable="true"
                data-title="Email"
                href={elem.hrefMail}
                target="_blank"
              >
                {elem.email}
              </a>
            </li>
            <li className={styles['office-content-li']}>
              {elem.imageAdress}
              <div
                className={styles['addressDiv']}
                data-design-type="text"
                data-draggable="true"
                data-title="Адрес"
              >
                <span>{elem.textAddress1}</span>
                <span>{elem.textAddress2}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  });
}

export default SectionMapsContent;
