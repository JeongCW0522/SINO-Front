import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Hompage from './pages/Hompage';
import OnBoadingPage from './pages/OnBoardingPage';
import ErrorPage from './pages/ErrorPage';
import SignupPage from './pages/auth/SignupPage';
import LoginPage from './pages/auth/LoginPage';
import SelectDate from './pages/SelectDate';

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
      {
        path: 'signup',
        element: <SignupPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'select-date',
        element: <SelectDate />,
      },
    ],
  },
]);

export default router;
