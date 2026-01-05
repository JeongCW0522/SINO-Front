import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Hompage from './pages/Hompage';
import OnBoadingPage from './pages/OnBoardingPage';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Hompage />,
      },
      {
        path: 'onboarding',
        element: <OnBoadingPage />,
      },
    ],
  },
]);

export default router;
