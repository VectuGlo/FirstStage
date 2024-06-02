import { CardsListProps } from './CardsList.props';
import CardCar from '../../CardCar/CardCar';

export default function CardsList({ cards }: CardsListProps) {
  return cards.map((card) => {
    return (
      <CardCar
        key={card.id + card.rank}
        lot={card.lot}
        id={card.id}
        rank={card.rank}
        imgSrc={card.imgSrc}
        mark={card.mark}
        model={card.model}
        engine_capacity={card.engine_capacity}
        year_of_creation={card.year_of_creation}
        equipment={card.equipment}
        transmission={card.transmission}
        mileage={card.mileage}
      />
    );
  });
}
