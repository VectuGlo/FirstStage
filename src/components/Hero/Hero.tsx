import stylesBootstrap from 'bootstrap/dist/css/bootstrap.module.css';
import styles from './Hero.module.css';
import cn from 'classnames';

function Hero() {
  return (
    <div className={cn(stylesBootstrap['row'], styles['hero'])}>
      {/* <img className={styles['hero-img']} src="/hero.webp" /> */}
    </div>
  );
}

export default Hero;
