import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='bg-bgColor min-h-screen'>
      <Outlet />
    </div>
  );
}

export default App;
