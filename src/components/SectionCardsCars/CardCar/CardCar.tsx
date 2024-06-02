// import { NavLink } from 'react-router-dom';
import { Link } from '@tanstack/react-router';
import { CarsProps } from './CardCar.props';
import { TiStar } from 'react-icons/ti';
import stylesBootstrap from 'bootstrap/dist/css/bootstrap.module.css';
import styles from './CardCar.module.css';
import cn from 'classnames';
import Button from '../../Button/Button';

function DisplayRank(rank: string) {
  let color = '';

  if (Number(rank) >= 4) {
    color = 'green';
  }
  if (Number(rank) < 4) {
    color = 'yellow';
  }
  if (Number(rank) < 3 || Number.isNaN(rank)) {
    color = 'red';
  }

  return (
    <Button
      className={cn(styles['btn-rank'], styles['icon-rank'])}
      style={{ backgroundColor: `${color}` }}
    >
      <TiStar />
      <span>{rank}</span>
    </Button>
  );
}

export default function CardCar(props: CarsProps) {
  const params = [
    {
      text: 'Год:',
      id: 'year_of_creation',
      prop: props.year_of_creation
    },
    {
      text: 'Двигатель:',
      id: 'engine_capacity',
      prop: props.engine_capacity,
      metering: 'см'
    },
    {
      text: 'Комплектация:',
      id: 'equipment',
      prop: props.equipment
    },
    {
      text: 'Трансмиссия:',
      id: 'transmission',
      prop: props.transmission
    },
    {
      text: 'Пробег:',
      id: 'mileage',
      prop: props.mileage,
      metering: 'км'
    }
  ];

  return (
    <Link to={'/auctions/$lot'} params={{ lot: props.lot }}>
      <div
        className={cn(
          stylesBootstrap['card'],
          stylesBootstrap['mx-4'],
          stylesBootstrap['my-4'],
          styles['car-card']
        )}
      >
        <div className={styles['div-img-rank']}>
          <img
            className={cn(stylesBootstrap['card-img-top'])}
            src={props.imgSrc}
            alt={props.altTitle}
          />
          {DisplayRank(props.rank)}
        </div>
        <div
          className={cn(
            stylesBootstrap['card-body'],
            stylesBootstrap['d-flex'],
            stylesBootstrap['justify-content-center']
          )}
        >
          <h5 className={cn(stylesBootstrap['card-title'])}>
            <span>{props.mark}</span>
            <span> {props.model}</span>
          </h5>
        </div>
        <div className={cn(stylesBootstrap['content-card'])}>
          <ul
            className={cn(
              stylesBootstrap['list-group'],
              stylesBootstrap['list-group-flush']
            )}
          >
            {params.map((param) => {
              return (
                <li
                  key={param.id + props.id}
                  className={cn(
                    stylesBootstrap['list-group-item'],
                    styles['li-flex']
                  )}
                >
                  <span>{param.text}</span>
                  {param.text === 'Двигатель:' ? (
                    <span id={param.id}>
                      {param.prop} {param.metering}
                      <sup>3</sup>
                    </span>
                  ) : (
                    <span id={param.id}>
                      {param.prop} {param.metering}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
          <div
            className={cn(stylesBootstrap['row'], stylesBootstrap['card-body'])}
          >
            <div
              className={cn(
                stylesBootstrap['d-flex'],
                stylesBootstrap['justify-content-center']
              )}
            >
              <Button> 10000 $</Button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
