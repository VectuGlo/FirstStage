// import { Await, useLoaderData } from 'react-router-dom';
// import { useLoaderData } from '@tanstack/react-router';
import { Cards } from '../../interfaces/cards.interface';
import { Suspense } from 'react';
import stylesBootstrap from 'bootstrap/dist/css/bootstrap.module.css';
import NameLot from '../../components/SectionDetailedLot/NameLot/NameLot';
import cn from 'classnames';
import Slider from '../../components/SectionDetailedLot/Slider/Slider';
import Info from '../../components/SectionDetailedLot/Info/Info';
import AucList from '../../components/SectionDetailedLot/AucList/AucList';
import Separator from '../../components/Separator/Separator';
// import { dataTagSymbol } from '@tanstack/react-query';

export default function DetailedMachine() {
  // const { data } = useLoaderData('/$lot');

  return (
    // <Suspense fallback={<>Loading...</>}>
    <>
      <section
        className={cn(stylesBootstrap['container'], stylesBootstrap['md'])}
      >
        {/* <NameLot lot={data.lot} sale={data.sale} /> */}
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
