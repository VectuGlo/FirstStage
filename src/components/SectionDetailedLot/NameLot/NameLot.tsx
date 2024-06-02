import { NameLotProps } from './NameLot.props';
import styles from './NameLot.module.css';
import stylesBootstrap from 'bootstrap/dist/css/bootstrap.min.module.css';
// import cn from 'classnames';

function NameLot(props: NameLotProps) {
  return (
    // <div className={cn(stylesBootstrap['container'], stylesBootstrap['md'])}>
    <div className={styles['namelot']}>
      <h1>
        Лот № {props.lot}
        <span className={stylesBootstrap['text-secondary']}>
          {props.sale ? ' Sold' : ' Sale'}
        </span>
      </h1>
    </div>
    // </div>
  );
}
export default NameLot;
