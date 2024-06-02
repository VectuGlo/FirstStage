import InfoSum from './InfoSum/InfoSum';
import InformationBlock from './InformationBlock/InforamationBlock';
import 'bootstrap/dist/css/bootstrap.min.css';
import { InfoProps } from './Info.props';

function Info({ year, mark, model, dateAuc }: InfoProps) {
  return (
    <div className="info w-100 w-lg-50 p-2">
      <h2 className="info__title">
        {mark} {model} {year}
      </h2>
      <div className="info__date d-flex">
        <p className="me-2">Дата торгов:</p>
        <span>{dateAuc}</span>
      </div>
      <hr />
      <InformationBlock />
      <hr />
      <InfoSum />
    </div>
  );
}
export default Info;
