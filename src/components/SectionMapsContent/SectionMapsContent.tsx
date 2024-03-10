import { SectionMapsContentProps } from './SectionMapsContent.props';
import stylesBootstrap from 'bootstrap/dist/css/bootstrap.module.css';
import styles from './SectionMapsContent.module.css';
import cn from 'classnames';
import Button from '../Button/Button';
import YandexMaps from '../YandexMaps/YandexMaps';

function SectionMapsContent({ elementsContents }: SectionMapsContentProps) {
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
              {!!elem.disoption && (
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
              )}
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
