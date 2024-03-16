import stylesBootstrap from 'bootstrap/dist/css/bootstrap.min.module.css';
import styles from './Header.module.css';
import cn from 'classnames';

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
              stylesBootstrap['align-items-center'],
              stylesBootstrap['justify-content-between']
            )}
          >
            <div
              className={cn(stylesBootstrap['col-md-2'], styles['logo-div'])}
            >
              <img
                className={styles['logo-img']}
                data-design-type="image"
                data-title="Изображение"
                data-draggable="true"
                src="/logo.webp"
              />
            </div>

            <div
              className={cn(stylesBootstrap['col-md-9'], styles['header-nav'])}
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
