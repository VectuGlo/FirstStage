import { FaWhatsapp } from 'react-icons/fa';
import { LiaTelegramPlane } from 'react-icons/lia';
import { IoLogoInstagram } from 'react-icons/io5';
import { Link, useLocation } from '@tanstack/react-router';
import stylesBootstrap from 'bootstrap/dist/css/bootstrap.min.module.css';
import styles from './Header.module.css';
import cn from 'classnames';
import Button from '../Button/Button';
import HeaderNavLinks from '../HeaderNavLinks/HeaderNavLinks';

const iconsMessages = [
  {
    id: 'iconMess01',
    href: 'https://t.me/AsiaSalesAuto',
    icon: <LiaTelegramPlane />,
    messager: 'Telegram'
  },
  {
    id: 'iconMess02',
    href: 'https://api.whatsapp.com/send/?phone=%2B79243358311&text=Здравствуйте%2C+пишу+с+asiasalesauto.ru&type=phone_number&app_absent=0',
    icon: <FaWhatsapp />,
    messager: 'WhatsApp'
  },
  {
    id: 'iconMess03',
    href: 'https://www.instagram.com/asiasalesauto',
    icon: <IoLogoInstagram />,
    messager: 'Instagram'
  }
];

function Header() {
  const path = useLocation().pathname;

  return (
    <section
      id="header"
      className={cn(styles['header'], stylesBootstrap['fixed-top'])}
    >
      <div className={stylesBootstrap['container-fluid']}>
        <header className={stylesBootstrap['col-12']}>
          <div
            className={cn(
              stylesBootstrap['row'],
              stylesBootstrap['d-flex'],
              stylesBootstrap['align-items-center'],
              stylesBootstrap['justify-content-between']
            )}
          >
            <div
              className={cn(stylesBootstrap['col-md-4'], styles['logo-div'])}
            >
              {path !== '/' ? (
                <Link to={'/'}>
                  <img
                    className={styles['logo-img']}
                    data-design-type="image"
                    data-title="Изображение"
                    data-draggable="true"
                    src="/logo.webp"
                  />
                </Link>
              ) : (
                <a href="#">
                  <img
                    className={styles['logo-img']}
                    data-design-type="image"
                    data-title="Изображение"
                    data-draggable="true"
                    src="/logo.webp"
                  />
                </a>
              )}

              <div
                className={cn(stylesBootstrap['col-md-1'], styles['tlg-div'])}
              >
                {iconsMessages.map((item) => {
                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      data-draggable="true"
                      data-title={item.messager}
                      target="_blank"
                    >
                      <Button className={styles['header-btn']}>
                        {item.icon}
                      </Button>
                    </a>
                  );
                })}
              </div>
            </div>
            <HeaderNavLinks />
          </div>
        </header>
      </div>
    </section>
  );
}

export default Header;
