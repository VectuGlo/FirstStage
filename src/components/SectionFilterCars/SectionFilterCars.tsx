import { MyObject, MyObjectInputsRow } from './SectionFilterCars.props';
import cn from 'classnames';
import stylesBootstrap from 'bootstrap/dist/css/bootstrap.module.css';
import styles from './SectionFilterCars.module.css';
import SectionHeroHeading from '../../components/SectionHeroHeading/SectionHeroHeading';
import SectionHero from '../../components/SectionHero/SectionHero';
import LabelFilter from '../LabelFilter/LabelFilter';
import Select from '../Select/Select';
import DivRowFilterCars from './DivRowFilterCars/DivRowFilterCars';
import Input from '../Input/Input';
import InputGroup from '../InputGroup/InputGroup';
import DropList from '../DropList/DropList';
import Button from '../Button/Button';

const auctions: MyObject[] = [
  { value: 'New Delhi' },
  { value: 'Istanbul' },
  { value: 'Jakarta' }
];

const marks: MyObject[] = [
  { value: 'Lexus' },
  { value: 'Honda' },
  { value: 'Nissan' },
  { value: 'Mazda' }
];

const models: MyObject[] = [
  { value: 'Note' },
  { value: 'Leaf' },
  { value: 'Titan' },
  { value: 'Huan' }
];

const bodys: MyObject[] = [
  { value: 'E13' },
  { value: 'SNE13' },
  { value: 'HE12' },
  { value: 'SNE12' }
];

const datesAuctions: MyObject[] = [
  { value: 'Сегодня' },
  { value: 'За неделю' },
  { value: 'За месяц' }
];

const years: MyObject[] = [
  { value: '2023' },
  { value: '2022' },
  { value: '2021' },
  { value: '2020' }
];

const price: MyObject[] = [
  { value: '500 000' },
  { value: '1 000 000' },
  { value: '1 500 000' }
];

const engineCapacity: MyObject[] = [
  { value: '1200' },
  { value: '1500' },
  { value: '1600' },
  { value: '2000' }
];

const mileage: MyObject[] = [
  { value: '50000' },
  { value: '75000' },
  { value: '100000' },
  { value: '125000' }
];

const ranks: MyObject[] = [{ value: '1' }, { value: '2' }, { value: '3' }];

const divMMB = [
  { id: 'select-mark', mas: marks, title: 'Марка' },
  { id: 'select-model', mas: models, title: 'Модель' },
  { id: 'select-body', mas: bodys, title: 'Кузов' }
];

const inputsRow1: MyObjectInputsRow[] = [
  {
    labelText: 'Год ',
    labelText2: 'производства',
    minLength: 4,
    maxLength: 4,
    nameI1: 'input-year_of_creation-from',
    nameI2: 'input-year_of_creation-to',
    placeholderI1: 'от (год)',
    placeholderI2: 'до (год)',
    listI1: 'list-year_of_creation-from',
    listI2: 'list-year_of_creation-to',
    idI1: 'input-year_of_creation-from',
    idI2: 'input-year_of_creation-to',
    array: years
  },
  {
    labelText: 'Стоимость',
    minLength: 4,
    maxLength: 8,
    nameI1: 'input-price-from',
    nameI2: 'input-price-to',
    placeholderI1: 'от (у.е.)',
    placeholderI2: 'до (у.е.)',
    listI1: 'list-price-from',
    listI2: 'list-price-to',
    idI1: 'input-price-from',
    idI2: 'input-price-to',
    array: price
  }
];

const inputsRow2: MyObjectInputsRow[] = [
  {
    labelText: 'Объем ',
    labelText2: 'двигателя',
    minLength: 4,
    maxLength: 4,
    nameI1: 'input-engine_capacity-from',
    nameI2: 'input-engine_capacity-to',
    placeholderI1: 'от (см³)',
    placeholderI2: 'до (см³)',
    listI1: 'list-engine_capacity-from',
    listI2: 'list-engine_capacity-to',
    idI1: 'input-engine_capacity-from',
    idI2: 'input-engine_capacity-to',
    array: engineCapacity
  },
  {
    labelText: 'Прообег',
    minLength: 4,
    maxLength: 8,
    nameI1: 'input-mileage-from',
    nameI2: 'input-mileage-to',
    placeholderI1: 'от (км)',
    placeholderI2: 'до (км)',
    listI1: 'list-mileage-from',
    listI2: 'list-mileage-to',
    idI1: 'input-mileage-from',
    idI2: 'input-mileage-to',
    array: mileage
  }
];

