import stylesBootstrap from 'bootstrap/dist/css/bootstrap.module.css';
import styles from './Advantages.module.css';
import cn from 'classnames';
import Separator from '../Separator/Separator';

function Advantages() {
  return (
    <>
      <section
        className={(stylesBootstrap['col-12'], styles['section-advantages'])}
      >
        <div className={cn(stylesBootstrap['container'], styles['advantages'])}>
          <h2
            className={cn(
              styles['advantages-h2'],
              stylesBootstrap['text-center']
            )}
          >
            Наши преимущества
          </h2>
          <div className={cn(stylesBootstrap['d-flex'], styles['cards'])}>
            <div className={cn(styles['card'])}></div>
          </div>
        </div>
      </section>
      <Separator />
    </>
  );
}

export default Advantages;
