import Button from '@/components/common/Button';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <div className='min-h-screen flex flex-col items-center justify-center text-white'>
      <div className='flex flex-col items-center justify-center space-y-30'>
        <h1 className='text-3xl font-medium tracking-wide'>Login</h1>

        <form className='flex flex-col items-center'>
          <div className='flex flex-col items-center gap-3 mb-40'>
            <label className='text-lg font-semibold text-white/90 tracking-wide'>Name</label>
            <input
              type='text'
              placeholder='Enter your Username'
              autoComplete='off'
              className='w-120 py-1.5 text-center font-semibold rounded-full bg-[#E1E0E0] text-xl text-gray-800 outline-none'
            />
          </div>
          <Button type='submit' onClick={() => navigate('/select-date')} className='text-black'>
            Get started
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
