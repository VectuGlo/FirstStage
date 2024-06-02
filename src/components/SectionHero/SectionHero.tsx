import { HeroProps } from './SectionHero.props';
import stylesBootstrap from 'bootstrap/dist/css/bootstrap.module.css';
import styles from './SectionHero.module.css';
import Separator from '../Separator/Separator';
import cn from 'classnames';

function Hero({ children, className, ...props }: HeroProps) {
  return (
    <>
      <section
        className={cn(
          stylesBootstrap['col-12'],
          styles['section-hero'],
          className
        )}
      >
        <div
          className={cn(styles['hero'], stylesBootstrap['text-center'])}
          {...props}
        >
          {children}
        </div>
      </section>
      <Separator apperance="dark" />
    </>
  );
}

export default Hero;
