import { ListProps } from './HeaderLink.props';
import stylesBootstrap from 'bootstrap/dist/css/bootstrap.min.module.css';
import styles from './HeaderLink.module.css';
import cn from 'classnames';

export default function HeaderLink({
  className,
  children,
  ...props
}: ListProps) {
  return (
    <li
      className={cn(
        stylesBootstrap['nav-item'],
        stylesBootstrap['nav-link'],
        styles['nav-link-a'],
        className
      )}
      {...props}
    >
      {children}
    </li>
  );
}
