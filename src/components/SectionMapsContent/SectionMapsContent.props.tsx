import { AllHTMLAttributes } from 'react';

export interface SectionMapsContentProps
  extends AllHTMLAttributes<HTMLElement> {
  elementsContents: [
    {
      id: string;
      title: string;
      imageMobil: JSX.Element;
      hrefPhone: string;
      phone: string;
      imageMail: JSX.Element;
      hrefMail: string;
      email: string;
      imageAdress: JSX.Element;
      textAddress1: string;
      textAddress2: string;
      imageWA: JSX.Element;
      hrefWA: string;
      disoption: boolean;
      placeMarkPos: number[];
    },
    {
      id: string;
      title: string;
      imageMobil: JSX.Element;
      hrefPhone: string;
      phone: string;
      imageMail: JSX.Element;
      hrefMail: string;
      email: string;
      imageAdress: JSX.Element;
      textAddress1: string;
      textAddress2: string;
      imageWA: JSX.Element;
      hrefWA: string;
      disoption: boolean;
      placeMarkPos: number[];
    }
  ];
}
