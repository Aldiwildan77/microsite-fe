import {
  Box,
  Button,
  Card,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import createFormikRegisterConfig from "./app/validation/register.validator";
import Select from "react-select";
import { SelectStyle, SelectTheme } from "./themes/select/Select";
import { Constant, Transportation } from "./data/constant";

function App() {
  const formik = useFormik(createFormikRegisterConfig(() => {}));
  const handleChange = (field: string, val: unknown) => {
    formik.setFieldValue(field, val);
  };
  return (
    <Box display={"flex"} w={"full"} justifyContent={"center"} py={"1rem"}>
      <Card minW={"320px"} w={"60%"} p={"4rem"} borderRadius={"10px"}>
        <VStack>
          <Heading mb={"1rem"}>Registrasi</Heading>
          <form style={{ width: "100%" }}>
            <VStack spacing={"1rem"}>
              <Heading size={"md"} as={"h2"} w={"full"}>
                Data Diri
              </Heading>
              <FormControl
                isInvalid={
                  Boolean(formik.errors.fullName) && formik.submitCount > 0
                }
              >
                <FormLabel htmlFor="fullName">Nama Lengkap</FormLabel>
                <Input
                  id="fullName"
                  variant={"primary"}
                  onChange={(e) => handleChange("fullName", e.target.value)}
                  value={formik.values.fullName}
                />
                {Boolean(formik.errors.fullName) && formik.submitCount > 0 ? (
                  <FormErrorMessage>{formik.errors.fullName}</FormErrorMessage>
                ) : null}
              </FormControl>
              <FormControl
                isInvalid={
                  Boolean(formik.errors.email) && formik.submitCount > 0
                }
              >
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  id="email"
                  variant={"primary"}
                  type="email"
                  onChange={(e) => handleChange("email", e.target.value)}
                  value={formik.values.email}
                />
                {Boolean(formik.errors.email) && formik.submitCount > 0 ? (
                  <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                ) : null}
              </FormControl>

              <FormControl
                isInvalid={
                  Boolean(formik.errors.phoneNumber) && formik.submitCount > 0
                }
              >
                <FormLabel htmlFor="phoneNumber">Nomer Telepon</FormLabel>
                <Input
                  id="phoneNumber"
                  variant={"primary"}
                  type="number"
                  onChange={(e) => {
                    const sanitized = e.target.value;
                    console.log(sanitized);
                    const isValid = /^\d+$/.test(sanitized) || sanitized === "";
                    if (!isValid) return;
                    handleChange("phoneNumber", e.target.value);
                  }}
                  pattern="\d*"
                  value={formik.values.phoneNumber}
                />
                {Boolean(formik.errors.phoneNumber) &&
                formik.submitCount > 0 ? (
                  <FormErrorMessage>
                    {formik.errors.phoneNumber}
                  </FormErrorMessage>
                ) : null}
              </FormControl>
              <FormControl
                isInvalid={
                  Boolean(formik.errors.address) && formik.submitCount > 0
                }
              >
                <FormLabel htmlFor="address">Alamat</FormLabel>
                <Input
                  id="address"
                  variant={"primary"}
                  onChange={(e) => handleChange("address", e.target.value)}
                  value={formik.values.address}
                />
                {Boolean(formik.errors.address) && formik.submitCount > 0 ? (
                  <FormErrorMessage>{formik.errors.address}</FormErrorMessage>
                ) : null}
              </FormControl>
              <FormControl
                isInvalid={
                  Boolean(formik.errors.district) && formik.submitCount > 0
                }
              >
                <FormLabel htmlFor="district">Kecamatan</FormLabel>
                <Input
                  id="district"
                  variant={"primary"}
                  type="district"
                  onChange={(e) => handleChange("district", e.target.value)}
                  value={formik.values.district}
                />
                {Boolean(formik.errors.district) && formik.submitCount > 0 ? (
                  <FormErrorMessage>{formik.errors.district}</FormErrorMessage>
                ) : null}
              </FormControl>

              <FormControl
                isInvalid={
                  Boolean(formik.errors.city) && formik.submitCount > 0
                }
              >
                <FormLabel htmlFor="city">Kota/Kabupaten</FormLabel>
                <Input
                  id="city"
                  variant={"primary"}
                  onChange={(e) => handleChange("city", e.target.value)}
                  value={formik.values.city}
                />
                {Boolean(formik.errors.city) && formik.submitCount > 0 ? (
                  <FormErrorMessage>{formik.errors.city}</FormErrorMessage>
                ) : null}
              </FormControl>

              <FormControl
                isInvalid={
                  Boolean(formik.errors.postalCode) && formik.submitCount > 0
                }
              >
                <FormLabel htmlFor="postalCode">Kode Pos</FormLabel>
                <Input
                  id="postalCode"
                  type="number"
                  variant={"primary"}
                  onChange={(e) => {
                    const sanitized = e.target.value;
                    console.log(sanitized);
                    const isValid = /^\d+$/.test(sanitized) || sanitized === "";
                    if (!isValid) return;
                    handleChange("postalCode", e.target.value);
                  }}
                  pattern="\d*"
                  value={formik.values.postalCode}
                />
                {Boolean(formik.errors.postalCode) && formik.submitCount > 0 ? (
                  <FormErrorMessage>
                    {formik.errors.postalCode}
                  </FormErrorMessage>
                ) : null}
              </FormControl>

              <Heading size={"md"} as={"h2"} w={"full"} mt={"2rem"}>
                Detail Keberangkatan
              </Heading>
              <FormControl
                isInvalid={
                  Boolean(formik.errors.departureTrasportationType) &&
                  formik.submitCount > 0
                }
              >
                <FormLabel htmlFor="departureTrasportationType">
                  Jenis Kendaraan
                </FormLabel>
                <Select
                  styles={SelectStyle}
                  theme={SelectTheme}
                  options={Constant.transportationOptions}
                  onChange={(selected) =>
                    handleChange("departureTrasportationType", selected)
                  }
                  value={formik.values.departureTrasportationType}
                />
                {Boolean(formik.errors.departureTrasportationType) &&
                formik.submitCount > 0 ? (
                  <FormErrorMessage>
                    {formik.errors.departureTrasportationType}
                  </FormErrorMessage>
                ) : null}
              </FormControl>

              {formik.values.departureTrasportationType?.value ===
              Transportation.PLANE ? (
                <>
                  <FormControl
                    isInvalid={
                      Boolean(formik.errors.homecomingAirLine) &&
                      formik.submitCount > 0
                    }
                  >
                    <FormLabel htmlFor="homecomingAirLine">Maskapai</FormLabel>
                    <Input
                      id="homecomingAirLine"
                      variant={"primary"}
                      onChange={(e) =>
                        handleChange("homecomingAirLine", e.target.value)
                      }
                      value={formik.values.homecomingAirLine}
                    />
                    {Boolean(formik.errors.homecomingAirLine) &&
                    formik.submitCount > 0 ? (
                      <FormErrorMessage>
                        {formik.errors.homecomingAirLine}
                      </FormErrorMessage>
                    ) : null}
                  </FormControl>
                  <FormControl
                    isInvalid={
                      Boolean(formik.errors.departureFlightNumber) &&
                      formik.submitCount > 0
                    }
                  >
                    <FormLabel htmlFor="departureFlightNumber">
                      Flight Number
                    </FormLabel>
                    <Input
                      id="departureFlightNumber"
                      variant={"primary"}
                      onChange={(e) =>
                        handleChange("departureFlightNumber", e.target.value)
                      }
                      value={formik.values.departureFlightNumber}
                    />
                    {Boolean(formik.errors.departureFlightNumber) &&
                    formik.submitCount > 0 ? (
                      <FormErrorMessage>
                        {formik.errors.departureFlightNumber}
                      </FormErrorMessage>
                    ) : null}
                  </FormControl>
                </>
              ) : null}
              <FormControl
                isInvalid={
                  Boolean(formik.errors.departureTime) && formik.submitCount > 0
                }
              >
                <FormLabel htmlFor="departureTime">
                  Waktu Keberangkatan
                </FormLabel>
                <Input
                  id="departureTime"
                  variant={"primary"}
                  onChange={(e) =>
                    handleChange("departureTime", e.target.value)
                  }
                  value={formik.values.departureTime}
                  type="datetime-local"
                />
                {Boolean(formik.errors.departureTime) &&
                formik.submitCount > 0 ? (
                  <FormErrorMessage>
                    {formik.errors.departureTime}
                  </FormErrorMessage>
                ) : null}
              </FormControl>

              <Heading size={"md"} as={"h2"} w={"full"} mt={"2rem"}>
                Detail Kepulangan
              </Heading>
              <FormControl
                isInvalid={
                  Boolean(formik.errors.homecomingTrasportationType) &&
                  formik.submitCount > 0
                }
              >
                <FormLabel htmlFor="homecomingTrasportationType">
                  Jenis Kendaraan
                </FormLabel>
                <Select
                  styles={SelectStyle}
                  theme={SelectTheme}
                  options={Constant.transportationOptions}
                  onChange={(selected) =>
                    handleChange("homecomingTrasportationType", selected)
                  }
                  value={formik.values.homecomingTrasportationType}
                />
                {Boolean(formik.errors.homecomingTrasportationType) &&
                formik.submitCount > 0 ? (
                  <FormErrorMessage>
                    {formik.errors.homecomingTrasportationType}
                  </FormErrorMessage>
                ) : null}
              </FormControl>

              {formik.values.homecomingTrasportationType?.value ===
              Transportation.PLANE ? (
                <>
                  <FormControl
                    isInvalid={
                      Boolean(formik.errors.homecomingAirLine) &&
                      formik.submitCount > 0
                    }
                  >
                    <FormLabel htmlFor="omecomingAirLine">Maskapai</FormLabel>
                    <Input
                      id="homecomingAirLine"
                      variant={"primary"}
                      onChange={(e) =>
                        handleChange("homecomingAirLine", e.target.value)
                      }
                      value={formik.values.homecomingAirLine}
                    />
                    {Boolean(formik.errors.homecomingAirLine) &&
                    formik.submitCount > 0 ? (
                      <FormErrorMessage>
                        {formik.errors.homecomingAirLine}
                      </FormErrorMessage>
                    ) : null}
                  </FormControl>
                  <FormControl
                    isInvalid={
                      Boolean(formik.errors.homecomingFlightNumber) &&
                      formik.submitCount > 0
                    }
                  >
                    <FormLabel htmlFor="homecomingFlightNumber">
                      Flight Number
                    </FormLabel>
                    <Input
                      id="homecomingFlightNumber"
                      variant={"primary"}
                      onChange={(e) =>
                        handleChange("homecomingFlightNumber", e.target.value)
                      }
                      value={formik.values.homecomingFlightNumber}
                    />
                    {Boolean(formik.errors.homecomingFlightNumber) &&
                    formik.submitCount > 0 ? (
                      <FormErrorMessage>
                        {formik.errors.homecomingFlightNumber}
                      </FormErrorMessage>
                    ) : null}
                  </FormControl>
                </>
              ) : null}
              <FormControl
                isInvalid={
                  Boolean(formik.errors.homecomingTime) &&
                  formik.submitCount > 0
                }
              >
                <FormLabel htmlFor="homecomingTime">
                  Waktu Keberangkatan
                </FormLabel>
                <Input
                  id="homecomingTime"
                  variant={"primary"}
                  onChange={(e) =>
                    handleChange("homecomingTime", e.target.value)
                  }
                  value={formik.values.homecomingTime}
                  type="datetime-local"
                />
                {Boolean(formik.errors.homecomingTime) &&
                formik.submitCount > 0 ? (
                  <FormErrorMessage>
                    {formik.errors.homecomingTime}
                  </FormErrorMessage>
                ) : null}
              </FormControl>
              <Button
                type="submit"
                mt={"2rem"}
                w={"full"}
                borderRadius={"10px"}
                bg={"primaryColor"}
                color={"white"}
              >
                Daftar
              </Button>
            </VStack>
          </form>
        </VStack>
      </Card>
    </Box>
  );
}

export default App;
