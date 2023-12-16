import { Box, IconButton } from '@chakra-ui/react';
import { FaWhatsapp } from 'react-icons/fa';

function HelpDesk() {
  return (
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
      _hover={{ background: '#128C7E' }}
    />
  );
}

export default HelpDesk;
