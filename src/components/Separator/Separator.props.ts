import { DetailsHTMLAttributes } from 'react';

export interface SeparatorProps extends DetailsHTMLAttributes<HTMLDivElement> {
  apperance?: 'custom' | 'dark';
}
