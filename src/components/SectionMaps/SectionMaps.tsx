import { HiDevicePhoneMobile } from 'react-icons/hi2';
import { TfiEmail } from 'react-icons/tfi';
import { TbHomeSearch } from 'react-icons/tb';
import { FaWhatsapp } from 'react-icons/fa';
import stylesBootstrap from 'bootstrap/dist/css/bootstrap.module.css';
import styles from './SectionMaps.module.css';
import cn from 'classnames';
import Separator from '../Separator/Separator';
import SectionMapsContent from '../SectionMapsContent/SectionMapsContent';

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
    disoption: true,
    placeMarkPos: [43.14026428035671, 131.91669773854233],
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
    hrefWA: '',
    disoption: false,
    placeMarkPos: [56.004365073511224, 92.83152775051715],
  },
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
            <SectionMapsContent elementsContents={elementsContents} />
          </div>
        </div>
      </section>
      <Separator apperance="dark" />
    </>
  );
}

export default SectionMaps;
