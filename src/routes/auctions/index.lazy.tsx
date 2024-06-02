import { createFileRoute } from '@tanstack/react-router';
import { AuctionCars } from '../../pages/AuctionCars/AuctionCars';

export const Route = createFileRoute('/auctions/')({
  component: Auctions
});

function Auctions() {
  return <AuctionCars />;
}
