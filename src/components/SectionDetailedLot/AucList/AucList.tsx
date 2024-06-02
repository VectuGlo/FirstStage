//import styles from './NameLot.module.css';

import { Container } from 'react-bootstrap';
import styles from './AucList.module.css';
import cn from 'classnames';
import 'bootstrap/dist/css/bootstrap.min.css';

const aucList1 = [
  {
    p: 'a1',
    value: 'Небольшая Царапина (уйдёт полировкой)'
  },
  {
    p: 'a2',
    value: 'Царапина (скорее всего уйдёт полировкой)'
  },
  {
    p: 'a3',
    value: 'Большая Царапина (скорее всего потребуется окрас)'
  },
  {
    p: 'a4',
    value: '(потребуется окрас)'
  },
  {
    p: 'e1',
    value: 'Небольшая Вмятина'
  },
  {
    p: 'e2',
    value: 'Несколько Небольших Вмятин'
  },
  {
    p: 'e3',
    value: 'Много Небольших Вмятин'
  },
  {
    p: 'u1',
    value: 'Маленькая Вмятина (уйдет локально)'
  },
  {
    p: 'u2',
    value: 'Вмятина (скорее всего уйдёт локально)'
  },
  {
    p: 'u3',
    value:
      'Большая Вмятина (скорее всего потребуется замена или рихтовка элемента)'
  },
  {
    p: 'u4',
    value: 'Очень большая Вмятина (потребуется замена или рихтовка элемента)'
  },
  {
    p: 'w1',
    value: 'Ремонт/Покраска (вторичный окрас, без шпаклёвки)'
  },
  {
    p: 'w2',
    value: 'Ремонт/Покраска (заметный вторичный окрас, возможна шпаклёвка)'
  },
  {
    p: 'w3',
    value:
      'Ремонт/Покраска (не качественный, очень заметный вторичный окрас с шпаклёвкой)'
  },
  {
    p: 's1',
    value: 'Малозаметная Ржавчина'
  },
  {
    p: 's2',
    value: 'Заметная Ржавчина'
  },
  {
    p: 's3',
    value: 'Повсеместная ржавчина'
  },
  {
    p: 'c1',
    value: 'Коррозия'
  },
  {
    p: 'c2',
    value: 'Заметная Коррозия'
  }
];

const aucList2 = [
  {
    p: 'c3',
    value: 'Сквозная Коррозия'
  },
  {
    p: 'p',
    value: 'Краска отличается от оригинала (выгорел лак)'
  },
  {
    p: 'h',
    value: 'Краска ухудшилась (например: мутные фары, требуют полировки)'
  },
  {
    p: 'x',
    value: 'Элемент требует замены'
  },
  {
    p: 'xx',
    value:
      'Замененный Элемент (возможен повторный окрас, возможен ремонт со шпаклёвкой)'
  },
  {
    p: 'b1',
    value:
      'Маленькая вмятина с царапиной (возможно уйдёт локально и заполируется)'
  },
  {
    p: 'b2',
    value: 'Вмятина с царапиной (возможно уйдёт локально, потребует окраса)'
  },
  {
    p: 'b3',
    value:
      'Большая вмятина с царапиной (скорее всего не уйдёт локально, точно потребует окраса)'
  },
  {
    p: 'b4',
    value:
      'Очень большая вмятина с царапиной (точно не уйдёт локально, возможно потребуется замена элемента)'
  },
  {
    p: 'y1',
    value: 'Маленькая Трещина'
  },
  {
    p: 'y2',
    value: 'Трещина'
  },
  {
    p: 'y3',
    value: 'Большая Трещина'
  },
  {
    p: 'x1',
    value: 'Маленькая Трещина на Лобовом стекле (приблизительно 1 см)'
  },
  {
    p: 'r',
    value: 'Восстановленная Трещина на Лобовом стекле'
  },
  {
    p: 'xr',
    value: 'Восстановленная Трещина на Лобовом стекле (требует замены)'
  },
  {
    p: 'x',
    value: 'Трещина на Лобовом стекле (требует замены)'
  },
  {
    p: 'g',
    value: 'Трещина в стекле от камня'
  }
];

function AucList() {
  return (
    <section className={styles['auc-list']}>
      <Container fluid="md">
        <div className={cn(styles['auc-list__title'])}>
          <h4>Справочник обозначений аукционного листа</h4>
        </div>
        <div className={cn(styles['auc-list__items'], 'row')}>
          <div className="col-md-6">
            <ul className="p-0">
              {aucList1.map((item) => {
                return (
                  <li
                    key={item.p + item.value}
                    className="d-flex align-items-start gap-2"
                  >
                    <p className="fw-bolder text-uppercase">{item.p}</p>
                    {item.value}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-md-6">
            <ul className="p-0">
              {aucList2.map((item) => {
                return (
                  <li
                    key={item.p + item.value}
                    className="d-flex align-items-start gap-2"
                  >
                    <p className="fw-bolder text-uppercase">{item.p}</p>
                    {item.value}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
export default AucList;
