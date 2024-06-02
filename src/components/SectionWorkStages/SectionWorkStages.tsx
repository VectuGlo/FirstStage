import { useEffect } from 'react';
import styles from './SectionWorkStages.module.css';
import stylesBootstrap from 'bootstrap/dist/css/bootstrap.module.css';
import Aos from 'aos';
import cn from 'classnames';
import 'aos/dist/aos.css';
import Separator from '../Separator/Separator';

const timelineElements = [
  {
    id: 1,
    title: 'Заявка на покупку авто',
    text: 'Вы оставляете заявку на сайте или связываетесь с нашими менеджерами',
    icon: '/1.svg'
  },
  {
    id: 2,
    title: 'Заключение договора',
    text: 'После анализа рынка и согласования стоимости/параметров автомобиля заключаем двусторонний договор (в офисе или удалённо)',
    icon: '/2.svg'
  },

  {
    id: 3,
    title: 'Гарантийный депозит',
    text: 'Вносите предоплату, которая в дальнейшем используется для оплаты авто. Если автомобиль не подобран, то она',
    textBold: ' ВОЗВРАЩАЕТСЯ В ПОЛНОМ ОБЪЕМЕ',
    icon: '/3.svg'
  },
  {
    id: 4,
    title: 'Выбор автомобиля',
    text: 'Мы предлагаем Вам подходящие под параметры варианты, а Вы принимаете решение. Делаем ставки по Вашим запросам',
    icon: '/4.svg'
  },
  {
    id: 5,
    title: 'Покупка',
    text: 'Оповещаем Вас, какой лот и по какой ставке был выкуплен',
    icon: '/5.svg'
  },
  {
    id: 6,
    title: 'Доставка в РФ',
    text: 'Транспортируем авто до порта Японии/Кореи, грузим на судно и доставляем в г. Владивосток',
    icon: '/6.svg'
  },
  {
    id: 7,
    title: 'Таможенное оформление',
    text: 'Осуществляем растаможку автомобиля, подготавливаем его к выдаче',
    icon: '/7.svg'
  },
  {
    id: 8,
    title: 'Выдача автомобиля',
    text: 'Вы забираете автомобиль самостоятельно с СВХ или с нашей стоянки. При необходимости мы отправляем Вам его в любой регион РФ',
    icon: '/8.svg'
  }
];

function SectionWorkStages() {
  useEffect(() => {
    Aos.init({ duration: 1750 });
  }, []);

  return (
    <>
      <section
        id="SectionWorkStages"
        className={cn(styles['background-div'], styles['section-works-stages'])}
      >
        <div
          className={cn(
            styles['div-works-stages'],
            stylesBootstrap['container-fluid']
          )}
        >
          <div className={styles['timeline']}>
            <h2 className={styles['content-h2']}>Этапы Работы</h2>

            {timelineElements.map((element) => {
              return (
                <div
                  className={styles['timeline-item']}
                  key={element.id}
                  data-aos={element.id % 2 === 0 ? 'fade-right' : 'fade-left'}
                >
                  <div className={styles['timeline-icon']}>
                    <img src={element.icon}></img>
                  </div>
                  <div
                    className={cn(styles['timeline-content'], {
                      [styles['right']]: (element.id + 1) % 2 === 0,
                      [styles['left']]: element.id % 2 !== 0
                    })}
                  >
                    <h3>{element.title}</h3>
                    <p>
                      {element.text}
                      <b>{element.textBold}</b>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Separator apperance={'dark'} />
    </>
  );
}
export default SectionWorkStages;
