import SectionHero from '../../components/SectionHero/SectionHero';
import SectionAdvantages from '../../components/SectionAdvantages/SectionAdvantages';
import SectionMaps from '../../components/SectionMaps/SectionMaps';
import SectionClientSwiper from '../../components/SectionClientSwiper/SectionClientSwiper';
import SectionWorkStages from '../../components/SectionWorkStages/SectionWorkStages';
import SectionHeroHeading from '../../components/SectionHeroHeading/SectionHeroHeading';

export function TitlePage() {
  return (
    <>
      <SectionHero>
        <SectionHeroHeading>
          <h1>Авто из Японии, Кореи и Китая под заказ</h1>
          <h2>Комиссия составляет 15 000 ₽</h2>
        </SectionHeroHeading>
      </SectionHero>
      <SectionAdvantages />
      <SectionWorkStages />
      <SectionClientSwiper />
      <SectionMaps />
    </>
  );
}
