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
              {/* <a
                id=""
                className="logo-a"
                data-draggable="true"
                data-title="Логотип"
                href="asa.html"
                data-action-cart="false"
              ></a> */}
            </div>

            <div className="col-md-9">
              <ul className="nav justify-content-center">
                <li className="nav-item">
                  <a className="nav-link" href="#" aria-current="page">
                    Active link
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Disabled link
                  </a>
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
