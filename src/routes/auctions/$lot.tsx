import { createFileRoute } from '@tanstack/react-router';
// import { Cards } from '../../interfaces/cards.interface';
// import { Suspense } from 'react';
import stylesBootstrap from 'bootstrap/dist/css/bootstrap.module.css';
import NameLot from '../../components/SectionDetailedLot/NameLot/NameLot';
import cn from 'classnames';
import Slider from '../../components/SectionDetailedLot/Slider/Slider';
// import Info from '../../components/SectionDetailedLot/Info/Info';
import AucList from '../../components/SectionDetailedLot/AucList/AucList';
import Separator from '../../components/Separator/Separator';
import { useDetailed } from '../../hooks/useDetailed';
// import { PREFIX } from '../../helpers/API';

// async function getLotId(lot: string): Promise<Cards> {
//   const data = await fetch(`${PREFIX}/` + '?' + `lot=${lot}`);
//   return data.json();
// }

export const Route = createFileRoute('/auctions/$lot')({
  component: Detailed
  // loader: ({ params }) => getLotId(pa Frams.lot)
});

function Detailed() {
  const { lot } = Route.useParams();
  const { data } = useDetailed(lot);
  return (
    <>
      <section
        className={cn(stylesBootstrap['container'], stylesBootstrap['md'])}
      >
        {data && <NameLot lot={data.lot} sale={data.sale} />}

        <div className={cn(stylesBootstrap['d-flex'])}>
          <Slider />
          {/* <Info
            mark={data.mark}
            model={data.model}
            year={data.year_of_creation}
            dateAuc={data.dateAuc}
          /> */}
        </div>
        <AucList />
      </section>
      <Separator apperance={'dark'} />
    </>
    // </Suspense>
  );
}
