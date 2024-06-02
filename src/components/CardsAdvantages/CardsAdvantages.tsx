import stylesBootstrap from 'bootstrap/dist/css/bootstrap.module.css';
import styles from './CardsAdvantages.module.css';
import cn from 'classnames';

const content = [
  {
    id: '1ad',
    image: '/1ad.svg',
    title: 'Юридические гарантии',
    text: 'Обязательное заключение договора с юр. лицом'
  },
  {
    id: '2ad',
    image: '/2ad.svg',
    title: 'Надежность',
    text: 'Возвратная предоплата'
  },
  {
    id: '3ad',
    image: '/3ad.svg',
    title: 'Полное сопровождение клиентов',
    text: 'С момента заключения договора до выдачи автомобиля'
  },
  {
    id: '4ad',
    image: '/4ad.svg',
    title: 'Выгодная стоимость авто',
    text: 'Наименьшая комиссия на рынке, прозрачное ценообразование, бесплатная стоянка во Владивостоке'
  }
];

function CardsAdvantages() {
  return (
    <>
      <div className={cn(stylesBootstrap['col-12'], styles['cards'])}>
        {content.map((card) => {
          return (
            <div
              key={card.id}
              className={cn(stylesBootstrap['col-2'], styles['card'])}
            >
              <div className={styles['back-icon']}>
                <img className={styles['icon']} src={card.image} alt="" />
              </div>
              <div
                className={cn(stylesBootstrap['col-10'], styles['card-info'])}
              >
                <h3>{card.title}</h3>
                <span>{card.text}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CardsAdvantages;
