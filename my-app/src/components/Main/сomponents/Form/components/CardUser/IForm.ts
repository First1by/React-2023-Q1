export interface IFormData {
  text: string;
  date: string;
  country: string;
  radioContact: string;
  agreement: boolean;
  file: string;
}

export interface IForm {
  name: string;
  date: string;
  country: string;
  radioInput: string;
  image: string;
  cardArray: IFormData[];
}
