import { HeaderProps } from './Header.props';
import stylesBootstrap from 'bootstrap/dist/css/bootstrap.min.module.css';
import styles from './Header.module.css';
import cn from 'classnames';

function Header({ ...props }: HeaderProps) {
  return (
    <section
      className={cn(styles['header'], stylesBootstrap['fixed-top'])}
      {...props}
    >
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

            <div className={stylesBootstrap['col-md-9']}>
              <ul
                className={cn(
                  stylesBootstrap['nav'],

                  stylesBootstrap['justify-content-end']
                )}
              >
                <li className={stylesBootstrap['nav-item']}>
                  <a className={cn(stylesBootstrap['nav-link'])}>
                    Этапы работы
                  </a>
                </li>
                <li className={stylesBootstrap['nav-item']}>
                  <a className={stylesBootstrap['nav-link']}>Наши клиенты</a>
                </li>
                <li className={stylesBootstrap['nav-item']}>
                  <a className={stylesBootstrap['nav-link']}>
                    Популярные автомобили
                  </a>
                </li>
                <li className={stylesBootstrap['nav-item']}>
                  <a className={stylesBootstrap['nav-link']}>
                    Онлайн калькулятор
                  </a>
                </li>
                <li className={stylesBootstrap['nav-item']}>
                  <a className={stylesBootstrap['nav-link']}>Контакты</a>
                </li>
              </ul>
            </div>
          </div>
        </header>
      </div>
    </section>
  );
}

export default Header;
