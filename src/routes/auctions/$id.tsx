import { createFileRoute } from '@tanstack/react-router';
import stylesBootstrap from 'bootstrap/dist/css/bootstrap.module.css';
import NameLot from '../../components/SectionDetailedLot/NameLot/NameLot';
import cn from 'classnames';
import Slider from '../../components/SectionDetailedLot/Slider/Slider';
import AucList from '../../components/SectionDetailedLot/AucList/AucList';
import Separator from '../../components/Separator/Separator';
import { getLotDetailed } from '../../api/auctionsLots';
import Info from '../../components/SectionDetailedLot/Info/Info';

export const Route = createFileRoute('/auctions/$id')({
  component: Detailed,
  loader: async ({ params }) => await getLotDetailed(params.id)
});

function Detailed() {
  const { data } = Route.useLoaderData();
  console.log();
  return (
    <>
      <section
        className={cn(stylesBootstrap['container'], stylesBootstrap['md'])}
      >
        <NameLot lot={data.lot} sale={data.sale} />

        <div className={cn(stylesBootstrap['d-flex'])}>
          <Slider />
          <Info car={data} />
        </div>
        <AucList />
      </section>
      <Separator apperance={'dark'} />
    </>
  );
}
