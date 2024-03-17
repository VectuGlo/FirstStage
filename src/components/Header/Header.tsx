// import { FaWhatsapp } from 'react-icons/fa';
import { LiaTelegramPlane } from 'react-icons/lia';
import { IoLogoInstagram } from 'react-icons/io5';
import stylesBootstrap from 'bootstrap/dist/css/bootstrap.min.module.css';
import styles from './Header.module.css';
import cn from 'classnames';
import Button from '../Button/Button';

const iconsMessages = [
  {
    id: 'iconMess01',
    href: 'https://t.me/AsiaSalesAuto',
    icon: <LiaTelegramPlane />,
    messager: 'Telegram',
  },
  // {
  //   id: 'iconMess02',
  //   href: 'https://t.me/AsiaSalesAuto',
  //   icon: <FaWhatsapp />,
  //   messager: 'Telegram',
  // },
  {
    id: 'iconMess03',
    href: 'https://www.instagram.com/asiasalesauto',
    icon: <IoLogoInstagram />,
    messager: 'Instagram',
  },
];

const links = [
  { id: 'navLink01', textLink: 'Этапы работы' },
  { id: 'navLink02', textLink: 'Наши клиенты' },
  { id: 'navLink03', textLink: 'Аукционы онлайн' },
  { id: 'navLink04', textLink: 'Онлайн калькулятор' },
  { id: 'navLink05', textLink: 'Контакты' },
];

function Header() {
  return (
    <section className={cn(styles['header'], stylesBootstrap['fixed-top'])}>
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
              <img
                className={styles['logo-img']}
                data-design-type="image"
                data-title="Изображение"
                data-draggable="true"
                src="/logo.webp"
              />
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

            <div
              className={cn(stylesBootstrap['col-md-6'], styles['header-nav'])}
            >
              <ul
                className={cn(
                  stylesBootstrap['nav'],
                  stylesBootstrap['align-items-center'],
                  stylesBootstrap['justify-content-end']
                )}
              >
                {links.map((item) => {
                  return (
                    <li key={item.id} className={stylesBootstrap['nav-item']}>
                      <a
                        className={cn(
                          stylesBootstrap['nav-link'],
                          styles['nav-link-a']
                        )}
                      >
                        {item.textLink}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </header>
      </div>
    </section>
  );
}

export default Header;
