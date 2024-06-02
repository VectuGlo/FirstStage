import { HTMLAttributes, ReactNode } from 'react';

export interface HeroProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
