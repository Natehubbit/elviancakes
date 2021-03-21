export type Category =
  'all'|'cakes'|'pies'|'rolls'|'drinks'

export type OrderForm = {
  ocassion: string;
  size?: string;
  layers: number;
  range?: number;
  media?: string;
  extra?: string;
  delivery: {
    type: 'pickup'|'deliver';
    // location: string;
    // coordinates: {
    //   latitude: number;
    //   longitude: number;
    // }
  }
}

export type OrderFormsData = {
  Details: FormUIData[];
  Media: FormUIData[];
  Extra: FormUIData[];
  Delivery: FormUIData[];
}

export type FormUIData = {
  key: string;
  placeholder: string;
  label?: string;
  type?: InputTypes;
  options: object;
}

export type InputTypes = 'slider'
  |'text'
  |'list'
  |'textarea'
  |'slider'
  |'upload'
  |'counter'
  |'buttonsRow'
  |'buttonsRounded'
  |'shapeBtns'
