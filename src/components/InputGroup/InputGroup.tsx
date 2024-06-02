import { InputGroupProps } from 'react-bootstrap';
import stylesBootstrap from 'bootstrap/dist/css/bootstrap.module.css';
import style from './InputGroup.module.css';
import cn from 'classnames';

export default function InputGroup({ children }: InputGroupProps) {
  return (
    <div className={cn(style['groupe-input'], stylesBootstrap['d-flex'])}>
      {children}
    </div>
  );
}