function Mapus(items: MyObject[]) {
  return items.map((item) => {
    return (
      <option key={item.value} value={item.value}>
        {item.value}
      </option>
    );
  });
}

function displayInput(elements: MyObjectInputsRow[]) {
  return elements.map((elem) => {
    return (
      <div
        className={cn(
          stylesBootstrap['col-4'],
          stylesBootstrap['d-flex'],
          stylesBootstrap['flex-column'],
          stylesBootstrap['mb-3']
        )}
        key={elem.idI1 + elem.idI2}
      >
        <LabelFilter>
          {elem.labelText}
          <span>{elem.labelText2}</span>
        </LabelFilter>
        <InputGroup>
          <Input
            type="text"
            minLength={Number(elem.minLength)}
            maxLength={Number(elem.maxLength)}
            name={elem.nameI1}
            placeholder={elem.placeholderI1}
            list={elem.listI1}
            id={elem.idI1}
          />
          <DropList id={elem.listI1}>{Mapus(elem.array)}</DropList>
          <Input
            type="text"
            minLength={Number(elem.minLength)}
            maxLength={Number(elem.maxLength)}
            name={elem.nameI2}
            placeholder={elem.placeholderI2}
            list={elem.listI2}
            id={elem.idI2}
          />
          <DropList id={elem.listI2}>{Mapus(elem.array)}</DropList>
        </InputGroup>
      </div>
    );
  });
}

function SectionFilterCars() {
  return (
    <SectionHero className={styles['section-hero']}>
      <SectionHeroHeading>
        <h1>Автомобильные аукционы Японии</h1>
      </SectionHeroHeading>

      <div className={cn(styles['filter'], stylesBootstrap['col-10'])}>
        <DivRowFilterCars
          className={stylesBootstrap['justify-content-between']}
        >
          <div
            className={cn(stylesBootstrap['col-2'], stylesBootstrap['mb-3'])}
          >
            <LabelFilter>
              Наименование
              <span> аукциона</span>
            </LabelFilter>
            <Select name="select" id="auctions">
              {Mapus(auctions)}
            </Select>
          </div>

          <div
            className={cn(
              stylesBootstrap['col-1'],
              stylesBootstrap['d-flex'],
              stylesBootstrap['flex-column'],
              stylesBootstrap['mb-3']
            )}
          >
            <LabelFilter>
              №<span> лота</span>
            </LabelFilter>
            <Input
              type="text"
              minLength={1}
              maxLength={6}
              name="input-lot-from"
              placeholder="Все"
              id="input-lot-from"
            />
          </div>

          {divMMB.map((element) => {
            return (
              <div
                className={cn(
                  stylesBootstrap['col-2'],
                  stylesBootstrap['mb-3']
                )}
                key={element.id + element.title}
              >
                <LabelFilter>{element.title}</LabelFilter>
                <Select name="select" id={element.id}>
                  {Mapus(element.mas)}
                </Select>
              </div>
            );
          })}
        </DivRowFilterCars>

        <DivRowFilterCars
          className={stylesBootstrap['justify-content-between']}
        >
          <div
            className={cn(stylesBootstrap['col-2'], stylesBootstrap['mb-3'])}
          >
            <LabelFilter>
              Дата <span>аукциона</span>
            </LabelFilter>
            <Select name="select" id="date-auctions">
              {Mapus(datesAuctions)}
            </Select>
          </div>

          {displayInput(inputsRow1)}
        </DivRowFilterCars>

        <DivRowFilterCars
          className={stylesBootstrap['justify-content-between']}
        >
          <div
            className={cn(stylesBootstrap['col-2'], stylesBootstrap['mb-3'])}
          >
            <LabelFilter>Оценка</LabelFilter>
            <Select name="select" id="select-rank">
              {Mapus(ranks)}
            </Select>
          </div>

          {displayInput(inputsRow2)}
        </DivRowFilterCars>

        <DivRowFilterCars
          className={cn(
            stylesBootstrap['justify-content-center'],
            stylesBootstrap['mb-3']
          )}
        >
          <Button
            className={cn(
              stylesBootstrap['col-10'],
              stylesBootstrap['text-uppercase'],
              styles['btn']
            )}
          >
            Найти автомобиль
          </Button>
        </DivRowFilterCars>
      </div>
    </SectionHero>
  );
}

export { SectionFilterCars };
