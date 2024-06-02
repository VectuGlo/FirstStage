//import styles from './NameLot.module.css';
import { Button } from 'react-bootstrap';
import './InfoSum.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import InfoSumHelp from '../InfoSumHelp/InfoSumHelp';

function InfoSum() {
  const statusPrice = [
    {
      japan: '1 700 000',
      russian: '489 000'
    }
  ];
  return (
    <section className="info w-100 w-lg-50 p-2">
      <div className="info__sum-title d-flex justify-content-between text-secondary">
        <span>Тип ввоза</span>
        <span>Итоговая стоимость</span>
      </div>
      <div className="info__sum-price d-flex flex-column gap-1 my-3">
        <div className="info__sum-price_Japan d-flex justify-content-between">
          <p className="text-secondary">Cтоимость в Японии</p>
          <span className="fw-bolder">{statusPrice[0].japan} ¥</span>
        </div>
        <div className="info__sum-price_Russian d-flex justify-content-between">
          <p className="text-secondary">Полная пошлина</p>
          <span className="fw-bolder"> ~ {statusPrice[0].russian} ₽ </span>
        </div>
        <Button variant="secondary" className="text-uppercase">
          Подробный расчет
        </Button>
      </div>
      <p className="text-secondary">
        Стоимость является ориентировочной, включая все расходы в г.
        Владивосток. Расчёт может быть некорректным. <br />
        Обратитесь к нам, оставив заявку, чтобы получить консультацию.
      </p>
      <InfoSumHelp />
    </section>
  );
}
export default InfoSum;
