import { createFileRoute } from '@tanstack/react-router';
import { TitlePage } from '../pages/TitlePage/TitlePage';

export const Route = createFileRoute('/')({
  component: Index
});

function Index() {
  return <TitlePage />;
}
