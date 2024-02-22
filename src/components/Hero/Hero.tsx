import stylesBootstrap from 'bootstrap/dist/css/bootstrap.module.css';
import styles from './Hero.module.css';
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
            <h1>Авто из Японии, Кореи и Китая под заказ</h1>
            <h2>Комиссия составляет 15 000 ₽</h2>
            <Button>Оставить заявку</Button>
          </div>
        </div>
        <Separator />
      </section>
    </>
  );
}

export default Hero;
