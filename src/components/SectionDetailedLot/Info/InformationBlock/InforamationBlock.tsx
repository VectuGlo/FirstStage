//import styles from './NameLot.module.css';
import { Await, useLoaderData } from 'react-router-dom';
import { Cards } from '../../../../interfaces/cards.interface';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlockItem from './BlockItem/BlockItem';

export default function InformationBlock() {
  const data = useLoaderData() as { data: Cards };

  return (
    <Await resolve={data.data}>
      {({ data }: { data: Cards }) => (
        <div className="info__information d-flex flex-column flex-lg-row">
          <div className="info__information-block1 w-100 w-lg-50">
            <BlockItem
              title="Комплектация"
              styleClass="block1__item"
              value={data.equipment}
            />
            <BlockItem
              title="Год"
              styleClass="block1__item"
              value={data.year_of_creation}
            />
            <BlockItem
              title="Оценка"
              styleClass="block1__item"
              value={data.rank}
            />
            <BlockItem
              title="Трансмиссия"
              styleClass="block1__item"
              value={data.transmission}
            />
          </div>
          <div className="info__information-block2 w-100 w-lg-50">
            <BlockItem
              title="Пробег, км"
              styleClass="block2__item"
              value={data.mileage}
            />
            <BlockItem
              title="Двигатель"
              styleClass="block2__item"
              value={data.engine_capacity}
            />
            <BlockItem
              title="Кузов"
              styleClass="block2__item"
              value={data.body}
            />
            <BlockItem
              title="Привод"
              styleClass="block2__item"
              value={data.alltime}
            />
          </div>
        </div>
      )}
    </Await>
  );
}
