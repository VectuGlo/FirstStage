import { LiHTMLAttributes, ReactNode } from 'react';

export interface ListProps extends LiHTMLAttributes<HTMLLIElement> {
  children: ReactNode;
}
