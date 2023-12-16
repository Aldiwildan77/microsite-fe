import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Card,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Text,
  VStack,
  useToast,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../api/register';
import createFormikRegisterConfig from '../app/validation/register.validator';
import HelpDesk from '../components/HelpDesk/HelpDesk';
import { Constant, Transportation } from '../data/constant';
import { IResponse } from '../interface/api/registerInput.interface';

function Registration() {
  const navigate = useNavigate();
  const [response, setResponse] = useState<IResponse | null>(null);
  const [apiState, setApiState] = useState<
    'idle' | 'pending' | 'done' | 'rejected'
  >('idle');
  const toast = useToast();
  const formik = useFormik(
    createFormikRegisterConfig(async (value) => {
      try {
        setApiState('pending');
        const res = await register({
          name: value.fullName,
          address: value.address,
          email: value.email,
          phone: value.phoneNumber,
          postal_code: Number(value.postalCode),
          depart_airline: value.departureAirLine,
          depart_at: value.departureTime,
          depart_flight_number: value.departureFlightNumber,
          depart_vehicle_type: value.departureTrasportationType,
          depart_train_name: value.homecomingTrainName,
          return_airline: value.homecomingAirLine,
          return_at: value.homecomingTime,
          return_flight_number: value.homecomingFlightNumber,
          return_train_name: value.homecomingTrainName,
          return_vehicle_type: value.homecomingTrasportationType,
        });
        setResponse(res);
      } catch (e) {
        setApiState('rejected');
      }
    })
  );
  useEffect(() => {
    if (!response) {
      return;
    }
    setApiState('idle');
    setResponse(null);

    if (response.statusCode !== 201) {
      toast({
        title: 'Registration',
        status: 'error',
        description: `Registration Failed: ${response.message}`,
        isClosable: true,
        duration: 10 * 1000,
        position: 'top-right',
      });
      return;
    }

    navigate('/registration/success', { replace: true, state: response?.data });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response, toast]);
  const handleChange = (field: string, val: unknown) => {
    formik.setFieldValue(field, val);
  };
  const generateTextfield = (
    transportationType: string | undefined,
    travelType: string
  ) => {
    switch (travelType) {
      case 'homecoming':
        if (transportationType === Transportation.PLANE) {
          return (
            <>
              <FormControl
                isInvalid={
                  Boolean(formik.errors.homecomingAirLine) &&
                  formik.submitCount > 0
                }
              >
                <FormLabel htmlFor='homecomingAirLine'>Maskapai</FormLabel>
                <Input
                  id='homecomingAirLine'
                  variant={'primary'}
                  onChange={(e) =>
                    handleChange('homecomingAirLine', e.target.value)
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
                <FormLabel htmlFor='homecomingFlightNumber'>
                  Flight Number
                </FormLabel>
                <Input
                  id='homecomingFlightNumber'
                  variant={'primary'}
                  onChange={(e) =>
                    handleChange('homecomingFlightNumber', e.target.value)
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
          );
        } else if (transportationType === Transportation.TRAIN) {
          return (
            <FormControl
              isInvalid={
                Boolean(formik.errors.homecomingTrainName) &&
                formik.submitCount > 0
              }
            >
              <FormLabel htmlFor='homecomingTrainName'>Nama Kereta</FormLabel>
              <Input
                id='homecomingTrainName'
                variant={'primary'}
                onChange={(e) =>
                  handleChange('homecomingTrainName', e.target.value)
                }
                value={formik.values.homecomingTrainName}
              />
              {Boolean(formik.errors.homecomingTrainName) &&
              formik.submitCount > 0 ? (
                <FormErrorMessage>
                  {formik.errors.homecomingTrainName}
                </FormErrorMessage>
              ) : null}
            </FormControl>
          );
        } else return null;

      case 'departure':
        if (transportationType === Transportation.PLANE) {
          return (
            <>
              <FormControl
                isInvalid={
                  Boolean(formik.errors.departureAirLine) &&
                  formik.submitCount > 0
                }
              >
                <FormLabel htmlFor='departureAirLine'>Maskapai</FormLabel>
                <Input
                  id='departureAirLine'
                  variant={'primary'}
                  onChange={(e) =>
                    handleChange('departureAirLine', e.target.value)
                  }
                  value={formik.values.departureAirLine}
                />
                {Boolean(formik.errors.departureAirLine) &&
                formik.submitCount > 0 ? (
                  <FormErrorMessage>
                    {formik.errors.departureAirLine}
                  </FormErrorMessage>
                ) : null}
              </FormControl>
              <FormControl
                isInvalid={
                  Boolean(formik.errors.departureFlightNumber) &&
                  formik.submitCount > 0
                }
              >
                <FormLabel htmlFor='departureFlightNumber'>
                  Flight Number
                </FormLabel>
                <Input
                  id='departureFlightNumber'
                  variant={'primary'}
                  onChange={(e) =>
                    handleChange('departureFlightNumber', e.target.value)
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
          );
        } else if (transportationType === Transportation.TRAIN) {
          return (
            <FormControl
              isInvalid={
                Boolean(formik.errors.departureTrainName) &&
                formik.submitCount > 0
              }
            >
              <FormLabel htmlFor='departureTrainName'>Nama Kereta</FormLabel>
              <Input
                id='departureTrainName'
                variant={'primary'}
                onChange={(e) =>
                  handleChange('departureTrainName', e.target.value)
                }
                value={formik.values.departureTrainName}
              />
              {Boolean(formik.errors.departureTrainName) &&
              formik.submitCount > 0 ? (
                <FormErrorMessage>
                  {formik.errors.departureTrainName}
                </FormErrorMessage>
              ) : null}
            </FormControl>
          );
        } else return null;
      default:
        return null;
    }
  };

  return (
    <>
      <Box
        display={'flex'}
        w={'full'}
        justifyContent={'center'}
        py={{
          lg: '1rem',
        }}
        backgroundColor={'primaryColor'}
      >
        <Card
          minW={'320px'}
          w={{ lg: '60%' }}
          py={{ md: '4rem', base: '8px' }}
          px={{ md: '4rem', base: '8px' }}
          borderRadius={{
            lg: '10px',
          }}
        >
          <VStack>
            <Heading mb={'1rem'} textColor={'secondaryColor'}>
              Registrasi
            </Heading>
            <Alert status='warning'>
              <AlertIcon />
              <Text fontSize={'16px'} textAlign={'center'}>
                Setelah berhasil registrasi mohon untuk cek email dan menyimpan
                kode QR pendaftaran anda untuk Check In pada Venue
              </Text>
            </Alert>
            <form style={{ width: '100%' }} onSubmit={formik.handleSubmit}>
              <VStack spacing={'1rem'} marginTop={'4'}>
                <Heading size={'md'} as={'h2'} w={'full'}>
                  Data Diri
                </Heading>
                <FormControl
                  isInvalid={
                    Boolean(formik.errors.fullName) && formik.submitCount > 0
                  }
                >
                  <FormLabel htmlFor='fullName'>Nama Lengkap</FormLabel>
                  <Input
                    id='fullName'
                    variant={'primary'}
                    onChange={(e) => handleChange('fullName', e.target.value)}
                    value={formik.values.fullName}
                    placeholder='Nama Lengkap'
                  />
                  {Boolean(formik.errors.fullName) && formik.submitCount > 0 ? (
                    <FormErrorMessage>
                      {formik.errors.fullName}
                    </FormErrorMessage>
                  ) : null}
                </FormControl>
                <FormControl
                  isInvalid={
                    Boolean(formik.errors.email) && formik.submitCount > 0
                  }
                >
                  <FormLabel htmlFor='email'>Email</FormLabel>
                  <Input
                    id='email'
                    variant={'primary'}
                    type='email'
                    onChange={(e) => handleChange('email', e.target.value)}
                    value={formik.values.email}
                    placeholder='Email'
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
                  <FormLabel htmlFor='phoneNumber'>Nomer Telepon</FormLabel>
                  <Input
                    id='phoneNumber'
                    variant={'primary'}
                    type='number'
                    onChange={(e) => {
                      const sanitized = e.target.value;
                      const isValid =
                        /^\d+$/.test(sanitized) || sanitized === '';
                      if (!isValid) {
                        return;
                      }
                      handleChange('phoneNumber', e.target.value);
                    }}
                    pattern='\d*'
                    value={formik.values.phoneNumber}
                    placeholder='Nomer Telepon'
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
                  <FormLabel htmlFor='address'>Alamat</FormLabel>
                  <Input
                    id='address'
                    variant={'primary'}
                    onChange={(e) => {
                      handleChange('address', e.target.value);
                    }}
                    value={formik.values.address}
                    placeholder='Alamat Lengkap (Jalan / Kelurahan / Kecamatan / Kota / Provinsi)'
                  />
                  {Boolean(formik.errors.address) && formik.submitCount > 0 ? (
                    <FormErrorMessage>{formik.errors.address}</FormErrorMessage>
                  ) : null}
                </FormControl>

                <FormControl
                  isInvalid={
                    Boolean(formik.errors.postalCode) && formik.submitCount > 0
                  }
                >
                  <FormLabel htmlFor='postalCode'>Kode Pos</FormLabel>
                  <Input
                    id='postalCode'
                    type='number'
                    variant={'primary'}
                    onChange={(e) => {
                      const sanitized = e.target.value;
                      const isValid =
                        /^\d+$/.test(sanitized) || sanitized === '';
                      if (!isValid) {
                        return;
                      }
                      handleChange('postalCode', e.target.value);
                    }}
                    pattern='\d*'
                    value={formik.values.postalCode}
                    placeholder='Kode Pos'
                  />
                  {Boolean(formik.errors.postalCode) &&
                  formik.submitCount > 0 ? (
                    <FormErrorMessage>
                      {formik.errors.postalCode}
                    </FormErrorMessage>
                  ) : null}
                </FormControl>

                <Heading size={'md'} as={'h2'} w={'full'} mt={'2rem'}>
                  Detail Keberangkatan
                </Heading>
                <FormControl
                  isInvalid={
                    Boolean(formik.errors.departureTrasportationType) &&
                    formik.submitCount > 0
                  }
                >
                  <FormLabel htmlFor='departureTrasportationType'>
                    Jenis Kendaraan
                  </FormLabel>
                  <Select
                    borderRadius={'8px'}
                    borderColor={'black'}
                    placeholder='Pilih Jenis Kendaraan'
                    onChange={(e) => {
                      handleChange(
                        'departureTrasportationType',
                        e.target.value
                      );
                    }}
                  >
                    {Constant.transportationOptions.map((option) => (
                      <option
                        value={option.value}
                        key={'departure-' + option.label}
                      >
                        {option.label}
                      </option>
                    ))}
                  </Select>
                  {Boolean(formik.errors.departureTrasportationType) &&
                  formik.submitCount > 0 ? (
                    <FormErrorMessage>
                      {formik.errors.departureTrasportationType}
                    </FormErrorMessage>
                  ) : null}
                </FormControl>

                {generateTextfield(
                  formik.values.departureTrasportationType,
                  'departure'
                )}
                <FormControl
                  isInvalid={
                    Boolean(formik.errors.departureTime) &&
                    formik.submitCount > 0
                  }
                >
                  <FormLabel htmlFor='departureTime'>
                    Waktu Keberangkatan
                  </FormLabel>
                  <Input
                    id='departureTime'
                    variant={'primary'}
                    onChange={(e) =>
                      handleChange('departureTime', e.target.value)
                    }
                    value={formik.values.departureTime}
                    type='datetime-local'
                  />
                  {Boolean(formik.errors.departureTime) &&
                  formik.submitCount > 0 ? (
                    <FormErrorMessage>
                      {formik.errors.departureTime}
                    </FormErrorMessage>
                  ) : null}
                </FormControl>

                <Heading size={'md'} as={'h2'} w={'full'} mt={'2rem'}>
                  Detail Kepulangan
                </Heading>
                <FormControl
                  isInvalid={
                    Boolean(formik.errors.homecomingTrasportationType) &&
                    formik.submitCount > 0
                  }
                >
                  <FormLabel htmlFor='homecomingTrasportationType'>
                    Jenis Kendaraan
                  </FormLabel>
                  <Select
                    borderRadius={'8px'}
                    borderColor={'black'}
                    placeholder='Pilih Jenis Kendaraan'
                    onChange={(e) => {
                      handleChange(
                        'homecomingTrasportationType',
                        e.target.value
                      );
                    }}
                  >
                    {Constant.transportationOptions.map((option) => (
                      <option
                        value={option.value}
                        key={'homecoming-' + option.label}
                      >
                        {option.label}
                      </option>
                    ))}
                  </Select>
                  {Boolean(formik.errors.homecomingTrasportationType) &&
                  formik.submitCount > 0 ? (
                    <FormErrorMessage>
                      {formik.errors.homecomingTrasportationType}
                    </FormErrorMessage>
                  ) : null}
                </FormControl>

                {generateTextfield(
                  formik.values.homecomingTrasportationType,
                  'homecoming'
                )}
                <FormControl
                  isInvalid={
                    Boolean(formik.errors.homecomingTime) &&
                    formik.submitCount > 0
                  }
                >
                  <FormLabel htmlFor='homecomingTime'>
                    Waktu Keberangkatan
                  </FormLabel>
                  <Input
                    id='homecomingTime'
                    variant={'primary'}
                    onChange={(e) =>
                      handleChange('homecomingTime', e.target.value)
                    }
                    value={formik.values.homecomingTime}
                    type='datetime-local'
                  />
                  {Boolean(formik.errors.homecomingTime) &&
                  formik.submitCount > 0 ? (
                    <FormErrorMessage>
                      {formik.errors.homecomingTime}
                    </FormErrorMessage>
                  ) : null}
                </FormControl>
                <Button
                  type='submit'
                  mt={'2rem'}
                  w={'full'}
                  borderRadius={'10px'}
                  bg={'secondaryColor'}
                  color={'white'}
                  isLoading={apiState === 'pending'}
                  _hover={{ backgroundColor: 'rgba(107,24,34, 0.5)' }}
                >
                  Daftar
                </Button>
              </VStack>
            </form>
          </VStack>
        </Card>
      </Box>
      <HelpDesk />
    </>
  );
}

export default Registration;
