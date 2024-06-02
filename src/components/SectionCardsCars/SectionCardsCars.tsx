// import { PREFIX } from '../../helpers/API';
// import { Cards } from '../../interfaces/cards.interface';
// import { NavLink } from 'react-router-dom';
import { Link } from '@tanstack/react-router';
// import { useEffect, useState } from 'react';
// import axios, { AxiosError } from 'axios';
import cn from 'classnames';
import stylesBootstrap from 'bootstrap/dist/css/bootstrap.module.css';
import styles from './SectionCardsCars.module.css';
import Separator from '../Separator/Separator';
import CardsList from './CardsList/CardsList';
import { useTodos } from '../../hooks/useTodos';

const pagination = [
  { id: 'pagination', value: '&laquo;', span: true },
  { id: 'pagination', value: 1 },
  { id: 'pagination', value: 2 },
  { id: 'pagination', value: 3 },
  { id: 'pagination', value: '&raquo;', span: true }
];

export default function DisplayCars() {
  // const [cards, setCards] = useState<Cards[]>([]);
  // const [isloading, setIsoading] = useState<boolean>(false);
  // const [error, setError] = useState<string | undefined>();

  // useEffect(() => {
  //   getAuctions();
  // }, []);

  // const getAuctions = async () => {
  //   try {
  //     setIsoading(true);
  //     // await new Promise<void>((resolve) => {
  //     //   setTimeout(() => {
  //     //     resolve();
  //     //   }, 2000);
  //     // });
  //     const { data } = await axios.get<Cards[]>(`${PREFIX}`);
  //     setCards(data);
  //     setIsoading(false);
  //   } catch (e) {
  //     console.error(e);
  //     if (e instanceof AxiosError) {
  //       setError(e.message);
  //     }
  //     setIsoading(false);
  //     return;
  //   }
  // };

  const { isFetching, data } = useTodos();

  // if (isError) {
  //   alert('ERROR!!!');
  // }

  return (
    <>
      <section
        id="section-cards"
        className={cn(stylesBootstrap['container-fluid'])}
      >
        <div className={cn(styles['cards'])}>
          {isFetching ? (
            <div> ... Loading </div>
          ) : data?.length ? (
            <CardsList cards={data} />
          ) : (
            <>Loading. Please 1 min ...</>
          )}

          {/* // {error && <>{error}</>}
          // {!isloading && cards.length > 0 && <CardsList cards={cards} />}
          // {isloading && <>Loading. Please 1 min ...</>}
          // {!isloading && cards.length === 0 && (
          //   <>По вашему фильтру аукционов не найдено!!!</>
          // )} */}
        </div>
      </section>
      <Separator />
      <div
        className={cn(stylesBootstrap['pagination'], styles['paginationDiv'])}
      >
        <ul className={cn(stylesBootstrap['pagination'])}>
          {pagination.map((item) => {
            return (
              <li
                key={item.id + item.value}
                className={cn(stylesBootstrap['page-item'])}
              >
                <Link to={''} className={cn(stylesBootstrap['page-link'])}>
                  {item.span ? (
                    item.value === '&laquo;' ? (
                      <span aria-hidden="true">&laquo;</span>
                    ) : (
                      <span aria-hidden="true">&raquo;</span>
                    )
                  ) : (
                    item.value
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <Separator apperance="dark" />
    </>
  );
}
