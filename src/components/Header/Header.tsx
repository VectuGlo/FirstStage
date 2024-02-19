import { HeaderProps } from './Header.props';
import styles from './Header.module.css';
import stylesBoot from 'bootstrap/dist/css/bootstrap.min.module.css';
import cn from 'classnames';

function Header({ ...props }: HeaderProps) {
  return (
    <section
      className={cn(
        styles['menu'],
        stylesBoot['navbar'],
        stylesBoot['fixed-top']
      )}
      {...props}
    >
      <div className={stylesBoot['container-fluid']}>
        <header className={stylesBoot['col-12']}>
          <div
            className={cn(stylesBoot['row'], stylesBoot['align-items-center'])}
          >
            <div className={cn(stylesBoot['col-md-2'], stylesBoot['logo-div'])}>
              <img
                className={styles['logo-img']}
                data-design-type="image"
                data-title="Изображение"
                data-draggable="true"
                src="/logo.webp"
              />
            </div>

            <div className={stylesBoot['col-md-9']}>
              <ul
                className={cn(
                  stylesBoot['nav'],
                  stylesBoot['justify-content-center']
                )}
              >
                <li className={stylesBoot['nav-item']}>
                  <a className={stylesBoot['nav-link']}>Active link</a>
                </li>
                <li className={stylesBoot['nav-item']}>
                  <a className={stylesBoot['nav-link']}>Link</a>
                </li>
                <li className={stylesBoot['nav-item']}>
                  <a className={stylesBoot['nav-link']}>Disabled link</a>
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
