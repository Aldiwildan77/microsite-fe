import { Button, Center, Heading, Image, Text, VStack } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function RegistrationSuccess() {
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    if (state === null || state === undefined || state === '') {
      return navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  if (state === null || state === undefined || state === '') {
    return null;
  }

  return (
    <Center
      bg={'secondaryColor'}
      h='100vh'
      color='white'
      textColor={'white'}
      px='4'
    >
      <VStack
        flex='1'
        justifyContent={'center'}
        flexDirection={'column'}
        textAlign={'center'}
        spacing='3'
      >
        <Heading as='h1' size='xl'>
          Thank you, your registration is successful!
        </Heading>
        <Text fontSize={'16px'}>
          Please kindly check your email to save your QR Code or screenshot this
          page.
        </Text>
        {state?.qr_link && (
          <VStack py={'6'} spacing='2'>
            <Image src={state?.qr_link} />
            <Text>{state?.email}</Text>
          </VStack>
        )}
        <Button as='a' href='/' bg={'forthColor'} borderRadius={'full'}>
          Back to Home
        </Button>
      </VStack>
    </Center>
  );
}
