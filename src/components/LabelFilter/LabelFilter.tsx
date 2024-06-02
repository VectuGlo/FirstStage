import { LabelProps } from './LabelFilter.props';
import stylesBootstrap from 'bootstrap/dist/css/bootstrap.module.css';

export default function LabelFilter({ children, ...props }: LabelProps) {
  return (
    <label className={stylesBootstrap['form-label']} {...props}>
      {children}
    </label>
  );
}
