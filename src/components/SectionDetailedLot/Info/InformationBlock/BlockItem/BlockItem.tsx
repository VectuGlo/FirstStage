import { BlockItemProps } from './BlockItemProps';
import 'bootstrap/dist/css/bootstrap.min.css';
import cn from 'classnames';

function whatTitle(title: string) {
  switch (title) {
    case 'Пробег':
      return `${title} (км)`;
    case 'Двигатель':
      return (
        <>
          {title} (см<sup>3</sup>)
        </>
      );
    default:
      return title;
  }
}

export default function BlockItem({
  title,
  value,
  styleClass
}: BlockItemProps) {
  return (
    <div className={cn(styleClass, 'd-flex')}>
      <p className="me-2 w-50 text-secondary">{whatTitle(title)}</p>
      <span className="fw-bolder">{value}</span>
    </div>
  );
}
