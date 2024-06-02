import { createFileRoute } from '@tanstack/react-router';
import { SectionFilterCars } from '../../components/SectionFilterCars/SectionFilterCars';
import { getByAllCars } from '../../api/auctionsLots';
import cn from 'classnames';
import stylesBootstrap from 'bootstrap/dist/css/bootstrap.module.css';
import styles from '../../components/SectionCardsCars/SectionCardsCars.module.css';
import Separator from '../../components/Separator/Separator';
import CardsList from '../../components/SectionCardsCars/CardsList/CardsList';

export const Route = createFileRoute('/auctions/')({
  component: Auctions,
  loader: getByAllCars
});

function Auctions() {
  const { data } = Route.useLoaderData();
  return (
    <>
      <SectionFilterCars />
      <section
        id="section-cards"
        className={cn(stylesBootstrap['container-fluid'])}
      >
        <div className={cn(styles['cards'])}>
          <CardsList cards={data} />
        </div>
      </section>
      <Separator />
      <Separator apperance="dark" />
    </>
  );
}
