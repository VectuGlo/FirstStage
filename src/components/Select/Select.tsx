import { SelectProps } from './Select.props';
import stylesBootstrap from 'bootstrap/dist/css/bootstrap.module.css';
import cn from 'classnames';

export default function Select({ children, className, ...props }: SelectProps) {
  return (
    <select
      className={cn(
        stylesBootstrap['form-select'],
        stylesBootstrap['form-select-md'],
        stylesBootstrap['text-center'],
        className
      )}
      {...props}
    >
      <option defaultValue={'Все'}>Все</option>
      {children}
    </select>
  );
}
