import { FormikConfig, FormikHelpers } from "formik";
import * as Yup from "yup";
import { Transportation } from "../../data/constant";

interface IRegisterInitialValue {
  fullName: string;
  email: string;
  phoneNumber: string;
  address: string;
  postalCode: string;
  departureTrasportationType: string;
  departureTime: string;
  departureFlightNumber: string;
  departureAirLine: string;
  departureTrainName: string;
  homecomingTrasportationType: string;
  homecomingTime: string;
  homecomingFlightNumber: string;
  homecomingAirLine: string;
  homecomingTrainName: string;
}

const registerValidatorSchema = Yup.object({
  fullName: Yup.string().required("Nama lengkap belum terisi"),
  email: Yup.string()
    .required("Email belum terisi")
    .email("Format email tidak valid"),
  phoneNumber: Yup.string().required("Nomer telepon belum terisi"),
  postalCode: Yup.string().required("Kode pos belum terisi"),
  address: Yup.string().required("Alamat belum terisi"),
  departureTrasportationType: Yup.string().required(
    "Jenis kendaraan belum terpilih"
  ),
  departureTime: Yup.string().required("Waktu keberangkatan belum dipilih"),
  departureAirLine: Yup.string().when(["departureTrasportationType"], {
    is: (value: string) => value === Transportation.PLANE,
    then: (schema) => schema.required("Nama maskapai pesawat belum terisi"),
    otherwise: (schema) => schema.optional(),
  }),
  departureFlightNumber: Yup.string().when(["departureTrasportationType"], {
    is: (value: string) => value === Transportation.PLANE,
    then: (schema) => schema.required("Flight number belum terisi"),
    otherwise: (schema) => schema.optional(),
  }),
  departureTrainName: Yup.string().when(["departureTrasportationType"], {
    is: (value: string) => value === Transportation.TRAIN,
    then: (schema) => schema.required("Nama kereta belum terisi"),
    otherwise: (schema) => schema.optional(),
  }),

  homecomingTrasportationType: Yup.string().required(
    "Jenis kendaraan belum terpilih"
  ),
  homecomingTime: Yup.string().required("Waktu kepulangan belum dipilih"),
  homecomingAirLine: Yup.string().when(["homecomingTrasportationType"], {
    is: (value: string) => value === Transportation.PLANE,
    then: (schema) => schema.required("Nama maskapai belum terisi"),
    otherwise: (schema) => schema.optional(),
  }),
  homecomingFlightNumber: Yup.string().when(["homecomingTrasportationType"], {
    is: (value: string) => value === Transportation.PLANE,
    then: (schema) => schema.required("Flight number belum terisi"),
    otherwise: (schema) => schema.optional(),
  }),
  homecomingTrainName: Yup.string().when(["homecomingTrasportationType"], {
    is: (value: string) => value === Transportation.TRAIN,
    then: (schema) => schema.required("Nama kereta belum terisi"),
    otherwise: (schema) => schema.optional(),
  }),
});

const registerInitialValues = (): IRegisterInitialValue => {
  return {
    fullName: "",
    email: "",
    address: "",
    phoneNumber: "",
    postalCode: "",
    departureTrasportationType: "",
    departureAirLine: "",
    departureFlightNumber: "",
    departureTime: "",
    homecomingTrasportationType: "",
    homecomingAirLine: "",
    homecomingFlightNumber: "",
    homecomingTime: "",
    homecomingTrainName: "",
    departureTrainName: "",
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
