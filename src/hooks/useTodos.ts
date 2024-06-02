import { useQuery } from '@tanstack/react-query';
import itemService from '../services/item.service';

export const useTodos = () => {
  return useQuery({
    queryKey: ['item'],
    queryFn: () => itemService.getByAll(),
    select: ({ data }) => data
  });
};
