import stylesBootstrap from 'bootstrap/dist/css/bootstrap.module.css';
import styles from './SectionHero.module.css';
import cn from 'classnames';
import Separator from '../Separator/Separator';
import Button from '../Button/Button';

function Hero() {
  return (
    <>
      <section className={(stylesBootstrap['col-12'], styles['section-hero'])}>
        <div
          className={cn(
            styles['hero'],
            stylesBootstrap['d-flex'],
            stylesBootstrap['align-items-center'],
            stylesBootstrap['justify-content-center'],
            stylesBootstrap['text-center']
          )}
        >
          <div className={cn(stylesBootstrap['col-5'], styles['heading'])}>
            <div className={styles['heading-div-h']}>
              <h1 className={styles['heading-h1']}>
                Авто из Японии, Кореи и Китая под заказ
              </h1>
              <h2 className={styles['heading-h2']}>
                Комиссия составляет 15 000 ₽
              </h2>
            </div>
            <Button className={styles['btn']}>Оставить заявку</Button>
          </div>
        </div>
      </section>
      <Separator apperance="dark" />
    </>
  );
}

export default Hero;
