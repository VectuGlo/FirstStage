import './SectionWorkStages.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function SectionWorkStages() {
  const timelineElements = [
    {
      id: 1,
      title: 'Заявка на покупку авто',
      text: 'Вы оставляете заявку на сайте или связываетесь с нашими менеджерами',
      icon: '/1.svg',
    },
    {
      id: 2,
      title: 'Заключение договора',
      text: 'После анализа рынка и согласования стоимости/параметров автомобиля заключаем двусторонний договор (в офисе или удалённо)',
      icon: '/2.svg',
    },

    {
      id: 3,
      title: 'Гарантийный депозит',
      text: 'Вносите предоплату, которая в дальнейшем используется для оплаты авто. Если автомобиль не подобран, то она ВОЗВРАЩАЕТСЯ В ПОЛНОМ ОБЪЕМЕ',
      icon: '/3.svg',
    },
    {
      id: 4,
      title: 'Выбор автомобиля',
      text: 'Мы предлагаем Вам подходящие под параметры варианты, а Вы принимаете решение. Делаем ставки по Вашим запросам',
      icon: '/4.svg',
    },
    {
      id: 5,
      title: 'Покупка',
      text: 'Оповещаем Вас, какой лот и по какой ставке был выкуплен',
      icon: '/5.svg',
    },
    {
      id: 6,
      title: 'Доставка в РФ',
      text: 'Транспортируем авто до порта Японии/Кореи, грузим на судно и доставляем в г. Владивосток',
      icon: '/6.svg',
    },
    {
      id: 7,
      title: 'Таможенное оформление',
      text: 'Осуществляем растаможку автомобиля, подготавливаем его к выдаче',
      icon: '/7.svg',
    },
    {
      id: 8,
      title: 'Выдача автомобиля',
      text: 'Вы забираете автомобиль самостоятельно с СВХ или с нашей стоянки. При необходимости мы отправляем Вам его в любой регион РФ',
      icon: '/8.svg',
    },
  ];
  useEffect(() => {
    Aos.init({ duration: '1800' });
  }, []);
  return (
    <section>
      <div className="content">
        <h1 className="title">Этапы Работы</h1>
        <div className="timeline">
          {timelineElements.map((element) => {
            return (
              <div
                className="timeline-item"
                key={element.id}
                data-aos={element.id % 2 === 0 ? 'fade-right' : 'fade-left'}
              >
                <div className="timeline-icon">
                  <img src={element.icon}></img>
                </div>
                <div
                  className={
                    element.id % 2 === 0
                      ? 'timeline-content right '
                      : 'timeline-content left '
                  }
                >
                  <h2>{element.title}</h2>
                  <p>{element.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default SectionWorkStages;
