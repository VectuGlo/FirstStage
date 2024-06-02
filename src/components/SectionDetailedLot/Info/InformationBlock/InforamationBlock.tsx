import 'bootstrap/dist/css/bootstrap.min.css';
import BlockItem from './BlockItem/BlockItem';
import { InfoProps } from '../Info.props';

export default function InformationBlock({ car }: InfoProps) {
  return (
    <div className="info__information d-flex flex-column flex-lg-row">
      <div className="info__information-block1 w-100 w-lg-50">
        <BlockItem
          title="Комплектация"
          styleClass="block1__item"
          value={car.equipment}
        />
        <BlockItem
          title="Год"
          styleClass="block1__item"
          value={car.year_of_creation}
        />
        <BlockItem title="Оценка" styleClass="block1__item" value={car.rank} />
        <BlockItem
          title="Трансмиссия"
          styleClass="block1__item"
          value={car.transmission}
        />
      </div>
      <div className="info__information-block2 w-100 w-lg-50">
        <BlockItem
          title="Пробег"
          styleClass="block2__item"
          value={car.mileage}
        />
        <BlockItem
          title="Двигатель"
          styleClass="block2__item"
          value={car.engine_capacity}
        />
        <BlockItem title="Кузов" styleClass="block2__item" value={car.body} />
        <BlockItem
          title="Привод"
          styleClass="block2__item"
          value={car.alltime}
        />
      </div>
    </div>
  );
}
