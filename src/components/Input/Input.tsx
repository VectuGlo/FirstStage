import { InputProps } from './Input.props';
import stylesBootstrap from 'bootstrap/dist/css/bootstrap.module.css';
import cn from 'classnames';

export default function Input({ ...props }: InputProps) {
  return (
    <input
      className={cn(
        stylesBootstrap['form-control'],
        stylesBootstrap['text-center'],
        stylesBootstrap['text-lowercase'],
        stylesBootstrap['numb']
      )}
      {...props}
    />
  );
}
