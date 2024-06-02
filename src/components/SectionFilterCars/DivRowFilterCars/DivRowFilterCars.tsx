import { DivProps } from './DivRowFilterCars.props';
import stylesBootstrap from 'bootstrap/dist/css/bootstrap.module.css';
import cn from 'classnames';

export default function DivRowFilterCars({
  children,
  className,
  ...props
}: DivProps) {
  return (
    <div className={stylesBootstrap['row']}>
      <div
        className={cn(
          stylesBootstrap['col-12'],
          stylesBootstrap['d-flex'],
          stylesBootstrap['align-items-center'],
          className
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  );
}
