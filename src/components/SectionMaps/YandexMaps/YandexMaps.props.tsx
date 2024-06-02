import { AllHTMLAttributes } from 'react';

export interface YandexMapsProps extends AllHTMLAttributes<HTMLElement> {
  placeMarkPos: number[];
  textAddress1: string;
  textAddress2: string;
}
