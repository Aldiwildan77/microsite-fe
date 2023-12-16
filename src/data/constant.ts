type ISelectOption = {
  label: string;
  value: string;
};

export enum Transportation {
  CAR = 'car',
  PLANE = 'plane',
  BUS = 'bus',
  TRAIN = 'train',
  OTHER = 'other',
}

export const Constant = {
  transportationOptions: [
    { label: 'Mobil', value: Transportation.CAR },
    { label: 'Kereta', value: Transportation.TRAIN },
    { label: 'Pesawat', value: Transportation.PLANE },
    { label: 'Bus', value: Transportation.BUS },
    { label: 'Lainnya', value: Transportation.OTHER },
  ] as ISelectOption[],
};
