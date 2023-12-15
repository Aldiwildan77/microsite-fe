import { FormikConfig, FormikHelpers } from "formik";
import * as Yup from "yup";
import ISelectOption from "../../interface/select.interface";

interface IRegisterInitialValue {
  fullName: string;
  email: string;
  phoneNumber: string;
  address: string;
  district: string;
  city: string;
  province: string;
  postalCode: string;
  departureTrasportationType: ISelectOption | undefined;
  departureTime: string;
  homecomingTrasportationType: ISelectOption | undefined;
  homecomingTime: string;
  departureFlightNumber: string | undefined;
  departureAirLine: string | undefined;
  homecomingFlightNumber: string | undefined;
  homecomingAirLine: string | undefined;
}

const registerValidatorSchema = Yup.object({
  fullName: Yup.string().required("Nama lengkap belum terisi"),
  email: Yup.string()
    .required("Email belum terisi")
    .email("Format email tidak valid"),
  phoneNumber: Yup.string().required("Nomer telepon belum terisi"),
  address: Yup.string().required("Alamat belum terisi"),
  district: Yup.string().required("Kecamatan belum terisi"),
  city: Yup.string().required("Kota/Kab belum terisi"),
  province: Yup.string().required("Provinsi belum terisi"),
  postalCode: Yup.string().required("Kode pos belum terisi"),
  departureTrasportationType: Yup.object()
    .shape({
      value: Yup.string().required(),
      label: Yup.string().required(),
    })
    .required("Tipe kendaraan belum dipilih"),
  departureTime: Yup.string().required("Waktu keberangkatan belum dipilih"),
  departureAirlineType: Yup.string(),
  departureFlightNumber: Yup.string(),
  homecomingTrasportationType: Yup.object()
    .shape({
      value: Yup.string().required(),
      label: Yup.string().required(),
    })
    .required("Tipe kendaraan belum dipilih"),
  homecomingTime: Yup.string().required("Waktu kepulangan belum dipilih"),
  homecomingAirLine: Yup.string(),
  homecomingFlightNumber: Yup.string(),
});

const registerInitialValues = (): IRegisterInitialValue => {
  return {
    fullName: "",
    email: "",
    address: "",
    phoneNumber: "",
    city: "",
    district: "",
    province: "",
    postalCode: "",
    departureTrasportationType: undefined,
    departureAirLine: "",
    departureFlightNumber: "",
    departureTime: "",
    homecomingTrasportationType: undefined,
    homecomingAirLine: "",
    homecomingFlightNumber: "",
    homecomingTime: "",
  };
};

const createFormikRegisterConfig = (
  onSubmit: (
    values: IRegisterInitialValue,
    formikHelpers: FormikHelpers<IRegisterInitialValue>
  ) => void | Promise<any>
) => {
  const registerFormikConfig: FormikConfig<IRegisterInitialValue> = {
    initialValues: registerInitialValues(),
    onSubmit,
    validationSchema: registerValidatorSchema,
  };
  return registerFormikConfig;
};

export default createFormikRegisterConfig;
