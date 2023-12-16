import { Button, Flex, Image, useMediaQuery } from '@chakra-ui/react';
import HelpDesk from './components/HelpDesk/HelpDesk';

function App() {
  const [isLargerThan800] = useMediaQuery('(min-width: 768px)');
  return (
    <>
      {isLargerThan800 ? (
        <Image
          src={'/banner_landscape.webp'}
          w={'full'}
          h={'full'}
          backgroundSize={'cover'}
          backgroundRepeat={'no-repeat'}
          position={'fixed'}
        />
      ) : (
        <Image
          src={'/banner_portrait.webp'}
          w={'full'}
          h={'full'}
          backgroundSize={'cover'}
          backgroundRepeat={'no-repeat'}
          position={'fixed'}
        />
      )}
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
          px={{
            base: '10',
            md: '20',
          }}
        >
          Registrasi
        </Button>
      </Flex>
      <HelpDesk />
    </>
  );
}

export default App;
