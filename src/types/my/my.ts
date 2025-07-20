import type { STATUS } from '@/enums/enums';

export interface IProduct {
  productId: number;
  productName: string;
  price: number;
  salesLink: string;
  imageLink: string;
  element: string[];
  diagnoseType: string[];
}

// response
export type TGetDiagnoseInfoResponse = {
  diagnoseDate: string;
  data: {
    ELASTIC: STATUS;
    WRINKLE: STATUS;
    DRY: STATUS;
    PIGMENT: STATUS;
    PORE: STATUS;
  };
};

export type TGetInterestedProductsResponse = {
  totalPage: number;
  currentPage: number;
  data: IProduct[];
};
