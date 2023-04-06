export interface IFormData {
  text: string;
  date: string;
  country: string;
  agreement: boolean;
  file: string;
}

export interface IForm {
  name: string;
  date: string;
  country: string;
  image: string;
  cardArray: IFormData[];
}
