import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Hompage from './pages/Hompage';
import OnBoadingPage from './pages/OnBoardingPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
