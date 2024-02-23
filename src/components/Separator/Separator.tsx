import styles from './Separator.module.css';
import cn from 'classnames';
import { SeparatorProps } from './Separator.props';

function Separator({ className, apperance }: SeparatorProps) {
  return (
    <div
      className={cn(styles.custom, className, {
        [styles['dark']]: apperance === 'dark',
      })}
    ></div>
  );
}

export default Separator;
