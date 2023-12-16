import { Box, Button, Flex, IconButton, Image } from '@chakra-ui/react';
import { FaWhatsapp } from 'react-icons/fa';
import banner from './assets/banner_landscape.webp';

function App() {
  return (
    <>
      <Image
        src={banner}
        w={'full'}
        h={'full'}
        backgroundSize={'cover'}
        backgroundRepeat={'no-repeat'}
        position={'fixed'}
      />
      <Flex
        position={'fixed'}
        w={'full'}
        bottom={'0%'}
        zIndex={3}
        justifyContent={'center'}
        p={'5'}
        backgroundColor={'rgba(0,0,0,0.2)'}
      >
        <Button
          as={'a'}
          background={'secondaryColor'}
          textColor={'white'}
          borderRadius={'24px'}
          _hover={{ background: 'secondaryColor' }}
          cursor={'pointer'}
          href='/registration'
        >
          Registrasi
        </Button>
      </Flex>
      <IconButton
        as={'a'}
        href='https://wa.me/' // TODO : add helpdesk number
        target='_blank'
        bg={'#128C7E'}
        borderRadius={'full'}
        aria-label='help'
        icon={
          <Box fontSize={'24px'} color={'white'}>
            <FaWhatsapp />
          </Box>
        }
        position={'fixed'}
        right={'1rem'}
        bottom={'1rem'}
        zIndex={3}
      />
    </>
  );
}

export default App;
