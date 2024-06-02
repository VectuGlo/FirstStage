import { SelectProps } from '../Select/Select.props';
import stylesBootstrap from 'bootstrap/dist/css/bootstrap.module.css';

export default function DropList({ children, ...props }: SelectProps) {
  return (
    <div className={stylesBootstrap['drop-list']}>
      <datalist {...props}>
        <option defaultValue={'все'}>все</option>
        {children}
      </datalist>
    </div>
  );
}
