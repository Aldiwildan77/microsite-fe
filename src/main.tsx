import { ChakraBaseProvider } from '@chakra-ui/react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import NotFoundPage from './pages/404.tsx';
import theme from './themes/theme.ts';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Registration from './pages/Registration.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/registration',
    element: <Registration />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ChakraBaseProvider theme={theme}>
    <RouterProvider router={router} />
  </ChakraBaseProvider>
);
