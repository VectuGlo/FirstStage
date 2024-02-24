import stylesBootstrap from 'bootstrap/dist/css/bootstrap.module.css';
import styles from './Advantages.module.css';
import cn from 'classnames';
import Separator from '../Separator/Separator';
import CardsAdvantages from '../CardsAdvantages/CardsAdvantages';

function Advantages() {
  return (
    <>
      <section
        className={(stylesBootstrap['col-12'], styles['section-advantages'])}
      >
        <div
          className={cn(
            stylesBootstrap['container-fluid'],
            styles['advantages']
          )}
        >
          <h2
            className={cn(
              styles['advantages-h2'],
              stylesBootstrap['text-center']
            )}
          >
            Наши преимущества
          </h2>
          <CardsAdvantages />
        </div>
      </section>
      <Separator />
    </>
  );
}

export default Advantages;
