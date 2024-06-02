import { HeroHeadingProps } from './SectionHeroHeading.props';
import { useLocation } from '@tanstack/react-router';
import stylesBootstrap from 'bootstrap/dist/css/bootstrap.module.css';
import styles from './SectionHeroHeading.module.css';
import Button from '../Button/Button';
import cn from 'classnames';

function SectionHeroHeading({ children, ...props }: HeroHeadingProps) {
  const path = useLocation().pathname;

  return (
    <>
      <div
        className={cn(stylesBootstrap['col-5'], styles['heading'])}
        {...props}
      >
        <div className={styles['heading-div-h']}>{children}</div>
        {path === '/' ? (
          <Button
            className={styles['btn']}
            onClick={() => {
              console.log('Оставить заявку');
            }}
          >
            Оставить заявку
          </Button>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default SectionHeroHeading;
