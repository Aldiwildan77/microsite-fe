import ISelectOption from "../interface/select.interface";

export enum Transportation {
  CAR = "mobil",
  PLANE = "pesawat",
  BUS = "bus",
  TRAIN = "kereta",
  OTHER = "lainnya",
}

export const Constant = {
  transportationOptions: [
    { label: "Mobil", value: "mobil" },
    { label: "Kereta", value: "kereta" },
    { label: "Pesawat", value: "pesawat" },
    { label: "Bus", value: "bus" },
    { label: "Lainnya", value: "lainnya" },
  ] as ISelectOption[],
};
