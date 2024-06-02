export interface MyObject {
  value: string;
}

export interface MyObjectInputsRow {
  labelText: string;
  labelText2?: string;
  minLength: number;
  maxLength: number;
  nameI1: string;
  nameI2: string;
  placeholderI1: string;
  placeholderI2: string;
  listI1: string;
  listI2: string;
  idI1: string;
  idI2: string;
  array: MyObject[];
}
