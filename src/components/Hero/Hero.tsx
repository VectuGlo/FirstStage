import stylesBootstrap from 'bootstrap/dist/css/bootstrap.module.css';
import styles from './Hero.module.css';
import cn from 'classnames';
import Separator from '../Separator/Separator';

function Hero() {
  return (
    <>
      <section className={stylesBootstrap['']}>
        <div className={cn(styles['hero'])}>EEEEEEEEEE</div>
        <Separator />
      </section>
    </>
  );
}

export default Hero;
